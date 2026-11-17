"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render neutral button until mounted
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex items-center justify-center size-9 rounded-full border border-[var(--cw-grey-100)] bg-transparent text-muted-foreground transition-all"
      >
        <span className="size-[1.1rem]" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="inline-flex items-center justify-center size-9 rounded-full border border-[var(--cw-grey-100)] bg-transparent text-muted-foreground hover:text-foreground hover:bg-[var(--cw-grey-50)] hover:border-[var(--cw-grey-200)] transition-all duration-200"
    >
      {isDark ? (
        <Sun className="size-[1.1rem] transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="size-[1.1rem] transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}
