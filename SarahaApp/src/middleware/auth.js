import jwt from 'jsonwebtoken';
const auth = (req,res,next)=>{
    let authorization = req.header("Authorization");
    if(!authorization || (authorization && authorization.startsWith("Bearer") == false)){
        return res.json({
            message: "Invaild Token",
        });
    };
    let token = authorization.split(" ")[1];
    jwt.verify(token,process.env.SECRET_LOGIN,(err , decoded)=>{
        if(err){
            return res.json({
            message: "Wrong Token",
        });
    }
    req.userId = decoded.id;
    next();
    })
}
export default auth;