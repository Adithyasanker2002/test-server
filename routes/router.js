const express = require('express')
const userController = require('../controllers/userController')
const detailsController = require('../controllers/detailsController')


const router = new express.Router()

// registerpost
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)
// 

// login
router.post('/details',detailsController.addUserController)

module.exports = router

// get
// Get users
router.post('/login/userdetails',userController.userDetails)