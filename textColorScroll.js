
function animate(viewObject,visibleBeginPerc,visibleEndPerc){

    let view=viewObject.getBoundingClientRect();
    
    let currentViewPerc=-1*view.top/view.height;
    let timeFraction=(currentViewPerc-visibleBeginPerc)/(visibleEndPerc-visibleBeginPerc);
    if (currentViewPerc > visibleEndPerc) timeFraction = 1;
    else if(currentViewPerc<visibleBeginPerc) timeFraction=0;

    return `linear-gradient(to right,var(--color-7) ${timeFraction*100}%,white ${timeFraction*100}%)`;
}

export {animate}