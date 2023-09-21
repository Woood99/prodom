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

import Rellax from 'rellax';
const rellaxTargetsTitlte = document.querySelectorAll('.hero-primary__title');
const rellaxTargetsText = document.querySelectorAll('.hero-primary__text._text-rellax');
rellaxTargetsTitlte.forEach(target => {
    if (!target.classList.contains('_no-rellax')) {
        const heroRellax = new Rellax(target);
    }
})
rellaxTargetsText.forEach(target => {
    if (!target.classList.contains('_no-rellax')) {
        const heroRellax = new Rellax(target);
    }
})

// ========================================================================================

GreenAudioPlayer.init({
    selector: '.custom-audio__wrapper',
});
