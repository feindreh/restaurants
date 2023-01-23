import content from "./content";
import homeFunction from "./home";

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

const contact = document.createElement("button");
contact.setAttribute("type", "button");
contact.setAttribute("class","button");
contact.innerText = "Contact";



header.append(home,menu,contact);

export default header;