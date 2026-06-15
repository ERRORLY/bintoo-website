import { useState } from "react";
import BlogList from "@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";
import DownloadCard from "@site/src/components/DownloadCard";
import Header from "@site/src/components/Header";
import Hero from "@site/src/components/Hero";
import Stats from "@site/src/components/Stats";
import Features from "@site/src/components/Features";
import Community from "@site/src/components/Community";
import Footer from "@site/src/components/Footer";

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
