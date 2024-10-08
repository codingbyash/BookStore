import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-white dark:bg-gray-800 shadow-lg hover:scale-105 duration-200 transition-transform ease-in-out dark:text-gray-100 dark:border-gray-700 border border-gray-300 rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold">
              {item.name}
              <div className="badge bg-teal-600 text-white dark:bg-teal-600 dark:text-gray-900">{item.category}</div>
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-400">{item.title}</p>
            <div className="card-actions mt-4 flex justify-between items-center">
              <div className="badge badge-outline text-teal-600 border-teal-600 dark:text-teal-400 dark:border-teal-400">
                ₹{item.price}
              </div>
              <Link to={`/book/${item.id}`}>
                <div className="cursor-pointer px-4 py-2 rounded-full border-2 border-teal-600 hover:bg-teal-600 hover:text-white duration-200 transition-colors ease-in-out">
                  Buy Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
