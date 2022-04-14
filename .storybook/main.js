const { loadConfigFromFile } = require('vite')
const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(prevConfig) {
    const { config } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.js'))
    return { ...prevConfig, ...config }
  }
}