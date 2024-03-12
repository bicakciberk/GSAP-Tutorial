gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box", { x: 500, duration: 2 });
// gsap.to(".box", { y: 200, duration: 3, delay: 2 });
// gsap.to(".box", { x: 0, duration: 2, delay: 5 });
// gsap.to(".box", { y: 0, duration: 3, delay: 7 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    toggleAction: "restart",
    scrub: 1,
  },
});

tl.to(".box", { x: 500, duration: 2 })
  .to(".box", { y: 200, duration: 2 })
  .to(".box", { x: 0, duration: 2 })
  .to(".box", { y: 0, duration: 2 });
