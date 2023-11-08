import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://my-json-server.typicode.com/LazaCoder/HCIprojekt/blogPosts/${id}`)
        .then((response) => response.json())
        .then(setPost)
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <small>By {post.author} on {post.datePublished}</small>
      <hr />
      <Link href="/inspiration/blog">
        Back to blog
      </Link>
    </article>
  );
}

export default BlogPost;
