import Link from 'next/link';
import Header from '../components/Header'
import styles from '../../styles/NewIn.module.css';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useState } from 'react';


function NewInPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // The actual search handling logic will be in ProductGrid
  };


  return (
    <div className={styles.container}>
       <Head>
       <title>Shop</title>
      </Head>
      <div className={styles.upper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>Everything <br/> Fits Your Needs</div>
      </main>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} onChange={handleSearchChange} />
        <button className={styles.searchButton} onClick={handleSearch}>Search</button>
      </div>
      </div>
      <ProductGrid searchTerm={searchTerm}/>
      <Footer/>
    </div>
  );
}

export default NewInPage;
