// JavaScript to add the "visible" class when elements come into view
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "scroll-animate"
    const elementsToAnimate = document.querySelectorAll(".scroll-animate");

    // Define the options for the Intersection Observer
    const observerOptions = {
        root: null,               // Observe from the viewport
        rootMargin: "0px",        // No margin around the root
        threshold: 0.1,           // Trigger when 10% of the element is in view
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport (i.e., intersecting)
            if (entry.isIntersecting) {
                // Add the "visible" class to trigger the animation
                entry.target.classList.add("visible");
                // Stop observing this element once it is visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each element with the "scroll-animate" class
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
