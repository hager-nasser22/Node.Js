import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    verified:{
        type:Boolean,
        default:false
    }
});

const userModel = mongoose.model('User' , userSchema);
export default userModel;