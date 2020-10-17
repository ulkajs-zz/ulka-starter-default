module.exports = {
  siteMetaData: {
    title: 'UlkaJs',
    description: 'This is a default starter for ulka js',
    domain: 'https://ulka-starter-default.netlify.app/',
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  plugins: [
    'ulka-plugin-sitemap',
    'ulka-plugin-autolink-headers',
    'ulka-plugin-reading-time',
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
