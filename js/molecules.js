const positive = "⁺";
const negative = "⁻";
const neutral = "⁰";

const carbon = () => new Molecule(stage, 50, 600, 2, "C", "#343236", 1);
const hydrogen = () => new Molecule(stage, 150, 600, 2, "H", "red", 1);
const oxygen = () => new Molecule(stage, 250, 600, 2, "O", "blue", 1);
const nitrogen = () => new Molecule(stage, 350, 600, 2, "N", "deepskyblue", 1);
const phosphorus = () => new Molecule(stage, 450, 600, 2, "P", "darkred", 1);
const sulfur = () => new Molecule(stage, 550, 600, 2, "S", "#cacc49", 1);
const oxygen1 = () => new Molecule(stage, 250, 600, 2, "O⁻", "blue", 1);
const conditionsMatch = (x, y) => {
	//console.log("In range: ", isInRange(10, x.x, x.y, y.x, y.y));
	//console.log("Symbol: ", x.symbol === y.symbol);
	//console.log("Amount: ", x.amount === y.amount);
	return x.symbol === y.symbol && x.amount === y.amount && (
		isInRange(10, x.x, x.y, y.x, y.y)
	)
}

const checkForWin = (wc) => {
	if (wc.length === 0) {
		return true;
	}
	let molecs = stage.children.filter(x=>x._isMolecule||x._isGroup);
	let s = molecs.map(x=>x._isGroup?x.children.map(y=>({x:x.x+y.x, y:x.y+y.y, symbol:y._molecule._symbol, amount:y._molecule._amount})): x).flatMap(z=>{
		return z?._molecule ? {x:z.x, y:z.y, symbol:z._molecule._symbol, amount:z._molecule._amount} : z;
	});
	//console.log("S: ", s);
	const c = wc.every(x=>
		{
			const g = s.some(y=>conditionsMatch(x, y));
			//console.log( s.some(y=>conditionsMatch(x, y)) === s.some(y=>conditionsMatch(x, y)) === s.some(y=>conditionsMatch(x, y)) === s.some(y=>conditionsMatch(x, y)));
			//console.log("DO CONDITIONS MATCH FOR ANY: ", g);
			return g;
		}
	);
	console.log("DO CONDITIONS MATCH FOR ALL: ", c);
	return c;

}

class Molecule {
	constructor(stage, x, y, size, symbol, color, amount) {
		this.stage = stage;
		this._x = x;
		this._y = y;
		this._size = size;
		this._symbol = symbol;
		this._color = color;
		this._amount = amount;
		this._molecule = null;
		this.make();
	}

	make() {
		this._molecule = molecule(this.stage, this._x, this._y, this._size, this._color, this._symbol, this._amount, this.click.bind(this), this);
		return this._molecule;
	}

	click(e) {
		console.log("Clicked molecule at " + e.currentTarget.x + ", " + e.currentTarget.y + " with id " + e.currentTarget.id + "");
		e.nativeEvent.preventDefault();
		if (e.nativeEvent.button === 0 && e.nativeEvent.ctrlKey) {
			if (!window.clicked.map(x=>x.molec.id).includes(e.currentTarget.id)) window.clicked.push({this:this, molec:e.currentTarget});
		} else if (e.nativeEvent.button === 0 && e.nativeEvent.shiftKey) {
			groupMolecules(window.clicked.map(x=>x.molec));
			window.clicked = [];
		};
		if (e.nativeEvent.button === 2 && !e.nativeEvent.ctrlKey) {
			this.stage.removeChild(e.currentTarget);
			this.stage.update();
			this._amount++;
			this.make();
		}
	}
}