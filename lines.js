
const rightShape={

    load(height){

        this.canvasContainer=document.querySelector(".nonstatic");
        this.canvas=document.querySelector(".nonstatic > canvas");
        this.resetCanvasSize(height);
    },
  
    drawLines(number){

   const ctx = this.canvas.getContext("2d");
   ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
   ctx.save();

   ctx.lineWidth = 2;
   ctx.strokeStyle="rgba(45, 0, 247, 0.8";

   

   ctx.beginPath();
   const bottomMiddlePoint={x:this.canvas.width/2, y:this.canvas.height};
   const space_x=this.canvas.width/(number-1);
   for(let i=0;i<number;i++){

       ctx.moveTo(i*space_x,0);
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


function makeShinyLine(){



}

export {rightShape,makeShinyLine}