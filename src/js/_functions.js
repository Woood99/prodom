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
const heroRellax = new Rellax('.hero-primary__title');

// ========================================================================================

GreenAudioPlayer.init({
    selector: '.custom-audio__wrapper',
});
