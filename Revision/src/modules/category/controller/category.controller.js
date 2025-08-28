import Category from './../../../../db/Models/category.model.js';
import slugify from 'slugify';
import mongoose from 'mongoose';
import { AppError } from '../../../utils/AppError.js';
import handleAsyncFun from '../../../middleware/handleAsyncFun.js';
import { v2 as cloudinary } from "cloudinary";
import validation from '../../../middleware/validation.js';
import { addCategorySchema } from '../category.validation.js';
export const getAllCategories = async (req, res, next) => {
    const categories = await Category.find({});
    if (categories.length === 0) return next(new AppError(404, "No Categories Found"));
    return res.status(200).json({
        "message": "All Categories Fetched Successfully",
        categories
    });
};

export const addCategory = async (req, res, next) => {
    let slug = slugify(req.body.title);
    let uploadStream = await new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
            { folder: "categories" },
            (error, upload) => {
                if (error) return reject(new AppError(500, "Image upload failed"));
                resolve(upload);
            }
        );
        stream.end(req.file.buffer);
    });
    console.log(uploadStream);
    let category = new Category({ title: req.body.title, slug, image: uploadStream.secure_url });
    let categoryAdded = await category.save();
    if (!categoryAdded) return next(new AppError(500, "Category Not Added"));
    return res.json({ "message": "success", categoryAdded });
}

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

export const getCategoryById = handleAsyncFun(async (req, res, next) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError(400, "Category Id Not Valid"));
    let category = await Category.findById(id);
    if (category == null) return next(new AppError(404, "Category Not Found"));
    return res.status(200).json({
        "message": "Category Fetched Successfully",
        category
    });
}
)
export const updateCategory = async (req, res, next) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError(400, "Category Id Not Valid"));
    let slug = slugify(req.body.title);
    let categoryData = {};
    if (req.body.title) {
        categoryData.title = req.body.title;
        categoryData.slug = slugify(req.body.title);
    }
    if (req.file) {
        let uploadStearm = await new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
                { folder: "categories" },
                (error, result) => {
                    if (error) return reject(new AppError(400, "Image Not Uploaded"));
                    resolve(result);
                }
            )
            stream.end(req.file.buffer);
        });
        categoryData.image = uploadStearm.secure_url;
    }
    let category = await Category.findByIdAndUpdate(id, categoryData, { new: true });
    if (!category) return next(new AppError(404, "Category Not Found"));
    return res.status(200).json({
        "message": "Category Updated Successfully",
        category
    });
}
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

export const deleteCategory = async (req, res, next) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return next(new AppError(400, "Category Id Not Valid"));
    let category = await Category.findByIdAndDelete(id);
    if (!category) return next(new AppError(404, "Category Not Found"));
    return res.status(200).json({
        "message": "Category Deleted Successfully",
    });
}