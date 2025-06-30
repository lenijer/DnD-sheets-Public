function D100Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (100 + 1));
	var str = "<br>[Roll: ]" + n + "]";
	
	let c = "black";
	if (n == 1){
		c = "red";
	}
	if (n == 20){
		c = "green";
	}
	
	let a = n;
	n += AddAtribute(ID);
	str += "[";
	if (n - a > 0){
		str += ReplaceAfter(ID.textContent, '+', '');
	}else if (n - a < 0){
		str += ReplaceAfter(ID.textContent, '-', '');
	}else{
		str += ReplaceAfter(ID.textContent, '0', '');
	}
	str += ": " + (n - a) + "]";
	
	Print(doc, n, str, c);
}

function D20Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (20 + 1));
	var str = "<br>[Roll: " + n + "]";
	
	let c = "black";
	if (n == 1){
		c = "red";
	}
	if (n == 20){
		c = "green";
	}
	
	let a = n;
	n += AddAtribute(ID);
	str += "[";
	if (n - a > 0){
		str += ReplaceAfter(ID.textContent, '+', '');
	}else if (n - a < 0){
		str += ReplaceAfter(ID.textContent, '-', '');
	}else{
		str += ReplaceAfter(ID.textContent, '0', '');
	}
	str += ": " + (n - a) + "]";
	
	Print(doc, n, str, c);
}

function D10Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (10 + 1));
	var str = "<br>[Roll: ]" + n + "]";
	
	let c = "black";
	if (n == 1){
		c = "red";
	}
	if (n == 20){
		c = "green";
	}
	
	let a = n;
	n += AddAtribute(ID);
	str += "[";
	if (n - a > 0){
		str += ReplaceAfter(ID.textContent, '+', '');
	}else if (n - a < 0){
		str += ReplaceAfter(ID.textContent, '-', '');
	}else{
		str += ReplaceAfter(ID.textContent, '0', '');
	}
	str += ": " + (n - a) + "]";
	
	Print(doc, n, str, c);
}

function D6Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (6 + 1));
	var str = "<br>[Roll: ]" + n + "]";
	
	let c = "black";
	if (n == 1){
		c = "red";
	}
	if (n == 20){
		c = "green";
	}
	
	let a = n;
	n += AddAtribute(ID);
	str += "[";
	if (n - a > 0){
		str += ReplaceAfter(ID.textContent, '+', '');
	}else if (n - a < 0){
		str += ReplaceAfter(ID.textContent, '-', '');
	}else{
		str += ReplaceAfter(ID.textContent, '0', '');
	}
	str += ": " + (n - a) + "]";
	
	Print(doc, n, str, c);
}

function D4Roll(doc, ID){
	let n = 0;
	n = Math.floor(Math.random() * (4 + 1));
	var str = "<br>[Roll: ]" + n + "]";
	
	let c = "black";
	if (n == 1){
		c = "red";
	}
	if (n == 20){
		c = "green";
	}
	
	let a = n;
	n += AddAtribute(ID);
	str += "[";
	if (n - a > 0){
		str += ReplaceAfter(ID.textContent, '+', '');
	}else if (n - a < 0){
		str += ReplaceAfter(ID.textContent, '-', '');
	}else{
		str += ReplaceAfter(ID.textContent, '0', '');
	}
	str += ": " + (n - a) + "]";
	
	Print(doc, n, str, c);
}

//Will work as long as bonus is under 10 and over 0
function AddAtribute(ID){
	let n = 0;
	var stri = ID.textContent;
	var ri = stri.replace(/^\D+/g, '');
	//console.log(stri);
	var itn = ri[0];
	
	
	n = parseInt(itn);
	if (stri.indexOf('-') !== -1){
		n *= -1;
	}
	return n;
}

function Print(doc, Prints, string, colour){
	doc.getElementById("RollRes").innerHTML = "<legend>Roll</legend>";
	doc.getElementById("RollRes").innerHTML += "<span style =" + '"' + " color: " + colour + '"' + ">" + Prints + "</span>" + string;
}

function ReplaceAfter(string, character, replacement){
	//console.log(string);
	var s;
	const indexOfPluss = string.indexOf(character);
	if (indexOfPluss !== -1){
		/*const regex = new RegExp((?<=\\+)., 'g');
		const newString = string.replace(regex, replacement);*/
		var b = string.substring(0, string.indexOf(character));
		//s = newString;
		s = b;
		//console.log(s);
	}else{
		//console.log("I'm no here");
		s = string;
	}
	return s;
}