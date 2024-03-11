gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  duration: 2,
  scrollTrigger: {
    trigger: ".square",
    markers: true,
    start: "top 30%", // when my browser screen is be center from top this code line will work
    end: "top 20%",
    toggleClass: "code",
  },
});
