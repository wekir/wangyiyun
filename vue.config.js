module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js'
    },
  },
  lintOnSave: false,  //关闭语法检查
  devServer: {
    proxy: 'http://localhost:8000'
  }
}