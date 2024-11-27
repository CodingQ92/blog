import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
      base: "/blog/", // 部署到 GitHub Pages 时需要加上配置的后缀

      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",

      theme,

      // 和 PWA 一起启用
      // shouldPrefetch: false,
});
