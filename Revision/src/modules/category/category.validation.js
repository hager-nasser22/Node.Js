import Joi from "joi";

export const addCategorySchema = Joi.object({
    title:Joi.string().min(3).max(30).required(),
    // image: Joi.string().uri().required()
    image:Joi.object({
        fieldname:  Joi.string().required(),
        originalname:  Joi.string().required(),
        encoding:  Joi.string().required(),
        mimetype: Joi.string().valid('image/png','image/jpg','image/jpeg'),
        buffer: Joi.any().required() ,
        size: Joi.number().max(50000),
    }).required()
});
export const getCategoryByIdSchema = Joi.object({
    "id":Joi.string().hex().length(24).required(),
});
export const updateCategorySchema = Joi.object({
    "id":Joi.string().hex().length(24).required(),
    "title":Joi.string().min(3).max(30).optional(),
    "image":Joi.object({
        fieldname:  Joi.string().required(),
        originalname:  Joi.string().required(),
        encoding:  Joi.string().required(),
        mimetype: Joi.string().valid('image/png','image/jpg','image/jpeg'),
        buffer: Joi.any().required() ,
        size: Joi.number().max(50000),
    }).optional()
});
export const deleteCategorySchema = Joi.object({
    "id":Joi.string().hex().length(24).required(),
});