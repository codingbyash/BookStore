import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import couponRoute from "./route/coupon.route.js";
// import addressRoute from "./route/address.route.js"
import blogRoute from "./route/blogRoutes.js";
import orderRoutes from "./route/order.route.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); // Configure environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

// Define routes
app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use('/blogs', blogRoute);
app.use('/coupons', couponRoute); // Use coupon routes
app.use('/api', orderRoutes);
// app.use('/addresses', addressRoute); // Use address routes

app.get("/", (req, res) => {
    // Get the current directory by using fileURLToPath to handle ES6 import.meta.url
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // Correct the path to the frontend build directory
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});