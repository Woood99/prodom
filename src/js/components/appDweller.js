import { auto } from '@popperjs/core';
import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const appDweller = () => {
    const container = document.querySelector('.app-dweller');
    if (!container) return;
    if (window.innerWidth > 1326) {
        desktopVersion();
    }

    const sliderEl = container.querySelector('.app-dweller__slider');
    let slider;
    let value = true;
    update();
    window.addEventListener('resize', () => {
        update();
    })

    function update() {

        if (window.innerWidth <= 1326 && value) {
            if (slider) slider.destroy();
            slider = new Swiper(sliderEl, {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 24,
                speed: 800,
                effect: 'fade',
                pagination: {
                    el: container.querySelector('.app-dweller-slider-pagination'),
                    type: 'bullets',
                    clickable: true,
                },
            });
            value = false;
        }
        if (window.innerWidth > 1326) {
            if (slider) slider.destroy();
            setTimeout(() => {
                desktopVersion();
            }, 1);
            value = true;
        }
    }


    function desktopVersion() {
        if (container.classList.contains('_init-desktop')) return;
        const dots = container.querySelectorAll('.app-dweller__pagination .app-dweller__dot');
        const images = container.querySelectorAll('.app-dweller__image');
        const text = container.querySelectorAll('.app-dweller__text div');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!container.classList.contains('_change')) {
                    const activeDot = container.querySelector('.app-dweller__dot._active');
                    const activeDotIndex = Array.prototype.slice.call(dots, 0).indexOf(activeDot);
                    if (activeDotIndex !== index) {
                        container.classList.add('_change');
                        const activeImage = container.querySelector('.app-dweller__image._active');
                        const activeText = container.querySelector('.app-dweller__text div._active');

                        toggleDot();
                        toggleImage();
                        toggletext();

                        function toggleDot() {
                            const interval = setInterval(() => {
                                const current = container.querySelector('.app-dweller__dot._active');
                                current.classList.remove('_active');

                                const el = index > activeDotIndex ? current.nextElementSibling : current.previousElementSibling;
                                el.classList.add('_active');

                                if (el === dot) clearInterval(interval);

                            }, 100);
                        }

                        function toggleImage() {
                            activeImage.classList.remove('_active');
                            setTimeout(() => {
                                activeImage.classList.add('_hidden');
                            }, 150);

                            images[index].classList.remove('_hidden');
                            setTimeout(() => {
                                images[index].classList.add('_active');
                            }, 250);
                        }

                        function toggletext() {
                            activeText.classList.remove('_active');
                            setTimeout(() => {
                                activeText.classList.add('_hidden');
                            }, 150);

                            text[index].classList.remove('_hidden');
                            setTimeout(() => {
                                text[index].classList.add('_active');
                                container.classList.remove('_change');
                            }, 250);
                        }

                    }
                }
            })
        });
        container.classList.add('_init-desktop');
    }
};

export default appDweller;
