// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { burgerFunction } from "./burger.js";
import { accordeon } from "./accordeon.js";
burgerFunction();
accordeon();

// Swiper
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Now you can use Swiper
const swiper = new Swiper(".swiper", {
  // Install modules
  modules: [Navigation, Pagination, Autoplay],
  speed: 500,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
  // ...
});
