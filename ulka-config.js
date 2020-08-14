// All the configurations are changable

module.exports = {
  // siteMetaData is available inside all md and ulka files
  siteMetaData: {
    title: "UlkaJs",
    description: "This is a default starter for ulka js",
  },
  // Build path from root dir
  buildPath: "build",
  // Path to the directory of ulka files from src dir
  pagesPath: "pages",
  //   Path to the templates dir from src dir
  templatesPath: "templates",
  plugins: [
    "ulka-plugin-reading-time",
    {
      resolve: "ulka-remarkable-link-headers",
      options: {
        hLevels: [1, 2],
        setAnchor: false,
        anchorValue: "# ",
      },
    },
  ],
  contents: {
    // Path to the directory of markdown files from src dir
    path: "contents",
    /**
     * Directory to include all contents
     * for eg:
     * post-1.md => blog/post-1.html
     * tutorials/part-1/index.md => blog/tutorials/part-1/index.md
     */
    generatePath: "blog",
    // File inside `templatesPath` which is used by contents
    template: "blog.ulka",
  },
};
