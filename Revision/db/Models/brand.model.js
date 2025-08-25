import mongoose from "mongoose";
const brandSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:[3,"Title is too short"],
        maxLength:[30,"Title is too long"],
        unique:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        lowercase:true
    },
    image:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
});

const brandModel = mongoose.model('Brand' , brandSchema);
export default brandModel;