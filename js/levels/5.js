this.ADENINE = {
	"name": "Amino Acid",
	"level": 5,
	"category": "Protein",
}
this.WIN_CONDITION = [];

bond(stage, {x: 330, y:165}, {x:330, y:285}, false);
bond(stage, {x: 330, y:285}, {x:190, y:285}, false);
bond(stage, {x: 190, y:285}, {x:190, y:190}, false);
bond(stage, {x: 190, y:285}, {x:90, y:285}, false);
bond(stage, {x: 330, y:285}, {x:470, y:285}, false);
bond(stage, {x: 470, y:285}, {x:470, y:190}, true);
bond(stage, {x: 470, y:285}, {x:570, y:285}, false);
bond(stage, {x: 330, y:285}, {x:330, y:370}, false);

// H
moleculeND(stage, 330, 165, 2, "black")
WIN_CONDITION.push({
    "symbol": "H",
    "amount":1,
    x: 330,
    y: 165,
});

// C
moleculeND(stage, 330, 285, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 330,
    y: 285,
});

// N
moleculeND(stage, 190, 285, 2, "black")
WIN_CONDITION.push({
    "symbol": "N",
    "amount":1,
    x: 190,
    y: 285,
});

// H
moleculeND(stage, 190, 190, 2, "black")
WIN_CONDITION.push({
    "symbol": "H",
    "amount":1,
    x: 190,
    y: 190,
});

// H
moleculeND(stage, 90, 285, 2, "black")
WIN_CONDITION.push({
    "symbol": "H",
    "amount":1,
    x: 90,
    y: 285,
});

// C
moleculeND(stage, 470, 285, 2, "black")
WIN_CONDITION.push({
    "symbol": "C",
    "amount":1,
    x: 470,
    y: 285,
});

// O
moleculeND(stage, 470, 190, 2, "black")
WIN_CONDITION.push({
    "symbol": "O",
    "amount":1,
    x: 470,
    y: 190,
});

// OH
let c = [570, 285];
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
    "amount":1,
    x: c[0]+50,
    y: c[1],
});


// R
moleculeND(stage, 330, 370, 2.5, "red")




Array(2).fill(0).map(x=>carbon())
Array(4).fill(0).map(x=>hydrogen())
Array(1).fill(0).map(x=>nitrogen())
Array(2).fill(0).map(x=>oxygen())