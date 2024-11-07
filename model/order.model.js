import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    items: [
        {
            title: String,
            price: Number,
            quantity: Number,
            _id: mongoose.Schema.Types.ObjectId,
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
