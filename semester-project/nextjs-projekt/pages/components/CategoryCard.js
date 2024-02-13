import React from 'react';
import styles from '../../styles/CategoryCard.module.css'; // Make sure to create this CSS module
import Link from 'next/link';

const CategoryCard = ({ title, imageUrl, linkHref }) => {
  return (
    <Link className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }} href={'/new-in'}>
      <h2 className={styles.title}>{title}</h2>
      <div  className={styles.link}>Shop Now</div>
    </Link>
  );
};

export default CategoryCard;