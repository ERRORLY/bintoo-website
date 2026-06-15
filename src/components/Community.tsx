import { useState } from "react";

interface CommunityProps {
  bintoo: {
    discord: string;
  };
}

export default function Community({ bintoo }: CommunityProps) {
  const [communityButtonHovered, setCommunityButtonHovered] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className={`absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-500 ${
          communityButtonHovered ? "bg-blue-500/10" : "bg-primary/5"
        }`}
      ></div>

      <div
        className={`absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-500 ${
          communityButtonHovered ? "bg-blue-500/15" : "bg-blue-500/5"
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
            communityButtonHovered
              ? "border-blue-500 bg-blue-500/5 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
              : "border-primary/50 bg-surface-dark shadow-glow"
          }`}
        >
          <div
            className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${
              communityButtonHovered ? "bg-blue-500/20" : "bg-primary/10"
            }`}
          ></div>

          <div
            className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl transition-all duration-500 ${
              communityButtonHovered ? "bg-blue-500/20" : "bg-primary/10"
            }`}
          ></div>

          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-6 transition-all duration-300 ${
                communityButtonHovered
                  ? "bg-blue-500/20 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  : "bg-primary/10 text-primary shadow-glow"
              }`}
            >
              <img
                src={`https://cdn.simpleicons.org/discord/${communityButtonHovered ? "5865f2" : "13ec5b"}`}
                alt="Discord"
                className="w-14 h-14"
              />
            </div>

            <h3
              className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                communityButtonHovered ? "text-blue-400" : "text-white"
              }`}
            >
              Help Us Build Our Community
            </h3>

            <p
              className={`max-w-lg mx-auto mb-8 leading-relaxed transition-colors duration-300 ${
                communityButtonHovered ? "text-blue-100" : "text-slate-300"
              }`}
            >
              Join our Discord server to chat with other users, get help with
              your servers, report bugs, request features, and be the first to
              hear about new releases and updates.
            </p>

            <a
              href={bintoo.discord}
              target="_blank"
              onMouseEnter={() => setCommunityButtonHovered(true)}
              onMouseLeave={() => setCommunityButtonHovered(false)}
              className="cursor-pointer flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-black shadow-glow hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white w-full sm:w-auto"
            >
              <span className="material-symbols-outlined mr-2">forum</span>
              Join Our Discord Server
            </a>

            <p
              className={`mt-4 text-xs transition-colors duration-300 ${
                communityButtonHovered ? "text-blue-300/80" : "text-slate-500"
              }`}
            >
              Keep Bintoo Updated And Share Feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
