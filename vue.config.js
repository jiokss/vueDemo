//判断当前是在哪个环境下，如果是开发，直接指向 / ,否则指向域名
const BASE_URL = process.env.NODE_ENV == 'procution'?'/iview-admin' :''
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  baseUrl:BASE_URL,
  chainWebpack:config => {
    config.resolve.alias
      .set('@',resolve('src'))   //作用：使用 @ 符号代替文件夹
      .set('_c',resolve('src/components'))
  },
  //打包不生成.map文件
  // procutionSourceMap:false,
  //跨域配置
  devServer:{
    proxy:'http://localhost:8081',
    // port:'8888'
  }

}
