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
            initialSlide: el.querySelectorAll('.swiper-slide').length,
            navigation: {
                nextEl: el.closest('.info-home').querySelector('.info-home__next'),
                prevEl: el.closest('.info-home').querySelector('.info-home__prev'),
            },
            breakpoints: {
                769: {
                    slidesPerView: 2.7,
                },
                550: {
                    slidesPerView: 2.35,
                },
            },
        });

        addAndDeleteShadow();
        swiper.on('transitionStart', function () {
            addAndDeleteShadow();
        });

        function addAndDeleteShadow() {
            if (!el.closest('.info-home').querySelector('.info-home__next').hasAttribute('disabled')) {
                el.classList.add('_shadow-right');
            } else {
                el.classList.remove('_shadow-right')
            }
            if (!el.closest('.info-home').querySelector('.info-home__prev').hasAttribute('disabled')) {
                el.classList.add('_shadow-left');
            } else {
                el.classList.remove('_shadow-left')
            }
        }
    }


}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
