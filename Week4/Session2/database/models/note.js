import {sequelize} from "../connection.js";
import { DataTypes } from "sequelize";
import userModel from './user.js';

const noteModel = sequelize.define("note",{
    title:{
        type:DataTypes.STRING(100),
        required:true,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        required:false,
        allowNull:true
    }
});
export default noteModel;