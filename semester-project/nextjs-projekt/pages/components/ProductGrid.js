// ProductGrid.js
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from '../../styles/ProductGrid.module.css';
import Link from 'next/link';
import client from '../api/contentfulClient'; // Make sure this path is correct

function ProductGrid() {
  const [products, setProducts] = useState([]);
  


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await client.getEntries({ content_type: 'product-2' }); // Replace with your content type ID
        setProducts(res.items);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      }
    };
    getProducts();
  }, []);

  


  return (
    <div className={styles.aligned}>
      <div className={styles.buttons}>
        <button className={styles.button}>Filter</button>
        <button className={styles.button}>Sort</button>
      </div>
      <div className={styles.productGrid}>
        {products.map(product => (
          <Link href={`/product/${product.sys.id}`} key={product.fields.id} passHref>
            
              <ProductItem key={product.fields.id} product={product.fields} />
            
          </Link>
        ))}
      </div>
      <button className={styles.buttonDown}>Load more...</button>
    </div>
  );
}

export default ProductGrid;
