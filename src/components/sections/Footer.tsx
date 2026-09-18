export function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-border bg-card/30 dark:bg-card/20 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-washi-texture pointer-events-none opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <span className="hanko-stamp !text-[11px] !tracking-widest !rounded-md !rotate-0 !py-1 !px-2">
              謹製 · MIJ
            </span>
            <div className="h-6 w-px bg-border" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Made with Care · 丁寧に製作
            </span>
          </div>

          <div className="torii-divider !max-w-[140px] !gap-2">
            <span className="gate !text-sm">⛩</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <p className="text-sm font-display font-semibold text-foreground/80">
              &copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar
            </p>
            <p className="text-[11px] font-mono tracking-wider text-muted-foreground">
              Full-Stack Web Developer · AI/ML Engineer · Nihongo Good
            </p>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/80 tracking-wider">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-vermillion animate-pulse" />
              Open for opportunities
            </span>
            <span className="opacity-40">·</span>
            <span>Based in ID · Global Remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
