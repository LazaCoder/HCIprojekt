// components/BlogGrid.js

import styles from '../../styles/BlogGrid.module.css'; // adjust the path as necessary

const BlogGrid = ({ posts }) => {

    if(!posts){
        return null;
    }


  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <div key={index} className={styles.card}>
          <img src={post.imageUrl} alt={post.title} className={styles.image} />
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.rule}></div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
