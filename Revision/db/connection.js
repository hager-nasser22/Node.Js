import mongoose from 'mongoose';
const connectionDb = ()=>{
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
        console.log("Database connected successfully");
    }).catch((error)=>{
        console.log("Database connection failed");
        console.log(error);
    });
};
export default connectionDb;