import getHeightBlock from './modules/getHeightBlock';
document.addEventListener('DOMContentLoaded', () => {
    getHeightBlock('.header', '--header-height');
    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
    })

});
