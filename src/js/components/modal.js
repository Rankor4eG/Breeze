let modalWrap = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal-overlay');
let form = document.querySelector('form');
let modalShow = document.querySelectorAll('.modal-show');

export function eventInit() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    modalShow.forEach(function (e) {
        e.addEventListener('click', showModal)
    })

    document.querySelectorAll('.modal-close').forEach(function (e) {
        e.addEventListener('click', closeModal)
    });

    document.querySelectorAll('.modal-overlay').forEach(function (e) {
        e.addEventListener('click', closeModal)
    });
}

function showModal() {
    modalOverlay.classList.remove('hide');
    modalWrap.classList.remove('hide');
    modalWrap.parentElement.classList.remove('hide');
}

function closeModal() {
    modalOverlay.classList.add('hide');
    modalWrap.classList.add('hide');
    modalWrap.parentElement.classList.add('hide');
}