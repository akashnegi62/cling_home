import { animate, stagger, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

// Animate Navbar
animate(".motion-nav", { y: [-20, 0], opacity: [0, 1] }, { duration: 0.6, easing: "ease-out" });

// Animate Hero text elements sequentially
animate(
  ".motion-hero-text > *",
  { opacity: [0, 1], y: [20, 0] },
  { delay: stagger(0.15, { startDelay: 0.2 }), duration: 0.8, easing: "ease-out" }
);

// Animate Hero Image
animate(".motion-hero-img", { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.9, delay: 0.4, easing: "ease-out" });

// Scroll Animations for Sections
const animateIn = (selector) => {
  inView(selector, (info) => {
    animate(info.target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, easing: "ease-out" });
  });
};

animateIn(".motion-stats");
animateIn(".motion-story");
animateIn(".motion-services");
animateIn(".motion-tech");
animateIn(".motion-global");
animateIn(".motion-clientele");
animateIn(".motion-team");
animateIn(".motion-testimonials");
animateIn(".motion-contact");
