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
            spaceBetween: 16,
            speed: 800,
            autoHeight: true,
            initialSlide: 2,
            centeredSlides: true,
            centeredSlidesBounds: true,
            breakpoints: {
                550: {
                    slidesPerView: 2.35,
                },
                769: {
                    slidesPerView: 2.21,
                },
            },
        });

    }
    if (document.querySelector('.tags-home')) {
        const container = document.querySelector('.tags-home');
        const items = container.querySelectorAll('.tags-home__row');
        items.forEach(item => {
            const ticker = new Swiper(item, {
                spaceBetween: 16,
                centeredSlides: true,
                speed: parseInt(item.dataset.tickerSpeed),
                autoplay: {
                    delay: 0
                },
                loop: true,
                slidesPerView: 'auto',
                allowTouchMove: false,
                disableOnInteraction: true
            });
        })
    }

}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
