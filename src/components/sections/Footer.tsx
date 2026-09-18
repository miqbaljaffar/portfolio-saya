export default function Footer() {
  return (
    <footer className="border-t border-spacex-graphite bg-black py-10 md:py-12 px-5 md:px-10">
      <div className="container mx-auto max-w-6xl space-y-6 md:space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="leading-tight">
              <p className="text-sm font-display font-bold text-white uppercase tracking-spacex-sm">
                MOHAMMAD IQBAL JAFFAR
              </p>
              <p className="text-[11px] text-spacex-muted font-mono uppercase tracking-spacex-sm">
                BUILT WITH PRECISION
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex items-center gap-4">
            <span className="h-px flex-1 md:w-16 bg-spacex-graphite" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-spacex-md text-spacex-muted whitespace-nowrap">
              // END OF TRANSMISSION
            </span>
            <span className="h-px flex-1 md:w-16 bg-spacex-graphite" />
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-spacex-flame opacity-75" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-spacex-flame" />
            </span>
            <span className="text-xs font-mono uppercase tracking-spacex-sm text-spacex-muted">
              OPEN FOR OPPORTUNITIES
            </span>
          </div>
        </div>

        <div className="border-t border-spacex-graphite pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-spacex-muted font-mono">
            &copy; {new Date().getFullYear()} MOHAMMAD IQBAL JAFFAR · ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs font-mono uppercase tracking-spacex-md text-spacex-muted">
            FULL-STACK · AI/ML ENGINEER
          </p>
        </div>
      </div>
    </footer>
  );
}
