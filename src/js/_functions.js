// ========================================================================================

import burgerMenu from './functions/burger';
import tabs from "./functions/tabs";

import spollers from "./functions/spollers";
import "./functions/dynamic-adapt";
import './functions/fix-fullheight';
import "./functions/sliders";
burgerMenu();
tabs();
spollers();

// ========================================================================================

import Rellax from 'rellax';;
const rellaxTargetsTitlte = document.querySelectorAll('.hero-primary__title');
const rellaxTargetsText = document.querySelectorAll('.hero-primary__text._text-rellax');
rellaxTargetsTitlte.forEach(target => {
    if (!target.classList.contains('_no-rellax')) {
        const heroRellax = new Rellax(target);
    }
})
rellaxTargetsText.forEach(target => {
    if (!target.classList.contains('_no-rellax')) {
        const heroRellax = new Rellax(target, {
            breakpoints: [577, 769, 1201],
        });
    }
})
if (rellaxTargetsText.length) {

    function setTopValue(topValue, target, nameSection) {
        const style = window.getComputedStyle(target);
        const transformValue = new WebKitCSSMatrix(style.transform).m42;
        if (window.innerWidth >= 1400) {
            if (transformValue <= 25 && transformValue >= -30) {
                localStorage.setItem(nameSection, topValue - transformValue + 5);
            }
        }
        if (window.innerWidth < 1400) {
            if (transformValue <= 30 && transformValue >= -6) {
                localStorage.setItem(nameSection, topValue - transformValue + 7);
            }
        }
        if (window.innerWidth <= 1200) {
            localStorage.setItem(nameSection, 0);
        }
        target.style.top = `${localStorage.getItem(nameSection)}px`
    }

    rellaxTargetsText.forEach(target => {
        if (!target.classList.contains('_no-rellax')) {
            if (window.innerWidth > 1200) {
                target.style.top = `${localStorage.getItem(target.dataset.topValueName)}px`;
                window.addEventListener('scroll', () => {
                    setTopValue(-25, target, target.dataset.topValueName);
                });
            }
        }
    })


}



// ========================================================================================

GreenAudioPlayer.init({
    selector: '.custom-audio__wrapper',
});
