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
const rellaxTargets = document.querySelectorAll('.hero-primary__title');
rellaxTargets.forEach(target => {
    if (!target.classList.contains('_no-rellax')) {
        const heroRellax = new Rellax(target);
    }
}) 

// ========================================================================================

GreenAudioPlayer.init({
    selector: '.custom-audio__wrapper',
});
