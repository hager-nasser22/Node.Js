import express from 'express';
import { getAllUsers , register , login , updateUser , verifyUser } from './controllers/users.controller.js';
import handleValidation from '../../middleware/handleValidation.js';
import registerValidateor from './validations/register.validator.js';
import loginValidator from './validations/login.validator.js';
const router = express.Router();
router.get('/' , getAllUsers);
router.post('/register' ,handleValidation(registerValidateor), register);
router.post('/login' ,handleValidation(loginValidator) ,login);
router.put('/updateUser' , updateUser);
router.get('/verify/:token' , verifyUser);

export default router;