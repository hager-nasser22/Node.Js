import Joi  from 'joi';
const loginValidator = Joi.object({
    email : Joi.string().email({tlds:{allow:["com" , "net"]}}).required(),
    password: Joi.string().pattern(new RegExp('^[A-Za-z]{5,10}$')).required(),
});
export default loginValidator;