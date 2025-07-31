import { Op } from 'sequelize';
import userModel from '../../../../database/models/user.js';
export const getAllUsers = async (req , res)=>{
    let users = await userModel.findAll();
    return res.json({
        "message":"success",
        users
    });
}

export const getUserById = async(req,res)=>{
    let id = Number(req.params.id);
    // res.json({id});
    let user = await userModel.findOne({where:{id}});
    return res.json({
        "message":"success",
        user
    });
};

export const searchUserByName = async(req,res)=>{
    let {key} = req.params;
    // res.send(key);
    let users =await userModel.findAll({
        where:{
            name:{
                [Op.like]: `%${key}%`
            }
        }
    });
    return res.json({
        "message":"success",
        users
    });
};

export const addUser = async(req,res)=>{
    let {name , email , password} = req.body;
    let users = await userModel.findAll({
        where:{
            email 
        }
    });
    if(users.length > 0){
        return res.json({
            "message": "User Aleardy Founded"
        });
    };
    let user =await userModel.create({name,email,password});
    return res.json({
        "message":"success",
        user
    });
};

export const updateUser = async(req,res)=>{
    let {name , email , password} = req.body;
    let id = Number(req.params.id)
    let user =await userModel.update({name , email , password},{    ///it will return id
        where:{
            id
        }
    });
    if(user.length == 0 ){
        return res.json({
            "message": "User Not Founded"
        });
    };
    return res.json({
        "message":"success",
        user   //return id
    });
};

export const deleteUser = async (req,res)=>{
    let id = Number(req.params.id);
    let user =await userModel.destroy({
        where:{
            id
        }
    });
    if(!user){
        return res.json({
            "message": "User Not Founded"
        });
    };
    let users = await userModel.findAll();
    return res.json({
        "message":"success",
        users
    });
}