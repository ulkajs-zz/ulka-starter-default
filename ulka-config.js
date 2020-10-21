module.exports = {
  siteMetaData: {
    title: 'UlkaJs',
    description: 'This is a default starter for ulka js',
    domain: 'https://ulka-starter-default.netlify.app',
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  plugins: [
    'ulka-source-ejs',
    'ulka-plugin-sitemap',
    'ulka-plugin-reading-time',
    'ulka-plugin-autolink-headers',
    'ulka-plugin-minifier',
    'plugin',
  ],
  contents: [
    {
      path: 'contents',
      generatePath: 'blog',
      template: 'blog.ulka',
      name: 'blog',
    },
  ],
}
