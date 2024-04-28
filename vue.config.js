const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, //是否将依赖项进行转译 对于某些依赖项中包含 ES6+ 语法的情况很有用
  
lintOnSave:false, //检查命名规范 
devServer: { // 开发环境跨域情况的代理配置
  proxy:{
    // 【必要】访问自己搭建的后端服务器
    '/api': {
      target: 'https://localhost:7209/',
      changOrigin: true,
      ws: true,
      secure: false,
      pathRewrite: {
          '^/api': '/'
      }
  },
  '/messageHub':{
    target: 'https://localhost:7209/signalRFile/MyHub',
    ws: true,  //代理websockets
    changeOrigin: true, // 虚拟的站点需要更管origin
  }
}
}
},
 
)



