"use client";

import { techStack } from "../data/portfolio";

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-5 my-0">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-2 text-gray-400 dark:text-gray-600 font-semibold text-sm tracking-wide uppercase hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
          >
            <span className="text-blue-500/60 text-xs">✦</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}