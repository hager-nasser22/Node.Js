import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:String,
    role:{
        type:String,
        enums:['User' , 'Admin'],
        default:'User'
    },
    password:{
        type:String,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
});

const userModel = mongoose.model('User' , userSchema);
export default userModel;