import React from 'react';
import styles from '../../styles/CategoryCard.module.css'; // Make sure to create this CSS module
import Link from 'next/link';

const CategoryCard = ({ title, imageUrl, linkHref }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
      <h2 className={styles.title}>{title}</h2>
      <Link href={linkHref} className={styles.link}>Shop Now</Link>
    </div>
  );
};

export default CategoryCard;