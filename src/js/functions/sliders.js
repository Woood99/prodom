// =========================================================================================



import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);



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




}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
