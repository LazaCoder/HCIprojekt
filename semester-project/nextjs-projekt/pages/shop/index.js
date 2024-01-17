import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../../styles/Shop.module.css";
import ProductGrid from "../components/ProductGrid";
import Head from "next/head";

function Shop() {
  return (
    <div className={styles.container}>
       <Head>
       <title>Christmas</title>
      </Head>
      <div className={styles.upper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>All You Want For Christmas</div>
        <div className={styles.subtitle}>and more...</div>
        <button className={styles.exploreButton}>Explore</button> 
      </main>
             
      </div>
      <ProductGrid/>
      <Footer/>
    </div>
  );
}

export default Shop;