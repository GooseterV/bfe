this.GLUCOSE = {
	"name": "Glucose",
	"level": 1,
	"category": "Carbohydrates",
}
this.WIN_CONDITION = [];
// Bonding
bond(stage, {x: 289, y:154}, {x:182, y:269}, true);
bond(stage, {x: 182, y:269}, {x: 172, y:164}, false);
bond(stage, {x: 182, y:269}, {x: 183, y:365}, false);
bond(stage, {x:182, y:269}, {x: 292, y:364}, true);
bond(stage, {x:292, y:364}, {x:289, y:447}, false);
bond(stage, {x:292, y:364}, {x:293, y:307}, true);
bond(stage, {x:289, y:154}, {x:291, y:235}, false);
bond(stage, {x:292, y:364}, {x:462, y:369}, true);
bond(stage, {x:462, y:369}, {x:462, y:448}, false);
bond(stage, {x:462, y:369}, {x:462, y:297}, false);
bond(stage, {x:462, y:369}, {x:600, y:273}, true);
bond(stage, {x:600, y:273}, {x:600, y:367}, false);
bond(stage, {x:600, y:273}, {x:600, y:195}, false);
bond(stage, {x:600, y:273}, {x:478, y:158}, true);
bond(stage, {x:289, y:154}, {x:478, y:158}, true);
bond(stage, {x:289, y:154}, {x:289, y:64}, false);

// C
moleculeND(stage, 289, 154, 2, "black")
WIN_CONDITION.push({
	"symbol": "C",
	"amount":1,
	x: 289,
	y: 154,
});
// H
moleculeND(stage, 291, 235, 2, "black")
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: 291,
	y: 235,
});
// C
moleculeND(stage, 182, 269, 2, "black")
WIN_CONDITION.push({
	"symbol": "C",
	"amount":1,
	x: 182,
	y: 269,
});
// H
moleculeND(stage, 172, 164, 2, "black")
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: 172,
	y: 164,
});
// C
moleculeND(stage, 292, 364, 2, "black")
WIN_CONDITION.push({
	"symbol": "C",
	"amount":1,
	x: 292,
	y: 364,
});
// H
moleculeND(stage, 289, 447, 2, "black")
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: 289,
	y: 447,
});
// C
moleculeND(stage, 462, 369, 2, "black")
WIN_CONDITION.push({
	"symbol": "C",
	"amount":1,
	x: 462,
	y: 369,
});
// H
moleculeND(stage, 462, 297, 2, "black")
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: 462,
	y: 297,
});
// C
moleculeND(stage, 600, 273, 2, "black")
WIN_CONDITION.push({
	"symbol": "C",
	"amount":1,
	x: 600,
	y: 273,
});
// H
moleculeND(stage, 600, 367, 2, "black")
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: 600,
	y: 367,
});
// O
moleculeND(stage, 478, 158, 2, "black")
WIN_CONDITION.push({
	"symbol": "O",
	"amount":1,
	x: 478,
	y: 158,
});

// CH2OH

let c = [289, 64];
moleculeND(stage, c[0], c[1], 2, "blue")
moleculeND(stage, c[0]+50, c[1], 2, "blue")
moleculeND(stage, c[0]+100, c[1], 2, "blue")
moleculeND(stage, c[0]+150, c[1], 2, "blue")
WIN_CONDITION.push({
	"symbol": "C",
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
WIN_CONDITION.push({
	"symbol": "O",
	"amount":1,
	x: c[0]+100,
	y: c[1],
});
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: c[0]+150,
	y: c[1],
});

// HO (ltr) 

c = [183, 365];
moleculeND(stage, c[0]-50, c[1], 2, "blue")
moleculeND(stage, c[0], c[1], 2, "blue")
WIN_CONDITION.push({
	"symbol": "H",
	"amount":1,
	x: c[0]-50,
	y: c[1],
});
WIN_CONDITION.push({
	"symbol": "O",
	"amount":1,
	x: c[0],
	y: c[1],
});

// OH

c = [293, 307];
moleculeND(stage, c[0], c[1], 2, "blue")
moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
	"symbol": "O",
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

// OH

c = [462, 448];
moleculeND(stage, c[0], c[1], 2, "blue")
moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
	"symbol": "O",
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


// OH

c = [600, 195];
moleculeND(stage, c[0], c[1], 2, "blue")
moleculeND(stage, c[0]+50, c[1], 2, "blue")
WIN_CONDITION.push({
	"symbol": "O",
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





Array(6).fill(0).map(x=>carbon());
Array(11).fill(0).map(x=>hydrogen());
Array(6).fill(0).map(x=>oxygen());

