import Link from 'next/link';
import { useState, useEffect } from 'react';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    
    fetch('https://my-json-server.typicode.com/LazaCoder/HCIprojekt/blogPosts')
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <small>By {post.author} on {post.datePublished}</small>
          <hr />
        </div>
      ))}
      <Link href="/">Home</Link>
    </div>
  );
}

export default Blog;
