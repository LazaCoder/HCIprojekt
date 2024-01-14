import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProductItem.module.css';

function ProductItem({ product }) {
    // Create an array of JSX Image components for the stars
    const starImages = [];
    for (let i = 0; i < 5; i++) {
        starImages.push(
            <Image
                src={i < product.rating ? "/punazvizda.png" : "/praznazvizda.png"}
                alt={i < product.rating ? "Full Star" : "Empty Star"}
                width={15} // Set the size of your star images
                height={15}
                key={i}
            />
        );
    }

    console.log(product.name)
    return (
        <div className={styles.productItem}>
            <img src={"https:" + product.image.fields.file.url} alt={product.name} className={styles.image} />
            <h3 className={styles.title}>{product.name}</h3>
            <div className={styles.flex}>
                <p className={styles.price}>{product.price}</p>
                <div className={styles.rating}>
                    {starImages}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
