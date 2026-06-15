export default function Features() {
  return (
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
              Bintoo provides a dead-simple interface to run a server from your
              own computer. No need to understand config files, JVM arguments,
              or command lines.
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
                    For Players who want to use command panel they can use it
                    within bintoo, with no restriction what so ever
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">package_2</span>
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
                  <h4 className="text-lg font-bold text-white">Full Control</h4>
                  <p className="mt-1 text-sm text-slate-400">
                    Have total control on your minecraft server from Player
                    Management to Changing Configuration within bintoo without
                    ever touching command.
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
  );
}
