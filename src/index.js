import api from "./api"; // default
import "./styles/styles.sass"
import "./styles/styles2.sass"
import * as components from "./components"; //
import messi from "./img/messi.jpg"
 
console.log("Hello Webpack");

let data = api.httpGet();
components.createTitle(data);
components.createP(data);
components.createImg(messi)