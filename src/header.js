const header = document.createElement("div");
header.setAttribute("id", "header");

const home = document.createElement("button");
home.setAttribute("type", "button");
home.setAttribute("class","button");
home.innerText = "Home";

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