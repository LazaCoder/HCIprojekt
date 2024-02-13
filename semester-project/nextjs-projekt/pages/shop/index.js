import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../../styles/Shop.module.css";
import ProductGrid from "../components/ProductGrid";
import Head from "next/head";
import ChristmasProductGrid from "../components/ChristmasProductGrid";
import { useRef } from "react";
import { fa5 } from "@fortawesome/free-solid-svg-icons";
import { FaNapster } from "react-icons/fa";

function Shop() {


  const targetDivRef = useRef(null);
  

  const scrollToDiv = () => {
    
    if (targetDivRef.current) {
      window.scrollTo({
        top: targetDivRef.current.offsetTop,
        behavior: 'smooth', 
      });
    }
  };



  



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
        <button className={styles.exploreButton} onClick={scrollToDiv}>Explore</button> 
      </main>
             
      </div>
      <ChristmasProductGrid    />
      <Footer/>
    </div>
  );
}

export default Shop;