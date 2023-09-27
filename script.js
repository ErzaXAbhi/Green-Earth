const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

gsap.from(img1, {
  autoAlpha: 0,
  duration: 1,
  y: -400,
  ease: "power1",
  rotate: 45,
});
gsap.from(img2, {
  autoAlpha: 0,
  duration: 1,
  y: -400,
  ease: "power1",
  delay: 1,
  rotate: -45,
});
gsap.from(img3, {
  autoAlpha: 0,
  duration: 1,
  y: -400,
  ease: "power1",
  delay: 2,
  rotate: 45,
});
