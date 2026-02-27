"use client";

import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GsapAnimations() {
  const pathname = usePathname();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-section", {
        opacity: 0,
        y: -24,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.utils.toArray<HTMLElement>(".section").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 36,
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".footer", {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
