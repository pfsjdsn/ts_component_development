const { defineConfig } = require('@vue/cli-service')
//const path = require("path");
//const resolve = function(dir) {
//  return path.join(__dirname, dir);
//};
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist',
    indexPath: 'index.html',
    transpileDependencies: true,
    lintOnSave: false, //每次保存都启用eslint
    /*chainWebpack: config => {//这里修改路径别名，不过对我无效
      config.resolve.alias
          .set("@", resolve("src"))
          .set("@v", resolve("src/views"))
          .set("@c", resolve("src/components"))
          .set("@u", resolve("src/utils"))
          .set("@s", resolve("src/service")); /!* 别名配置 *!/
      config.optimization.runtimeChunk("single");
    },*/
    devServer: {
        port: 8000
    }
})