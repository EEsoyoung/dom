import elementMaker from "./elementmaker.js";
import moreMaker from "./maker2.js";
const root = document.getElementById('root');
console.log(root)


const rootArea = elementMaker("div", moreMaker());

root.innerHTML = rootArea;
console.log()