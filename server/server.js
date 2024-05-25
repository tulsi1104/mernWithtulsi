require('dotenv').config(); //for env variables
const express = require('express');
const app = express();
const router = require("./router/auth-router");
const contact = require("./router/contact-router");
const database = require("./utils/db");
app.use(express.json());

app.use("/",router);
app.use("/",contact);


// app.get('/',(req,res)=>{
//     res.status(200).send('welcome to tulsis website');
// });

// app.get('/register',(req,res)=>{
//     res.status(200).send('welcome to registration page');
// });

const port = 5000;

database().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    });
})
