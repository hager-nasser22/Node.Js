import mongoose, { Types } from "mongoose";
const messageSchema = mongoose.Schema({
    messageText:{
        type:String,
        required:true,
        maxLength:[100 , "Max Length For Message Is 100"],
        minLength:[10 , "Min Length For Message Is 10"],
    },
    userId:{
        type:Types.ObjectId,
        ref:'User'
    }
});

const messageModel = mongoose.model('Message' , messageSchema);
export default messageModel;