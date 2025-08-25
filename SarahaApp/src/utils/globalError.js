const globalError = (err , req , res , next)=>{
    res.status(err.statusCode || 500).json({
        "message":"Error",
        "error":err.message
    } || "try again later!");
}
export default globalError;