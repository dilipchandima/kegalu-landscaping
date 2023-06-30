import "./style.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  document.querySelector(".logo"),
  {
    scale: 1,
  },
  {
    scale: 1.2,
    scrollTrigger: {
      trigger: document.querySelector(".section"),
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  }
);

gsap.fromTo(
  document.querySelector(".bg-hero"),
  {
    scale: 1,
  },
  {
    scale: 1.3,
    scrollTrigger: {
      trigger: document.querySelector(".section"),
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  }
);

document.addEventListener("mousemove", mouseMoveFunc);

let circles = gsap.utils.toArray(".logo");

function mouseMoveFunc(e) {
  circles.forEach((circle, index) => {
    const depth = 25;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    index++;

    gsap.to(
      circle,
      {
        x: moveX * index,
        y: moveY * index,
      }
      // { ease: "elastic(1, 0.5)" }
    );
  });
}
