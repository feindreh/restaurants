import makeContentDiv from "./makeContentDiv";

export default function homeFunction(){
	const home = document.createElement("div");
	home.setAttribute("class","generated");
	
	const header = makeContentDiv();
	header.setAttribute("class","headline");
	header.innerText = "Ich bin die Überschrift";

	const content = document.createElement("div");
	content.setAttribute("class","content");




	const introduction = makeContentDiv();
	introduction.innerText ="Ich bin die Einführung";

	const workingHours = makeContentDiv();
	workingHours.innerText = "Ich bin die Öffnungszeit";

	const location = makeContentDiv();
	location.innerText = "Ich bin der Ort an dem du mich findest";




	content.append(introduction,workingHours,location);
	home.append(header,content);

	return home;
}