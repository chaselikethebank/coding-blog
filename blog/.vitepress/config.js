import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Big Base Blog",
  description:
    " 'If you don't have time to do it correctly now, when will you have time to do it over in the future?' ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    search: {
      provider: "local",
    },
  },
});
