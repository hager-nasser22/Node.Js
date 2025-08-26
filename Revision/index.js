import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectionDb from './db/connection.js'; 
import allRoutes from './src/routes.js';
import globalError from './src/middleware/globalError.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectionDb();
allRoutes(app);
app.use(globalError);
app.listen(5000,()=>{
    console.log("Server Running........");
});