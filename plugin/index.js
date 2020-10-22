const emoji = require('node-emoji')

exports.remarkablePlugin = function ({ md }) {
  md.use(plugin)
}

function plugin(md) {
  const text_rule = md.renderer.rules.text

  md.renderer.rules.text = (tokens, idx, ...rest) => {
    tokens[idx].content = emoji.emojify(tokens[idx].content)
    return text_rule(tokens, idx, ...rest)
  }
}

exports.beforeBuild = ({ info, contentsMap }) => {
  console.log(contentsMap.blog.map(b => b.values.frontMatter))
}
