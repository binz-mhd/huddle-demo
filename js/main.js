// main.js

gsap.registerPlugin(ScrollTrigger);

// Parallax for the video
gsap.to(".hero-video", {
  scale: 1.2, // Slight zoom for the parallax effect
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Fade-in effect for hero content
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    end: "center center",
    toggleActions: "play none none reverse"
  }
});
