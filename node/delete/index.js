const { pool,router,Result } =require('../connect');

router.delete('/api/v1/item/:id', (req,res) =>{
    const itemId = req.params.itemId;

    pool.getConnection((err,connection) =>{
        connection.query('',(err, result) =>{
            res.json(new Result ({data:result}))
            connection.release();
        })
    })
    // 在这里执行删除操作
    res.send(`删除 item id 为${itemId}的数据`)
})


const db = require('../query/index');
const {router } = require()

router.get('/delete', (req,res) =>{
    db('SELECT * FROM usermsg', res , [username,password]).then(sqldata =>{
        if(sqldata ){
            console.log('删除成功')
        }else{
            console.log('删除失败');
        }
    })
})