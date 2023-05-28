const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss')

module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  plugins: [prettierPluginTailwindcss],
}
