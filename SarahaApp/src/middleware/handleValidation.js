import { AppError } from "../utils/AppError.js";

const handleValidation = (schema)=>{
    return (req,res,next)=>{
        let {error} = schema.validate(req.body , {abortEarly:false});
        if(error){
            let messages = error.details.map(detail => detail.message).join(', ');
            return next(new AppError(messages , 400));
        }
        next();
    }
}
export default handleValidation;