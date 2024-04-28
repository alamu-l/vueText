
import * as signalR from "@microsoft/signalr"

const connection = new signalR.HubConnectionBuilder()
.withUrl("/messageHub") // 跨域需要使用绝对地址 需要在vue.config.js中配置代理地址
.configureLogging(signalR.LogLevel.Information)
.build();

async function start(){
  try{
    await connection.start();
    console.log("SignalR 已连接");
  }
  catch(err){
    console.log(err);
    setTimeout(start,10000);// 错误连接
  }
}

export { //很关键
  start
 }