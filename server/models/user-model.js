const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.methods.generateToken = async function(){
try {
    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        phone_number:this.phone_number,
        password:this.password,
        username:this.username,
        isAdmin:this.isAdmin,
    },
    process.env.JWT_TOKEN,{
        expiresIn:"30d",
    }
);
} catch (error) {
    console.error(error);
}
}

const User = mongoose.model('User', userSchema);
module.exports = User;
