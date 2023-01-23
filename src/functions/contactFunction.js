import makeContentDiv from "./makeContentDiv";

export default function contactFunction(){
	const contact = document.createElement("div");
	contact.setAttribute("class","generated");

	const header = makeContentDiv();
	header.innerText = "Ich bin die Überschrift";

	const bagel1 = makeContentDiv();
	bagel1.innerText = "I am Mr Best Bagel.";

	const bagel2 = makeContentDiv();
	bagel2.innerText = "I am Mrs Best Bagel.";

	const bagel3 = makeContentDiv();
	bagel3.innerText = "Just call me Bagly. \n Mr Best Bagel is my Father.";


	contact.append(header,bagel1,bagel2,bagel3);
	return contact;
}