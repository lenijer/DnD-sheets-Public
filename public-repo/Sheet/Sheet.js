class Box{
	Style = "";
	Class = "";
	Id = "";
	HTML;
	Txt = "";
	Title = "";
	Top;
	Left;
	Width;
	Parent;
	OnClick = "";
}

const Page = [];

function StartPlacement(){
	let Screen_Width = window.innerWidth - 5; //Kinda simple to change the base size
	
	//Armor Class
	New_Item(Screen_Width, "AC", "Armor Class", "[AC]", "absolute_pos standard_size", "", 10, 20, 70, "bdy", true);
	//Initiative
	New_Item(Screen_Width, "Init", "Initiative", "[Intitiative]", "absolute_pos standard_size", "", 10, 30, 70, "bdy", true);
	//Speed
	New_Item(Screen_Width, "Speed", "Speed", "", "absolute_pos standard_size", "", 10, 40, 70, "bdy", true);
	//Proficency Bonus
	New_Item(Screen_Width, "Prof", "Proficency Bonus", "", "absolute_pos standard_size", "", 10, 10, 70, "bdy", true);
	//Inspiration
	New_Item(Screen_Width, "Insp", "Inspiration", "...", "absolute_pos standard_size", "", 10, 10, 70 * 2, "bdy", true);
	//Passive Perception
	New_Item(Screen_Width, "PP", "Passive Perception", "", "absolute_pos standard_size", "", 10, 0, 70 * 13, "bdy", true);
	//Equipment
	New_Item(Screen_Width, "Equ", "Equipment", "...", "absolute_pos standard_NoHeight", "", 10, 50, 70, "bdy", true);
	//Other Proficencies
	New_Item(Screen_Width, "OP", "Other Proficencies", "...", "absolute_pos standard_NoHeight", "", 10, 0, 70 * 14, "bdy", true);
	//Languages
	New_Item(Screen_Width, "Lang", "Languages", "...", "absolute_pos standard_NoHeight", "", 10, 10, 70 * 26, "bdy", true);
	//Atunements
	New_Item(Screen_Width, "Atu", "Atunements", "...", "absolute_pos standard_NoHeight", "", 10, 20, 70 * 4, "bdy", true);
	//Attacks
	New_Item(Screen_Width, "Atks", "Attacks", "...", "absolute_pos standard_NoHeight", "", 10, 30, 70 * 4, "bdy", true);
	//Spells
	New_Item(Screen_Width, "Sps", "Spells", "...", "absolute_pos standard_NoHeight", "", 10, 40, 70 * 4, "bdy", true);
	//Bonds
	New_Item(Screen_Width, "Bnds", "Bonds", "...", "absolute_pos standard_NoHeight", "", 10, 70, 70, "bdy", true);
	//Features
	New_Item(Screen_Width, "Features", "Features", "...", "absolute_pos standard_NoHeight", "", 10, 80, 70, "bdy", true);
	//Traits
	New_Item(Screen_Width, "Traits", "Traits", "[Personality Traits]<br>[Other Traits]", "absolute_pos standard_NoHeight", "", 10, 60, 70, "bdy", true);
	//Flaws & Ideals
	New_Item(Screen_Width, "F&I", "Flaws & Ideals", "...", "absolute_pos standard_NoHeight", "", 10, 90, 70, "bdy", true);
	//Hit Points
	New_Item(Screen_Width, "HP", "Hit Points", "[CURRENT]/[MAX] [TMP]", "absolute_pos standard_size", "", 30, 20, 70 * 2, "bdy", true);
	//Hit Dice
	New_Item(Screen_Width, "HD", "Hit Dice", "", "absolute_pos standard_size", "", 10, 20, 70 * 3, "bdy", true);
	
	//Death Saves
	let DS = New_Item(Screen_Width, "DS", "Death Saves", "", "absolute_pos standard_size flex_row", "", 20, 30, 70 * 3, "bdy", true);
	
	New_Item(DS.Width, "Suc", "Success", "...", "", "", 50, 0, 0, DS.Id, true);
	New_Item(DS.Width, "Fail", "Fails", "...", "", "", 50, 50, 0, DS.Id, true);
	
	//Saving Throws
	let ST = New_Item(Screen_Width, "STs", "Saving Throws", "", "absolute_pos flex_column", "", 10, 10, 70 * 3, "bdy", true);
	ST.Style += " height: " + ((70 * 6) - 16) + "px;";
	Page.pop();
	fieldset(ST);
	
	New_Item(ST.Width, "Str_S", "Strength", "", "standard_NoHeight button", "D20Roll( document, Str_S)", 100, 0, 0, ST.Id, true);
	New_Item(ST.Width, "Dex_S", "Dexterity", "", "standard_NoHeight button", "D20Roll( document, Dex_S)", 100, 0, 0, ST.Id, true);
	New_Item(ST.Width, "Con_S", "Constitution", "", "standard_NoHeight button", "D20Roll( document, Con_S)", 100, 0, 0, ST.Id, true);
	New_Item(ST.Width, "Int_S", "Intelligence", "", "standard_NoHeight button", "D20Roll( document, Int_S)", 100, 0, 0, ST.Id, true);
	New_Item(ST.Width, "Wis_S", "Wisdom", "", "standard_NoHeight button", "D20Roll( document, Wis_S)", 100, 0, 0, ST.Id, true);
	New_Item(ST.Width, "Chr_S", "Charisma", "", "standard_NoHeight button", "D20Roll( document, Chr_S)", 100, 0, 0, ST.Id, true);
	
	//Top Row
	let TopRow = New_Item(Screen_Width, "TopRow", "", "", "absolute_pos flex_row", "", 100, 0, 0, "bdy",false);
	TopRow.Style += " height: " + 70 + "px;";
	Page.pop();
	divs(TopRow);
	
	New_Item(TopRow.Width, "PlNam", "Player Name", "", "", "", 15, 0, 0, TopRow.Id, true);
	New_Item(TopRow.Width, "CharNam", "Character Name", "", "", "", 15, 0, 0, TopRow.Id, true);
	New_Item(TopRow.Width, "Race", "Race", "", "", "", 15, 0, 0, TopRow.Id, true);
	New_Item(TopRow.Width, "Klass", "Class", "", "", "", 15, 0, 0, TopRow.Id, true);
	New_Item(TopRow.Width, "Alig", "Aligment", "", "", "", 15, 0, 0, TopRow.Id, true);
	New_Item(TopRow.Width, "Backg", "Background", "", "", "", 15, 0, 0, TopRow.Id, true);
	
	//Stats
	let Attri = New_Item(Screen_Width, "Attri", "", "", "absolute_pos flex_column", "", 10, 0, 70, "bdy", false);
	Attri.Style += " height: " + 70 * 12 + "px;";
	Page.pop();
	divs(Attri);
	
	let Str = New_Item(Attri.Width, "Str", "Strength", "", "button", "D20Roll( document, Str)", 100, 0, 0, Attri.Id, true);
	Str.Style += " height: " + (140 - 16) + "px;";
	Page.pop();
	fieldset(Str);
	let Dex = New_Item(Attri.Width, "Dex", "Dexterity", "", "button", "D20Roll( document, Dex)", 100, 0, 0, Attri.Id, true);
	Dex.Style += " height: " + (140 - 16) + "px;";
	Page.pop();
	fieldset(Dex);
	let Con = New_Item(Attri.Width, "Con", "Constitution", "", "button", "D20Roll( document, Con)", 100, 0, 0, Attri.Id, true);
	Con.Style += " height: " + (140 - 16) + "px;";
	Page.pop();
	fieldset(Con);
	let Int = New_Item(Attri.Width, "Int", "Intelligence", "", "button", "D20Roll( document, Int)", 100, 0, 0, Attri.Id, true);
	Int.Style += " height: " + (140 - 16) + "px;";
	Page.pop();
	fieldset(Int);
	let Wis = New_Item(Attri.Width, "Wis", "Wisdom", "", "button", "D20Roll( document, Wis)", 100, 0, 0, Attri.Id, true);
	Wis.Style += " height: " + (140 - 16) + "px;";
	Page.pop();
	fieldset(Wis);
	let Chr = New_Item(Attri.Width, "Chr", "Charisma", "", "button", "D20Roll( document, Chr)", 100, 0, 0, Attri.Id, true);
	Chr.Style += " height: " + (140 - 16) + "px;";
	Page.pop();
	fieldset(Chr);
	
	//Special Stats
	let OtherRoll = New_Item(Screen_Width, "SpecSts", "", "", "absolute_pos flex_column", "", 10, 10, 70 * 9, "bdy", false);
	OtherRoll.Style += " height: " + 70 * 17 + "px;";
	Page.pop();
	divs(OtherRoll);
	
	New_Item(OtherRoll.Width, "Acro", "Acrobatics", "", "standard_size button", "D20Roll( document, Acro)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "AH", "Animal Handeling", "", "standard_size button", "D20Roll( document, AH)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Arc", "Arcana", "", "standard_size button", "D20Roll( document, Arc)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Dec", "Deception", "", "standard_size button", "D20Roll( document, Dec)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "His", "History", "", "standard_size button", "D20Roll( document, His)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Ins", "Insight", "", "standard_size button", "D20Roll( document, Ins)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Itm", "Intimidation", "", "standard_size button", "D20Roll( document, Itm)", 100, 0, 0, OtherRoll.Id, true);	
	New_Item(OtherRoll.Width, "Inv", "Investigation", "", "standard_size button", "D20Roll( document, Inv)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Med", "Medicine", "", "standard_size button", "D20Roll( document, Med)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Nat", "Nature", "", "standard_size button", "D20Roll( document, Nat)", 100, 0, 0, OtherRoll.Id, true);	
	New_Item(OtherRoll.Width, "Perc", "Perceptione", "", "standard_size button", "D20Roll( document, Perc)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Perf", "Performance", "", "standard_size button", "D20Roll( document, Perf)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Pers", "Persuation", "", "standard_size button", "D20Roll( document, Pers)", 100, 0, 0, OtherRoll.Id, true);	
	New_Item(OtherRoll.Width, "Rel", "Religion", "", "standard_size button", "D20Roll( document, Rel)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "SOH", "Slight Of Hand", "", "standard_size button", "D20Roll( document, SOH)", 100, 0, 0, OtherRoll.Id, true);
	New_Item(OtherRoll.Width, "Sth", "Stealth", "", "standard_size button", "D20Roll( document, Sth)", 100, 0, 0, OtherRoll.Id, true);	
	New_Item(OtherRoll.Width, "Sur", "Survival", "", "standard_size button", "D20Roll( document, Sur)", 100, 0, 0, OtherRoll.Id, true);
	
	
	
	
	
	New_Item(Screen_Width, "RollRes", "Roll", "", "absolute_pos standard_size", "", 20, 10 * 5, 70 * 8, "bdy", true);
}

function New_Item(w, ID, Title, Txt, Class, ClickEvent, Width_perc, Left_perc, Top, Parent, filedset){
	let N = new Box();
	N.Parent = Parent;
	N.Id = ID;
	N.Title = Title;
	N.Txt = Txt;
	N.Class = Class;
	N.Width = find_width(w, Width_perc, filedset);
	N.Left = find_Left(w, Left_perc);
	Gen_Style(N, Top);
	N.OnClick = ClickEvent;
	
	if (filedset){
		fieldset(N);
	}else {
		divs(N);
	}
	
	return N;
}

function find_Left(w, percent){
	return (percent / 100) * w;
}

function find_width(w, percent, is_fielset){
	let r = (percent / 100) * w;
	if (is_fielset){
		return r - 40;
	}else{
		return r;
	}
}

function Gen_Style(item, height){
	item.Top = height;
	item.Style = "top: " + height + "px; left: " + item.Left + "px; width: " + item.Width + "px;";
	return;
}

function fieldset(s){
	s.HTML = "<fieldset id = " + '"' + s.Id + '"' + " OnClick = " + '"' + s.OnClick + '"' + " class = " + '"' + s.Class + '"' + " style =" + '"' + s.Style + '"' + ">" + legend(s.Title) + s.Txt + "</fieldset>";
	Page.push(s);
	return;
}

function legend(txt){
	return "<legend>" + txt + "</legend>";
}

function divs(s){
	s.HTML = "<div id = " + '"' + s.Id + '"' + " OnClick = " + '"' + s.OnClick + '"' + " class = " + '"' + s.Class + '"' + " style =" + '"' + s.Style + '"' + ">" + s.Txt + "</div>";
	Page.push(s);
	return;
}