import express from "express";
import cors from "cors";
import connection from "./database/connection.js";
import router from "./src/modules/users/user.routes.js";
import userRoutes from './src/modules/users/user.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
connection();
app.use('/users',userRoutes);
app.listen(3000,()=>{
    console.log("Server Running.........");
});