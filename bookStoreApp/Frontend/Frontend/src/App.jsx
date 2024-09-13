import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import BookDetails from "./components/BookDetails"; // Import the BookDetails component
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-gray-800 dark:text-white">
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book/:id" element={<BookDetails />} /> {/* Add this route */}
        </Routes> 
        <Toaster />
      </div>
    </>
  );
}

export default App;
