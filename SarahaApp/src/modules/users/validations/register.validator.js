import Joi from 'joi';
const registerValidateor = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email : Joi.string().email({tlds:{allow:["com" , "net"]}}).required(),
    password: Joi.string().pattern(new RegExp('^[A-Za-z]{5,10}$')).required(),
    rePassword: Joi.ref('password'),
    varified: Joi.boolean().default("false")
}).with('password' , 'rePassword');
export default registerValidateor;