const globalError = (err , req , res , next)=>{
    res.status(err.statusCode).json({
        "message":"Error",
        "error":err.message
    })
}
export default globalError;