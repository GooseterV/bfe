const levels = [
	{
		name: "Glucose",
		num: 1,
		description: "Glucose is a simple sugar consisting of 6 molecules of carbon, 12 molecules of hydrogen and 6 molecules of oxygen. It is an important source of energy for living organisms and is a building block for many carbohydrates. ",
		handler: "./js/levels/1.js"
	},
    {
		name: "Phosphate",
		num: 2,
		description: "Phosphate is also commonly referred to as orthophosphate, an anion than consists of one phosphorus and four oxygen atoms. One of the oxygens is joined to the phosphorus with a double bond and the other three oxygen have a negative charge. Phosphates are an important building block for many organic compounds such as ADP, ATP and DNA. ",
		handler: "./js/levels/2.js"
	},
    {
		name: "Adenine",
		num: 3,
		description: "Adenine is a nitrogenous base that consists of two carbon rings with Nitrogen substituted in two p LL aces in each, as well as a ammonia group (nh3).  It is one of the 4 nucleobases in the structure of DNA, and is complimentary to Thymine in DNA and to Uracil in RNA. Adenine also is important in protein synthesis. ",
		handler: "./js/levels/3.js"
	},
	{
		name: "Fructose",
		num:4,
		description: "Fructose is a simple sugar consisting of carbon, hydrogen, and oxygen in a respective 1:2:1 ratio. Fructose is a monosaccharide and building block for many polysaccharides and bigger molecules. It is also a component of sucrose, which is the most common sugar in the human diet.",
		handler: "./js/levels/4.js"
	},
	{
		name: "Amino Acid",
		num:5,
		description: "Amino Acids are the building blocks of proteins. They are organic compounds that contain an amino group, a carboxyl group, a hydrogen atom, and a side chain. There are 20 different amino acids, and they are all different because of the different side chains.",
		handler: "./js/levels/5.js"
	}
];

function loadLevel(level) {
    document.querySelector("#level-title").innerText = level.name;
    document.querySelector("#info-box").innerText = level.description;
    document.querySelector("#level-number").innerText = "Level " + level.num;
    fetch(level.handler).then(script=>script.text()).then(eval);

}

function retrieveLevel(num) {
    if (num === 0) {
        return {
            name: "Sandbox",
            num: 0,
            description: "Create your own molecules and reactions.",
            handler: "./js/levels/0.js"
        };
    }
	return levels[num - 1];
}

function activateLevel(num) {
	const level = retrieveLevel(num);
	if (level) loadLevel(level)
    else alert("No remaining levels, restarting to level 1"), activateLevel(1), localStorage.data = JSON.stringify({level:1});
}

