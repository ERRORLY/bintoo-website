import { useState } from "react";
import BlogList from "@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";
import DownloadCard from "@site/src/components/DownloadCard";
import Header from "@site/src/components/Header";
import Hero from "@site/src/components/Hero";
import Stats from "@site/src/components/Stats";
import Features from "@site/src/components/Features";
import Community from "@site/src/components/Community";
import Footer from "@site/src/components/Footer";
import Head from "@docusaurus/Head";

export default function Home() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const bintoo = {
    name: "Bintoo",
    docs: "/docs/intro",
    gmail: "bintooxyz@gmail.com",
    twitter: "https://x.com/bintoo_xyz",
    discord: "https://discord.gg/eGWSxbnXrh",
    youtube: "https://www.youtube.com/@bintoo_xyz",
    github: "https://github.com/ERRORLY/bintoo-website",
    coffee: "",
  };

  const latestBlog = BlogList.items[0];
  const latestBlogUrl = latestBlog ? latestBlog.permalink : "";
  const latestBlogTitle = latestBlog ? latestBlog.title : "";

  return (
    <div className="tailwind-preflight-scope bg-background-dark font-display text-slate-100 antialiased selection:bg-primary selection:text-black">
      <Head>
        <title>Bintoo | Free Local Hosting For Minecraft Server</title>
        <meta name="description" content="Bintoo is a free, user-friendly local hosting software for Minecraft servers. Run your own server with easy mod/plugin installs, configuration templates, and more." />
        <meta name="keywords" content="Minecraft server, free hosting, local hosting, server manager, Bintoo, Modrinth, plugins, Spigot, Paper" />
        <link rel="canonical" href="https://bintoo.xyz/" />
        <meta property="og:title" content="Bintoo | Free Local Hosting For Minecraft Server" />
        <meta property="og:description" content="Run your own server with easy mod/plugin installs, configuration templates, and more." />
        <meta property="og:url" content="https://bintoo.xyz/" />
        <meta property="og:image" content="https://bintoo.xyz/banner/docs-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bintoo | Free Local Hosting For Minecraft Server" />
        <meta name="twitter:description" content="Run your own server with easy mod/plugin installs, configuration templates, and more." />
        <meta name="twitter:image" content="https://bintoo.xyz/banner/docs-banner.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Bintoo",
            "operatingSystem": "Windows, Linux",
            "applicationCategory": "GameApplication, Utility",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free local hosting software for Minecraft servers. Manage mods, plugins, and configurations easily from a desktop app."
          })}
        </script>
      </Head>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header onDownloadClick={() => setIsDownloadOpen(true)} bintoo={bintoo} />

        <main>
          <Hero
            onDownloadClick={() => setIsDownloadOpen(true)}
            latestBlogUrl={latestBlogUrl}
            latestBlogTitle={latestBlogTitle}
            bintoo={bintoo}
          />

          <Stats />

          <Features />

          <Community bintoo={bintoo} />
        </main>

        <Footer bintoo={bintoo} />

        <DownloadCard
          isOpen={isDownloadOpen}
          onClose={() => setIsDownloadOpen(false)}
        />
      </div>
    </div>
  );
}
