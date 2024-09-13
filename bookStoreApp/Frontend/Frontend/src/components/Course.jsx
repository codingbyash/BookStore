import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom"; // For routing

function Course() {
  // State for storing books data
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }; 
    getBook(); // Function call to fetch books
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            We're delighted to have you{" "}
            <span className="text-teal-600">Here!</span>
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Welcome! Here, you can explore our collection of books that offer a wealth of knowledge 
            and inspiration. Dive into various genres, learn from different perspectives, and discover
            new ideas. We invite you to take your time browsing and finding the perfect reads that 
            resonate with you. Happy reading!
          </p>
          <Link to="/">
            <button className="mt-6 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
