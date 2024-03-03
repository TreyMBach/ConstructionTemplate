// Wrap your code inside a load event listener to ensure all DOM content is fully loaded
window.addEventListener('load', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    
    // Clone the first slide and append it to the slides container
    const firstSlideClone = slides[0].cloneNode(true);
    firstSlideClone.id = "first-clone"; // Add an ID or class to the cloned element
    document.querySelector(".slides").appendChild(firstSlideClone);
    
    function slideToRight() {
        if (currentIndex === totalSlides - 1) {
            currentIndex++;
            updateSlidePosition();
            setTimeout(() => {
                document.querySelector('.slides').style.transition = 'none';
                currentIndex = 0;
                updateSlidePosition();
                // Trigger reflow/repaint
                void document.querySelector('.slides').offsetWidth;
                // Re-enable the transition
                document.querySelector('.slides').style.transition = "transform 2s ease-out";
            }, 2000); // The timeout should match the CSS transition duration
        } else {
            currentIndex++;
            updateSlidePosition();
        }
    }
    
    function updateSlidePosition() {
        const offset = currentIndex * -100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(slideToRight, 5000); // The interval should be longer than the transition to allow it to finish
});
