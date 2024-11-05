// routes/order.route.js
import express from 'express';
import { createOrder } from '../controller/order.controller'; // Adjust the path as necessary
const router = express.Router();

// Define the POST route for creating an order
router.post('/', createOrder);

export default router;
