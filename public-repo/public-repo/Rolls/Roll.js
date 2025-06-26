function D20Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (20 + 1));
	n += AddAtribute(ID);
	
	Print(doc, n);
}

//Will work as long as bonus is under 10
function AddAtribute(ID){
	let n = 0;
	var stri = ID.textContent;
	var ri = stri.replace(/^\D+/g, '');
	var itn = ri[0];
	
	n = parseInt(itn);
	return n;
}

function Print(doc, Prints){
	doc.getElementById("RollRes").innerHTML = "<legend>Roll</legend>";
	doc.getElementById("RollRes").innerHTML += Prints;
}