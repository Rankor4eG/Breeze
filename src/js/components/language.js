let btnRu = document.querySelector('.btn-ru');
let btnEn = document.querySelector('.btn-en');
let btnDE = document.querySelector('.btn-de');
let needTranslateElement = [];
let currentLanguage = 'ru';

let translate = {
    ru: {
        name: 'Валера',

    },
    en: {
        name: 'Valera',
        title: 'Home tipografy valera'
    },
    de: {
        name: 'DeutchV',
        title: 'Deutch Valera typo'
    }
}

export function languageInit() {
    btnRu.addEventListener('click', function () { return buttonLangSwitcher('ru', btnRu); });
    btnEn.addEventListener('click', function () { return buttonLangSwitcher('en', btnEn); });
    btnDE.addEventListener('click', function () { return buttonLangSwitcher('de', btnDE); });
    document.querySelectorAll('div').forEach(x => {
        if (x.dataset.translate) {
            needTranslateElement.push(x);
        }
    })
    languageSwitcher();
}

function languageSwitcher() {
    needTranslateElement.forEach(x => {
        if (translate[currentLanguage][x.dataset.translate]) {
            x.innerHTML = translate[currentLanguage][x.dataset.translate];
        } else {
            x.innerHTML = 'нету перевода';
        }
    })

}

function buttonLangSwitcher(lang, btnHref) {
    if (document.querySelector('.btn-active')) {
        document.querySelector('.btn-active').classList.remove('btn-active');
    }
    btnHref.classList.add('btn-active');
    currentLanguage = lang;
    languageSwitcher();
}