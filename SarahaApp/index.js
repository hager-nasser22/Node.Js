import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/connection.js';
import userRoutes from './src/modules/users/user.routes.js';
import messageRoutes from './src/modules/messages/message.routes.js';
import globalError from './src/utils/globalError.js';

dotenv.config({});
const app = express();
app.use(express.json());
app.use(cors());
dbConnection();
app.use('/users' , userRoutes);
app.use('/messages' , messageRoutes);
app.use(globalError);
app.listen(process.env.PORT,()=>{
    console.log("Server Running.......");
});