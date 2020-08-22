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
      resolve: "ulka-plugin-sitemap",
    },
  ],
  contents: {
    path: "contents",
    generatePath: "blog",
    template: "blog.ulka",
  },
};
