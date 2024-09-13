import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming Nav component is in the same directory
import Footer from './Footer'; // Assuming Footer component is in the same directory

function BookDetails() {
  const book = {  
    name: "LPU Tales",  
    title: "This is the Story of My Journey at LPU: A Collection of Inspiring Tales, an adventurous journey, I hope you will enjoy",  
    price: 0,  
    category: "Free",  
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",  
}

  return (
    <>
      {/* Include Nav at the top */}
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img 
                src={book.image} 
                alt={book.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Book Details Section */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4">{book.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{book.title}</p>
                <p className="text-gray-600 dark:text-gray-400 text-md mb-2">
                  <span className="font-semibold">Category:</span> {book.category}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-md">
                  <span className="font-semibold">Price:</span> ₹{book.price}
                </p>
              </div>
              <div className="mt-8">
              <a
                href="https://checkout.stripe.dev/preview" // Stripe Checkout preview link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 duration-200 transition-colors ease-in-out"
              >
                Make Payment
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Include Footer at the bottom */}
      <Footer />
    </>
  );
}

export default BookDetails;
