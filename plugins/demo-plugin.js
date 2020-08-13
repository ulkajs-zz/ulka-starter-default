module.exports = {
  // Count total characters in markdown and pass to frontmatter
  beforeMdParse: (markdown, frontMatter) => ({
    markdown,
    frontMatter: {
      ...frontMatter,
      totalWords: markdown.split("").length,
    },
  }),
};
