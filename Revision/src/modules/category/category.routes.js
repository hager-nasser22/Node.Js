import express from 'express';
import { addCategory, getAllCategories , getCategoryById , deleteCategory , updateCategory} from './controller/category.controller.js';
import validation from './../../middleware/validation.js';
import { addCategorySchema, getCategoryByIdSchema , updateCategorySchema , deleteCategorySchema} from './category.validation.js';
import { uploadSingle } from '../../middleware/fileUpload.js';
const router = express.Router();
router.route('/')
    .post(uploadSingle("image"), validation(addCategorySchema) , addCategory)
    .get(getAllCategories);

router.route('/:id')
    .get(validation(getCategoryByIdSchema),getCategoryById)
    .put(uploadSingle("image") , validation(updateCategorySchema),updateCategory)
    .delete(validation(deleteCategorySchema),deleteCategory)
export default router;