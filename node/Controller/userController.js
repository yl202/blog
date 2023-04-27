const userModel = require('../Model/userModel');

exports.handleLogin = async(req,res) =>{
    let {username,password} = req.query
    console.log(req.query)
    // 注意：get的参数在query里面；post的参数在body里面
    let data = await userModel.getUname(username);
    console.log(data);

    // 判断用户名不能为空
    if (username) {
        res.send({msg:'用户名不能为空'})
        return;
    }

    // 判断用户是否存在
    if(data.length === 0){
        res.send({msg:'用户名不存在'})
    }

    // 判断密码是否正确
    if(password != data[0].password){
        res.send({msg:'密码错误！'})
    }

    // 登录成功
    res.send({success:true,msg:'登陆成功！'})
}
