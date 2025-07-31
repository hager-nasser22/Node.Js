import mongoose from "mongoose";
const blogSchema =new mongoose.Schema({
    title:String,
    description:String,
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{
    timeseries:true
});
export default blogModel = mongoose.model('Blog' , blogSchema);