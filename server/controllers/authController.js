import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/Error.js";
import jwt from "jsonwebtoken";

export const authRegister = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hash
        });
        await newUser.save();
        res.status(200).send("User Created Successfully!");
    } catch (error) {
        next(error);
    }
};

export const authLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) return next(createError(404, "User not found!"));  // Use numeric status code

        const isPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isPassword) return next(createError(400, "Wrong Password or Username"));

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRETE_KEY, { expiresIn: "7d" });  // Set token expiration
        const { password, isAdmin, ...otherDetails } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",  // Set the 'secure' flag in production
            sameSite: "Strict",  // Or "Lax", depending on your needs
        }).status(200).send(otherDetails);
    } catch (error) {
        next(error);
    }
};
