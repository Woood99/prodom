// ========================================================================================

import burgerMenu from './functions/burger';
import tabs from "./functions/tabs";

import spollers from "./functions/spollers";
import "./functions/dynamic-adapt";
import './functions/fix-fullheight';

burgerMenu();
tabs();
spollers();

// ========================================================================================

import Rellax from 'rellax';
const heroRellax = new Rellax('.hero-primary__title');


// ========================================================================================

// import "./functions/sliders";



GreenAudioPlayer.init({
    selector: '.custom-audio__wrapper',
});
