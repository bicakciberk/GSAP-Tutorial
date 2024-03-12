gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  duration: 1,
  // x: 500,
  scrollTrigger: {
    trigger: ".square",
    markers: true,
    start: "top 50%", // when my browser screen is be center from top this code line will work
    end: "top 10%",
    toggleClass: "code",
    toggleAction: "restart",
    scrub: 4,
    pin: true,
  },
});
