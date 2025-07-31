import mongoose from "mongoose";
const dbConnection = () => {
    mongoose.connect(process.env.DB_CONNECTION).then(() => {
        console.log("DB Connected....");
    }).catch(err => {
        console.log(err);
    });
};
export default dbConnection;