import * as modal from "./components/modal";
import * as language from "./components/language";
import * as carousel from "./components/carousel";
import * as nav from "./components/nav";

function init() {
  modal.eventInit();
  language.languageInit();
  carousel.sliderInit();
  nav.navInit();
}

init();




