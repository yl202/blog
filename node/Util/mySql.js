const { app, pool, Result } = require('../connect');
const login = require('./login/index');

app.all('*', (req, res, next) => {
    // 这里处理全局拦截，一定要写在最上面，不然会被别的接口匹配到
    if(req.get('Orgin')) return next()
    next();
})

app.all('/', (req, res) => {
    pool.getConnection((err, connection) => {
        res.json({ a: "b" })
        connection.release(); // 释放连接池，等待别的连接使用
    })
})

app.use('/login', login);

app.listen(80, () => console.log('服务启动'))
