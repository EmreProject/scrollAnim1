
import { rightShape,makeShinyLine } from "./lines.js";
    
rightShape.load();

window.addEventListener("load",()=>{
    rightShape.resetCanvasSize(document.querySelector(".bottom-text-sec"));
    rightShape.drawLines(15);
})

window.addEventListener("resize",()=>{
    rightShape.resetCanvasSize(document.querySelector(".bottom-text-sec"));
    rightShape.drawLines(15);
})



const scrollHeroAnimation={



    
}