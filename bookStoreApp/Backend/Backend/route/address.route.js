import express from 'express';
import { createAddress, getAddressesByUserId, getAddressById } from "../controller/address.controller.js"

const router = express.Router();

router.post('/', createAddress); // Create a new address
router.get('/:userId', getAddressesByUserId); // Get all addresses for a specific user
router.get('/:id', getAddressById); // Get a single address by ID

export default router;
