const validation = (schema)=>{
    return (req , res , next)=>{
        let filter={};
        if(!req.file){
            filter = {...req.body , ...req.params , ...req.query};
        }else{
            filter = {image: req.file ,...req.body , ...req.params , ...req.query};
        }
        const {error} =schema.validate(filter,{abortEarly:false});
        if(!error) return next();
        return res.status(400).json({
            "message":error.details.map(ele => ele.message).join(", "),
        });
    }
}
export default validation;