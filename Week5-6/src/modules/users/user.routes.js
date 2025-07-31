import express from "express";
import { getAllUser, login, register } from "./controllers/users.controller.js";
import auth from "../../middlewares/auth.js";
const router = express.Router();

router.get('/' , auth,getAllUser);
router.post('/register',register);
router.post('/login',login);
export default router;