import { makeCss } from "./functions";

const rules = {
	display: "grid",
	"grid-template": "200px 500px 500px 200px / 1fr",
};

const gridMain = document.createElement("div");
gridMain.setAttribute("id", "gridMain");
gridMain.style.cssText = makeCss(rules);

export default gridMain;
