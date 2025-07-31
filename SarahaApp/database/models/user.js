import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[2 , "Min Length For Name Is 2"],
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:[5 , "Min Length For Password Is 5"],
    },
    verified:{
        type:Boolean,
        default:false
    }
});

const userModel = mongoose.model('User' , userSchema);
export default userModel;