

function animateAlways({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calculate the current animation state
      let progress = timing(timeFraction);
 
  
      draw(progress); // draw it
  
      if (timeFraction <1) {
        requestAnimationFrame(animate);
      }else{

        start=performance.now();
        requestAnimationFrame(animate);
      }
  
    });
  }


  class animationController{

   latest;
   latest2;
latest3;

   constructor(){}

setSettings(timing,draw,duration){
this.timing=timing;
this.draw=draw;
this.duration=duration
}


animateStart(){


  let start = performance.now();
  const main=this;
  
 this.latest= requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / main.duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = main.timing(timeFraction);


   main.draw(progress,true); // draw it

    if (timeFraction <1) {
      main.latest=requestAnimationFrame(animate);
    }else{

      start=performance.now();
      main.latest=requestAnimationFrame(animate);
    }

  });

  setTimeout(()=>{
    let start2=performance.now();
    main.latest2= requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start2) / main.duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = main.timing(timeFraction);


   main.draw(progress); // draw it

    if (timeFraction <1) {
      main.latest2=requestAnimationFrame(animate);
    }else{

      start2=performance.now();
      main.latest2=requestAnimationFrame(animate);
    }

  });},1000)
  
  setTimeout(()=>{
    let start3=performance.now();
    main.latest3= requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start3) / main.duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = main.timing(timeFraction);


   main.draw(progress); // draw it

    if (timeFraction <1) {
      main.latest3=requestAnimationFrame(animate);
    }else{

      start3=performance.now();
      main.latest3=requestAnimationFrame(animate);
    }

  });},2000)
  


}


  }


  export {animateAlways,animationController}