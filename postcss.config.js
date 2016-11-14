/* Set your postcss-loader configuration here */

module.exports = (ctx) => {
  return {
    plugins: [
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')()
    ]
  }
}
