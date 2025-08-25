import mongoose from "mongoose";
const reviewSchema = mongoose.Schema({
    text:{
        type:String,
        required:true,
        trim:true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    }
});

const reviewModel = mongoose.model('Review' , reviewSchema);
export default reviewModel;