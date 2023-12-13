export const tooltip = () => {
    const tooltips = document.querySelectorAll('.tooltip');
    if (tooltips.length === 0) return;
    const innerWidth = 1326;
    tooltips.forEach(tooltip => {
        const target = tooltip.querySelector('.tooltip__btn');
        const content = tooltip.querySelector('.tooltip__content');

        tooltip.addEventListener('mouseenter', () => {
            if (window.innerWidth <= innerWidth) return;
            tooltip.classList.add('_active');
        })
        tooltip.addEventListener('mouseleave', (e) => {
            if (window.innerWidth <= innerWidth) return;
            tooltip.classList.remove('_active');
        });
        tooltip.addEventListener('click',() => {
            if (window.innerWidth > innerWidth) return;
            tooltip.classList.toggle('_active');
        });
    })
};

