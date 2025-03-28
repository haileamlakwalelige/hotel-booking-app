import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/users.js';
import { EventEmitter } from "events";
import cookieParser from 'cookie-parser';

dotenv.config(); // ✅ Load env variables at the beginning


// Set a high limit (e.g., 100)
EventEmitter.defaultMaxListeners = 0

const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit if unable to connect
    }
};

// middle ware
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomRoute);
app.use('/api/users', userRoute);

app.use((err, req, res, next) => {
    const errorMessage = err.message || "Something is wrong!";
    const errorStatus = err.status || "500";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})

app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
});

