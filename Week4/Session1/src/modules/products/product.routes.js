import express from "express";
import { getAllProduct , getProductById , productSearch , createProduct , updateProduct , deleteProduct} from "./controllers/products.controller.js";
const router = express.Router();

//get all products
router.get('/products' , getAllProduct);
//get product by id
router.get('/product/:id' , getProductById);
//search product by name
router.get('/product/search/:key' , productSearch);
//create product
router.post('/products/create',createProduct);

//update product
router.patch('/product/update/:id', updateProduct);
//delete product
router.delete('/product/delete/:id',deleteProduct);

export default router;