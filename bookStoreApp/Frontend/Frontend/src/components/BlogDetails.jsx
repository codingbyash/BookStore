import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4002/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <p>{error}</p>;

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">{blog.title}</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
