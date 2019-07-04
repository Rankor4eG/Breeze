
let btnEn = document.querySelector('.btn-en');
let btnFr = document.querySelector('.btn-fr');
let btnGm = document.querySelector('.btn-gm');
let needTranslateElement = [];
let currentLanguage = 'en';

let translate = {
    en: {
        phone: 'Call Us +777 (100) 1234',
        headerWelcome: 'Welcome visitor you can',
        headerLogin: 'login',
        headerText: 'or',
        headerSignUp: 'create an account',
        clientAccount: 'My Account',
        clientWishlist: 'My Wishlist',
        clientLogin: 'Log In',
        clientSignUp: 'Sign Up',
        clientDeposit: 'Cart $0.00',
        navHome: 'home',
        navSolids: 'solids',
        navLiquids: 'liquids',
        navSpray: 'Spray',
        navElectric: 'electric',
        navCars: 'for cars',
        slider1Headline: 'Hello world, guys',
        slider2Headline: "Let's go to the sea",
        slider3Headline: 'Buy a peach',
        slider4Headline: 'Breeze Noticeables',
        slider1TextFirst: 'Good luck at work today',
        slider1TextSecond: 'Good mood after work',
        slider1TextThird: 'time to go home',
        slider2TextFirst: 'The sea is very hot',
        slider2TextSecond: 'Sand is very clean',
        slider2TextThird: 'goodbye',
        slider3TextFirst: 'Delicious and sweet peach',
        slider3TextSecond: 'Try this',
        slider3TextThird: 'Come again',
        slider4TextFirst: 'The new series of natural air fresheners',
        slider4TextSecond: 'Febreze Noticeables Meadows & Rain',
        slider4TextThird: 'Air Freshener Refill.',
        banner1Headline: 'Best price',
        banner2Headline: 'New smells',
        banner3Headline: 'Only natural',
        banner1Text: 'this week',
        banner2Text: 'in the next series',
        banner3Text: 'air fresheners',
    },  
    gm: {
        phone: 'Rufen Sie uns an +777 (100) 1234',
        welcome: 'Willkommen Gast, den Sie können',
        headerWelcome: 'Welcome visitor you can',
        headerLogin: 'login',
        headerText: 'oder',
        headerSignUp: 'Konto erstellen',
        clientAccount: 'Mein Konto"',
        clientWishlist: 'Meine Wunschliste',
        clientLogin: 'Anmelden',
        clientSignUp: 'Anmelden',
        clientDeposit: 'Cart $0.00',
        navHome: 'Zuhause',
        navSolids: 'Solids',
        navLiquids: 'Flüssigkeiten',
        navSpray: 'Spray',
        navElectric: 'elektrisch',
        navCars: 'für Autos',
        slider1Headline: 'Hallo Welt, Leute',
        slider2Headline: "Lass und Meer gehe",
        slider3Headline: 'Einen Pirsch kaufen',
        slider4Headline: 'Breeze Noticeables',
        slider1TextFirst: 'Viel Glück bei der Arbeit heute',
        slider1TextSecond: 'Gute Laune nach der Arbeit',
        slider1TextThird: 'Zeit nach Hause zu gehen',
        slider2TextFirst: 'Das Meer ist sehr heiß',
        slider2TextSecond: 'Sand ist sehr sauber',
        slider2TextThird: 'Auf Wiedersehen',
        slider3TextFirst: 'Köstlicher und süßer Pfirsich',
        slider3TextSecond: 'Probier das aus',
        slider3TextThird: 'Komm wieder',
        slider4TextFirst: 'Die neue Serie natürlicher Lufterfrischer',
        slider4TextSecond: 'Febreze Noticeables Meadows & Rain',
        slider4TextThird: 'Lufterfrischer nachfüllen.',        
        banner1Headline: 'Bester Preis',
        banner2Headline: 'Neue Gerüche',
        banner3Headline: 'Nur natürlich',
        banner1Text: 'diese Woche',
        banner2Text: 'In der nächsten Serie',
        banner3Text: 'Lufterfrischer',
    },
    fr: {
        phone: 'Call Us +777 (100) 1234',
        headerWelcome: 'Bienvenue visiteur, vous pouvez',
        headerLogin: 'login',
        headerText: 'ou',
        headerSignUp: 'créer un compte',
        clientAccount: 'Mon compte',
        clientWishlist: 'Ma liste de souhaits',
        clientLogin: 'Connexion',
        clientSignUp: 'Inscrivez-vous',
        clientDeposit: 'Panier $ 0,00 ',
        navHome: 'maison',
        navSolids: 'solides',
        navLiquids: 'liquides',
        navSpray: 'Spray',
        navElectric: 'électrique',
        navCars: 'pour les voitures',
        slider1Headline: 'Hello world, guys',
        slider2Headline: "Let's go to the sea",
        slider3Headline: 'Buy a peach',
        slider4Headline: 'Breeze Noticeables',
        slider1TextFirst: 'Good luck at work today',
        slider1TextSecond: 'Good mood after work',
        slider1TextThird: 'time to go home',
        slider2TextFirst: 'The sea is very hot',
        slider2TextSecond: 'Sand is very clean',
        slider2TextThird: 'goodbye',
        slider3TextFirst: 'Delicious and sweet peach',
        slider3TextSecond: 'Try this',
        slider3TextThird: 'Come again',
        slider4TextFirst: 'The new series of natural air fresheners',
        slider4TextSecond: 'Febreze Noticeables Meadows & Rain',
        slider4TextThird: 'Air Freshener Refill.',       
        banner1Headline: 'Meilleur prix',
        banner2Headline: 'Nouvelles odeurs',
        banner3Headline: 'Seulement naturel',
        banner1Text: 'cette semaine',
        banner2Text: 'dans la prochaine série',
        banner3Text: "assainisseurs d'air",
    }
}

export function languageInit() {
    btnEn.addEventListener('click', function () { return buttonLangSwitcher('en', btnEn); });
    btnFr.addEventListener('click', function () { return buttonLangSwitcher('fr', btnFr); });
    btnGm.addEventListener('click', function () { return buttonLangSwitcher('gm', btnGm); });
    document.querySelectorAll('div, p, a, span, li').forEach(x => {
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
