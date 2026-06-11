export default function App() {
  const getYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-black">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-highlight bg-background-dark/80 backdrop-blur-md px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-black shadow-glow">
                <span className="material-symbols-outlined !text-[24px]">
                  terminal
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Bintoo
              </h2>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Docs
              </a>
              <a
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Blogs
              </a>
              <a
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                href="#"
              >
                Discord
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="group flex items-center justify-center overflow-hidden rounded-lg bg-surface-highlight border border-surface-highlight hover:border-primary px-5 py-2 text-sm font-bold text-white transition-all hover:shadow-glow">
                <span className="mr-2 material-symbols-outlined text-[18px]">
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
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6 mx-auto">
              <span className="material-symbols-outlined mr-1 text-[16px]">
                bolt
              </span>
              New: Bintoo v1.0 is now available!
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-white lg:text-7xl mb-6 max-w-4xl mx-auto">
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
              <button className="flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-glow hover:shadow-glow-lg">
                <span className="material-symbols-outlined mr-2">download</span>
                Download Bintoo
              </button>
              <button className="flex items-center justify-center rounded-xl border border-slate-700 bg-surface-dark px-8 py-4 text-base font-bold text-white hover:border-primary/50 hover:bg-surface-highlight ">
                <span className="material-symbols-outlined mr-2">
                  description
                </span>
                View Docs
              </button>
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
                  Forever Open Source
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
                <div className="text-4xl font-black text-white">60s</div>
                <div className="text-sm font-medium text-slate-400">
                  Instant Setup
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 bg-surface-dark border-y border-surface-highlight">
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
                        Auto Port Forwarding
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Built-in UPnP support or automatic secure tunneling so
                        your friends can join instantly without router
                        configuration.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">
                          memory
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Resource Management
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Intelligent RAM allocation ensures your server runs
                        smoothly alongside your game.
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
                        Management to Commands
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
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjD7QPPtyRU1ahvDKteKFGnnChsKurGKOSl29g-wGVuP-ao0w0Hg0Nj1ja7I3MGDHYq3i6kp8xGVWFm1XoJL3QhSdf8-YYvfAAlCIBtu7x0QiHt_SGNM0iSTxXeLjvbjG6lbPD9hweJnS_EfTSDpXC3T4_HGYNBXmNxJBXE1Kv25vYDYHvQOcUez7gbo3ixM2-DHsB8Ly4L9Ka3fteM8SSuGVCZPfoKMDmX9sYlC5f6K3wFOrgUzGbJACL9vhdr3XkDWGjC-EJE1M"
                    />
                  </div>
                  <div className="w-full aspect-square rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Esports gamer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq4p-qGSHRr3nfpMvqwM0HoK3fZSUHwFyQLTs2SCzyJReQAGVGy-_Q9BSV6z8rJy0xI50k3ajf6mX_lcZdoGwtE2zYqzrjINB9QRtyyUlrIIiBHoOg_0iIi-lsgjRZl48LfHgMrayULvxqnmh1svC5q7LDRoplCJ7EVfEvCj5jMOOFKZgofXvCiwROoWVQTKC4TWri1RGDXWxMg1oSxC-mEa2lwj1VfTvM-k-aSBfCqNaOxu4MPY8EH9OpmEo0FA7KuyL4OL6TIzs"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Minecraft cave"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9hsBASDcR9PgaKh2Z8zz7sWbtFtG2IG5XDU__Q9-WjbY-UBOxAL3-hh2_MsLg6YrI4KFInQ0PojhAtdfavtmHXsrOFjy3vbirIqIwvRhSQFZDWCt8TiSO0dPN9E8e5gQVTqkrPZ7KAA_v39rYqs0_h659oQkugoGFOYvmnivC2PmXUC1d5VhWbGyjRt8ZiMZ4PnNy6N9Kk-4V1ipufgVFdky60ChYLN17_jRjP6Ftj5mfPdE-S0YavWG-CCMIl22MeVHTC-no1Ic"
                    />
                  </div>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-surface-highlight shadow-lg">
                    <img
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Server room"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2ImhYZrk1SnXfs0UiBXieyer4-P2sbBVlsnLs47_hvNybXkptP3FI5cb4Io9xCDaUXEx5WCHTfn_oN3fNufYE_UNvG3PO7DQ8MV422n0XJX2Q5EKCojpZ_Uy-qBUEOO8yi51x_TT_KecSK9JXRakp4uJKlC1g8Wl-jv_G-0jQQplflbUJ6AVdurtlgHDdyHYq1yIWG1GR5sh1Qt9vzp6-UnDAN0YZvHZSrETE-VT8yC4Dv9AT9Ei4-jvy9DnqkGGH_UWPSZLnrc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>

          <div className="layout-container mx-auto max-w-4xl px-6 relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Support the Project
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Bintoo is completely free. We don't charge for premium features
                or limit your slots.
              </p>
            </div>

            <div className="relative flex flex-col rounded-3xl border-2 border-primary/50 bg-surface-dark p-10 shadow-glow text-center mx-auto overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 shadow-glow">
                  <span className="material-symbols-outlined !text-[40px]">
                    favorite
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Keep Bintoo Free & Updated
                </h3>
                <p className="text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
                  If you enjoy using Bintoo to host servers for your friends,
                  consider supporting the development. Your donations help cover
                  server costs for our website, code signing certificates, and
                  countless hours of development time.
                </p>
                <button className="flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-glow hover:shadow-glow-lg transition-all hover:-translate-y-1 hover:bg-white w-full sm:w-auto">
                  <span className="material-symbols-outlined mr-2">coffee</span>
                  Buy Me a Coffee
                </button>
                <p className="mt-4 text-xs text-slate-500">
                  Every donation, no matter how small, is deeply appreciated.
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
                    terminal
                  </span>
                  <span className="text-xl font-bold text-white">Bintoo</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">
                  Free local Minecraft hosting software.
                </p>
                <div className="flex gap-4">
                  <a className="text-slate-400 hover:text-white" href="#">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                  <a className="text-slate-400 hover:text-white" href="#">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                  <a className="text-slate-400 hover:text-white" href="#">
                    <span className="material-symbols-outlined">forum</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Release Notes
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Community Forum
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Project</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      About Bintoo
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Troubleshooting
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Discord Server
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Report a Bug
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Donate
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-surface-highlight pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-600">
                © {getYear()} Errorly Project. All rights reserved. Not
                affiliated with Mojang Studios.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-slate-400">Open Source</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
