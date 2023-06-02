const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/user':{
        target:'http://localhost/',
        pathRewrite:{'^/user':''},
        ws:false,
        changeOrigin:true
      },
      '/demo2':{
        target:'http://localhost/',
        pathRewrite:{'^/demo2':''},
        ws:false,
        changeOrigin:true
      },
      '/test3':{
        target:'http://localhost/',
        pathRewrite:{'^/test3':''},
        ws:false,
        changeOrigin:true
      }
    }
  }
})