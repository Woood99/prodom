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

    function transform(target, topPropertyValue, topGapTarget, rellaxName) {
        const title = target.previousElementSibling;
        const targetPosition = {
            top: window.pageYOffset + title.getBoundingClientRect().top,
            bottom: window.pageYOffset + title.getBoundingClientRect().bottom
        }
        const windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
        if (targetPosition.top < windowPosition.bottom - (window.innerHeight / 1.65) && targetPosition.bottom > windowPosition.top - target.clientHeight - 50) {
            target.classList.remove('_translate-none');
            const currentTopGapTarget = windowPosition.top + target.getBoundingClientRect().top;
            const distinction = currentTopGapTarget - topGapTarget;
            if (localStorage.getItem(rellaxName)) target.style.top = localStorage.getItem(rellaxName);
            console.log(distinction);
            if (distinction !== NaN && (distinction < 0 || distinction >= 0) && distinction > -35 && distinction < 35) {
                localStorage.setItem(rellaxName, `${Math.round(topPropertyValue - distinction + 1)}px`)
                target.style.top = localStorage.getItem(rellaxName);
            }
        } else {
            target.classList.add('_translate-none');
            target.style.removeProperty('top');
            return window.pageYOffset + target.getBoundingClientRect().top;
        }
    }


    rellaxTargetsText.forEach(target => {
        if (!target.classList.contains('_no-rellax')) {
            if (window.innerWidth > 1200) {
                const topPropertyValue = Number(window.getComputedStyle(target).getPropertyValue('top').replace('px', ''));
                let topGapTarget;
                topGapTarget = transform(target, topPropertyValue, topGapTarget, target.dataset.rellaxName);
                window.addEventListener('scroll', () => {
                    topGapTarget = transform(target, topPropertyValue, topGapTarget, target.dataset.rellaxName);
                });
            }
        }
    })


}



// ========================================================================================

GreenAudioPlayer.init({
    selector: '.custom-audio__wrapper',
});
