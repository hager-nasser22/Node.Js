import jwt from "jsonwebtoken";
const auth = (req,res,next)=>{
    let {token} = req.headers("Authorization");
    jwt.verify(token , process.env.APP_SECRET,(err , decoded)=>{
        if(err){
            return res.json({
                "message":"Invalid Token"
            });
        };
        req.userId=decoded.userId
        next();
    });
};

export default auth;