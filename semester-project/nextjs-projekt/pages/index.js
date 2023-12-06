import Link from 'next/link';
import Header from './components/Header';
import styles from '../styles/Home.module.css';


function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>WHERE STYLE MEETS COMFORT</h1>
        <Link href="/explore" className={styles.exploreButton}>
          <h3 >Explore</h3>
        </Link>
      </main>
      </div>
      <div className={styles.categorySection}>
      <h1 className={styles.categoryTitle}>SHOP BY CATEGORY</h1>
      <div className={`${styles.categories} ${styles.desktopOnly}`}>
        <button className={styles.categoryButton}>LIVING ROOM</button>
        <button className={styles.categoryButton}>KITCHEN</button>
        <button className={styles.categoryButton}>BEDROOM</button>
        <button className={styles.categoryButton}>BATHROOM</button>
        <button className={styles.categoryButton}>OUTDOOR</button>
      </div>
    </div>
    <div className={styles.colored}>
    <div className={styles.featuredSection}>
      <h2 className={styles.title}>FEATURED PRODUCTS</h2>
      <div className={`${styles.gridContainer} ${styles.desktopOnly}`}>
        <div className={styles.normal}>
          <img src="/table.jpg"/>
        </div>
        <div className={styles.normal}>
          <img src="/couch.jpg"/>
        </div>
        <div className={styles.large}>
          <img src="/shelf.jpg"/>
        </div>
        <div className={styles.normal}>
          <img src="/yellow.jpg"/>
        </div>
        <div className={styles.normal}>
          <img src="/bed.jpg" />
        </div>
      </div>
    </div>
    </div>
     <div className={styles.newsletterSection}>
      <h1 className={styles.newsletterTitle}>SUBSCRIBE TO OUR NEWSLETTER!</h1>
      <p className={styles.newsletterSubtitle}>Get the latest updates on the newest trends.</p>
      <form className={styles.newsletterForm}>
        <input type="email" placeholder="Enter your email..." className={styles.emailInput} />
        <button type="submit" className={styles.subscribeButton}>SUBSCRIBE!</button>
      </form>
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        {/* About Column */}
        <div className={`${styles.linksColumn} ${styles.mobileOnly}`}>
          <Link href="/about" className={styles.link}><span>About Us</span></Link>
          <Link href="/return-policy" className={styles.link}><span>Return Policy</span></Link>
          <Link href="/delivery" className={styles.link}><span>Delivery</span></Link>
          <Link href="/privacy-policy" className={styles.link}><span>Privacy Policy</span></Link>
          <Link href="/terms" className={styles.link}><span>Terms & Conditions</span></Link>
          <Link href="/faq" className={styles.link}><span>FAQ</span></Link>
        </div>
      
        <div className={`${styles.linksColumn} ${styles.mobileOnly}`}>
          <Link href="/about" className={styles.link}><span>About Us</span></Link>
          <Link href="/return-policy" className={styles.link}><span>Return Policy</span></Link>
          <Link href="/delivery" className={styles.link}><span>Delivery</span></Link>
          <Link href="/privacy-policy" className={styles.link}><span>Privacy Policy</span></Link>
          <Link href="/terms" className={styles.link}><span>Terms & Conditions</span></Link>
          <Link href="/faq" className={styles.link}><span>FAQ</span></Link>
        </div>
      
        
        

        {/* Affiliate Column */}
        <div className={`${styles.linksColumn} ${styles.desktopOnly}`}>
        <Link href="/careers" className={styles.link}><span>Become an affiliate</span></Link>
          <Link href="/careers" className={styles.link}><span>Careers</span></Link>
          <Link href="/partners" className={styles.link}><span>Partners</span></Link>
        </div>

        {/* Shop Column */}
        <div className={`${styles.linksColumn} ${styles.desktopOnly}`}>
        <Link href="/careers" className={styles.link}><span>Shop</span></Link>
          <Link href="/products" className={styles.link}><span>Contact Us</span></Link>
          <Link href="/inquiry" className={styles.link}><span>Inquiry</span></Link>
        </div>

        {/* Safe Online Shopping Column */}
        <div className={`${styles.linksColumn} ${styles.desktopOnly}`}>
          <h3>SAFE ONLINE SHOPPING</h3>
          <p>Shop with confidence at HCI Home Decor. We prioritize your security,</p> 
          <p>ensuring a safe and seamless online shopping experience.</p>
          <p></p>
          <p>Free delivery on orders more than $99.99s.</p>  
          <p>Return is available for 14 days.</p>
        </div>

        {/* Customer Support Column */}
        <div className={styles.linksColumn}>
          <h3>CUSTOMER SUPPORT</h3>
          <p>Our dedicated customer support team is here to help.</p>
            <p>Contact us at <span>support@hci.com</span> or <span>0123456789</span>.</p>
        </div>
      </div>
    </footer>
   
    </div>
  );
}



export default HomePage;
