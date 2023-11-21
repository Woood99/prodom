const navDropdown = () => {
    const container = document.querySelector('.header');
    if (!container) return;
    const items = container.querySelectorAll('.nav-dropdown');
    let time;
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 1326) return;
            removeActiveNav();
            if (!item.classList.contains('_active')) {
                time = setTimeout(() => {
                    item.classList.add('_active');
                    toggleMask();
                }, 250);
            }
        })
        item.addEventListener('mouseleave', (e) => {
            if (window.innerWidth <= 1326) return;
            clearTimeout(time);
            removeActiveNav();
            setTimeout(() => {
                toggleMask();
            }, 250);
        });

        const links = item.querySelectorAll('[data-nav-dropdown-item]');
        const banners  = item.querySelectorAll('[data-nav-dropdown-banner]');
        const bannerStub  = item.querySelector('[data-nav-dropdown-banner-stub]');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                if (window.innerWidth <= 1326) return;
                bannerStub.classList.remove('_active');

                const currentIndexLink = link.dataset.navDropdownItem;
                const currentBanner = item.querySelector(`[data-nav-dropdown-banner='${currentIndexLink}']`);
                currentBanner.classList.add('_active');
            })
            link.addEventListener('mouseleave', () => {
                if (window.innerWidth <= 1326) return;
                const currentIndexLink = link.dataset.navDropdownItem;
                const currentBanner = item.querySelector(`[data-nav-dropdown-banner='${currentIndexLink}']`);
                currentBanner.classList.remove('_active');
            });

            link.addEventListener('click',(e) => {
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
        console.log(activeItem);
        if (activeItem) activeItem.classList.remove('_active');
    }
};

export default navDropdown;
