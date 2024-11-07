import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import couponRoute from './route/coupon.route.js';
import blogRoute from './route/blogRoutes.js';
import orderRoutes from './route/order.route.js';

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
app.use('/coupons', couponRoute);
app.use('/api', orderRoutes);

// Serve the React app's static files
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../Frontend/build')));

// Route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
