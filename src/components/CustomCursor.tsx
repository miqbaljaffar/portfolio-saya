"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal dot + ring cursor — theme-aware.
 * Uses CSS variables so it adapts to dark/light mode automatically.
 * Hides on touch devices.
 */
export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const raf     = useRef<number>(0);
  const [active,  setActive]  = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until confirmed

  useEffect(() => {
    // Guard: only enable on pointer-fine devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsTouch(false);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onEnter = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor-hover]"))
        setActive(true);
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor-hover]"))
        setActive(false);
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.14;
      ring.current.y += (pos.current.y - ring.current.y) * 0.14;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout",  onLeave);
    raf.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout",  onLeave);
      cancelAnimationFrame(raf.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Don't render on touch devices
  if (isTouch) return null;

  const dotSize  = active ? 8  : 6;
  const ringSize = active ? 40 : 28;

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <div
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            background: "var(--cw-black)",
            transition: "width 0.18s ease, height 0.18s ease",
          }}
        />
      </div>

      {/* Ring — lags (lerp) */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <div
          style={{
            width: ringSize,
            height: ringSize,
            borderRadius: "50%",
            border: `1.5px solid ${active ? "var(--cw-black)" : "color-mix(in srgb, var(--cw-black) 25%, transparent)"}`,
            transition: "width 0.22s ease, height 0.22s ease, border-color 0.22s ease",
          }}
        />
      </div>
    </>
  );
}
