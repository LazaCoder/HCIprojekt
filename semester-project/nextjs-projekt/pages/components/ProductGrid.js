import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from '../../styles/ProductGrid.module.css';
import Link from 'next/link';
import client from '../api/contentfulClient';

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    const getProducts = async () => {
      try {
        const query = selectedCategory === 'all'
          ? { content_type: 'product-2' }
          : { content_type: 'product-2', 'fields.category': selectedCategory };
        const res = await client.getEntries(query);
        setProducts(res.items);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      }
    };
    getProducts();
  }, [selectedCategory]);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowMenu(false); // Hide menu after selection
  };

  return (
    <div className={styles.aligned}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={toggleMenu}>Filter</button>
        {/* Menu for category selection */}
        {showMenu && (
          <div className={styles.categoryMenu}>
            <button onClick={() => handleCategoryChange('all')}>All Categories</button>
            <button onClick={() => handleCategoryChange('Christmas')}>Category 1</button>
            <button onClick={() => handleCategoryChange('category2')}>Category 2</button>
            {/* Add other categories here */}
          </div>
        )}
        <button className={styles.button}>Sort</button>
      </div>
      <div className={styles.productGrid}>
        {products.map(product => (
          <Link href={`/product/${product.sys.id}`} key={product.fields.id} passHref>
            <ProductItem key={product.sys.id} product={product.fields} />
          </Link>
        ))}
      </div>
      <button className={styles.buttonDown}>Load more...</button>
    </div>
  );
}

export default ProductGrid;
