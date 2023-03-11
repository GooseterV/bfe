
function main() {
    const start = document.querySelector("#start");
	const stage = new createjs.Stage("cvs");
	window.stage = stage;
	window.clicked = [];
    window.bondLocations = [];
	document.querySelector("#cvs").addEventListener("contextmenu", (e) => {
		e.preventDefault();
	});
    stage.on("stagemousedown", (e) => {
        e.nativeEvent.preventDefault();
        
        if (e.nativeEvent.button === 2 && e.nativeEvent.ctrlKey) {
            window.bondLocations.push({x: e.stageX, y: e.stageY});
            console.log("Placing bond at " + e.stageX + ", " + e.stageY);
        } else if (e.nativeEvent.button === 0 && e.nativeEvent.shiftKey && window.bondLocations.length === 2) {
            bond(stage, window.bondLocations[0], window.bondLocations[1], true);
            window.bondLocations = [];
        } else if (e.nativeEvent.button === 0 && e.nativeEvent.altKey) {
            console.log("Location: " + e.stageX + ", " + e.stageY);
        }

    });
    try {
        window.data = JSON.parse(localStorage.data);
    } catch (e) {
        window.data = null;
        console.log(e)
        console.log("No data found.");
    }
    if (data !== null && data !== undefined && data.level !== undefined) {
        console.log("f")
        console.log(data.level)
        activateLevel(data.level);
    } else {
        console.log("t")
        activateLevel(1);
    }

    start.addEventListener("click", ()=>{
        document.querySelector("#menu").style.display = "none";
        document.querySelector("#level").style.display = "block";
        document.querySelector("#info-box").style.display = "block";
        document.querySelector("#level-number").style.display = "block";
    })

    stage.on("stagemouseup", (e) => {
        if (checkForWin(window.WIN_CONDITION)) {
            localStorage.data = JSON.stringify({level:data.level+1}); 
            window.stage.removeAllChildren();
            window.stage.update();
            if (data.level !== levels.length) activateLevel(data.level+1);
            else {
                document.querySelector("#level").style.display = "none";
                document.querySelector("#menu").style.display = "block";
                document.querySelector("#title-buttons").style.display = "none";
                document.querySelector("#level-number").style.display = "none";
                document.querySelector("#win-screen").style.display = "block";
                document.querySelector("#info-box").style.display = "none";
            }
            
            
        };
    });
    console.log(stage.children)
    //bond(stage, carbons[0]._molecule, carbons[1]._molecule)
	// protons, neutrons, electrons
	//moleculeSmall(stage, Math.random()*450, Math.random()*450, 1, "blue", "+");
	//moleculeSmall(stage, Math.random()*450, Math.random()*450, 1, "grey", "~");
	//moleculeSmall(stage, Math.random()*450, Math.random()*450, 1, "red", "-");

	// adenosine triphosphate
	//atp(stage, Math.random()*450, Math.random()*450, 1, "#eb9215", "ATP");

	// adenosine diphosphate
	//atp(stage, Math.random()*450, Math.random()*450, 1, "#ffd16e", "ADP");

}

main();
