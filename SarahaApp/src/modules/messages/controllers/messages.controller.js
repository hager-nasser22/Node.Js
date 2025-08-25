import handleAsyncError from '../../../middleware/handleAsyncError.js';
import { AppError } from '../../../utils/AppError.js';
import sendEmail from '../../email/emailCreator.js';
import messageModel from './../../../../database/models/message.js';
import userModel from './../../../../database/models/user.js';
export const getAllMessages = handleAsyncError(async(req,res)=>{
    let userId = req.userId;
    let messages =await messageModel.find({userId}).populate("userId");
    if (messages.length == 0) {
        throw new AppError( "No Messages Found" , 404);
    }
    return res.json({
        message: "messages Fetched Successfully",
        messages
    });
});

export const addMessage = handleAsyncError(async(req,res)=>{
    let {messageText , userId} = req.body;
    let user =await userModel.findOne({_id:userId});
    if (user == null) {
        throw new AppError( "User Not Exists" , 404);
    }
    let messageAdded =await messageModel.insertOne({messageText , userId});
    return res.json({
        message: "messages Fetched Successfully",
        messageAdded
    });
});