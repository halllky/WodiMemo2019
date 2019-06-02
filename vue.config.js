module.exports = {
  publicPath: './',
  assetsDir: './',
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/util.scss";'
      }
    }
  }
}
