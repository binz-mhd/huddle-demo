document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".logos"); // Select all carousel containers
  
    carousels.forEach((carousel) => {
      const track = carousel.querySelector(".logos-slide"); // Get the track inside each carousel
      const clone = track.cloneNode(true); // Clone the track for seamless scrolling
      carousel.appendChild(clone); // Append the cloned track
  
      let scrollAmount = 0; // Starting scroll position
      const speed = 1; // Pixels to scroll per frame
  
      function animate() {
        scrollAmount += speed; // Increment the scroll position
        track.style.transform = `translateX(-${scrollAmount}px)`; // Scroll the first track
        clone.style.transform = `translateX(-${scrollAmount}px)`; // Scroll the cloned track
  
        const trackWidth = track.scrollWidth; // Get the width of the original track
  
        // Reset scroll when the first track is fully out of view
        if (scrollAmount >= trackWidth) {
          scrollAmount = 0;
        }
  
        requestAnimationFrame(animate); // Continue the animation
      }
  
      animate(); // Start the animation
    });
  });
  