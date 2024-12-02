import { navbar } from "vuepress-theme-hope";

export default navbar([
      "/",
      // "/demo/", // 直接跳转到指定的目录下
      {
            text: "Java",
            icon: "java",
            prefix: "/posts/",
            children: [
                  {
                        text: "Java基础",
                        icon: "java",
                        prefix: "apple/",
                        children: [
                              { text: "苹果1", icon: "pen-to-square", link: "1" },
                        ],
                  }
            ],
      },
      // {
      //       text: "V2 文档",
      //       icon: "book",
      //       link: "https://theme-hope.vuejs.press/zh/",
      // },
]);
