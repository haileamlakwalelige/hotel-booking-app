import Hotel from "../models/Hotel.js";

export const CreateHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}

export const UpdateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
}


export const GetSingleHotel = async (req, res, next) => {
    try {
        const getSingleHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getSingleHotel);
    } catch (error) {
        next(error);
    }
}

export const GetAllHotel = async (req, res, next) => {
    try {
        const getAllHotel = await Hotel.find();
        res.status(200).json(getAllHotel);
    } catch (error) {
        next(error);
    }
}

export const countByCity = async (req, res, next) => {
    try {
        const getAllHotel = await Hotel.find();
        res.status(200).json(getAllHotel);
    } catch (error) {
        next(error);
    }
}

export const DeleteHotel = async (req, res, next) => {
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Successfully Deleted!");
    } catch (error) {
        next(error);
    }
}