import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// netlify deploy preview
const isDeployPreview = process.env.CONTEXT === "deploy-preview";
const baseUrl = isDeployPreview ? "/" : "/docs/";

const config: Config = {
  title: "junimohost docs",
  tagline: "Documentation for dedicated Stardew Valley servers",
  url: "https://junimohost-docs.netlify.app",
  baseUrl: baseUrl,
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "junimohost", // Usually your GitHub org/user name.
  projectName: "junimohost-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
        gtag: {
          trackingID: "G-65QLHX6H7G",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/JunimoHost/junimohost-docs/edit/master",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "junimohost",
      logo: {
        alt: "junimohost Logo",
        src: "img/logo.svg",
        href: `${baseUrl}how-does-a-stardew-server-work`,
        target: "_self",
      },
      items: [
        {
          type: "doc",
          docId: "how-does-a-stardew-server-work",
          position: "left",
          label: "Documentation",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: "Discord",
          href: "https://discord.gg/w23GVXdSF7",
          position: "right",
        },
        {
          label: "Sign In",
          href: "https://junimohost.com/dashboard",
          position: "right",
        },
        {
          label: "Sign Up",
          href: "https://junimohost.com/dashboard",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/bPAQEBzE",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/junimohost",
            },
            {
              label: "GitHub",
              href: "https://github.com/JunimoHost/junimohost-docs",
            },
            {
              label: "Contact Us",
              href: `${baseUrl}contact-us`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} junimohost LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
