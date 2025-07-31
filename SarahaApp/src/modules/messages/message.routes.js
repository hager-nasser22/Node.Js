import express from 'express';
import { getAllMessages , addMessage } from './controllers/messages.controller.js';
import auth from '../../middleware/auth.js';
const router = express.Router();
router.get('/' ,auth, getAllMessages);
router.post('/addMessage' , addMessage);

export default router;