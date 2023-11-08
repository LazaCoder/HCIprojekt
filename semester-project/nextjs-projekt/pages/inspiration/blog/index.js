import Link from 'next/link';
import { useEffect, useState } from 'react';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/LazaCoder/HCIprojekt/blogPosts')
      .then((response) => response.json())
      .then(setBlogPosts)
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.id}>
            <Link href={`blog/${encodeURIComponent(post.id)}`}>
              <h2>{post.title}</h2>
            </Link>
            <small>By {post.author} on {post.datePublished}</small>
            <hr />
          </div>
        ))}
      </div>
      <Link href="/">
        Home
      </Link>
    </div>
  );
}

export default Blog;
