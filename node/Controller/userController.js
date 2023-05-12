const userModel = require('../Model/userModel');
const { Result } = require('../Util/mySql')

exports.handleLogin = async (req, res) => {
    let { username, password } = req.query;
    let $data = await userModel.getUname(res, username);

    // 判断用户名不能为空
    if (!username) {
        console.log('用户名不能为空');
        return res.send(new Result({ msg: '用户名不能为空' }))
    }

    // 判断用户是否存在
    if ($data.length === 0) { 
        console.log('用户名不存在');
        return res.send(new Result({ msg: '用户名不存在' }))
    }

    // 判断密码是否正确
    if (password != $data[0].password) {
        console.log('密码错误！');
        return res.send(new Result({ msg: '密码错误' }))
    }

    // 登录成功
    return  res.send(new Result({ msg: '登录成功',data:$data }))
}

exports.handleDelete = async (req,res) =>{
    let {username,password} = req.body;
    let $data = await userModel.getUname(res,username);
}