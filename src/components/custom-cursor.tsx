"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const mountFrameId = requestAnimationFrame(() => {
      setMounted(true);
    });

    const mouseCoords = { x: -100, y: -100 };
    const outlineCoords = { x: -100, y: -100 };

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.x = e.clientX;
      mouseCoords.y = e.clientY;
      setIsHidden(false);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseCoords.x}px, ${mouseCoords.y}px, 0)`;
      }
    };

    const updateOutline = () => {
      const ease = 0.15; // Smooth lag-behind interpolation
      outlineCoords.x += (mouseCoords.x - outlineCoords.x) * ease;
      outlineCoords.y += (mouseCoords.y - outlineCoords.y) * ease;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlineCoords.x - 16}px, ${outlineCoords.y - 16}px, 0)`;
      }

      requestAnimationFrame(updateOutline);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button";
      
      setIsHovered(!!isInteractive);
    };

    const onMouseLeaveWindow = () => {
      setIsHidden(true);
    };

    const onMouseEnterWindow = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    
    const animationFrameId = requestAnimationFrame(updateOutline);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(mountFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={cn(
          "fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-[#6D5F54] transition-transform duration-100 ease-out hidden md:block",
          isHidden ? "opacity-0" : "opacity-100",
          isHovered ? "scale-0" : "scale-100"
        )}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={outlineRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full border border-[#6D5F54] pointer-events-none z-50 transition-opacity duration-300 ease-out hidden md:block",
          isHidden ? "opacity-0" : "opacity-60",
          isHovered ? "scale-150 bg-[#6D5F54]/10 border-[#6D5F54]" : "scale-100"
        )}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          transition: "transform 0.08s ease-out, width 0.3s, height 0.3s, background-color 0.3s, opacity 0.3s"
        }}
      />
    </>
  );
}
