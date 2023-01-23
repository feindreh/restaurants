import makeContentDiv from "./makeContentDiv";

export default function contactFunction(){
	const contact = document.createElement("div");
	contact.setAttribute("class","generated");

	const header = makeContentDiv();
	header.setAttribute("class","headline");
	header.innerText = "Ich bin die Überschrift";

	const content = document.createElement("div");
	content.setAttribute("class","content");




	const bagel1 = makeContentDiv();
	bagel1.innerText = "I am Mr Best Bagel.";

	const bagel2 = makeContentDiv();
	bagel2.innerText = "I am Mrs Best Bagel.";

	const bagel3 = makeContentDiv();
	bagel3.innerText = "Just call me Bagly. \n Mr Best Bagel is my Father.";

	content.append(bagel1,bagel2,bagel3);
	contact.append(header,content);
	return contact;
}