import { useEffect } from "react";
import gsap from "gsap";

export function useScrollAnimation(selector) {
  useEffect(() => {
    gsap.fromTo(
      selector,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
    );
  }, [selector]);
}