import express from "express";
import { CreateRoom, DeleteRoom, GetAllRoom, GetSingleRoom, UpdateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// CREATE
router.post('/:hotelid', verifyAdmin, CreateRoom)

// UPDATE
router.put('/:id', verifyAdmin, UpdateRoom)

// GET
router.get('/:id', GetSingleRoom)


// GET ALL
router.get('/', GetAllRoom)

// DELETE
router.delete('/:id/:hotelid', verifyAdmin, DeleteRoom)

export default router;