import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from '../../styles/ProductGrid.module.css';
import Link from 'next/link';
import client from '../api/contentfulClient';

function ProductGrid({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set(['all'])); // Use a Set to handle multiple selections
  const [showMenu, setShowMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortCriterion, setSortCriterion] = useState('');
  const [K, setK] = useState('robot');



  useEffect(() => {
    const getProducts = async () => {
      try {
        // Start constructing the query
        let query = {
          content_type: 'product-2',
          // Add search query if searchTerm is not empty
          ...(searchTerm && { 'query': searchTerm }),
        };

        // Apply category filter if necessary
        if (!(selectedCategories.size === 0 || selectedCategories.has('all'))) {
          query['fields.category[in]'] = Array.from(selectedCategories).join(',');
        }

        // Apply sorting if necessary
        if (sortCriterion && sortCriterion !== 'rating') {
          query['order'] = `fields.${sortCriterion}`;
        }

        const res = await client.getEntries(query);
        let items = res.items;

        // Client-side sort if the criterion is rating
        if (sortCriterion === 'rating') {
          items = items.sort((a, b) => {
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
  }, [selectedCategories, sortCriterion, searchTerm]);

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
   

    if (category === 'all' || newSelectedCategories.size === 0) {
      newSelectedCategories.clear();
      newSelectedCategories.add('all');
    } else {
      
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
      <div className={styles.buttons}>
        
        <button className={styles.button} onMouseEnter={toggleMenu}>Filter</button>
      
        {showMenu && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownContent} onMouseLeave={toggleMenu}>
              {categories.map(category => (
                <div key={category} className={styles.dropdownItem}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
         
        <button className={styles.sbutton} onMouseEnter={toggleSortMenu}>Sort</button>

        {showSortMenu && (
  <div className={styles.sdropdown}>
    <div className={styles.dropdownContent} onMouseLeave={toggleSortMenu}>
      <div className={styles.dropdownItem} onClick={() => handleSortChange('name')}>
        Sort by Name
      </div>

      <div className={styles.dropdownItem} onClick={() => handleSortChange('rating')}>
        Sort by Rating
      </div>

      <div className={styles.dropdownItem} onClick={() => handleSortChange('price')}>
        Sort by Price
      </div>

      
    </div>
  </div>
)}


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
