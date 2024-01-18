// pages/product/[id].js
// ... (rest of the imports)
import styles from '../../styles/ProductPage.module.css'; 
import {useRouter} from 'next/router';
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItem';
import Image from 'next/image';
import client from '../api/contentfulClient';
import Lightbox from 'yet-another-react-lightbox';
import { useState, useEffect } from 'react';
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import classNames from 'classnames';

function ProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [starImages, setStarImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      client.getEntry(id).then(entry => {
        setProduct(entry.fields);
        fetchRecommendedProducts(entry.fields.category);
        createStarImages(entry.fields.rating);
        setIsLoading(false);
      }).catch(err => {
        console.error(err);
        setIsLoading(false);
      });
    }
  }, [router.isReady, router.query]);

  const fetchRecommendedProducts = (category) => {
    client.getEntries({
      content_type: 'product-2',
      'fields.category': category,
      limit: 5
    })
    .then(response => {
      setRecommendedProducts(response.items.map(item => item.fields));
    })
    .catch(error => console.error(error));
  };

  const createStarImages = (rating) => {
    const starImgs = [];
    for (let i = 0; i < 5; i++) {
      starImgs.push(
        <Image
          src={i < rating ? "/punazvizda.png" : "/praznazvizda.png"}
          alt={i < rating ? "Full Star" : "Empty Star"}
          width={15}
          height={15}
          key={i}
        />
      );
    }
    setStarImages(starImgs);
  };

 
  



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
    <div>
      
          <Lightbox
        open={lightboxOpen}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .96)" },  container: { fontFamily: "'Zilla Slab', serif" } }}
        close={() => setLightboxOpen(false)}
        plugins={[Captions,Zoom]}
        slides={[
          { src: "/christmasTree1.png",
          title: "Slide title",
          description: "Slide description",
         },
          { src: "/christmasTree2.png", 
          title: "Slide title",
          description: "Slide description",
        },
          { src: "/christmasTree3.png",
          title: "Slide title",
          description: "Slide description",
        },
        ]}
      />
      
      <div className={styles.colored}><Header className={styles.header}/></div>
      <main className={styles.main}>
        <div className={styles.productContainer}>
          <img src={"https:" + product.image.fields.file.url} alt={product.name} className={styles.productImage} onClick={() => setLightboxOpen(true)} />
          <div className={classNames(styles.smallImagesContainer,styles.mobileOnly)}>
            <img src="/christmasTree1.png" alt="small christmas tree" className={styles.smallImage} />
            <img src="/christmasTree2.png" alt="small christmas tree" className={styles.smallImage} />
            <img src="/christmasTree3.png" alt="small christmas tree" className={styles.smallImage} />
          </div>
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
            {!isFullDescriptionShown && (
          <div className={ classNames( styles.smallImagesContainer,styles.webOnly)}>
            <img src="/christmasTree1.png" alt="small christmas tree" className={styles.smallImage} />
            <img src="/christmasTree2.png" alt="small christmas tree" className={styles.smallImage} />
            <img src="/christmasTree3.png" alt="small christmas tree" className={styles.smallImage} />
          </div>
        )}

          </div>
        </div>

        <div className={styles.recommendedSection}>
  <h2 className={styles.recommendedTitle}>People also bought these...</h2>
  <div className={styles.recommendedProducts}>
  
    {recommendedProducts.map((item) => (
      <ProductItem key={item.id} product={item} />
    ))}
     
  </div>
</div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
