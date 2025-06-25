function D20Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (20 + 1));
	//console.log(n);
	n += AddAtribute(ID);
	
	Print(doc, n);
}

//Will work as long as bonus is under 10
function AddAtribute(ID){
	let n = 0;
	//let a = 0;
	/*for (let i = 0; i < Page[i].length; i++){
		if (Page[i].Id.includes("Str")){
			a = i;
			break;
		}
	}*/
	
	//var stri = Page[a].HTML;
	var stri = ID.textContent;
	//console.log(stri);
	//var ri = stri.replace('/^\D+/g', '');
	var ri = stri.replace(/^\D+/g, '');
	//var ri = stri.replace(/[^0-9]/g, '');
	//console.log(ri);
	//var itn = ri.match('/\d+/')[0];
	//var itn = ri.match('/\d+/');
	var itn = ri[0];
	//console.log(itn);
	
	n = parseInt(itn);
	return n;
}

function Print(doc, Prints){
	doc.getElementById("RollRes").innerHTML = "<legend>Roll</legend>";
	doc.getElementById("RollRes").innerHTML += Prints;
}