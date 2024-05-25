const {z} = require("zod");

const signupSchema = z.object({
    username: z.string({required_error :"Username is required."})
    .trim()
    .min(3,{message:"Username must be at least 3 characters."})
    .max(255,{message:"Username must not be more then 255 characters."}),

    email: z.string({required_error :"Email is required."})
    .trim()
    .min(3,{message:"Username must be at least 3 characters."})
    .max(255,{message:"Username must not be more then 255 characters."}),
    
    phone_number: z.string({required_error :"Phone number is required."})
    .trim()
    .min(10,{message:"Phone must be at least 10 characters."})
    .max(20,{message:"Phone must not be more then 20 characters."}),

    password: z.string({required_error :"Password is required."})
    .trim()
    .min(7,{message:"Password must be at least 7 characters."})
    .max(1024,{message:"Phone must not be more then 1024 characters."}),
});

module.exports = signupSchema;