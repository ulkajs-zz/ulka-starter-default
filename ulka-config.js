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
      resolve: "ulka-remarkable-link-headers",
      options: {
        hLevels: [1, 2, 3],
        setAnchor: false,
        anchorValue: "# ",
      },
    },
    {
      resolve: "ulka-plugin-sitemap",
      options: {
        lastmod: true,
      },
    },
  ],
  contents: {
    path: "contents",
    generatePath: "blog",
    template: "blog.ulka",
  },
};
