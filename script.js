
import { rightShape,makeShinyLine } from "./lines.js";
import {animate as animateTextColor} from "./textColorScroll.js"
    


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


rightShape.load(responsiveLineSetting());


const bottomText={
    viewObj:document.querySelector("#right-lines"),
    text_unexpected: document.querySelectorAll(".bottom-text-sec h1")[0],
    text_spaces:document.querySelectorAll(".bottom-text-sec h1")[1]
}


window.addEventListener("scroll",function(e){

const textColor=animateTextColor(bottomText.viewObj,0,0.3);
bottomText.text_unexpected.style.background=textColor;
bottomText.text_unexpected.style.backgroundClip="text";
bottomText.text_spaces.style.background=textColor;
bottomText.text_spaces.style.backgroundClip="text";

});



const scrollHeroAnimation={



    
}

const dene1=document.querySelector(".hor-scroll-content");
dene1.scrollLeft+=0;




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



