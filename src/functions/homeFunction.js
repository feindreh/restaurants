import makeContentDiv from "./makeContentDiv";

export default function homeFunction(){
	const home = document.createElement("div");
	home.setAttribute("class","generated");
	
	const header = makeContentDiv();
	header.setAttribute("class","headline");
	header.innerText = "The Bagel Shop";

	const content = document.createElement("div");
	content.setAttribute("class","content");




	const introduction = makeContentDiv();
	introduction.innerHTML = "<p>There is more to our humble bagel than meets the eye.</p><p>We are proud to partner with the finest local producers of small goods and fresh produce, delivered daily to bring nothing but the best to every holey bite.</p><p>Keep it simple by playing to the traditional fillings, build your own, or order the lot. The Bagel Shop has something on the menu for every schmood.\nSchmearing, toasting, filling and brewing, 7am to 4pm daily.</p>";
	introduction.style = "display:flex;flex-direction:column;justify-content:center;gap:15px";
	
	const workingHours = makeContentDiv();
	workingHours.innerText = "Ich bin die Öffnungszeit";

	const location = makeContentDiv();
	location.innerText = "Ich bin der Ort an dem du mich findest";




	content.append(introduction,workingHours,location);
	home.append(header,content);

	return home;
}