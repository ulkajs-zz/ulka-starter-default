// All the configurations are changable

module.exports = {
  require,
  // siteMetaData is available inside all md and ulka files
  siteMetaData: {
    title: "UlkaJs",
    desription: "This is a default starter for ulka js",
  },
  // Build path from root dir
  buildPath: "build",
  // Path to the directory of ulka files from src dir
  pagesPath: "pages",
  //   Path to the templates dir from src dir
  templatesPath: "templates",

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
    /**
     * You may not need this preparse and postparse feature but
     * if you, pass function to these arrays.
     * function takes one arg which is markdown for preparse and html for postparse
     * and function should return the value after changing the markdown or html
     */
    // Pre parse run before parsing markdown to html
    preParse: [],
    // post parse runs after parsing markdown to html
    postParse: [],
  },
};
