import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ko-KR",
  title: "Hyebin.dev",
  description: "portfolio",
  base: "/docs/",

  themeConfig: {
    nav: [{ text: "Portfolio", link: "/" }],

    sidebar: [
      {
        text: "Resume",
        items: [
          { text: "Projects", link: "/" },
          // { text: "Projects", link: "/projects" },
        ],
      },
    ],

    outline: {
      level: [2, 3],
      label: "목차",
    },
  },
});
