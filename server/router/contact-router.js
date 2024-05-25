const express = require('express');
const router = express.Router();
// const { home, register } = require('../controllers/auth-controllers');
const contact = require('../controllers/contact-controller');
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route('/contact').post(contact.contact);


// app.get('/',(req,res)=>{
//     res.status(200).send('welcome to tulsis website')
// })

// app.get('/register',(req,res)=>{
//     res.status(200).send('welcome to registration page')
// })

module.exports = router;