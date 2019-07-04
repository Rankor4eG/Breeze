let form = document.querySelector('form');

let modalWrapSign = document.querySelector('.modal-sign');
let modalWrapLog = document.querySelector('.modal-log');
let modalOverlay = document.querySelector('.modal-overlay');
let modalShowSign = document.querySelectorAll('.modal-show__sign');
let modalShowLog = document.querySelectorAll('.modal-show__log');

export function eventInit() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    modalShowSign.forEach(function (e) {
        e.addEventListener('click', function () { return showModal(modalWrapSign); })
    });

    modalShowLog.forEach(function (e) {
        e.addEventListener('click', function () { return showModal(modalWrapLog); })
    });
 
    document.querySelectorAll('.modal-close').forEach(function (e) {
        e.addEventListener('click', closeModal)
    });

    document.querySelectorAll('.modal-overlay').forEach(function (e) {
        e.addEventListener('click', closeModal)
    });

    document.addEventListener('keydown', event => {
        if(event.keyCode == 27){
            return closeModal();
        }
       
    })
}

function showModal(name){
    return name.classList.remove('hide'),
    modalOverlay.classList.remove('hide');
    
}

function closeModal() {
    modalOverlay.classList.add('hide');
    modalWrapSign.classList.add('hide');
    modalWrapLog.classList.add('hide');
    document.addEventListener('keydown', null)
}
