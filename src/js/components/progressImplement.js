const progressImplement = () => {
    const progressImplement = document.querySelector('.progress-implement');

    if (progressImplement) {
        const line = progressImplement.querySelector('.progress-implement__line');
        const finish = progressImplement.querySelector('.progress-implement__finish');
        const states = progressImplement.querySelectorAll('.progress-implement__state');
        const lineDefaultHeight = line.offsetHeight;
        const stap = 150;
        body();
        window.addEventListener('scroll', (e) => {
            body();
        })


        function body() {
            const topOffset = line.getBoundingClientRect().top + window.pageYOffset;
            const topOffsetNegativePrc = (~topOffset + 1) / 100;
            let topOffsetValue;
            if (window.innerWidth >= 1920) {
                topOffsetValue = topOffsetNegativePrc;
            } else if (window.innerWidth > 1326) {
                topOffsetValue = topOffsetNegativePrc * 60;
            } else {
                topOffsetValue = topOffsetNegativePrc * 30;
            }
            const scrolled = window.pageYOffset;
            const currentHeightLine = topOffsetValue + scrolled;
            if (scrolled > topOffsetValue && (lineDefaultHeight >= currentHeightLine) && currentHeightLine >= 0) line.style.setProperty('--height', `${currentHeightLine}px`);
            if (lineDefaultHeight < currentHeightLine) line.style.setProperty('--height', `${lineDefaultHeight}px`);
            topOffsetValue + scrolled > 0 ? states[0].classList.add('_active') : states[0].classList.remove('_active');
            topOffsetValue + scrolled > stap ? states[1].classList.add('_active') : states[1].classList.remove('_active');
            topOffsetValue + scrolled > (stap * 2) ? states[2].classList.add('_active') : states[2].classList.remove('_active');
            topOffsetValue + scrolled > (stap * 3) ? states[3].classList.add('_active') : states[3].classList.remove('_active');
            topOffsetValue + scrolled > (stap * 4) ? states[4].classList.add('_active') : states[4].classList.remove('_active');
            topOffsetValue + scrolled > (stap * 5 - 15) ? finish.classList.add('_active') : finish.classList.remove('_active');

            const activeStates = progressImplement.querySelectorAll('.progress-implement__state._active');
            states.forEach(state => state.classList.remove('_current-active'));
            if (activeStates.length > 0) {
                const currentState = activeStates[activeStates.length - 1];
                if (!finish.classList.contains('_active')) {
                    currentState.classList.add('_current-active');
                }
            } else {
                line.style.removeProperty('--height');
            }
        }
    }

};

export default progressImplement;
