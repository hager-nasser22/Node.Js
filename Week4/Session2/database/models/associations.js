import userModel from "./user.js";
import noteModel from "./note.js";
userModel.hasMany(noteModel);
noteModel.belongsTo(userModel);
