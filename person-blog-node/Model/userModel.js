const {db} = require('../Util/mySql');

// 通过用户名查询对应数据
exports.getUname = (res,username) =>{
    let sql = 'SELECT * FROM user WHERE username = ?'
    let data = db(sql, res, [username])
    return data;
}