import express from "express";
import { getAllNotes , addNote} from "./controllers/notes.controller.js";
const router = express.Router();

router.get('/notes' , getAllNotes);
router.post('/addNote' , addNote);
export default router;