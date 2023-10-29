import getHeightBlock from './modules/getHeightBlock';
import appDweller from './components/appDweller'
document.addEventListener('DOMContentLoaded', () => {
    getHeightBlock('.header', '--header-height');
    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
    })
    appDweller();
});
