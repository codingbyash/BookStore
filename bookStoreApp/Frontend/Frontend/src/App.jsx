import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import BookDetails from "./components/BookDetails"; // Import the BookDetails component
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import EditBlog from "./components/EditBlog";
import AddBlog from "./components/AddBlog";

import Cart from "./components/Cart";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-gray-800 dark:text-white h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book/:id" element={<BookDetails />} /> {/* Add this route */}
          <Route
            path="/cart"
            element={authUser ? <Cart /> : <Navigate to="/signup" />}
          />
            <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route
            path="/add-blog"
            element={authUser ? <AddBlog /> : <Navigate to="/signup" />}
          />
          <Route
            path="/edit-blog/:id"
            element={authUser ? <EditBlog /> : <Navigate to="/signup" />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
