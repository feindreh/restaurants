import "./style.css";
import outlay from "./outlay/outlay.js";
import homeFunction from "./functions/homeFunction";


document.querySelector("#container").append(outlay);
const content = document.querySelector("#content");
content.append(homeFunction());