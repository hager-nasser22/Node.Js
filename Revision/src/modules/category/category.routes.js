import express from 'express';
import { addCategory, getAllCategories , getCategoryById , deleteCategory , updateCategory} from './controller/category.controller.js';
const router = express.Router();
router.route('/')
    .post(addCategory)
    .get(getAllCategories);

router.route('/:id')
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategory)
export default router;