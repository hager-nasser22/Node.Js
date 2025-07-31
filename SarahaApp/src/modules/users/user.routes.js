import express from 'express';
import { getAllUsers , register , login , updateUser , verifyUser } from './controllers/users.controller.js';
const router = express.Router();
router.get('/' , getAllUsers);
router.post('/register' , register);
router.post('/login' , login);
router.put('/updateUser' , updateUser);
router.get('/verify/:token' , verifyUser);
export default router;