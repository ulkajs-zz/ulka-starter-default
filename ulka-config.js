// All the configurations are changable

module.exports = {
  siteMetaData: {
    title: "UlkaJs",
    description: "This is a default starter for ulka js",
    domain: "https://ulka-starter-default.netlify.app/",
  },
  buildPath: "build",
  pagesPath: "pages",
  templatesPath: "templates",
  plugins: [
    "ulka-plugin-reading-time",
    {
      resolve: "ulka-plugin-autolink-headers",
      options: {
        elements: ["h1", "h2", "h3", "h4"],
      },
    },
    {
      resolve: "ulka-plugin-sitemap",
    },
    "ulka-plugin-retext-smartypants",
    {
      resolve: "ulka-plugin-remark-emoji",
      options: {
        emoticon: true,
        padSpaceAfter: true,
      },
    },
    "ulka-plugin-rehype-highlight",
  ],
  contents: {
    path: "contents",
    generatePath: "blog",
    template: "blog.ulka",
  },
};
