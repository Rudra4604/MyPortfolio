"use client";

import { useEffect, useState, useRef } from "react";

interface CustomCursorProps {
  color?: string;       // Warm gold/beige accent color
  dotSize?: number;     // Size of the solid center dot
  ringSize?: number;    // Size of the outer ring
  ringOpacity?: number; // Opacity of the outer ring
  ease?: number;        // Lag-behind speed (interpolation factor)
}

export default function CustomCursor({
  color = "#C5A880",
  dotSize = 6,
  ringSize = 20,
  ringOpacity = 0.25,
  ease = 0.12,
}: CustomCursorProps) {
  const [mounted, setMounted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTextElement, setIsTextElement] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseCoords = useRef({ x: -100, y: -100 });
  const ringCoords = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if custom cursor should be enabled
    const checkDeviceSupport = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isDesktop = window.innerWidth >= 1024;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      return isDesktop && !isTouch && !prefersReducedMotion;
    };

    const supported = checkDeviceSupport();
    setIsEnabled(supported);
    setMounted(true);

    if (!supported) return;

    // Add active class to root element to apply cursor: none CSS rule
    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const onMouseDown = () => {
      setIsClicked(true);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    const checkInteractive = (element: HTMLElement | null): { interactive: boolean; textInput: boolean } => {
      if (!element) return { interactive: false, textInput: false };

      let current: HTMLElement | null = element;
      let depth = 0;

      // Increase depth to 10 to ensure nested elements inside cards/contact grids traverse to interactive parents
      while (current && depth < 10) {
        const tagName = current.tagName.toLowerCase();

        // Detect text inputs, textareas, and contenteditable fields
        if (
          tagName === "textarea" ||
          current.getAttribute("contenteditable") === "true" ||
          (tagName === "input" &&
            !["submit", "button", "checkbox", "radio", "file", "range", "color", "image"].includes(
              current.getAttribute("type") || "text"
            ))
        ) {
          return { interactive: false, textInput: true };
        }

        // Interactive tags, roles, or class identifiers
        if (
          tagName === "a" ||
          tagName === "button" ||
          tagName === "select" ||
          current.getAttribute("role") === "button" ||
          current.getAttribute("role") === "link" ||
          current.classList.contains("cursor-pointer") ||
          current.classList.contains("clickable") ||
          current.classList.contains("interactive") ||
          current.classList.contains("group") || // Group used for project cards
          current.hasAttribute("onclick")
        ) {
          return { interactive: true, textInput: false };
        }

        current = current.parentElement;
        depth++;
      }

      return { interactive: false, textInput: false };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const { interactive, textInput } = checkInteractive(target);
      setIsHovered(interactive);
      setIsTextElement(textInput);
    };

    const onMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const onMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const onResize = () => {
      const active = checkDeviceSupport();
      setIsEnabled(active);
      if (active) {
        document.documentElement.classList.add("custom-cursor-active");
      } else {
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    // Listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("resize", onResize);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    // Animation Loop using requestAnimationFrame
    const updateCursor = () => {
      // 1. Center dot: follow mouse instantly (synced to RAF)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0)`;
      }

      // Initialize outer ring position instantly to prevent slide-in from (-100, -100) on page load
      if (ringCoords.current.x === -100) {
        ringCoords.current.x = mouseCoords.current.x;
        ringCoords.current.y = mouseCoords.current.y;
      } else {
        // 2. Outer ring: interpolate coords for smooth lag
        ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * ease;
        ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * ease;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updateCursor);
    };

    rafId.current = requestAnimationFrame(updateCursor);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [ease]);

  // Clean SSR render check
  if (!mounted || !isEnabled) return null;

  // Decide visibility: hide if not visible or if hovering over standard text/input fields
  const showCursor = isVisible && !isTextElement;

  return (
    <>
      {/* Center Dot Wrapper */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        {/* Center Dot Visual */}
        <div
          style={{
            position: "absolute",
            top: -dotSize / 2,
            left: -dotSize / 2,
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            backgroundColor: color,
            transform: `scale(${isClicked ? 1.1 : 1})`,
            transition: "transform 120ms cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        />
      </div>

      {/* Outer Ring Wrapper */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        {/* Outer Ring Visual */}
        <div
          style={{
            position: "absolute",
            top: -ringSize / 2,
            left: -ringSize / 2,
            width: ringSize,
            height: ringSize,
            borderRadius: "50%",
            border: "1.5px solid",
            borderColor: color,
            opacity: isClicked ? 0.75 : isHovered ? 0.6 : ringOpacity,
            transform: `scale(${isClicked ? 0.95 : isHovered ? 1.25 : 1})`,
            boxShadow: "none",
            transition:
              "transform 180ms cubic-bezier(0.25, 1, 0.5, 1), opacity 180ms cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        />
      </div>
    </>
  );
}
