import express from "express";
import cors from "cors";
import productRoutes from "./src/modules/products/product.routes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(productRoutes);
app.listen(3000 , ()=>{
    console.log("Running.........");
})