import "./style.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  document.querySelector(".heading"),
  {
    scale: 1,
  },
  {
    scale: 2,
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
    scale: 1.2,
    scrollTrigger: {
      trigger: document.querySelector(".section"),
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  }
);
