function dragHandler(e) {
    if (e.nativeEvent.buttons !== 1) return;
	e.currentTarget.x = e.stageX;
	e.currentTarget.y = e.stageY;
    //console.log(isInRange(5, e.currentTarget.x, e.currentTarget.y, 466, 413))
    //console.log(e.stageX, e.stageY)
	window.stage.update();
}

function molecule(stage, x, y, s, color, symbol, amount, click, molec, drag=true) {
	const molecule = new createjs.Shape(new createjs.Graphics()
		.beginFill(color)
		.drawCircle(0, 0, s*12)
	);
	const text = new createjs.Text(symbol, `${15*s}px "M PLUS Rounded 1c"`, "#FFFFFF");
	const sub = new createjs.Text(amount>0?amount:"", `${5*s}px "M PLUS Rounded 1c"`, "#FFFFFF");
	const container = new createjs.Container();
	text.set({
		textAlign: "center",
		textBaseline: "middle",
	})
	sub.set({
		textAlign:"center",
		textBaseline: "top"
	})
	text.x = -.5;
    text.y = 2;
	sub.x = 7.5*s;
	sub.y = 5;
	container.x = x;
	container.y = y;
	molecule.shadow = new createjs.Shadow(color, 0, 0, 5);
	container.on("click", click?click:()=>{});
	container.addChild(molecule);
	container.addChild(sub)
	container.addChild(text);
	stage.addChild(container);
    container._molecule = molec;
    container._isGroup = false;
    container._isMolecule = true;
	if (drag) container.on("pressmove", (e) => {
        if (e.nativeEvent.buttons !== 1) return;
		molec._x = e.stageX;
		molec._y = e.stageY;
		dragHandler(e)
	});
	stage.update();
    return container;
}


function isInRange(radius, x, y, x2, y2) {
    //console.log("RADIUS", radius)
    //console.log("X", x, x2)
    //console.log("Y", y, y2)
    //console.log("DISTANCE", Math.sqrt((x2-x)**2 + (y2-y)**2))
    return Math.sqrt((x2-x)**2 + (y2-y)**2) <= radius;
}

function moleculeND(stage, x, y, s, color) {
	const molecule = new createjs.Shape(new createjs.Graphics()
        .beginFill(color)
		.drawCircle(0, 0, s*12)
	);
	const container = new createjs.Container();
	container.x = x;
	container.y = y;
	molecule.shadow = new createjs.Shadow(color, 0, 0, 5);
	container.addChild(molecule);
    container.on("click", (e)=>{
        console.log("Placeholder click: " + e.currentTarget.x + ", " + e.currentTarget.y)
    });
	stage.addChild(container);
	stage.update();
    return container;
}

function moleculeSmall(stage, x, y, s, color, symbol) {
	const molecule = new createjs.Shape(new createjs.Graphics()
		.beginFill(color)
		.drawCircle(0, 0, s*12.5)
	);
	const text = new createjs.Text(symbol, `${15*s}px "M PLUS Rounded 1c"`, "#FFFFFF");
	const container = new createjs.Container();
	text.textAlign = "center";
	text.y = -(s*8);
	container.x = x;
	container.y = y;
	molecule.shadow = new createjs.Shadow(color, 0, 0, 5);
	container.addChild(molecule);
	container.addChild(text);
	stage.addChild(container);
	container.on("pressmove", (e) => {
		dragHandler(e)
	});
	stage.update();
}

function atp(stage, x, y, s, color, text) {
	const atp = new createjs.Shape(new createjs.Graphics()
		.beginFill(color)
		.drawPolyStar(0, 0, s*27.8, 10, .5, -15)
	);
	const tex = new createjs.Text(text, `${15*s}px "M PLUS Rounded 1c"`, "#FFFFFF");
	const container = new createjs.Container();
	tex.textAlign = "center";
	tex.y = -((s*6)+1);
	container.x = x;
	container.y = y;
	atp.shadow = new createjs.Shadow("red", 0, 0, 3);
	container.addChild(atp);
	container.addChild(tex);
	stage.addChild(container);
	container.on("pressmove", dragHandler);
	stage.update();
}

function bond(stage, c1, c2, double) {
    const line = new createjs.Shape();
    stage.addChild(line);
    if (double) line.graphics.setStrokeStyle(12, "round", "round").beginStroke("#000000").moveTo(c1.x, c1.y).lineTo(c2.x, c2.y);
    else line.graphics.setStrokeStyle(6, "round", "round").beginStroke("#000000").moveTo(c1.x, c1.y).lineTo(c2.x, c2.y);
    stage.update();
}

function groupMolecules(molecs) {
    const group = new createjs.Container();
    group.x = molecs.map(molec => molec.x).reduce((a, b) => a + b) / molecs.length;
    group.y = molecs.map(molec => molec.y).reduce((a, b) => a + b) / molecs.length;
    console.log(group.x, group.y)

    for (const molec of molecs) {
        molec._listeners = [];
        molec.x = molec.x-group.x;
        molec.y = molec.y-group.y;
        group.addChild(molec);
    }
    group.on("pressmove", (e) => {
		dragHandler(e)
	});
    group.on("click", (e)=> {
        console.log("Clicked molecule group at " + e.currentTarget.x + ", " + e.currentTarget.y + " with id " + e.currentTarget.id + "");
        console.log(e.currentTarget)
    })
    group._molecules = molecs.map(x=>x._molecule);
    window.stage.addChild(group);
    window.stage.update();
    group._isGroup = true;
    return group;
}

function absPosfromRel(container, child) {
    return {x: container.x + child.x, y: container.y + child.y}
}