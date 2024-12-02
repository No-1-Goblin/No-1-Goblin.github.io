document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.prev-btn');
    const nextButton = carousel.querySelector('.next-btn');
    const items = Array.from(track.children);
    const videos = carousel.querySelectorAll('video');  // Select all videos in the carousel

    let currentIndex = 0;

    // Add the 'active' class to the current item and pause all other videos
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

        // Pause all videos and play the active one
        videos.forEach((video, index) => {
            if (index === currentIndex) {
                video.play();  // Play the active video
            } else {
                video.pause();  // Pause all other videos
            }
        });
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
