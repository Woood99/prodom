export const validateEmail = (input) => {
    if (!input) return;
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return re.test(input.value);
};

export const validateNewsletter = () => {
    const container = document.querySelector('.newsletter-home');
    if (!container) return;
    const form = container.querySelector('.newsletter-home__form');
    const wrapper = container.querySelector('.newsletter-home__wrapper');
    const success = container.querySelector('.newsletter-home__success');

    const email = container.querySelector('[data-newsletter-email]');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateEmail(email)) {
                wrapper.setAttribute('hidden', '');
                success.removeAttribute('hidden');
            }
        })
    }
};
