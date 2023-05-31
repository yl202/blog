const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); //解析参数用的
const app = express();
const router = express.Router();
const option = {
    host: '127.0.0.1',
    user: 'root',
    password: 'Aa123456',
    port: '3306',
    database: 'new_datadbase',
    connectTimeout: 5000, // 连接超时
    multipleStatements: true // 支持执行多条 sql 语句
}
app.use(cors()); // 解决跨域
app.use(bodyParser.json()); // json请求
app.use(bodyParser.urlencoded({ extended: false })) // 表单请求

let pool;
repool();

function Result({ code = 200, msg = '成功', data = {} }) {
    this.code = code;
    this.msg = msg;
    this.data = data;
}

function repool() { // 断线重连机制，每隔3s重连一次
    pool = mysql.createPool({ // 创建连接池
        ...option,
        waitForConnections: true, // 当无连接池可用时，等待（true）还是报错（false）
        connectionLimit: 100, // 连接数限制
        queueLimit: 0  // 最大连接等待数（0为不限制）
    })
    pool.on('error', err => err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(repool, 3000))
}

module.exports = { pool, Result, router, app }

/**
 * 这是get方法
 */
// app.get('/',(req,res) => {
//     res.send('<div style="color:red">hello world</div>')
// })


/**
 * 使用 * 来拦截接口，每一个接口请求时候都会被匹配到*里，最终返回 "***"
 */
// app.all('*',(req,res) =>{
//     res.json('***');
// })

// 可以通过内部判断来进行操作
// let login = true;
// app.all('*',(req,res,next) =>{
//     if(!login) return res.json('未登录');
//     next();
// })

/**
 * 这是post方法
 */
// app.post('/test/:data',(req,res) => {
//     // res.json('这是post方法,接口为test')
//     return res.json({query:req.query,data:req.params,json:req.body})
// })