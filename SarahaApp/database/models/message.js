import mongoose, { Types } from "mongoose";
const messageSchema = mongoose.Schema({
    messageText:{
        type:String,
    },
    userId:{
        type:Types.ObjectId,
        ref:'User'
    }
});

const messageModel = mongoose.model('Message' , messageSchema);
export default messageModel;