import { DataTypes } from "sequelize";
import {sequelize} from "../connection.js";
import noteModel from './note.js';
const userModel = sequelize.define('user',{
    name:{
        type:DataTypes.STRING(100),
        required:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,  //255
        required:true,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,  //255
        required:true,
        allowNull:false
    }

});
export default userModel;