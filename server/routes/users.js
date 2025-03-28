import express from "express";
import { DeleteUser, GetAllUser, GetSingleUser, UpdateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();



// UPDATE
router.put('/:id', verifyUser, UpdateUser)

// GET
router.get('/:id', verifyUser, GetSingleUser)


// GET ALL
router.get('/', verifyAdmin, GetAllUser)

// DELETE
router.delete('/:id', verifyUser, DeleteUser)


export default router;