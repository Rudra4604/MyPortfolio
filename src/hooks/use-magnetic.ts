import { useEffect, useRef } from "react";

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const bounding = el.getBoundingClientRect();
      const x = clientX - (bounding.left + bounding.width / 2);
      const y = clientY - (bounding.top + bounding.height / 2);

      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      el.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";
    };

    const handleMouseLeave = () => {
      el.style.transform = "";
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
