import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4002/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = (id) => {
    setBlogToDelete(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (blogToDelete) {
      try {
        const response = await fetch(`http://localhost:4002/blogs/${blogToDelete}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setBlogs(blogs.filter(blog => blog._id !== blogToDelete));
          setModalOpen(false);
        } else {
          throw new Error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <div className="max-w-screen-2xl text-black container mx-auto md:px-20 px-4 mt-28">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Blog List</h2>
      <Link to="/add-blog" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300">
        Add Blog
      </Link>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div className="bg-white border border-gray-300 rounded-md p-4" key={blog._id}>
            <h3 className="font-semibold text-lg">{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <Link to={`/blogs/${blog._id}`} className="bg-teal-600 text-white px-2 py-1 rounded-md hover:bg-teal-700 transition duration-300">Read More</Link>
            <Link to={`/edit-blog/${blog._id}`} className="bg-teal-600 text-white px-2 py-1 rounded-md hover:bg-teal-700 transition duration-300 ml-2">Edit</Link>
            <button onClick={() => handleDelete(blog._id)} className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition duration-300 ml-2">Delete</button>
          </div>
        ))}
      </div>
      <ConfirmModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default BlogList;
