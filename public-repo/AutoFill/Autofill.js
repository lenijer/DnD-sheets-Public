class Character{
	name = "";
	Player = "";
	Race;
	Class;
	Alignement = "";
	Backgroud = "";
	
	Strength = 0;
	Dexterity = 0;
	Constitution = 0;
	Intelligence = 0;
	Wisdom = 0;
	Charisma = 0;
}

class Class{
	constructor(n, lvl, arc, fea, HD, PB){
		this.name = n;
		this.level = lvl;
		this.archetype = arc;
		this.feats = fea;
		this.Hit_Dice = HD;
		this.proficency_bonus = PB;
	}
	name = "";
	level = 0;
	archetype = "";
	feats;
	Hit_Dice = "";
	Saving_Trows = "";
	proficency_bonus = 0;
}

class Race{
	constructor(n, s, f){
		this.name = n;
		this.Speed = s;
		this.feats = f;
	}
	name = "";
	Speed = "";
	feats;
}

let PC = new Character();

function fillInfo(doc){
	GenerateCharacter();
	
	doc.getElementById("CharNam").innerHTML += PC.name;
	doc.getElementById("pge").innerHTML = PC.name;
	doc.getElementById("PlNam").innerHTML += PC.Player;
	doc.getElementById("Race").innerHTML += PC.Race.name;
	doc.getElementById("Alig").innerHTML += PC.Alignement;
	doc.getElementById("Backg").innerHTML += PC.Backgroud;
	doc.getElementById("Prof").innerHTML += "+ " + PC.Class.proficency_bonus;
	
	doc.getElementById("HD").innerHTML += "[CURRENT][MAX]<br>" + PC.Class.Hit_Dice; //This line can become more complicated
	
	AllStats(doc, "Str", PC.Strength);
	AllStats(doc, "Dex", PC.Dexterity);
	AllStats(doc, "Con", PC.Constitution);
	AllStats(doc, "Int", PC.Intelligence);
	AllStats(doc, "Wis", PC.Wisdom);
	AllStats(doc, "Chr", PC.Charisma);
	
	SavingTrows(doc, "Str_S", Modifier(PC.Strength), PC, true);//This line can become more complicated
	SavingTrows(doc, "Dex_S", Modifier(PC.Dexterity), PC, false);//This line can become more complicated
	SavingTrows(doc, "Con_S", Modifier(PC.Constitution), PC, true);//This line can become more complicated
	SavingTrows(doc, "Int_S", Modifier(PC.Intelligence), PC, false);//This line can become more complicated
	SavingTrows(doc, "Wis_S", Modifier(PC.Wisdom), PC, false);//This line can become more complicated
	SavingTrows(doc, "Chr_S", Modifier(PC.Charisma), PC, false);//This line can become more complicated
	
	Proficency_Rolls(doc, "Acro", Modifier(PC.Dexterity), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "AH", Modifier(PC.Dexterity), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Sth", Modifier(PC.Dexterity), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "SOH", Modifier(PC.Dexterity), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Arc", Modifier(PC.Intelligence), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "His", Modifier(PC.Intelligence), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Inv", Modifier(PC.Intelligence), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Nat", Modifier(PC.Intelligence), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Rel", Modifier(PC.Intelligence), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Ins", Modifier(PC.Wisdom), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Med", Modifier(PC.Wisdom), PC, false, false);//This line can become more complicated
	let a = Proficency_Rolls(doc, "Perc", Modifier(PC.Wisdom), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Sur", Modifier(PC.Wisdom), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Dec", Modifier(PC.Charisma), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Itm", Modifier(PC.Charisma), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Perf", Modifier(PC.Charisma), PC, false, false);//This line can become more complicated
	Proficency_Rolls(doc, "Pers", Modifier(PC.Charisma), PC, false, false);//This line can become more complicated
	
	doc.getElementById("PP").innerHTML += 10 + a;
	
	doc.getElementById("Speed").innerHTML += PC.Race.Speed + " feet";//This line can become more complicated
	
	doc.getElementById("Klass").innerHTML += PC.Class.name + " " + PC.Class.level + " " + PC.Class.archetype;//This line can become more complicated
}

function GenerateCharacter(){
	let Human = new Race("Human", 30);
	
	let Fighter = new Class("Fighter", 1, "", "", "1 d10", 2);
	
	PC.name = "Jane Doe";
	PC.Player = "John Doe";
	PC.Race = Human;
	PC.Class = Fighter;
	PC.Alignement = "Neutral/Good";
	PC.Backgroud = "Noble";
	PC.Strength = 18;
	PC.Dexterity = 16;
	PC.Constitution = 20;
	PC.Intelligence = 8;
	PC.Wisdom = 10;
	PC.Charisma = 12;
	
	//console.log("PC generated");
}

function Modifier(Attri){
	let n = Attri - 10;
	return n / 2;
}

function AllStats(dcs, HTML, Attribute){
	if (Attribute > 11) {
		dcs.getElementById(HTML).innerHTML += "+ ";
	}
	dcs.getElementById(HTML).innerHTML += Modifier(Attribute) + "<br>" + Attribute;//This line can become more complicated
}

function SavingTrows(dcs, HTML, Mod, Char, prof){
	let n = Mod;
	
	if (prof){
		n += Char.Class.proficency_bonus;
	}
	
	if (n > 0){
		dcs.getElementById(HTML).innerHTML += "+ " + n;
	}else{
		dcs.getElementById(HTML).innerHTML += n;
	}
}

function Proficency_Rolls(dcs, HTML, Mod, Char, Prof, Exp){
	let n = Mod;
	
	if (Prof){
		n += Char.Class.proficency_bonus;
	}
	if (Exp){
		n += Char.Class.proficency_bonus;
	}
	
	if (n > 0){
		dcs.getElementById(HTML).innerHTML += "+ " + n;
	}else{
		dcs.getElementById(HTML).innerHTML += n;
	}
	return n;
}