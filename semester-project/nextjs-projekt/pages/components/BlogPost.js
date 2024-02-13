import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image';

const BlogPost = ({ post }) => {
  if (!post) {
    return null;
  }




  return (
    <div className={styles.blogPost}>
      <div className={styles.imageContainer}>
      <Image src={post.image.fields.file.url} width={700} height={428} /> 
      </div>
      <div className={styles.content}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postContent}>{post.text}</p>
      </div>
      <footer className={styles.postFooter}>
        <span className={styles.author}>Author: {post.writer}</span>
      </footer>
    </div>
  );
};

export default BlogPost;