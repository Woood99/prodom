import getHeightBlock from './modules/getHeightBlock';
import appDweller from './components/appDweller';
import progressImplement from './components/progressImplement';
import Rellax from 'rellax';
import navDropdown from './components/navDropdown';
import animationScroll from './components/animationScroll'
document.addEventListener('DOMContentLoaded', () => {
    getHeightBlock('.header', '--header-height');
    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
    })
    appDweller();
    progressImplement();
    navDropdown();
    animationScroll();


    const rellaxTargetsTitlte = document.querySelectorAll('.hero-primary__title');
    const rellaxTargetsText = document.querySelectorAll('.hero-primary__text._text-rellax');
    rellaxTargetsTitlte.forEach(target => {
        if (!target.classList.contains('_no-rellax')) {
            if (!target.classList.contains('_init')) {
                target.classList.add('_init');
                const heroRellax = new Rellax(target);
            }
        }
    })
    rellaxTargetsText.forEach(target => {
        if (!target.classList.contains('_no-rellax')) {
            if (!target.classList.contains('_init')) {
                target.classList.add('_init');
                const heroRellax = new Rellax(target, {
                    breakpoints: [577, 769, 1326],
                });
            }
        }
    })


    const aboutFuncAds = document.querySelector('.about-func-ads-two');
    // if (aboutFuncAds) {
    //     const target = aboutFuncAds.querySelector('.about-func-ads-two__inner');
    //     window.addEventListener('scroll', () => {
    //         if (window.pageYOffset >= target.offsetTop && window.pageYOffset < target.offsetTop + target.clientHeight) {
    //           aboutFuncAds.classList.add('_current-screen');
    //         } else {
    //             aboutFuncAds.classList.remove('_current-screen');
    //         }
    //     })
    // }
});
