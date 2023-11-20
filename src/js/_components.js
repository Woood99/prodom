import getHeightBlock from './modules/getHeightBlock';
import appDweller from './components/appDweller';
import progressImplement from './components/progressImplement';
import Rellax from 'rellax';
import navDropdown from './components/navDropdown';
document.addEventListener('DOMContentLoaded', () => {
    getHeightBlock('.header', '--header-height');
    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
    })
    appDweller();
    progressImplement();
    navDropdown();

    
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
                breakpoints: [577, 769, 1326],
            });
        }
    })
});
