"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom aerospace crosshair cursor.
 * - Default: small white crosshair dot
 * - Hover on interactive elements (a, button, [data-cursor-hover]):
 *   expands + turns spacex-flame red
 * - Hidden on touch devices
 */
export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const pos      = useRef({ x: -100, y: -100 });
  const ring     = useRef({ x: -100, y: -100 });
  const raf      = useRef<number>(0);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest("a, button, [data-cursor-hover]")) setActive(true);
    };
    const onLeave = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest("a, button, [data-cursor-hover]")) setActive(false);
    };

    // Smooth ring follow via RAF lerp
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13;
      ring.current.y += (pos.current.y - ring.current.y) * 0.13;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
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

  if (typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        {/* Crosshair arms */}
        <div
          className="relative"
          style={{
            width: active ? 20 : 12,
            height: active ? 20 : 12,
            transition: "width 0.2s ease, height 0.2s ease",
          }}
        >
          {/* Horizontal line */}
          <span
            className="absolute top-1/2 left-0 -translate-y-1/2 h-px"
            style={{
              width: "100%",
              background: active ? "#E63946" : "rgba(255,255,255,0.9)",
              transition: "background 0.2s ease",
            }}
          />
          {/* Vertical line */}
          <span
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px"
            style={{
              height: "100%",
              background: active ? "#E63946" : "rgba(255,255,255,0.9)",
              transition: "background 0.2s ease",
            }}
          />
          {/* Center dot */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width:  active ? 3 : 2,
              height: active ? 3 : 2,
              background: active ? "#E63946" : "#fff",
              transition: "background 0.2s ease, width 0.2s ease, height 0.2s ease",
            }}
          />
        </div>
      </div>

      {/* Ring — lags behind (lerp) */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <div
          style={{
            width:  active ? 36 : 24,
            height: active ? 36 : 24,
            border: `1px solid ${active ? "#E63946" : "rgba(255,255,255,0.25)"}`,
            borderRadius: 0,
            transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
          }}
        />
      </div>
    </>
  );
}
