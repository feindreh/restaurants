import content from "./content";
import homeFunction from "../functions/homeFunction";
import menuFunction from "../functions/menuFunction";
import contactFunction from "../functions/contactFunction";

const header = document.createElement("div");
header.setAttribute("id", "header");

const home = document.createElement("button");
home.setAttribute("type", "button");
home.setAttribute("class","button");
home.innerText = "Home";
home.addEventListener("click",()=>{
	content.removeChild(content.firstChild);
	content.append(homeFunction());
});

const menu = document.createElement("button");
menu.setAttribute("type", "button");
menu.setAttribute("class","button");
menu.innerText = "Menu";
menu.addEventListener("click",()=>{
	content.removeChild(content.firstChild);
	content.append(menuFunction());
});

const contact = document.createElement("button");
contact.setAttribute("type", "button");
contact.setAttribute("class","button");
contact.innerText = "Contact";
contact.addEventListener("click",()=>{
	content.removeChild(content.firstChild);
	content.append(contactFunction());
});



header.append(home,menu,contact);

export default header;