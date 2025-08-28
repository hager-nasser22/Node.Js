import mongoose from "mongoose";
import { AppError } from './../utils/AppError.js';
import multer from "multer";
const uploadFile = ()=>{
    const storage = multer.memoryStorage();
    function fileFilter(req , file , cb){
        if(file.mimetype.startsWith("image")){
            cb(null , true)
        }else{
            cb(new AppError(400 , "Invalid Image") , false);
        }
    }
    const upload = multer({storage,fileFilter});
    return upload;
}

export const uploadSingle = (fieldName) => uploadFile().single(fieldName);
export const uploadArray = (fieldName) => uploadFile().array(fieldName,10);
export const uploadFields = (fieldName) => uploadFile().fields(fieldName);
    // const storage = multer.diskStorage({
    // destination:function(req,file,cb){
    //     cb(null , 'uploads');
    // },
    // filename:function(req,file,cb){
    //     cb(null ,new mongoose.Types.ObjectId + '_' + file.originalname);
    // }
    // });