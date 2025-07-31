import userModel from './../../../../database/models/user.js';
import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken';
import sendEmail from '../../email/emailCreator.js';
import { AppError } from '../../../utils/AppError.js';
import handleAsyncError from '../../../middleware/handleAsyncError.js';
export const getAllUsers = handleAsyncError(async (req, res) => {
    let users =await userModel.find();
    if (users.length == 0) {
        throw new AppError(404, "No Users Added Yet");
    }
    return res.json({
        message: "Users Fetched Successfully",
        users
    });
})

export const register = handleAsyncError(async (req, res) => {
        let { name, email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user !== null) {
            throw new AppError(400, "User Already Exists");
        };
        let hashedPassword = bcrypt.hashSync(password, Number(process.env.HASH_ROUND));
        let addedUser = await userModel.insertOne({ name, email, password: hashedPassword });
        let token = jwt.sign({id:addedUser._id},process.env.SECRET_REGISTER);
        let url = `http://localhost:3000/users/verify/${token}`;
        sendEmail({email,url});
        return res.json({
            message: "User Added Successfully",
            addedUser
        });
})

export const login = handleAsyncError(async (req, res) => {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user == null) {
            throw new AppError(404, "User Not Exists");
        };
        let matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            throw new AppError(400, "Wrong Password");
        }
        let token = jwt.sign({ id: user._id }, process.env.SECRET_LOGIN);
        return res.json({
            message: "Login Successfully",
            token
        });
})

export const updateUser = handleAsyncError(async (req, res) => {
        let { email, password } = req.body;
        let updateData = { email };
        if (password) {
            updateData.password = bcrypt.hashSync(password, Number(process.env.HASH_ROUND));
        }
        let user = await userModel.findOneAndUpdate(
            { email },
            updateData,
            { new: true }
        );
        if (user == null) {
            throw new AppError(404, "User Not Exists");
        }
        return res.json({
            message: "Update Successfully",
            user
        });
});

export const verifyUser = handleAsyncError((req , res)=>{
    let {token} = req.params;
    jwt.verify(token , process.env.SECRET_REGISTER,async (err , decoded)=>{
        let user = await userModel.findOneAndUpdate(
            { _id:decoded.id },
            {verified:true},
            { new: true }
        );
        if (user == null) {
            throw new AppError(404, "User Not Exists or Already Verified");
        }
        return res.json({
            message: "Update Successfully",
            user
        });
    });
})
