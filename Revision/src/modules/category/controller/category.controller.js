import Category from './../../../../db/Models/category.model.js';
import slugify from 'slugify';
import mongoose from 'mongoose';
import { AppError } from '../../../utils/AppError.js';
import handleAsyncFun from '../../../middleware/handleAsyncFun.js';
export const getAllCategories = async(req,res,next) =>{
    const categories =await Category.find({});
    if(categories.length === 0) return next(new AppError(404,"No Categories Found"));
    return res.status(200).json({
        "message" : "All Categories Fetched Successfully",
        categories
    });
};
export const addCategory = async(req,res,next)=>{
    if(!req.body.title) return next(new AppError(400,"Category Title Required"));
    req.body.slug = slugify(req.body.title);
    let newCategory = new Category(req.body);
    let userAdded = await newCategory.save();
    return res.status(201).json({
        "message" : "Category Added Successfully",
        userAdded
    });
    //second way
    // let category =await Category.create({
    //     title:req.body.title,
    //     slug:slugify(title)
    // });
    //third way
    // let category = await Category.insertOne({
    //     title:req.body.title,
    //     slug:slugify(title)
    // });
};

export const getCategoryById = handleAsyncFun(async(req,res,next)=>{
    let {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new AppError(400,"Category Id Not Valid"));
    let category =await Category.findById(id);
    if(category == null) return next(new AppError(404,"Category Not Found"));
    return res.status(200).json({
        "message": "Category Fetched Successfully",
        category
    });
}
)
export const updateCategory = async(req,res,next)=>{
    let {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new AppError(400,"Category Id Not Valid"));
    req.body.slug = slugify(req.body.title);
    let category =await Category.findByIdAndUpdate(id,req.body,{new:true});
    if(!category) return next(new AppError(404,"Category Not Found"));
    return res.status(200).json({
        "message":"Category Updated Successfully",
        category
    });
    //another way
    // if(category == null){
    //     res.status(404).json({
    //         "message":"Category Not Found"
    //     });
    // }
    // res.status(200).json({
    //     "message":"Category Updated Successfully",
    //     category
    // });
}

export const deleteCategory = async(req,res,next)=>{
    let {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new AppError(400,"Category Id Not Valid"));
    let category =await Category.findByIdAndDelete(id);
    if(!category) return next(new AppError(404,"Category Not Found"));
    return res.status(200).json({
        "message":"Category Deleted Successfully",
    });
}