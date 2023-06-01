const express = require('express');
const userRouter = express.Router();

// 导入 userController
const userController = require('../Controller/userController');

// 登录
userRouter.get('/login', userController.handleLogin)

module.exports = userRouter;