const px2rem = require('postcss-px2rem')
const path = require('path')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同 设计稿等分之后的值
})

module.exports = {
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        // changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        ws: true
      }
    }
  }
}