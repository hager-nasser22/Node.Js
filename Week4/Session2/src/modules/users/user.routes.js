import express from "express";
import {getAllUsers , getUserById , searchUserByName , addUser , updateUser , deleteUser} from "./controllers/users.controller.js";

const router = express.Router();
router.get("/users" , getAllUsers);
router.get("/users/:id" , getUserById);
router.get("/user/search/:key" , searchUserByName);
router.post("/addUser" , addUser);
router.patch("/updateUser/:id" , updateUser);
router.delete("/deleteUser/:id" , deleteUser);


export default router;