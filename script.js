
import { rightShape,makeShinyLine } from "./lines.js";
    
rightShape.load();

function responsiveLineSetting(){

    const dön={
        lineNumber:undefined,
        height:undefined
    };
    const width=window.innerWidth;
    if(width<=500){
    dön.lineNumber= 8;
    }else if(width<=1000){
        dön.lineNumber= 10;
    }else{
        dön.lineNumber= 15;
    }

    dön.height=window.innerHeight/6*4;


    return dön;
}



const bottomText={

    text_unexpected: document.querySelectorAll(".bottom-text-sec h1")[0],
    text_spaces:document.querySelectorAll(".bottom-text-sec h1")[1]
}
console.log(bottomText);


const scrollHeroAnimation={



    
}






window.addEventListener("load",()=>{

    const{lineNumber,height}=responsiveLineSetting();
    rightShape.resetCanvasSize(height);
    rightShape.drawLines(lineNumber);//number of lines to draw in right red lines
})

window.addEventListener("resize",()=>{
    const{lineNumber,height}=responsiveLineSetting();
    rightShape.resetCanvasSize(height);
    rightShape.drawLines(lineNumber);//number of lines to draw in right red lines
})



