/* Slider Logic */
document.addEventListener('DOMContentLoaded', function () {
    // Clients Slider
    const sliderContainer = document.querySelector('.clients-slider-wrapper');
    if (sliderContainer) {
        const grid = sliderContainer.querySelector('.clients-grid');
        const prevBtn = sliderContainer.querySelector('.slider-prev');
        const nextBtn = sliderContainer.querySelector('.slider-next');

        if (grid && prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                grid.scrollBy({ left: grid.clientWidth / 2, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                grid.scrollBy({ left: -grid.clientWidth / 2, behavior: 'smooth' });
            });
        }
    }
});
