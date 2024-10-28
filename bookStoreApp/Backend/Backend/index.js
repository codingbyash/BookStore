import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import couponRoute from "./route/coupon.route.js"
import addressRoute from './route/address.route.js'; // Import address routes
import blogRoute from "./route/blogRoutes.js";
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
app.use('/addresses', addressRoute); // Use address routes

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
