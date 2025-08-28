import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectionDb from './db/connection.js'; 
import allRoutes from './src/routes.js';
import globalError from './src/middleware/globalError.js';
import pageNotFound from './src/middleware/404Page.js';
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(process.env.API_PREFIX+"/uploads",express.static('uploads'));
connectionDb();
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
allRoutes(app);
app.use(pageNotFound);
app.use(globalError);
app.listen(5000,()=>{
    console.log("Server Running........");
});