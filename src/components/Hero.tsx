import Link from "@docusaurus/Link";

interface HeroProps {
  onDownloadClick: () => void;
  latestBlogUrl: string;
  latestBlogTitle: string;
  bintoo: {
    docs: string;
  };
}

export default function Hero({
  onDownloadClick,
  latestBlogUrl,
  latestBlogTitle,
  bintoo,
}: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none"></div>

      <div className="layout-container mx-auto max-w-7xl px-6 relative z-10 text-center">
        {latestBlogUrl && (
          <Link to={latestBlogUrl}>
            <div className="py-2 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 transition delay-150 hover:border-primary/40 px-3 text-xs font-medium text-primary mb-5 mx-auto">
              {`🎉 NEW: ${latestBlogTitle}`}
            </div>
          </Link>
        )}

        <h1 className="text-5xl font-black leading-20 tracking-tight text-white lg:text-7xl mb-6 max-w-4xl mx-auto">
          Free Local Hosting <br />
          <span className="emerald-gradient-text">For Minecraft Server</span>
        </h1>

        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bintoo is a free, powerful local Minecraft server hosting software.
          Set up, manage, and play with your friends seamlessly from your own
          hardware. No subscriptions, total control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onDownloadClick}
            className="cursor-pointer flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black border-2 border-green-300 shadow-[0_4px_0px_0px_#22C55E] hover:translate-y-[4px] hover:shadow-none transition-all duration-150 ease-in-out"
          >
            <span className="material-symbols-outlined mr-2">download</span>
            Download Bintoo
          </button>
          <Link
            to={bintoo.docs}
            className="cursor-pointer flex items-center justify-center rounded-xl border-2 border-gray-200 bg-surface-dark px-8 py-4 text-base font-bold text-white shadow-[0_4px_0px_0px_#64748B] hover:translate-y-[4px] hover:shadow-none hover:bg-surface-highlight transition-all duration-150 ease-in-out"
          >
            <span className="material-symbols-outlined mr-2">description</span>
            View Docs
          </Link>
        </div>

        {/* APP MOCKUP */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-surface-highlight bg-surface-dark p-2 shadow-2xl">
            <div
              className="relative w-full overflow-hidden rounded-xl bg-black border border-surface-highlight/50"
              style={{ aspectRatio: "1366/742" }}
            >
              <div
                className="absolute inset-0 rounded-xl bg-contain bg-no-repeat bg-center opacity-90"
                style={{
                  backgroundImage: "url('/dashboard.png')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
