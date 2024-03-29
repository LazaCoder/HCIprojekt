import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from '../../styles/ProductGrid.module.css';
import Link from 'next/link';
import client from '../api/contentfulClient';

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set(['all'])); // Use a Set to handle multiple selections
  const [showMenu, setShowMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortCriterion, setSortCriterion] = useState('');


  useEffect(() => {
    const getProducts = async () => {
      try {
        const query =  { content_type: 'product-2', 'fields.category[in]': 'Christmas' }; // Filter by selected categories

          if (sortCriterion!=='' && sortCriterion!=='rating') {
            query['order'] = `fields.${sortCriterion}`;
          }
        const res = await client.getEntries(query);

        let items = res.items;

        // Client-side sort if the criterion is rating
        if (sortCriterion === 'rating') {
          items = items.sort((a, b) => {
            // Assuming rating is a string like "4.5", convert to float and compare
            const ratingA = parseFloat(a.fields.rating);
            const ratingB = parseFloat(b.fields.rating);
          
            return ratingB - ratingA; // For descending order; reverse for ascending
          });
        }



        setProducts(items);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
      }
    };
    getProducts();
  }, [selectedCategories,sortCriterion]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSortMenu = () => {
    setShowSortMenu(!showSortMenu);
  };
  const handleCategoryChange = (category) => {
    const newSelectedCategories = new Set(selectedCategories);
    if (newSelectedCategories.has(category)) {
      newSelectedCategories.delete(category);
    } else {
      newSelectedCategories.add(category);
    }
    // If 'all' is currently selected or being selected, reset to only 'all'
    if (category === 'all' || newSelectedCategories.size === 0) {
      newSelectedCategories.clear();
      newSelectedCategories.add('all');
    } else {
      // Remove 'all' if other categories are selected
      newSelectedCategories.delete('all');
    }
    setSelectedCategories(newSelectedCategories);
  };

  const handleSortChange = (criterion) => {
    setSortCriterion(criterion);
    setShowSortMenu(false); 
  };

  const categories = ['Bathroom', 'Exterior', 'Living Room', 'Kitchen', 'Bedroom', 'Accessories', 'Christmas', 'Luxury'];

  return (
    <div className={styles.aligned}>
    


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
