
import { rightShape,makeShinyLine } from "./lines.js";
import {animate as animateTextColor} from "./textColorScroll.js"
import { horizontalAnimation } from "./horizontalScroll.js";
    



  


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



const dene1=document.querySelector(".hor-scroll-content");
dene1.scrollLeft+=0;



//HORIZONTAL SCROLL ANİM

const horizontalContainer=document.querySelector(".hor-scroll-content");
const offsetDiv=document.querySelector(".calculateOffset");
const horizontal=new horizontalAnimation(horizontalContainer);
horizontal.offsetDiv=offsetDiv;
horizontal.margin=250;
horizontal.topVh=13;
horizontal.calculateStartPixel();
horizontal.lazyImageList=[...document.querySelectorAll(".hor-scroll-content img")];
horizontal.visibleRatio=0.2;
horizontal.setExtraSpace(document.querySelector(".bosluk-for-hor-scroll"),100);
horizontal.Start();


let {lineNumber,height}=responsiveLineSetting();


window.addEventListener("load",()=>{

   const get1=responsiveLineSetting();
   lineNumber=get1.lineNumber;
   height=get1.height;
    rightShape.resetCanvasSize(height);
    makeShinyLine(lineNumber);
})

window.addEventListener("resize",()=>{
    const get1=responsiveLineSetting();
    lineNumber=get1.lineNumber;
    height=get1.height;
    rightShape.resetCanvasSize(height);
    makeShinyLine(lineNumber);

   
   
})

window.addEventListener("scroll",function(){

    const textHero=document.querySelector(".bottom-text-sec");

        if(horizontalContainer.getBoundingClientRect().top < textHero.getBoundingClientRect().top){
            textHero.style.visibility="hidden";
        }else{
            textHero.style.visibility="visible";
        }
});

