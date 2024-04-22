import getHeightBlock from './modules/getHeightBlock';
import appDweller from './components/appDweller';
import progressImplement from './components/progressImplement';
import Rellax from 'rellax';
import navDropdown from './components/navDropdown';
import animationScroll from './components/animationScroll'
import {
    validateNewsletter
} from './modules/validate';
import Tooltip from './functions/tooltip'
import scrollDrag from './modules/scrollDrag';
document.addEventListener('DOMContentLoaded', () => {
    getHeightBlock('.header', '--header-height');
    replaceText();
    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
        replaceText();
    })
    scrollDrag('.form-contacts-two .radio-secondary .row', 1000, 1326);
    appDweller();
    progressImplement();
    navDropdown();
    animationScroll();
    validateNewsletter();
    remoteCenterAdsTabs();
    heroAboutCompany();
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

    function remoteCenterAdsTabs() {
        const container = document.querySelector('.remote-center-ads-two');
        if (!container) return;
        let value = true;
        container.addEventListener('click', (e) => {
            if (window.innerWidth <= 1326) {
                const target = e.target;
                const tabBtn = target.closest('.remote-center-ads-two__subtitle');
                if (tabBtn) {
                    const btns = container.querySelectorAll('.remote-center-ads-two__subtitle');
                    const currentIndexBtn = Array.from(btns).indexOf(tabBtn);
                    const contents = container.querySelectorAll('.remote-center-ads-two__tab-content');
                    btns.forEach(btn => btn.classList.remove('_active'));
                    contents.forEach(content => content.setAttribute('hidden', ''));

                    tabBtn.classList.add('_active');
                    contents[currentIndexBtn].removeAttribute('hidden');
                }
            }
        })

        update();
        window.addEventListener('resize', () => {
            update();
        })

        function update() {
            const btns = container.querySelectorAll('.remote-center-ads-two__subtitle');
            const contents = container.querySelectorAll('.remote-center-ads-two__tab-content');
            if (window.innerWidth <= 1326 && value) {
                btns[0].classList.add('_active');
                btns[1].classList.remove('_active');

                contents[0].removeAttribute('hidden');
                contents[1].setAttribute('hidden', '');
                value = false;
            }
            if (window.innerWidth > 1326) {
                btns[0].classList.remove('_active');
                btns[1].classList.remove('_active');

                contents[0].removeAttribute('hidden');
                contents[1].removeAttribute('hidden');

                value = true;
            }
        }

    }

    function replaceText() {
        const elements = document.querySelectorAll('[data-replace-text]');
        if (elements.length === 0) return;
        elements.forEach(element => {
            const map = element.dataset.replaceText.trim().split(",");
            element.innerHTML = window.innerWidth <= map[0] ? map[2] : map[1];
        })
    }


    function heroAboutCompany() {
        const container = document.querySelector('.hero-about-company-two');
        if (!container) return;
        const items = container.querySelectorAll('.card-info-third');
        container.addEventListener('click',(e) => {
            const target =e.target;
            const card = target.closest('.card-info-third'); 
            if (card) {
                const parent = card.parentElement;
                if (window.innerWidth <= 1326) {
                    items.forEach(item => {
                        if (card !== item) {
                            item.classList.remove('_active')
                        }
                    });
                    card.classList.toggle('_active');
                }
            }
        })
    }

    const tooltipHtml = new Tooltip({
        mode: 'html',
        gap: 10,
        targetSelector: '[data-tooltip-html]',
        elementSelector: 'tooltip-html',
        positionX: 'left',
        animation: {
            type: 'fade-up',
            speed: 300,
            transformGap: '10px'
        },
    });
});
