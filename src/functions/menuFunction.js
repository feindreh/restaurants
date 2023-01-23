import makeContentDiv from "./makeContentDiv";

export default function menuFunction(){
	const menu = document.createElement("div");
	menu.setAttribute("class","generated");

	const header = makeContentDiv();
	header.innerText = "Ich bin die Überschrift";

	const bagel = makeContentDiv();
	bagel.innerText = "Ich bin ein Bagel *hmmm*";



	menu.append(header,bagel);
	return menu;
}