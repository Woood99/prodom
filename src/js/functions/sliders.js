// =========================================================================================



import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);



// =========================================================================================




function initSliders() {


    if (document.querySelector('.partners-about-company__slider')) {
        const el = document.querySelector('.partners-about-company__slider');
        new Swiper(el, {

            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 12,
            speed: 800,

            navigation: {
                nextEl: el.closest('.partners-about-company').querySelector('.partners-about-company__next'),
                prevEl: el.closest('.partners-about-company').querySelector('.partners-about-company__prev'),
            },

            breakpoints: {
                1025: {
                    spaceBetween: 24,
                },
            },

        });
    }
    if (document.querySelector('.for-whom-skud-two__slider')) {
        const el = document.querySelector('.for-whom-skud-two__slider');
        new Swiper(el, {

            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 12,
            speed: 800,
            centeredSlides: true,
            centeredSlidesBounds: true,
            initialSlide: 3,
            navigation: {
                nextEl: el.closest('.for-whom-skud-two__wrapper').querySelector('.for-whom-skud-two__next'),
                prevEl: el.closest('.for-whom-skud-two__wrapper').querySelector('.for-whom-skud-two__prev'),
            },
            breakpoints: {
                1025: {
                    spaceBetween: 24,
                },
            },

        });
    }

    if (document.querySelector('.info-home__slider')) {
        const el = document.querySelector('.info-home__slider');
        const swiper = new Swiper(el, {
            observer: true,
            observeParents: true,
            slidesPerView: 1.65,
            spaceBetween: 15,
            speed: 800,
            autoHeight: true,
            initialSlide: el.querySelectorAll('.swiper-slide').length - 2,
            centeredSlides: true,
            centeredSlidesBounds: true,
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                    initialSlide: el.querySelectorAll('.swiper-slide').length - 3,
                    spaceBetween: 19,
                },
                1025: {
                    slidesPerView: 1.6,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                    spaceBetween: 19,
                },
                1201: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    centeredSlidesBounds: false,
                    initialSlide: el.querySelectorAll('.swiper-slide').length - 3,
                    spaceBetween: 19,
                },
            },
        });
    }
}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
