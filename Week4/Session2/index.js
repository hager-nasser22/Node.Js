import express from 'express';
import cors from 'cors';
import connection from './database/connection.js';
import userRoutes from './src/modules/users/user.routes.js';
import noteRoutes from './src/modules/notes/note.routes.js';
import  './database/models/associations.js';
const app = express();
app.use(express.json());
app.use(cors());
connection();
app.use(userRoutes);
app.use(noteRoutes);
app.listen(3000 , ()=>{
    console.log("Server Running.........");
});