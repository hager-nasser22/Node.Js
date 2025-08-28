const pageNotFound = (req,res,next)=>{
    return res.status(404).json({
        message:"Page Not Found"
    })
}
export default pageNotFound;