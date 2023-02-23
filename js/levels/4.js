this.ADENINE = {
	"name": "Fructose",
	"level": 4,
	"category": "Carbohydrate",
}
this.WIN_CONDITION = [];

bond(stage, {x: 380, y:190}, {x:180, y:300}, false);
bond(stage, {x: 180, y:300}, {x:180, y:130}, false);
bond(stage, {x: 180, y:300}, {x:180, y:385}, false);
bond(stage, {x: 180, y:300}, {x:295, y:465}, true);
bond(stage, {x: 295, y:465}, {x:295, y:365}, false);
bond(stage, {x: 295, y:465}, {x:295, y:550}, false);
bond(stage, {x: 295, y:465}, {x:480, y:465}, true);
bond(stage, {x: 480, y:465}, {x:480, y:550}, false);
bond(stage, {x: 480, y:465}, {x:480, y:365}, false);
bond(stage, {x: 480, y:465}, {x:580, y:300}, true);
bond(stage, {x: 580, y:300}, {x:380, y:190}, false);
bond(stage, {x:580, y:300}, {x:580, y:365}, false);
bond(stage, {x:580, y:300}, {x:580, y:190}, false);


// O
moleculeND(stage, 380, 190, 2, "black")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: 380,
    y: 190,
});

// C
moleculeND(stage, 180, 300, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 180,
    y: 300,
});

// H
moleculeND(stage, 180, 385, 2, "black")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: 180,
    y: 385,
});

// C
moleculeND(stage, 295, 465, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 295,
    y: 465,
});

// H
moleculeND(stage, 295, 365, 2, "black")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: 295,
    y: 365,
});

// C
moleculeND(stage, 480, 465, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 480,
    y: 465,
});

// H
moleculeND(stage, 480, 550, 2, "black")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: 480,
    y: 550,
});

// C
moleculeND(stage, 580, 300, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 580,
    y: 300,
});



// HOCH2 (ltr)
let c = [180, 130];
moleculeND(stage, c[0], c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: c[0],
    y: c[1],
});
moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 2,
    x: c[0]+50,
    y: c[1],
});
moleculeND(stage, c[0]-50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: c[0]-50,
    y: c[1],
});
moleculeND(stage, c[0]-100, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: c[0]-100,
    y: c[1],
});

// OH 
c = [295, 550];
moleculeND(stage, c[0], c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: c[0],
    y: c[1],
});

moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: c[0]+50,
    y: c[1],
});

// HO (ltr)
c = [480, 365];
moleculeND(stage, c[0], c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: c[0],
    y: c[1],
});

moleculeND(stage, c[0]-50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: c[0]-50,
    y: c[1],
});

// CH2OH 
c = [580, 365];
moleculeND(stage, c[0], c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: c[0],
    y: c[1],
});

moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 2,
    x: c[0]+50,
    y: c[1],
});

moleculeND(stage, c[0]+100, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: c[0]+100,
    y: c[1],
});

moleculeND(stage, c[0]+150, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: c[0]+150,
    y: c[1],
});

// OH
c = [580, 190];
moleculeND(stage, c[0], c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: c[0],
    y: c[1],
});

moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "H",
    "amount": 1,
    x: c[0]+50,
    y: c[1],
});


Array(6).fill(0).map(x=>carbon());
Array(10).fill(0).map(x=>hydrogen());
Array(6).fill(0).map(x=>oxygen());
