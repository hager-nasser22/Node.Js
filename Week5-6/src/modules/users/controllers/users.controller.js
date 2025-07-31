import userModel from './../../../../database/models/user.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getAllUser = async(req,res)=>{
    let users =await userModel.find();
    if(users.length == 0){
        return res.json({
        "message":"NotFound"
    });
    }
    return res.json({
        "message":"success",
        users
    });
};

export const register = async(req,res)=>{
    let {name , email , password , age} = req.body;
    let user =await userModel.findOne({email});
    if(user){
        return res.json({
        "message":"Founded"
    });
    };
    let hashedPassword = bcrypt.hashSync(password,Number(process.env.HASH_ROUND));
    let userAdded =await userModel.create({name , email , password : hashedPassword , age});
    return res.json({
        "message":"success",
        userAdded
    });
};

export const login = async(req,res)=>{
    let { email , password } = req.body;
    let user =await userModel.findOne({email});
    if(! user){
        return res.json({
        "message":"NotFound"
    });
    };
    let matched = bcrypt.compareSync(password,user.password);
    if(! matched){
        return res.json({
        "message":"Wrong Password"
    });
    }
    let token = jwt.sign({userId:user._id , name:user.name},process.env.APP_SECRET);
    return res.json({
        "message":"Success",
        token
    });
};