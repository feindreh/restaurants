import makeContentDiv from "./makeContentDiv";

export default function homeFunction(){
	const home = document.createElement("div");
	home.setAttribute("class","generated");
	
	

	const header = makeContentDiv();
	header.innerText = "Ich bin die Überschrift";

	const introduction = makeContentDiv();
	introduction.innerText ="Ich bin die Einführung";

	const workingHours = makeContentDiv();
	workingHours.innerText = "Ich bin die Öffnungszeit";

	const location = makeContentDiv();
	location.innerText = "Ich bin der Ort an dem du mich findest";





	home.append(header,introduction,workingHours,location);

	return home;
}