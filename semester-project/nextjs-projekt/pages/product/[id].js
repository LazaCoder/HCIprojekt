// pages/product/[id].js
// ... (rest of the imports)
import styles from '../../styles/ProductPage.module.css'; // Make sure to have this CSS Module file
import {useRouter} from 'next/router';
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItem';
import Image from 'next/image';
import client from '../api/contentfulClient';
import { useState, useEffect } from 'react';

function ProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [starImages, setStarImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
 


  if (!router.isReady) {
    return null; // Or a loader if you prefer
  }



  const { id } = router.query;


  
  client.getEntry(id).then(function (entry) {
    // logs the entry metadata
    setProduct(entry.fields);


    console.log(entry.fields.description.content[0].content[0].value);
     const starImgs = [];
    for (let i = 0; i < 5; i++) {
        starImgs.push(
            <Image
                src={i < entry.fields.rating ? "/punazvizda.png" : "/praznazvizda.png"}
                alt={i < entry.fields.rating ? "Full Star" : "Empty Star"}
                width={15} // Set the size of your star images
                height={15}
                key={i}
            />
        );
      setStarImages(starImgs);

      
        
    }
  
  
  });

 


  const recommendedProducts = [
    { id: 1, name: 'The Nutcracker', price: '€19.99', imageUrl: '/christmasTree.png', rating: 4 },
    { id: 2, name: 'White snowman', price: '€79.99', imageUrl: '/whiteSnowman.png', rating: 5 },
    { id: 3, name: 'Tall Christmas Tree', description: 'Škobalj leteći leti i voli ovaj prozvod ', price: '€39.99', imageUrl: '/orasar.png', rating: 3 },
    { id: 6, name: 'Tall Christmas Tree', price: '€79.99', imageUrl: '/christmasTree.png', rating: 5 },
  ];
  



  if (!product) {
    return <p>Product not found!</p>;
  }


  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  const getShortDescription = (desc) => {
    
    const sentences = desc.split('. ');
    return sentences.slice(0, 1).join('. ') + '...';
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };


  const handleBuyNow = () =>{
    



  }


 

  return (
    <>
      
      <div className={styles.colored}><Header/></div>
      <main className={styles.main}>
        <div className={styles.productContainer}>
          <img src={"https:" + product.image.fields.file.url} alt={product.name} className={styles.productImage} />
          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{product.name}</h1>

            <div className={styles.priceAndRating}> 
            <p className={styles.productPrice}>{product.price}</p>
            <div className={styles.ratingAndReviews}>
                    {starImages}
                
            </div>
            </div>
            <p className={styles.productDescription}>
          {isFullDescriptionShown ? product.description.content[0].content[0].value : getShortDescription(product.description.content[0].content[0].value)}
        </p>
        <button onClick={toggleDescription} className={styles.readMoreButton}>
          {isFullDescriptionShown ? 'Less details' : 'More details'}
        </button>

            <div className={styles.flex}> 
            <div className={styles.quantitySelector}>
              <button onClick={handleDecrement} className={styles.quantityButton}>&minus;</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={handleIncrement} className={styles.quantityButton}>+</button>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            <button className={styles.buyNowBtn} onClick={handleBuyNow()}>Buy Now</button>
            </div>
            </div>
          </div>
        </div>

        <div className={styles.recommendedSection}>
  <h2 className={styles.recommendedTitle}>People also bought these...</h2>
  <div className={styles.recommendedProducts}>
    
{/*
    {recommendedProducts.map((item) => (
      <ProductItem key={item.id} product={item} />
    ))}
     */}
  </div>
</div>
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;
