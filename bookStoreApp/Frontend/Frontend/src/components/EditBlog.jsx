import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4002/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = { title, content };

    try {
      const response = await fetch(`http://localhost:4002/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        navigate('/blogs');
      } else {
        throw new Error('Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="border text-black rounded-md px-4 py-2 w-full" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Content:</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
            className="border text-black rounded-md px-4 py-2 w-full" 
          />
        </div>
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
