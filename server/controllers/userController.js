import User from "../models/User.js";



export const UpdateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}


export const GetSingleUser = async (req, res, next) => {
    try {
        const updateUser = await User.findById(req.params.id);
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}

export const GetAllUser = async (req, res, next) => {
    try {
        const updateUser = await User.find();
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}


export const DeleteUser = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Successfully Deleted!");
    } catch (error) {
        next(error);
    }
}