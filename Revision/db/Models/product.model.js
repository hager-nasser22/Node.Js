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
    description:{
        type:String,
        required:true,
        minLength:[3,"Description is too short"],
        maxLength:[300,"Description is too long"],
    },
    slug:{
        type:String,
        required:true,
        lowercase:true
    },
    imageCover:String,
    images:[String],
    price:{
        type:Number,
        required:true,
        min:0
    },
    priceAfterDiscount:{
        type:Number,
        required:true,
        min:0
    },
    quntity:{
        type:Number,
        default:0,
        required:true
    },
    sold:{
        type:Number,
        default:0,
        required:true
    },
    rateCount:Number,
    rateAvg:{
        type:Number,
        min:0,
        max:5
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
    subCategory:{
        type:mongoose.Types.ObjectId,
        ref:'SubCategory'
    },
    brand:{
        type:mongoose.Types.ObjectId,
        ref:'Brand'
    },
},{timestamps:true});

const subCategoryModel = mongoose.model('SubCategory' , subcategorySchema);
export default subCategoryModel;