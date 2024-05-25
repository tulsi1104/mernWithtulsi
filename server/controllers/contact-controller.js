const Contact =require("../models/contact-model");

const contact = async(req,res)=>{
    const {username,email,message}= req.body;
    Alreadycontacted= await Contact.findOne({email});
    if(Alreadycontacted){
        res.status(400).json({msg:"Already submitted"});
    }

    const submitted=await Contact.create({username,email,message});
    if(submitted){
        console.log(submitted);
        res.status(201).json({msg:"Form submiited successfully"});
    }
};

module.exports={contact};