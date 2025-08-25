import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectionDb from './db/connection.js'; 
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectionDb();
app.listen(5000,()=>{
    console.log("Server Running........");
});