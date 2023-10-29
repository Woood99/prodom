const appDweller = () => {
    const container = document.querySelector('.app-dweller');
    if (!container) return;
    const dots = container.querySelectorAll('.app-dweller__pagination .app-dweller__dot');
    const images = container.querySelectorAll('.app-dweller__images .app-dweller__image');
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

                        }, 150);
                    }

                    function toggleImage() {
                        activeImage.classList.remove('_active');
                        setTimeout(() => {
                            activeImage.classList.add('_hidden');
                        }, 200);

                        images[index].classList.remove('_hidden');
                        setTimeout(() => {
                            images[index].classList.add('_active');
                        }, 400);
                    }

                    function toggletext() {
                        setTimeout(() => {
                            activeText.classList.remove('_active');
                        }, 200);
                        setTimeout(() => {
                            activeText.classList.add('_hidden');
                        }, 400);

                        text[index].classList.remove('_hidden');
                        setTimeout(() => {
                            text[index].classList.add('_active');
                            container.classList.remove('_change');
                        }, 600);
                    }

                }
            }
        })
    })

};

export default appDweller;
