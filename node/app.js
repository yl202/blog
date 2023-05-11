const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); //解析参数用的
const userRouter = require('./Router/userRouter');

app.use(cors()); // 解决跨域
app.use(bodyParser.json())
app.all('*',(req,res,next) => {
    // 设置允许跨域的域名，*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*')
    // 允许的header类型
    res.header('Access-Control-Allow-Headers','content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
    // 在请求的回调函数汇中遇见next()，就会继续执行后面的代码
    next()
})

app.use('/user',userRouter)

app.listen(80, () =>{
    console.log('80端口启动！')
})