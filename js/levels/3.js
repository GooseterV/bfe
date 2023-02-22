this.ADENINE = {
	"name": "Adenine",
	"level": 3,
	"category": "Nucleobases",
}
this.WIN_CONDITION = [];

bond(stage, {x: 285, y:90}, {x:285, y:190}, false);
bond(stage, {x: 285, y:190}, {x:165, y:270}, true);
bond(stage, {x: 165, y:270}, {x:165, y:380}, false);
bond(stage, {x: 165, y:380}, {x:285, y:440}, true);
bond(stage, {x: 285, y:440}, {x:390, y:390}, false);
bond(stage, {x: 390, y:390}, {x:390, y:270}, true);
bond(stage, {x: 390, y:270}, {x:285, y:190}, false);
bond(stage, {x: 390, y:270}, {x:515, y:240}, false);
bond(stage, {x: 515, y:240}, {x:550, y:335}, true);
bond(stage, {x: 550, y:335}, {x:490, y:410}, false);
bond(stage, {x: 490, y:410}, {x:390, y:390}, false);

// C
moleculeND(stage, 285, 190, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 285,
    y: 190,
});


// N
moleculeND(stage, 165, 270, 2, "black")
WIN_CONDITION.push({
    "symbol": "N",
    "amount":1,
    x: 165,
    y: 270,
});

// C
moleculeND(stage, 165, 380, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 165,
    y: 380,
});

// N
moleculeND(stage, 285, 440, 2, "black")
WIN_CONDITION.push({
    "symbol": "N",
    "amount":1,
    x: 285,
    y: 440,
});

// C
moleculeND(stage, 390, 390, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 390,
    y: 390,
});

// C
moleculeND(stage, 390, 270, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 390,
    y: 270,
});

// N
moleculeND(stage, 515, 240, 2, "black")
WIN_CONDITION.push({
    "symbol": "N",
    "amount":1,
    x: 515,
    y: 240,
});

// C
moleculeND(stage, 550, 335, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 550,
    y: 335,
});



// NH2
let c = [285, 90];
moleculeND(stage, c[0], c[1], 2, "blue")
moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
	"symbol": "N",
	"amount":1,
	x: c[0],
	y: c[1],
});
WIN_CONDITION.push({
    "symbol": "H",
    "amount":2,
    x: c[0]+50,
    y: c[1],
});

// NH
c = [490, 410];
moleculeND(stage, c[0], c[1], 2, "blue")
moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
    "symbol": "N",
    "amount":1,
    x: c[0],
    y: c[1],
});
WIN_CONDITION.push({
    "symbol": "H",
    "amount":1,
    x: c[0]+50,
    y: c[1],
});


Array(5).fill(0).map(x=>carbon());
Array(5).fill(0).map(x=>nitrogen());
Array(2).fill(0).map(x=>hydrogen());