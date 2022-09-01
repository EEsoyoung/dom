import elementMaker from "./elementmaker.js";

export default function moreMaker (){
  let element = [];
  for(let i = 0; i < 5; i++){
    let mkInner = elementMaker("div",`item-${i+1}`);
    element.push(mkInner);
    // console.log(element)
  }
  return element.join('');
};