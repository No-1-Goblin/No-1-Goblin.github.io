document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.prev-btn');
    const nextButton = carousel.querySelector('.next-btn');
    const items = Array.from(track.children);

    let currentIndex = 0;

    // Add the 'active' class to the current item
    const updateCarousel = () => {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const offset = -currentIndex * 100;  // Move to the appropriate slide
        track.style.transform = `translateX(${offset}%)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    // Initialize the carousel on load
    updateCarousel();
});
