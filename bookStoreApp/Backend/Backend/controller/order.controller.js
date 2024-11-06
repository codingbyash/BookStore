import Order from '../model/Order.model.js';
import User from '../model/user.model.js'; // Assuming you have a user model

// Create an order
export const createOrder = async (req, res) => {
    try {
        // Get user details from the authenticated user (attached via middleware)
        const user = await User.findById(req.user._id);

        // Create new order
        const order = new Order({
            user: req.user._id,
            items: req.body.items,
            totalAmount: req.body.totalAmount,
            paymentMethod: req.body.paymentMethod,
            status: 'Pending',  // Or any other default status
        });

        // Save order to database
        const savedOrder = await order.save();

        // Send back the order along with user info
        res.status(201).json({
            order: {
                ...savedOrder._doc,
                user: {
                    name: user.name,
                },
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
};
