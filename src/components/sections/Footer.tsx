export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-sm py-10 md:py-12 px-5 md:px-10">
      <div className="container mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="hanko-stamp text-xs tracking-widest">謹製 · MIJ</div>
            <div className="leading-tight">
              <p className="text-sm font-display font-semibold text-foreground">Mohammad Iqbal Jaffar</p>
              <p className="text-[11px] text-muted-foreground font-mono">Made with care</p>
            </div>
          </div>
          <div className="torii-divider md:w-40 md:mx-0">
            <span className="gate">⛩</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Open for opportunities
            </span>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammad Iqbal Jaffar &middot; All rights reserved.
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Full-Stack &middot; AI/ML Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}
