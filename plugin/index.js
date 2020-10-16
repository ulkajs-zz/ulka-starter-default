const hljs = require('highlight.js')

module.exports = {
  remarkablePlugin({ md }) {
    md.set({
      typographer: true,
      quotes: '“”‘’',
      langPrefix: 'hljs language-',
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value
          } catch (err) {}
        }

        try {
          return hljs.highlightAuto(str).value
        } catch (err) {}

        return '' // use external default escaping
      },
    })

    const rule = md.renderer.rules.fence
    md.renderer.rules.fence = function (tokens, idx, options, env, instance) {
      if (!tokens[idx].params) {
        tokens[idx].params = 'ulka-unknown'
      }
      return rule.call(this, tokens, idx, options, env, instance)
    }
  },
}
