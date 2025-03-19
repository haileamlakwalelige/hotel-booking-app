import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/users.js';

dotenv.config(); // ✅ Load env variables at the beginning

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

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomRoute);
app.use('/api/users', userRoute);


app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
});

