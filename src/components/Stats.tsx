export default function Stats() {
  return (
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
  );
}
