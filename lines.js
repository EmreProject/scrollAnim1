import {animationController} from "./animationTemp.js";


const rightShape={

    load(height){

        this.canvasContainer=document.querySelector(".nonstatic");
        this.canvas=document.querySelector(".nonstatic > canvas");
        this.resetCanvasSize(height);
    },
    animController:new animationController(),
  shinyPart:{

    pointStart:[],
    pointEnd:{x:0,y:0}

  },
    drawLines(number){

   const ctx = this.canvas.getContext("2d");
   ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
   ctx.save();

   ctx.lineWidth = 2;
   ctx.strokeStyle="rgba(45, 0, 247, 0.8)";

   

   ctx.beginPath();
   const bottomMiddlePoint={x:this.canvas.width/2, y:this.canvas.height};
   const space_x=this.canvas.width/(number-1);
   this.shinyPart.pointStart=[];
   this.shinyPart.pointEnd.x=bottomMiddlePoint.x;
   this.shinyPart.pointEnd.y=bottomMiddlePoint.y;
   for(let i=0;i<number;i++){

       ctx.moveTo(i*space_x,0);
       this.shinyPart.pointStart.push({x:i*space_x,y:0});
       ctx.lineTo(bottomMiddlePoint.x, bottomMiddlePoint.y);
   }

   ctx.stroke();
   ctx.restore();

    },
    resetCanvasSize(height){

       this.canvas.width=this.canvasContainer.offsetWidth;
       this.canvas.height=height ;
       

    }

}

let currentShinny=undefined;



function makeShinyLine(number){


const easeOutSine=function(x) {
    return Math.sin((x * Math.PI) / 2);
  }

  const draw=function(progress,isFirst){

    if(isFirst){
        rightShape.drawLines(number)
    }
    const pointEnd=rightShape.shinyPart.pointEnd;
    const getPoint=function(prog,diffx,diffy){

        return {x:diffx*prog,y:diffy*prog};

    };
    const ctx = rightShape.canvas.getContext("2d");
rightShape.shinyPart.pointStart.forEach(pointStart=>{

const diffx=pointEnd.x-pointStart.x;
const diffy=pointEnd.y-pointStart.y;

const drawSt=getPoint(progress,diffx,diffy);
drawSt.x+=pointStart.x;
drawSt.y+=pointStart.y;

let endProg=progress+0.13;
if(endProg>=1){endProg=1;}
const drawEnd=getPoint(endProg,diffx,diffy);
drawEnd.x+=pointStart.x;
drawEnd.y+=pointStart.y;



ctx.save();

ctx.lineWidth = 2;
ctx.strokeStyle="rgba(255,255,255, 1)";



ctx.beginPath();

    ctx.moveTo(drawSt.x,drawSt.y);
    ctx.lineTo(drawEnd.x,drawEnd.y);


    
        



ctx.stroke();
ctx.restore();

});

  }
  

  cancelAnimationFrame(rightShape.animController.latest);
  rightShape.animController.setSettings(easeOutSine,draw,3000);
rightShape.animController.animateStart();

}

export {rightShape,makeShinyLine}