import noteModel from './../../../../database/models/note.js';
import userModel from './../../../../database/models/user.js';
export const getAllNotes = async(req,res)=>{
    let notes = await noteModel.findAll({include:userModel});
    if(notes.length == 0){
        return res.json({
        message:"notfound",
    });
    }
    return res.json({
        message:"success",
        notes
    });
};
export const addNote = async (req,res)=>{
    let {title , description , userId} = req.body;
    userId = Number(userId);
    let user =await userModel.findOne({where:{id:userId}});
    if(user == null){
        return res.json({
        message:"notfound",
    });
    }
    let note = await noteModel.create({
        title , description , userId
    });
    return res.json({
        message:"success",
        note
    });
}
