const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/user':{
        target:'http://127.0.0.1:80/',
        pathRewrite:{'^/user':''},
        ws:false,
        changeOrigin:true
      },
      '/demo2':{
        target:'http://localhost:80/',
        pathRewrite:{'^/demo2':''},
        ws:false,
        changeOrigin:true
      },
      '/test3':{
        target:'http://localhost:80/',
        pathRewrite:{'^/test3':''},
        ws:false,
        changeOrigin:true
      }
    }
  }
})