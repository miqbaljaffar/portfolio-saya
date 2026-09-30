"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·—";

interface UseScrambleOptions {
  /** The final resolved text */
  text: string;
  /** Delay before scramble starts (ms). Default 0 */
  delay?: number;
  /** How fast each character resolves (ms per tick). Default 40 */
  speed?: number;
  /** Number of random ticks per character before resolving. Default 6 */
  scrambleCycles?: number;
}

/**
 * Returns the currently-scrambling display string.
 * Each character scrambles through random CHARS before locking in.
 */
export function useScramble({
  text,
  delay = 0,
  speed = 40,
  scrambleCycles = 6,
}: UseScrambleOptions): string {
  const [display, setDisplay] = useState(() => text.replace(/[^ ]/g, CHARS[0]));
  const frameRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedRef = useRef(false);

  const scramble = useCallback(() => {
    // Track how many cycles each character has gone through
    const cycles = Array.from({ length: text.length }, () => 0);
    let resolved = 0;

    const tick = () => {
      if (resolved >= text.length) {
        setDisplay(text);
        return;
      }

      setDisplay(() => {
        return text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (cycles[i] >= scrambleCycles) return char; // locked in
            cycles[i]++;
            if (cycles[i] >= scrambleCycles) resolved++;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      frameRef.current = setTimeout(tick, speed);
    };

    tick();
  }, [text, speed, scrambleCycles]);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const timer = setTimeout(() => {
      scramble();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [scramble, delay]);

  return display;
}
