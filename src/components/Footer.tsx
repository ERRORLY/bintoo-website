import Link from "@docusaurus/Link";

interface FooterProps {
  bintoo: {
    docs: string;
    gmail: string;
    twitter: string;
    discord: string;
    youtube: string;
    github: string;
  };
}

export default function Footer({ bintoo }: FooterProps) {
  const getYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="border-t border-surface-highlight bg-surface-dark py-12">
      <div className="layout-container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">
                <img className="h-6 w-6" src="/bintoo-logo.png" />
              </span>
              <span className="text-xl font-bold text-white">Bintoo</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Free local Minecraft hosting software.
            </p>
            <div className="flex gap-4">
              <a
                className="text-slate-400 hover:text-white"
                href={`mailto:${bintoo.gmail}`}
                target="_blank"
              >
                <img
                  src="https://cdn.simpleicons.org/gmail"
                  alt="Gmail"
                  className="w-5 h-5"
                />
              </a>
              <a
                className="text-slate-400 hover:text-white"
                href={bintoo.youtube}
                target="_blank"
              >
                <img
                  src="https://cdn.simpleicons.org/youtube"
                  alt="YouTube"
                  className="w-5 h-5"
                />
              </a>
              <a
                className="text-slate-400 hover:text-white"
                href={bintoo.discord}
                target="_blank"
              >
                <img
                  src="https://cdn.simpleicons.org/discord"
                  alt="Discord"
                  className="w-5 h-5"
                />
              </a>
              <a
                className="text-slate-400 hover:text-white"
                href={bintoo.github}
                target="_blank"
              >
                <img
                  src="https://cdn.simpleicons.org/github/ffffff"
                  alt="github"
                  className="w-5 h-5"
                />
              </a>
              <a
                className="text-slate-400 hover:text-white"
                href={bintoo.twitter}
                target="_blank"
              >
                <img
                  src="https://cdn.simpleicons.org/x/ffffff"
                  alt="X.com"
                  className="w-4 h-4 mt-1"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to={bintoo.docs}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/blog/tags/release"
                >
                  Release Notes
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href={bintoo.youtube}
                  target="_blank"
                >
                  Youtube Channel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Project</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/about"
                >
                  About Bintoo
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/tos"
                >
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href={bintoo.twitter}
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href={bintoo.discord}
                  target="_blank"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-highlight pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-xs text-slate-600">
              Website created by Nibraas Labs
            </p>
            <p className="text-xs text-slate-600">
              © {getYear()} Errorly Project. All rights reserved. Not
              affiliated with Mojang Studios.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs text-slate-400">
              Made With Crafting Table
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
