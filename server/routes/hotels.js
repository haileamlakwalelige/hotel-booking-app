import express from "express";
import { countByCity, CreateHotel, DeleteHotel, GetAllHotel, GetSingleHotel, UpdateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// CREATE
router.post('/', verifyAdmin, CreateHotel)

// UPDATE
router.put('/:id', verifyAdmin, UpdateHotel)

// GET
router.get('/:id', GetSingleHotel)


// GET ALL
router.get('/', GetAllHotel)
router.get('/countbycity', countByCity)
// router.get('/countbytype ', GetAllHotel)

// DELETE
router.delete('/:id', verifyAdmin, DeleteHotel)

export default router;