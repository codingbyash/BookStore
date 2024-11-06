import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function ThankYouPage({ authUser }) {
  const { state } = useLocation();
  const { order } = state;

  // Assuming you have the user data from authUser
  const userName = authUser ? authUser.fullname : 'Guest'; // Default to 'Guest' if no user
  const userEmail = authUser ? authUser.email : 'N/A'; // Default to 'N/A' if no user

  const printReceipt = () => {
    const doc = new jsPDF();

    // Add User Name and Email
    doc.setFontSize(18);
    doc.text(`Order Receipt for ${userName}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Email: ${userEmail}`, 20, 30);

    // Create a table for User Information and Order Details
    const tableData = [
      ['User Name', userName],
      ['Email', userEmail],
      ['Order ID', order._id],
      ['Total Amount', `$${order.totalAmount.toFixed(2)}`],
      ['Payment Method', order.paymentMethod],
    ];

    doc.autoTable({
      head: [['Field', 'Details']],
      body: tableData,
      startY: 40, // Adjust the starting Y position for the table
      margin: { horizontal: 10 },
      theme: 'grid',
    });

    // Add a table of items
    const items = order.items.map(item => [
      item.title,
      item.quantity,
      `$${item.price.toFixed(2)}`,
      `$${(item.price * item.quantity).toFixed(2)}`
    ]);

    doc.autoTable({
      head: [['Item', 'Quantity', 'Price', 'Total']],
      body: items,
      startY: doc.lastAutoTable.finalY + 10, // Position below the previous table
      margin: { horizontal: 10 },
      theme: 'grid',
    });

    // Save or print the PDF
    doc.save('receipt.pdf');
  };

  return (
    <div className="thank-you-page">
      <h2 className="text-3xl font-bold mb-4 text-center">Thank You for Your Order!</h2>
      <p className="text-lg text-center mb-6">Your order has been successfully placed. Below are your order details.</p>

      <div className="order-details">
        <h3 className="font-semibold text-lg">Order Summary</h3>
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      </div>

      <div className="order-items mt-4">
        <h4 className="font-semibold text-lg">Items</h4>
        <ul>
          {order.items.map(item => (
            <li key={item._id} className="mb-2">
              <span>{item.title} (x{item.quantity}) - ${item.price.toFixed(2)} each</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={printReceipt}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
