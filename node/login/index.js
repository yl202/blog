const { pool, router, Result } = require('../connect');

router.get('/', (req, res) => {
    pool.getConnection((err, conneciton) => {
        conneciton.query('SELECT * FROM usermsg', (err, result) => {
            res.json(new Result({ data: result }));
            conneciton.release();
        })
    })
})

module.exports = router;