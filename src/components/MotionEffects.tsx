"use client";

import { useEffect } from "react";

const REVEAL_TARGETS = [
  ".section-kicker",
  ".section-heading",
  ".project-card",
  ".about-profile",
  ".about-copy",
  ".capability",
  ".experience-item",
  ".awards-grid article",
  ".contact-panel",
  ".footer-top",
].join(", ");

/** Progressive enhancement: content is never CSS-hidden waiting for JavaScript. */
export function MotionEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const running = new Set<Animation>();
    let reveals: IntersectionObserver | undefined;
    let newCards: MutationObserver | undefined;
    let heroVisibility: IntersectionObserver | undefined;

    const disconnect = () => {
      reveals?.disconnect();
      newCards?.disconnect();
      heroVisibility?.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
    };

    const configure = () => {
      disconnect();
      const supported =
        "IntersectionObserver" in window && "animate" in Element.prototype;
      const reduced = preference.matches || !supported;
      root.dataset.motion = reduced ? "reduced" : "enabled";

      if (reduced) {
        document
          .querySelectorAll<HTMLElement>(REVEAL_TARGETS)
          .forEach((element) => {
            element.dataset.reveal = "static";
          });
        return;
      }

      reveals = new IntersectionObserver(
        (entries) => {
          if (preference.matches) return;
          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry, index) => {
              const element = entry.target as HTMLElement;
              reveals?.unobserve(element);
              if (element.contains(document.activeElement)) {
                element.dataset.reveal = "complete";
                return;
              }
              element.dataset.reveal = "animating";
              const animation = element.animate(
                [
                  { opacity: 0, transform: "translateY(20px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: 640,
                  delay: Math.min(index * 65, 160),
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                  fill: "backwards",
                },
              );
              running.add(animation);
              animation.onfinish = () => {
                element.dataset.reveal = "complete";
                running.delete(animation);
              };
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
      );

      const register = () => {
        document
          .querySelectorAll<HTMLElement>(REVEAL_TARGETS)
          .forEach((element) => {
            if (
              element.dataset.reveal === "complete" ||
              element.dataset.reveal === "animating"
            )
              return;
            element.dataset.reveal = "ready";
            reveals?.observe(element);
          });
      };
      register();
      const grid = document.querySelector(".projects-grid");
      if (grid) {
        newCards = new MutationObserver(register);
        newCards.observe(grid, { childList: true });
      }
      const hero = document.querySelector(".hero");
      if (hero) {
        heroVisibility = new IntersectionObserver(([entry]) => {
          root.dataset.heroVisible = String(entry.isIntersecting);
        });
        heroVisibility.observe(hero);
      }
    };

    configure();
    preference.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      disconnect();
      delete root.dataset.motion;
      delete root.dataset.heroVisible;
    };
  }, []);

  return null;
}
