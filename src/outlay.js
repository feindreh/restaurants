import gridMain from "./gridMain";

const header = document.createElement("div");
header.setAttribute("id", "header");

const content = document.createElement("div");
content.setAttribute("id", "content");

const footer = document.createElement("div");
footer.setAttribute("id", "footer");

gridMain.append(header, content, footer);

const outlay = gridMain;

export default outlay;
