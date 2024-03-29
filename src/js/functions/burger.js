import disableScroll from '../modules/disableScroll';
import enableScroll from '../modules/enableScroll';

const burgerMenu = () => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuItems = document.querySelectorAll('[data-menu-item]');
    const overlay = document.querySelector('[data-menu-overlay]');
    if (burger && menu) {
        burger.addEventListener('click', () => {
            !menu.classList.contains('_active') ? openMenu() : closeMenu();
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeMenu();
        });
    }
    if (menuItems.length) {
        menuItems.forEach(el => {
            el.addEventListener('click', () => {
                if (window.innerWidth <= 1326) {
                    closeMenu();
                }
            });
        });
    }

    function openMenu() {
        burger.classList.add('burger--active');
        menu.classList.add('_active');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
    }

    function closeMenu() {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('_active');
        enableScroll();
    }
}
export default burgerMenu;
