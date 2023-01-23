import makeContentDiv from "./makeContentDiv";

export default function menuFunction(){
	const menu = document.createElement("div");
	menu.setAttribute("class","generated");

	const header = makeContentDiv();
	header.setAttribute("class","headline");
	header.innerText = "Ich bin die Überschrift";

	const content = document.createElement("div");
	content.setAttribute("class","content");




	const bagel = makeContentDiv();
	bagel.innerText = "Ich bin ein Bagel *hmmm*";


	content.append(bagel);
	menu.append(header,content);
	return menu;
}