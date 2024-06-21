
import {animateAlways} from "./animationTemp.js"

function throttleScrollAnimation(animation){

   
    let isThrottle=true;

    window.addEventListener("scroll",function(){

        if(isThrottle){
            isThrottle=false;
            requestAnimationFrame(function(){
            animation();
            isThrottle=true;
            });
    
        }

    });


}




function horizontalAnimation(container){

this.container=container;
this.lazyImageList=[];
this.visibleRatio=undefined;//ex. 0.2
this.startScrollPx;
this.offsetDiv;
this.topVh;
this.margin;



}

horizontalAnimation.prototype.calculateStartPixel=function(){


    this.startScrollPx=this.offsetDiv.offsetTop+this.margin-(window.innerHeight*this.topVh/100);
}

horizontalAnimation.prototype.startLazyLoadChecker=function(){

    const checker=function(){

            const width=window.innerWidth;
            this.lazyImageList.forEach(element => {
            const current=(width-element.getBoundingClientRect().left)/width;

            if(current>this.visibleRatio){

                element.src=`${element.getAttribute("data-src")}`;
                element.addEventListener("load",function(){
                    element.style.filter="blur(0)";
                });
            }

        });

    }

    throttleScrollAnimation(checker.bind(this));

}
horizontalAnimation.prototype.setExtraSpace=function(boslukDiv,extra){

    const extraWidth=this.container.scrollWidth - window.innerWidth;
    boslukDiv.style.height=`${extraWidth+ extra}px`;

   let throttleResize=undefined;
   const resizeBosluk=function(){

    
    this.calculateStartPixel();
    const extraWidth=this.container.scrollWidth - window.innerWidth;
    boslukDiv.style.height=`${extraWidth+ extra}px`;
    
   };
   const bindResizeBosluk=resizeBosluk.bind(this);
    window.addEventListener("resize",()=>{
       
        if(!throttleResize){
            throttleResize= setTimeout(bindResizeBosluk,100);
        }else{

            clearTimeout(throttleResize);
            throttleResize= setTimeout(bindResizeBosluk,100);
        }

    });
}

horizontalAnimation.prototype.BorderAnimation=function(){

   const easeInOutCubic= function(x){
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
        }

    const draw=function(progress){

        this.lazyImageList.forEach(img=>{

            const newDegree=progress*360;
            img.style.borderImage=`linear-gradient(${newDegree}deg,var(--color-7), black 35% 65%,var(--color-3)) 1`;

        });
    };

    animateAlways({timing:easeInOutCubic,draw:draw.bind(this),duration:7000});

}


horizontalAnimation.prototype.Start=function(){

this.startLazyLoadChecker();
const horizontalMove=function(){

    this.container.scrollLeft=window.scrollY-this.startScrollPx;

}
this.BorderAnimation();
throttleScrollAnimation(horizontalMove.bind(this));

}



export {horizontalAnimation}