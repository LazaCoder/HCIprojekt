import Link from 'next/link';
import Header from '../components/Header'
import styles from '../../styles/NewIn.module.css';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import Head from 'next/head';


function NewInPage() {
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
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <button className={styles.searchButton}>Search</button>
      </div>
      </div>
      <ProductGrid/>
      <Footer/>
    </div>
  );
}

export default NewInPage;
