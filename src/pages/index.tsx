import { useState } from "react";
import Link from "@docusaurus/Link";
import type { ReactNode } from "react";
import BlogList from "@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";
import DownloadCard from "@site/src/components/DownloadCard";

export default function Home() {
  const [supportButtonHovered, setSupportButtonHovered] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const bintoo = {
    name: "Bintoo",
    docs: "/docs",
    gmail: "bintooxyz@gmail.com",
    twitter: "https://x.com/bintoo_xyz",
    discord: "https://discord.gg/eGWSxbnXrh",
    youtube: "https://www.youtube.com/@bintoo_xyz",
    coffee: "",
  };

  const getYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  const getLatestBlogUrl = () => {
    const latestBlog = BlogList.items[0];
    return latestBlog;
  };

  return (
    <div className="tailwind-preflight-scope bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-black">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-highlight bg-background-dark/80 backdrop-blur-md px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-primary to-primary-dark text-black shadow-glow">
                <img
                  src="./bintoo.png"
                  alt="Bintoo"
                  className="h-full w-full object-contain"
                />{" "}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Bintoo
              </h2>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                to="/docs/intro"
              >
                Docs
              </Link>
              <a
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                href="/#features"
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
                onClick={() => setIsDownloadOpen(true)}
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

        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 grid-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none"></div>

          <div className="layout-container mx-auto max-w-7xl px-6 relative z-10 text-center">
            <Link to={getLatestBlogUrl().permalink}>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 transition delay-150 hover:border-primary/40 px-3 py-1 text-xs font-medium text-primary mb-6 mx-auto">
                <span className="material-symbols-outlined mr-1 text-[16px]">
                  bolt
                </span>
                {`NEW: ${getLatestBlogUrl().title}`}
              </div>
            </Link>

            <h1 className="text-5xl font-black leading-20 tracking-tight text-white lg:text-7xl mb-6 max-w-4xl mx-auto">
              Free Local Hosting <br />
              <span className="emerald-gradient-text">
                For Minecraft Server
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bintoo is a free, powerful local Minecraft server hosting
              software. Set up, manage, and play with your friends seamlessly
              from your own hardware. No subscriptions, total control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => setIsDownloadOpen(true)}
                className="cursor-pointer flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-glow hover:bg-[#1dff68] hover:shadow-glow-lg"
              >
                <span className="material-symbols-outlined mr-2">download</span>
                Download Bintoo
              </button>
              <Link
                to="/docs/intro"
                className="cursor-pointer flex items-center justify-center rounded-xl border border-slate-700 bg-surface-dark px-8 py-4 text-base font-bold text-white hover:border-primary/50 hover:bg-surface-highlight"
              >
                <span className="material-symbols-outlined mr-2">
                  description
                </span>
                View Docs
              </Link>
            </div>

            {/* APP MOCKUP */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="relative rounded-2xl border border-surface-highlight bg-surface-dark p-2 shadow-2xl">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black border border-surface-highlight/50">
                  <div
                    className="absolute inset-0 rounded-xl bg-cover bg-center opacity-90"
                    style={{
                      backgroundImage: "url('/dashboard-mockup.png')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="border-y border-surface-highlight bg-surface-dark py-12">
          <div className="layout-container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
                <div className="text-4xl font-black text-white">Free</div>
                <div className="text-sm font-medium text-slate-400">
                  Forever Free
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
                <div className="text-4xl font-black text-white">Local</div>
                <div className="text-sm font-medium text-slate-400">
                  Host on Your PC
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
                <div className="text-4xl font-black text-white">100%</div>
                <div className="text-sm font-medium text-slate-400">
                  Privacy & Control
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
                <div className="text-4xl font-black text-white">Fast</div>
                <div className="text-sm font-medium text-slate-400">
                  As fast as it could be
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section
          id="features"
          className="py-24 bg-surface-dark border-y border-surface-highlight"
        >
          <div className="layout-container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Use Bintoo?
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Bintoo provides a dead-simple interface to run a server from
                  your own computer. No need to understand config files, JVM
                  arguments, or command lines.
                </p>

                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">
                          network_ping
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Full Command Panel
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        For Players who want to use command panel they can use
                        it within bintoo, with no restriction what so ever
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">
                          package_2
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Mods Integration
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Download Unlimited Mod Inside Bintoo from services like
                        Modrinth, or bring your own mod and add it in bintoo
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">
                          settings_suggest
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Full Control
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Have total control on your minecraft server from Player
                        Management to Changing Configuration within bintoo
                        without ever touching command.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Minecraft terrain"
                      src="/features-images/1.png"
                    />
                  </div>
                  <div className="w-full aspect-square rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Esports gamer"
                      src="/features-images/3.webp"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Minecraft cave"
                      src="/features-images/2.png"
                    />
                  </div>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Server room"
                      src="/features-images/4.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT SECTION */}
        {/*<section className="py-24 relative overflow-hidden">
          <div
            className={`absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-500 ${
              supportButtonHovered ? "bg-yellow-300/10" : "bg-primary/5"
            }`}
          ></div>

          <div
            className={`absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-500 ${
              supportButtonHovered ? "bg-yellow-300/10" : "bg-blue-500/5"
            }`}
          ></div>

          <div className="layout-container mx-auto max-w-4xl px-6 relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-colors duration-300">
                Support the Project
              </h2>

              <p className="max-w-2xl mx-auto transition-colors duration-300">
                Bintoo is completely free. We don't charge for premium features
                or limit your slots.
              </p>
            </div>

            <div
              className={`relative flex flex-col rounded-3xl border-2 p-10 text-center mx-auto overflow-hidden transition-all duration-500 ${
                supportButtonHovered
                  ? "border-yellow-300 bg-yellow-300/5 shadow-[0_0_40px_rgba(253,224,71,0.25)]"
                  : "border-primary/50 bg-surface-dark shadow-glow"
              }`}
            >
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${
                  supportButtonHovered ? "bg-yellow-300/20" : "bg-primary/10"
                }`}
              ></div>

              <div
                className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${
                  supportButtonHovered ? "bg-yellow-300/20" : "bg-primary/10"
                }`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-6 transition-all duration-300 ${
                    supportButtonHovered
                      ? "bg-yellow-300/20 text-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.3)]"
                      : "bg-primary/10 text-primary shadow-glow"
                  }`}
                >
                  <span className="material-symbols-outlined !text-[40px]">
                    favorite
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    supportButtonHovered ? "text-yellow-300" : "text-white"
                  }`}
                >
                  Keep Bintoo Free & Updated
                </h3>

                <p
                  className={`max-w-lg mx-auto mb-8 leading-relaxed transition-colors duration-300 ${
                    supportButtonHovered ? "text-yellow-50" : "text-slate-300"
                  }`}
                >
                  If you enjoy using Bintoo to host servers for your friends,
                  consider supporting the development. Your donations help cover
                  server costs for our website, code signing certificates, and
                  countless hours of development time.
                </p>

                <a
                  href={bintoo.coffee}
                  target="_blank"
                  onMouseEnter={() => setSupportButtonHovered(true)}
                  onMouseLeave={() => setSupportButtonHovered(false)}
                  className="cursor-pointer flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined mr-2">coffee</span>
                  Buy Me a Coffee
                </a>

                <p
                  className={`mt-4 text-xs transition-colors duration-300 ${
                    supportButtonHovered
                      ? "text-yellow-200/80"
                      : "text-slate-500"
                  }`}
                >
                  Every donation, no matter how small, is deeply appreciated.
                </p>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Community Section */}
        <section className="py-24 relative overflow-hidden">
          <div
            className={`absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-500 ${
              supportButtonHovered ? "bg-yellow-300/10" : "bg-primary/5"
            }`}
          ></div>

          <div
            className={`absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-500 ${
              supportButtonHovered ? "bg-yellow-300/10" : "bg-blue-500/5"
            }`}
          ></div>

          <div className="layout-container mx-auto max-w-4xl px-6 relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-colors duration-300">
                Join Our Community
              </h2>

              <p className="max-w-2xl mx-auto transition-colors duration-300">
                Connect with other Bintoo users, get support and be updated
              </p>
            </div>

            <div
              className={`relative flex flex-col rounded-3xl border-2 p-10 text-center mx-auto overflow-hidden transition-all duration-500 ${
                supportButtonHovered
                  ? "border-yellow-300 bg-yellow-300/5 shadow-[0_0_40px_rgba(253,224,71,0.25)]"
                  : "border-primary/50 bg-surface-dark shadow-glow"
              }`}
            >
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${
                  supportButtonHovered ? "bg-yellow-300/20" : "bg-primary/10"
                }`}
              ></div>

              <div
                className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${
                  supportButtonHovered ? "bg-yellow-300/20" : "bg-primary/10"
                }`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-6 transition-all duration-300 ${
                    supportButtonHovered
                      ? "bg-yellow-300/20 text-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.3)]"
                      : "bg-primary/10 text-primary shadow-glow"
                  }`}
                >
                  <span className="material-symbols-outlined !text-[40px]">
                    groups
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    supportButtonHovered ? "text-yellow-300" : "text-white"
                  }`}
                >
                  Help Us Build Our Community
                </h3>

                <p
                  className={`max-w-lg mx-auto mb-8 leading-relaxed transition-colors duration-300 ${
                    supportButtonHovered ? "text-yellow-50" : "text-slate-300"
                  }`}
                >
                  Join our Discord server to chat with other users, get help
                  with your servers, report bugs, request features, and be the
                  first to hear about new releases and updates.
                </p>

                <a
                  href={bintoo.discord}
                  target="_blank"
                  onMouseEnter={() => setSupportButtonHovered(true)}
                  onMouseLeave={() => setSupportButtonHovered(false)}
                  className="cursor-pointer flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined mr-2">forum</span>
                  Join Our Discord Server
                </a>

                <p
                  className={`mt-4 text-xs transition-colors duration-300 ${
                    supportButtonHovered
                      ? "text-yellow-200/80"
                      : "text-slate-500"
                  }`}
                >
                  Keep Bintoo Updated And Share Feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
                    />{" "}
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
                    />{" "}
                  </a>
                  <a
                    className="text-slate-400 hover:text-white"
                    href={bintoo.twitter}
                    target="_blank"
                  >
                    <img
                      src="https://cdn.simpleicons.org/x/ffffff"
                      alt="X.com"
                      className="w-4 h-4 "
                    />{" "}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link
                      className="hover:text-primary transition-colors"
                      to="/docs"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-primary transition-colors"
                      to="http://localhost:3000/blog/tags/release"
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
                      href="/about"
                    >
                      About Bintoo
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-primary transition-colors"
                      href="/tos"
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
                  {/*<li>
                    <a
                      className="hover:text-primary transition-colors"
                      href={bintoo.coffee}
                      target="_blank"
                    >
                      Donate
                    </a>
                  </li>*/}
                </ul>
              </div>
            </div>

            <div className="border-t border-surface-highlight pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>
                <p className="text-xs text-slate-600">
                  Website created by Nibraas Labs
                </p>
                <p className="text-xs text-slate-600">
                  © {getYear()} Errorly Project. All rights reserved. Not
                  affiliated with Mojang Studios.
                </p>
              </p>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-slate-400">
                  Made With Crafting Table
                </span>
              </div>
            </div>
          </div>
        </footer>
        <DownloadCard
          isOpen={isDownloadOpen}
          onClose={() => setIsDownloadOpen(false)}
        />
      </div>
    </div>
  );
}
