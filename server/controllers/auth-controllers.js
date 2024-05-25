const User =require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req,res) =>{
    try{
        res.status(200).send('welcome to tulsis website using routing');
    }
    catch(error){
        console.log(error);
    }
};

const register = async (req,res) =>{
    try{
        console.log(req.body);
        const {username,email,password,phone_number} = req.body;

        const userexist=await  User.findOne({email});

        if(userexist){
            return res.status(400).json({msg:"Email already exists"});
        }

        const salt= 10;
        const hashedPassword = await bcrypt.hash(password,salt);

        const usercreated= await User.create({username,email,password:hashedPassword,phone_number});
        if(usercreated){
            res.status(201).json({msg:"Registered",token: await usercreated.generateToken(),userId:usercreated._id.toString()});
        }
    }
    catch(error){
        console.log(error);
    }
};

const login= async (req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({msg:"Invalid"});
        }
        const user = await bcrypt.compare(password,userExist.password);
        if(user){
            res.status(200).json({msg:"Login Successfully",
                                  token: await userExist.generateToken(),
                                  userId:userExist._id.toString()});
        }
        else{
            res.status(500).json({msg:"Invalid email or password"});
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

module.exports = { home,register,login };
