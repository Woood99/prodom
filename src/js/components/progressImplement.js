const progressImplement = () => {
    const progressImplement = document.querySelector('.progress-implement');

    if (progressImplement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const line = progressImplement.querySelector('.progress-implement__line');
        const finish = progressImplement.querySelector('.progress-implement__finish');
        const states = progressImplement.querySelectorAll('.progress-implement__state');
        const lineDefaultHeight = line.offsetHeight;
        body();
        window.addEventListener('scroll', (e) => {
            body();
        })


        function body() {
            const topOffset = line.getBoundingClientRect().top + window.pageYOffset;
            const topOffsetNegative = (~topOffset + 1) + headerHeight + 300;
            const scrolled = window.pageYOffset;
            const currentHeightLine = topOffsetNegative + scrolled;
            if (scrolled > topOffsetNegative && (lineDefaultHeight >= currentHeightLine) && currentHeightLine >= 0) line.style.setProperty('--height', `${currentHeightLine}px`);
            if (lineDefaultHeight < currentHeightLine) line.style.setProperty('--height', `${lineDefaultHeight}px`);
            topOffsetNegative + scrolled > 0 ? states[0].classList.add('_active') : states[0].classList.remove('_active');
            topOffsetNegative + scrolled > 158 ? states[1].classList.add('_active') : states[1].classList.remove('_active');
            topOffsetNegative + scrolled > (158 * 2) ? states[2].classList.add('_active') : states[2].classList.remove('_active');
            topOffsetNegative + scrolled > (158 * 3) ? states[3].classList.add('_active') : states[3].classList.remove('_active');
            topOffsetNegative + scrolled > (158 * 4) ? states[4].classList.add('_active') : states[4].classList.remove('_active');
            topOffsetNegative + scrolled > (158 * 5 - 15) ? finish.classList.add('_active') : finish.classList.remove('_active');

            const activeStates = progressImplement.querySelectorAll('.progress-implement__state._active');
            states.forEach(state => state.classList.remove('_current-active'));
            if (activeStates.length > 0) {
                const currentState = activeStates[activeStates.length - 1];
                currentState.classList.add('_current-active');
            }
        }

    }

};

export default progressImplement;
