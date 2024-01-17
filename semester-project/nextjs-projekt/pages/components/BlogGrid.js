// components/BlogGrid.js

import styles from '../../styles/BlogGrid.module.css'; 
import Link from 'next/link';

const BlogGrid = ({ posts }) => {

    if(!posts){
        return null;
    }


  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (


        
        <Link href={`/post/id`} key={index} className={styles.card}>
          <img src={post.imageUrl} alt={post.title} className={styles.image} />
          <div className={styles.flex}>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.rule}></div>
           </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogGrid;
