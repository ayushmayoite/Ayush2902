"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GsapAnimations() {
  const pathname = usePathname();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let isActive = true;
    const listenerCleanup: Array<() => void> = [];

    // Reset loaded state on route change
    setImagesLoaded(false);

    // Pre-hide to prevent FOUC before images load
    gsap.set(".hero-section, .section, .footer", { opacity: 0 });

    const checkImages = () => {
      const images = Array.from(document.images);

      if (images.length === 0) {
        setImagesLoaded(true);
        return;
      }

      const incomplete = images.filter((img) => !img.complete);

      if (incomplete.length === 0) {
        setImagesLoaded(true);
      } else {
        let loadedCount = 0;
        const onLoad = () => {
          if (!isActive) return;
          loadedCount++;
          if (loadedCount >= incomplete.length) {
            setImagesLoaded(true);
          }
        };

        incomplete.forEach((img) => {
          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", onLoad, { once: true });
          listenerCleanup.push(() => {
            img.removeEventListener("load", onLoad);
            img.removeEventListener("error", onLoad);
          });
        });
      }
    };

    // Small delay to ensure DOM for this route is fully parsed into document.images
    const timer = setTimeout(checkImages, 50);
    return () => {
      isActive = false;
      clearTimeout(timer);
      listenerCleanup.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  useGSAP(() => {
    if (!imagesLoaded) return;

    const ctx = gsap.context(() => {
      // Hero — above-fold fade in on load (no scroll trigger needed)
      gsap.fromTo(
        ".hero-section",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, force3D: true, clearProps: "all" },
      );

      // Sections — scroll-triggered slide up reveals
      // gsap.from('.section', {opacity: 0, y: 50, duration: 0.5, stagger: 0.2})
      gsap.utils.toArray<HTMLElement>(".section").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            force3D: true,
            clearProps: "all",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Footer — scroll-triggered fade in
      gsap.fromTo(
        ".footer",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          force3D: true,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".footer",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [imagesLoaded, pathname]);

  return null;
}
