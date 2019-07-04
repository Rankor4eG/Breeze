let btnToggle = document.querySelector('.nav-toggle');
let navBar = document.querySelector('.nav-bar__items');
let sliderWrap = document.querySelector('.slider-wrap');

export function navInit(){
    btnToggle.addEventListener('click', function(){ 
        if(navBar.style.display == 'none'){
          navBar.style.display = 'flex';
          sliderWrap.style.marginTop = '300px';
        } else{
          navBar.style.display = 'none';
          sliderWrap.style.marginTop = 0;
        }
      })
}

