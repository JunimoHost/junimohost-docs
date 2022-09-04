// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "junimohost docs",
  tagline: "Documentation for dedicated Stardew Valley servers",
  url: "https://junimohost-docs.netlify.app",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "junimohost", // Usually your GitHub org/user name.
  projectName: "junimohost-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-65QLHX6H7G",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/JunimoHost/junimohost-docs/edit/master",
        },
        blog: false,
        // blog: {

        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "junimohost",
        logo: {
          alt: "junimohost Logo",
          src: "img/logo.svg",
          href: "/docs/how-does-a-stardew-server-work",
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
            href: "https://discord.gg/bPAQEBzE",
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
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
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
                href: "https://github.com/JunimoHost/junimohost-docsite",
              },
              {
                label: "Contact Us",
                href: "/docs/contact-us",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} junimohost LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
