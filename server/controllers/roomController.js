import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";



export const CreateRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {
                    rooms: savedRoom._id
                },
            })
        } catch (error) {
            next(error)
        }

        res.status(200).json(savedRoom);
    } catch (error) {
        next(error)
    }
}

export const UpdateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateRoom);
    } catch (error) {
        next(error);
    }
}


export const GetSingleRoom = async (req, res, next) => {
    try {
        const getSingleRoom = await Room.findById(req.params.id);
        res.status(200).json(getSingleRoom);
    } catch (error) {
        next(error);
    }
}

export const GetAllRoom = async (req, res, next) => {
    try {
        const getAllRoom = await Room.find();
        res.status(200).json(getAllRoom);
    } catch (error) {
        next(error);
    }
}


export const DeleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;

    try {
        const deleteRoom = await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull:{rooms: req.params.id}
            });
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room Successfully Deleted!");
    } catch (error) {
        next(error);
    }
}