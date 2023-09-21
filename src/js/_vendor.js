// ========================================================================================
import './vendor/focus-visible'
import SimpleBar from 'simplebar';
const Marquee3k = require('marquee3000');

if (window.innerWidth >= 1024 && document.querySelector('.simplebar-resize')) {
    new SimpleBar(document.querySelector('.simplebar-resize'));
}

Marquee3k.init();