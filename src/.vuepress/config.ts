import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
      base: "/blog/", // 部署到 GitHub Pages 时需要加上配置的后缀
      lang: "zh-CN",
      title: "CodingQ92",
      description: "CodingQ92博客站",
      theme,
      // 和 PWA 一起启用
      // shouldPrefetch: false,
});
