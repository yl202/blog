const { pool, Result } = require('../connect');


let db = function (sql, res, params = []){
    return new Promise ((resolve,reject)=>{
        pool.getConnection((err, connection) =>{
            connection.query(sql, (err,params,(err,results,fiedls) =>{
                if(err) {
                    let $errData = {
                        code: 500,
                        msg: '服务器内部错误'+ err.message,
                        data : null
                    }
                    res.json(new Result ({data:$errData}))
                }else{
                    // res.json(new Result ({data:results}))
                    resolve(results)
                }
                // 释放连接池
                connection.release();
            }))
        })
    })
}

module.exports = db;