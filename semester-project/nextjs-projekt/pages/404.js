import React from 'react';
import Header from './components/Header'; // Make sure the path is correct
import Footer from './components/Footer'; // Make sure the path is correct
import Link from 'next/link';
import styles from '../styles/404.module.css'; // Make sure to create this CSS module and import it

export default function Custom404() {
  return (
<>
    <div className={styles.header}>
    <Header />
    </div>
    <div className={styles.container}>
    

      <main className={styles.main}>
        <div className={styles.textContainer}>
          <div className={styles.title}>Don't know where <br/> you landed?</div>
          <div className={styles.subtitle}>Neither do we.</div>
          <Link href="/products" className={styles.text}>
            Go back to  <span className={styles.colored}>Products</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>

    </>
  );
}
