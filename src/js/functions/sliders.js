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

    if (document.querySelector('.info-home__slider')) {
        const el = document.querySelector('.info-home__slider');
        const swiper = new Swiper(el, {
            observer: true,
            observeParents: true,
            slidesPerView: 1.4,
            spaceBetween: 19,
            speed: 800,
            autoHeight: true,
            initialSlide: 2,
            // centeredSlides: true,
            // centeredSlidesBounds: true,
            breakpoints: {
                550: {
                    slidesPerView: 2.35,
                },
                769: {
                    slidesPerView: 2,
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
