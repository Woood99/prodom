// ========================================================================================
import './vendor/focus-visible'

// Плагин кастом-скролла
import SimpleBar from 'simplebar';
if (window.innerWidth >= 1024) {
    new SimpleBar(document.querySelector('.simplebar-resize'));
}

// ========================================================================================


// Анимации по скроллу
// import AOS from 'aos';
// AOS.init();
