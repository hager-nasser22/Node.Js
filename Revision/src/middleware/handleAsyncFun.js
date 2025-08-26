import { AppError } from "../utils/AppError.js";

const handleAsyncFun = (fun)=>{
    return (req,res,next)=>{
        fun(req,res,next).catch(err => next(err));
    }
}
export default handleAsyncFun;