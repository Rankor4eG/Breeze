// // // Main js file
// // // see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files


// // `````````````````````` Slider ``````````````````````

let slide = document.querySelectorAll('.slider .slider-item');
let btnLeft =  document.querySelector('.slider-btn__left');
let btnRight =  document.querySelector('.slider-btn__right');
let current = 0;

export function sliderInit(){
    btnLeft.addEventListener('click', sliderLeft);
    btnRight.addEventListener('click', sliderRight);    
}

function slider(){
    for(let i = 0; i < slide.length; i++){
        slide[i].classList.add('opacity0');
    }
    slide[current].classList.remove('opacity0');
}

function sliderRight(){
    for(let i = 0; i < slide.length; i++){
        slide[i].classList.add('opacity0');
    }
    slide[current].classList.remove('opacity0');
    if(current+1 == slide.length){
        current = 0;
    } else{
        current++;
    }
    slider()
}

function sliderLeft(){       
    if(current + 1 == slide.length){
        current = 0;
    } else{
        current++;
    }
    slider()
}

