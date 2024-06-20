
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


function horizontalAnimation(container,startScrollPixel){

this.container=container;
this.lazyImageList=[];
this.visibleRatio=undefined;//ex. 0.2
this.startScrollPx=startScrollPixel;



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

    const resizeBind=this.setExtraSpace.bind(this,boslukDiv,extra);
    window.addEventListener("resize",()=>{
        window.addEventListener("load",()=> resizeBind());
        location.reload();
      
       
    });
}

horizontalAnimation.prototype.Start=function(){

this.startLazyLoadChecker();
const horizontalMove=function(){

    this.container.scrollLeft=window.scrollY-this.startScrollPx;

}

throttleScrollAnimation(horizontalMove.bind(this));

}


export {horizontalAnimation}