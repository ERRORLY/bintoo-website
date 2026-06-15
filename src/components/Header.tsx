import Link from "@docusaurus/Link";

interface HeaderProps {
  onDownloadClick: () => void;
  bintoo: {
    docs: string;
  };
}

export default function Header({ onDownloadClick, bintoo }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-highlight bg-background-dark/80 backdrop-blur-md px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-primary to-primary-dark text-black shadow-glow">
            <img
              src="./bintoo.png"
              alt="Bintoo"
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Bintoo
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            to={bintoo.docs}
          >
            Docs
          </Link>
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </a>
          <Link
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            to="/blog"
          >
            Blogs
          </Link>
          <a
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            target="_blank"
            href="https://discord.gg/eGWSxbnXrh"
          >
            Community
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onDownloadClick}
            className="cursor-pointer group flex items-center justify-center overflow-hidden rounded-lg bg-surface-highlight border border-surface-highlight hover:border-primary px-5 py-2 text-sm font-bold text-white transition duration-300 hover:bg-primary hover:text-black"
          >
            <span className="mr-2 mb-0.5 material-symbols-outlined text-[10px]">
              download
            </span>
            <span>Download</span>
          </button>
        </div>
      </div>
    </header>
  );
}
