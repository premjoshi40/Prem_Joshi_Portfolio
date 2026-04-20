import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Returns a ref to attach + a boolean flag once visible.
 * Adds a one-shot IntersectionObserver and disconnects after first reveal.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}

/**
 * Helper className: hidden until visible, then plays the given animation.
 */
export function revealClass(visible: boolean, animation = "animate-fade-in", delay = 0) {
  if (!visible) return "opacity-0";
  return `${animation}${delay ? ` [animation-delay:${delay}ms]` : ""}`;
}
