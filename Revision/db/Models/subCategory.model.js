import mongoose from "mongoose";
const subcategorySchema = mongoose.Schema({
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
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
});

const subCategoryModel = mongoose.model('SubCategory' , subcategorySchema);
export default subCategoryModel;