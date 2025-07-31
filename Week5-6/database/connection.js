import mongoose from "mongoose";
import dotenv from 'dotenv';
const connection =()=>{
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log("DB Connection Faild");
});
}
export default connection;