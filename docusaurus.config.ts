import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Bintoo",
  tagline: "Free Local Hosting For Minecraft Server",
  favicon: "bintoo-logo.png",

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      type: "text/css",
    },
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://bintoo.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "errorly-project", // Usually your GitHub org/user name.
  projectName: "bintoo-website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenAnchors: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/errorly-project/bintoo-website/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/errorly-project/bintoo-website/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ["./src/plugins/tailwind-loader.cjs"],

  themeConfig: {
    // Replace with your project's social card
    image: "banner/docs-banner.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: "google-material-icons",
        content: "enabled",
      },
      {
        name: "keywords",
        content:
          "Minecraft, Minecraft server, local hosting, free Minecraft hosting, server manager, Bintoo, Bintoo server, hosting software, Spigot, Paper, Forge, Fabric, local Minecraft server",
      },
      {
        name: "description",
        content:
          "Bintoo is a free local hosting software for Minecraft servers. Easily set up, manage, and run a Minecraft server on your own computer with plugin and mod support.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:site_name",
        content: "Bintoo",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@bintoo_xyz",
      },
      {
        name: "twitter:creator",
        content: "@bintoo_xyz",
      },
    ],
    navbar: {
      title: "Home",
      logo: {
        alt: "Bintoo Logo",
        src: "bintoo-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/blog",
          label: "Blogs",
          position: "left",
        },
        {
          href: "https://discord.gg/eGWSxbnXrh",
          label: "Discord",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: " ",
          items: [
            {
              html: `
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                  <img src="/bintoo-logo.png" alt="Bintoo Logo" style="height: 2rem; width: auto;" />
                  <span style="font-size: 1.25rem; font-weight: 800; color: #ffffff;">Bintoo</span>
                </div>
                <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 1rem; line-height: 1.5;">
                  Free local Minecraft hosting software.
                </p>

              `,
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
            {
              label: "Release Notes",
              href: "/blog/tags/release",
            },
            {
              label: "Youtube Channel",
              href: "https://www.youtube.com/@bintoo_xyz",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "About Bintoo",
              href: "#",
            },
            {
              label: "Terms Of Service",
              href: "/tos",
            },
            {
              label: "Privacy Policy",
              href: "/privacy-policy",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://x.com/bintoo_xyz",
            },
            {
              label: "Discord Server",
              href: "https://discord.gg/eGWSxbnXrh",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Errorly Project. All rights reserved. Not affiliated with Mojang Studios.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
