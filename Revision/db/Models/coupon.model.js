import mongoose from "mongoose";
const couponSchema = mongoose.Schema({
    code:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    discount:{
        type:Number,
        min:0
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    },
    expires:Date
},{timestamps:true});

const couponModel = mongoose.model('Coupon' , couponSchema);
export default couponModel;