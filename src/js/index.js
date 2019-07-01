// // // // Main js file
// // // // see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files


// // // `````````````````````` Slider ``````````````````````

// var multiItemSlider = (function () {


//     return function (selector) {
//       var
//         mainElement = document.querySelector(selector), // основный элемент блока
//         sliderWrapper = mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//         sliderItems = mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//         wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
//         itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента    
//         positionLeftItem = 0, // позиция левого активного элемента
//         transform = 0, // значение транфсофрмации .slider_wrapper
//         step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
//         items = [], // массив элементов
//         states = [
//           {minWidth: 0, count: 1 },
//           {minWidth: 980, count: 2 }
//         ];


//       // наполнение массива items
//       sliderItems.forEach(function (item, index) {
//         items.push({ item: item, position: index, transform: 0 });
//       });


   

//       var position = {
//         getItemMin: function () {
//           var indexItem = 0;
//           items.forEach(function (item, index) {
//             if (item.position < items[indexItem].position) {
//               indexItem = index;
//             }
//           });
//           return indexItem;
//         },
//         getItemMax: function () {
//           var indexItem = 0;
//           items.forEach(function (item, index) {
//             if (item.position > items[indexItem].position) {
//               indexItem = index;
//             }
//           });
//           return indexItem;
//         },
//         getMin: function () {
//           return items[position.getItemMin()].position;
//         },
//         getMax: function () {
//           return items[position.getItemMax()].position;
//         }
//       }

//       var transformItem = function (direction) {
//         var nextItem;
        
//         if (direction === 'right') {
//           positionLeftItem++;
//           if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
//             nextItem = position.getItemMin();
//             items[nextItem].position = position.getMax() + 1;
//             items[nextItem].transform += items.length * 100;
//             items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
//           }
//           transform -= step;
//         }
//         if (direction === 'left') {
//           positionLeftItem--;
//           if (positionLeftItem < position.getMin()) {
//             nextItem = position.getItemMax();
//             items[nextItem].position = position.getMin() - 1;
//             items[nextItem].transform -= items.length * 100;
//             items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
//           }
//           transform += step;
//         }
//         sliderWrapper.style.transform = 'translateX(' + transform + '%)';
//       }


//       // обработчик события click для кнопок "назад" и "вперед"
//       var controlClick = function (e) {
//         e.preventDefault();
//         if (e.target.classList.contains('slider__control')) {
//           var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
//           transformItem(direction);
//         }
//       };      

//       var setUpListeners = function () {
//         mainElement.addEventListener('click', controlClick);
//         window.addEventListener('resize', function () {
//           var
//             index = 0,
//             width = parseFloat(document.body.clientWidth);
//           states.forEach(function (index) {
//             if (width >= states[index].minWidth)
//               index = index;
//           });
          
//         });
//       }

//       // инициализация
//       setUpListeners();

//       return {
//         right: function () { // метод right
//           transformItem('right');
//         },
//         left: function () { // метод left
//           transformItem('left');
//         },
//         }

//     }
//   }());

//   var slider = multiItemSlider('.slider');

// <div id="carousel">
//     <div class="container">
//         <div class="slider">
//             <div class="slider__wrapper">
//               <div class="slider__item">
//                 <div style="height: 750px; background: orange;">
//                   <!-- <img src="assets/img/1.png" alt=""> -->
//                   <span class="text">
//                     <h3>Lorem ipsum dolor sit.</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                       Illo atque est, in neque dolor distinctio saepe eos 
//                       voluptates obcaecati? Nostrum inventore beatae exercitationem 
//                       sequi quidem consectetur rerum sapiente neque.</p>
//                   </span>
//                 </div>
//               </div>
//               <div class="slider__item">
//                 <div style="height: 750px; background: green;">2</div>
//               </div>
//               <div class="slider__item">
//                 <!-- <div style="height: 750px; background: violet;">3</div> -->
//               </div>
//               <div class="slider__item">
//                   <div style="height: 750px; background: black;">4</div>
//                 </div>
//               <div class="slider__item">
//                 <div style="height: 750px; background: coral;">5</div>
//               </div>
//             </div>
//             <a class="slider__control slider__control_left" href="#" role="button"></a>
//             <a class="slider__control slider__control_right" href="#" role="button"></a>
//           </div>
//     </div>
//     </div>



let btnRu = document.querySelector('.btn-ru');
let btnEn = document.querySelector('.btn-en');

let modalWrap = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal-overlay');


function hiddenRu(){
  let ru = document.querySelectorAll('.ru');
  for(let j = 0; j < ru.length; j++){
    ru[j].style.display = 'none';
  }
  let en = document.querySelectorAll('.en');
  for(let j = 0; j < en.length; j++){
    en[j].style.display = 'block';
  } 
};

function hiddenEn(){
  let ru = document.querySelectorAll('.ru');
  for(let j = 0; j < ru.length; j++){
    ru[j].style.display = 'block';
  }
  let en = document.querySelectorAll('.en');
  for(let j = 0; j < en.length; j++){
    en[j].style.display = 'none';
  }   
}

btnRu.addEventListener('click', hiddenEn);
btnEn.addEventListener('click', hiddenRu);

// ~~~~~~~~~~~~~~ Form ~~~~~~~~~~~~~~
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});  

// ~~~~~~~~~~~~~~ Form Open ~~~~~~~~~~~~~~

let modalShow = document.querySelectorAll('.modal-show');
modalShow.forEach(function(e){
  e.addEventListener('click', showModal)
})

function showModal(){
  modalOverlay.classList.remove('hide');
  modalWrap.classList.remove('hide');
  modalWrap.parentElement.classList.remove('hide');
}

// ~~~~~~~~~~~~~~ Form Close Mouse ~~~~~~~~~~~~~~

document.querySelectorAll('.modal-close').forEach(function(e){
  e.addEventListener('click', closeModal)
});

document.querySelectorAll('.modal-overlay').forEach(function(e){
  e.addEventListener('click', closeModal)
});

function closeModal(){
  modalOverlay.classList.add('hide');
  modalWrap.classList.add('hide');
  modalWrap.parentElement.classList.add('hide');  
}