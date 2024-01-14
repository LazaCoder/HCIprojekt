import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css';
import CategoryCard from './components/CategoryCard';
import ProductGrid from './components/ProductGrid';


function HomePage() {



  const categories = [
    { title: 'Living Room', imageUrl: '/category-living-room.png', linkHref: '/living-room' },
    { title: 'Bedroom', imageUrl: '/category-bedroom.png', linkHref: '/bedroom' },
    { title: 'Kitchen', imageUrl: '/category-bathroom.png', linkHref: '/bedroom' },
    { title: 'Toilet', imageUrl: '/category-kitchen.png', linkHref: '/bedroom' },
    { title: 'Gym', imageUrl: '/category-exterior.png', linkHref: '/bedroom' },
    { title: 'Garden', imageUrl: '/category-getInspired.png', linkHref: '/bedroom' },
  ];





  return (
    <div className={styles.container}>
      <div className={styles.upper}>
      <Header />
      <main className={styles.main}>
        <h3 className={styles.title}>Where Style Meets <br/> Comfort</h3>
        <Link href="/explore" className={styles.exploreButton}>
          <div >Explore</div>
        </Link>
      </main>
      </div>
    <div className={styles.colored}>
    <div className={styles.grid}>
      {categories.map(category => (
        <CategoryCard key={category.title} title={category.title} imageUrl={category.imageUrl} linkHref={category.linkHref} />
      ))}
    </div>
    </div>
     <div className={styles.newsletterSection}>
      <div className={styles.newsletterTitle}>Subscribe to Our Newsletter</div>
      <form className={styles.newsletterForm}>
        <input type="email" placeholder="Enter your email..." className={styles.emailInput} />
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
    </div>
    <ProductGrid/>


    <Footer/>
   
    </div>
  );
}



export default HomePage;
