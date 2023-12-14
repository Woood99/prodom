const navDropdown = () => {
    const container = document.querySelector('.header');
    if (!container) return;
    const items = container.querySelectorAll('.nav-dropdown');
    items.forEach(item => {
        const link = item.querySelector('.nav__link');
        link.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 1326) return;
            removeActiveNav();
            if (!item.classList.contains('_active')) {
                item.classList.add('_active');
                toggleMask();
            }
        })
        item.addEventListener('mouseleave', (e) => {
            if (window.innerWidth <= 1326) return;
            removeActiveNav();
            toggleMask();
        });

        const links = item.querySelectorAll('[data-nav-dropdown-item]');
        const banners = item.querySelectorAll('[data-nav-dropdown-banner]');
        const bannerStub = item.querySelector('[data-nav-dropdown-banner-stub]');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                if (window.innerWidth <= 1326) return;
                bannerStub.classList.remove('_active');

                const currentIndexLink = link.dataset.navDropdownItem;
                const currentBanner = item.querySelector(`[data-nav-dropdown-banner='${currentIndexLink}']`);
                currentBanner.classList.add('_active');
                item.classList.add('_active-banner');
            })
            link.addEventListener('mouseleave', () => {
                if (window.innerWidth <= 1326) return;
                const currentIndexLink = link.dataset.navDropdownItem;
                const currentBanner = item.querySelector(`[data-nav-dropdown-banner='${currentIndexLink}']`);
                currentBanner.classList.remove('_active');
                if (!bannerStub.classList.contains('_active')) {
                    item.classList.remove('_active-banner');
                }
            });

            link.addEventListener('click', (e) => {
                if (link.hasAttribute('data-nav-dropdown-item-stub') && window.innerWidth > 1326) {
                    e.preventDefault();
                    banners.forEach(banner => banner.classList.remove('_active'));
                    bannerStub.classList.add('_active');
                } else {
                    removeActiveNav();
                    setTimeout(() => {
                        toggleMask();
                    }, 250);
                }
            });
        })
    })
    function toggleMask() {
        const activeItem = container.querySelector('.nav-dropdown._active');
        const body = document.body;
        activeItem ? body.classList.add('_nav-active-mask') : body.classList.remove('_nav-active-mask');
    }

    function removeActiveNav() {
        const activeItem = container.querySelector('.nav-dropdown._active');
        if (activeItem) activeItem.classList.remove('_active');
    }
};

export default navDropdown;
