var express = require('express');
var userController = require('../controllers/userController');
var userRouter = express.Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserByID);
userRouter.post('/', userController.createUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.put('/:id', userController.updateUser);

module.exports = userRouter;
