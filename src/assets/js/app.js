import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  counter_num.innerText = c + "%";
  c++;
  if (c === 101) {
    clearInterval(barInterval);
    gsap.to(".loading__bar", {
      duration: 1,
      opacity: 0,
    });
    gsap.to(".loading__text,.loading__counter", {
      duration: 1,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    // gsap.to(".loading__svg", {
    //   opacity: 1,
    //   rotate: "360deg",
    //   duration: 5,
    // });
    gsap.to(".loading__box", {
      duration: 1,
      border: "none",
    });
    gsap.to(".loading", {
      duration: 1,
      border: "none",
      zIndex: 1,
      background: "transparent",
      opacity: 0.5,
    });
  }
}, 20);
