const animationScroll = () => {
    const items = document.querySelectorAll('[data-animation-item]');
    if (items.length > 0) {
        animOnScroll();
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < items.length; index++) {
                const animItem = items[index];
                const animBreak = animItem.dataset.animationItemMaxBreak;
                if (animBreak) {
                    if (window.innerWidth > animBreak) {
                        body(animItem);
                    }
                } else {
                    body(animItem);
                }
            }
        }

        function body(animItem) {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;

            const animStartDefault = 4;
            const animDelay = animItem.dataset.animationItemDelay ? animItem.dataset.animationItemDelay : 0;
            const animStart = animItem.dataset.animationItemStart ? animItem.dataset.animationItemStart : animStartDefault;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                setTimeout(() => {
                    animItem.classList.add('_animation-active');
                }, animDelay);
            } else {
                if (animItem.hasAttribute('data-animation-item-repeat')) animItem.classList.remove('_animation-active');
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
    }
};

export default animationScroll;
