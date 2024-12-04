import { sidebar } from "vuepress-theme-hope";

export default sidebar({
      "/": [
            "",
            "intro",
            {
                  text: "Java",
                  icon: "java",
                  prefix: "/Java/",
                  children: [
                        {
                              text: "Java基础",
                              icon: "java",
                              prefix: "base/",
                              children: [
                                    { text: "基础", icon: "java", link: "base" },
                                    { text: "集合", icon: "collection", link: "collection" },
                                    { text: "Map", icon: "collection", link: "Map" },
                                    { text: "并发", icon: "concurrency", link: "concurrency" },
                                    { text: "JVM", icon: "JVM", link: "jvm" },
                              ],
                        },
                        {
                              text: "Java框架",
                              icon: "java",
                              prefix: "frame/",
                              children: [
                                    { text: "Spring", icon: "Spring", link: "Spring" },
                                    { text: "SpringBoot", icon: "SpringBoot", link: "SpringBoot" },
                              ],
                        }
                  ],
            },
      ],
});
