import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css';
import CategoryCard from './components/CategoryCard';
import ProductGrid from './components/ProductGrid';
import Head from 'next/head';
import { useRef,useState } from 'react';


function HomePage() {
  const categoriesRef = useRef(null);
  const categories = [
    { title: 'Living Room', imageUrl: '/category_1.webp', linkHref: '/living-room' },
    { title: 'Bedroom', imageUrl: '/category_2.webp', linkHref: '/bedroom' },
    { title: 'Kitchen', imageUrl: '/category_3.webp', linkHref: '/bedroom' },
    { title: 'Toilet', imageUrl: '/category_4.webp', linkHref: '/bedroom' },
    { title: 'Gym', imageUrl: '/category_5.webp', linkHref: '/bedroom' },
    { title: 'Garden', imageUrl: '/category.webp', linkHref: '/bedroom' },
  ];

  // New state for the email
  const [email, setEmail] = useState('');

  // Handler for form submission
  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      // Handle response here, e.g., show a success message
      alert(data.message);
    } catch (error) {
      // Handle error here, e.g., show an error message
      console.error('Error:', error);
    }
  };


  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <div className={styles.container}>
       <Head>
        <link rel="preload" href="/category_1.webp" as="image"/>
        <link rel="preload" href="/category_2.webp" as="image" />
        <link rel="preload" href="/category_3.webp" as="image" />
        <link rel="preload" href="/category_4.webp" as="image" />
        <link rel="preload" href="/category_5.webp" as="image" />
        <link rel="preload" href="/category.webp" as="image" />
        <title>Home</title>
      </Head>
      <div className={styles.upper}>
      <Header />
      <main className={styles.main}>
        <h3 className={styles.title}>Where Style Meets <br/> Comfort</h3>
        <Link href="#!" onClick={scrollToCategories} className={styles.exploreButton}>
            <div>Explore</div>
          </Link>
      </main>
      </div>
    <div className={styles.colored}>
    <div className={styles.grid} ref={categoriesRef}>
      {categories.map(category => (
       <div className={styles.element}> <CategoryCard key={category.title} title={category.title} imageUrl={category.imageUrl} linkHref={category.linkHref} /> </div>
      ))}
    </div>
    </div>
     <div className={styles.newsletterSection}>
      <div className={styles.newsletterTitle}>Subscribe to Our Newsletter</div>
      <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email..."
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.subscribeButton}>Subscribe</button>
        </form>
    </div>
    <div className={styles.desktopOnly}>
    <ProductGrid/>
    </div>
    

    <Footer/>
   
    </div>
  );
}



export default HomePage;
