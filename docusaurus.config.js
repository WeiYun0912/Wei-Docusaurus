// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wei Site",
  // staticDirectories: ["static"],
  tagline: "Wei Site",
  url: "https://github.com",
  baseUrl: "/Wei-Docusaurus/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "WeiYun0912", // Usually your GitHub org/user name.
  projectName: "Wei-Docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: "support_us",
        content:
          '⭐️ 如果我的筆記內容有幫助到你的話，可以考慮到我的 <a target="_blank" rel="noopener noreferrer" href="https://github.com/WeiYun0912/Wei-Docusaurus">Github</a> 給顆星星哦！ ⭐️',
        // backgroundColor: "",

        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        title: "WeiYun0912",
        logo: {
          alt: "My Site Logo",
          src: "img/wei.png",
          srcDark: "img/wei2.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Note",
          },
          {
            to: "about",
            label: "About Me",
            position: "left",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/WeiYun0912",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.cakeresume.com/wei-wei-e8a62e",
            label: "CakeResume",
            position: "right",
          },
          {
            href: "https://www.youtube.com/user/123123960/featured",
            label: "Youtube",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/ChunWeiYeah/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/weiwei225/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/user/123123960/featured",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Note",
                to: "/docs/intro",
              },
              {
                label: "CakeResume",
                href: "https://www.cakeresume.com/wei-wei-e8a62e",
              },
              {
                label: "GitHub",
                href: "https://github.com/WeiYun0912",
              },

              {
                label: "Medium Post",
                href: "https://medium.com/@weiyun0912",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By WeiYun0912. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell"],
      },
    }),
};

module.exports = config;
