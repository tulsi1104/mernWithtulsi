const express = require('express');
const router = express.Router();
// const { home, register } = require('../controllers/auth-controllers');
const auth = require('../controllers/auth-controllers');
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route('/').get(auth.home);
router.route('/register').post(validate(signupSchema),auth.register);
router.route('/login').post(auth.login);


// app.get('/',(req,res)=>{
//     res.status(200).send('welcome to tulsis website')
// })

// app.get('/register',(req,res)=>{
//     res.status(200).send('welcome to registration page')
// })

module.exports = router;