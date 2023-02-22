this.SANDBOX = {
	"name": "Phosphate",
	"level": 2,
	"category": "Bonds and Molecules",
}
this.WIN_CONDITION = [];

bond(stage, {x: 365, y:180}, {x:365, y:330}, true);
bond(stage, {x: 365, y:330}, {x:260, y:420}, false);
bond(stage, {x: 365, y:330}, {x:470, y:420}, false);
bond(stage, {x: 365, y:330}, {x:365, y:510}, false);

// O
moleculeND(stage, 365, 180, 2, "black")
WIN_CONDITION.push({
	"symbol": "O",
	"amount":1,
	x: 365,
	y: 180,
});

// P
moleculeND(stage, 365, 330, 2, "black")
WIN_CONDITION.push({
	"symbol": "P",
	"amount":1,
	x: 365,
	y: 330,
});

// O-
moleculeND(stage, 260, 420, 2, "black")
WIN_CONDITION.push({
    "symbol": "O⁻",
    "amount":1,
    x: 260,
    y: 420,
});

// O-
moleculeND(stage, 365, 510, 2, "black")
WIN_CONDITION.push({
    "symbol": "O⁻",
    "amount":1,
    x: 365,
    y: 510,
});

// O-
moleculeND(stage, 470, 420, 2, "black")
WIN_CONDITION.push({
    "symbol": "O⁻",
    "amount":1,
    x: 470,
    y: 420,
});



Array(3).fill(0).map(x=>oxygen1());
Array(1).fill(0).map(x=>oxygen());
Array(1).fill(0).map(x=>phosphorus());