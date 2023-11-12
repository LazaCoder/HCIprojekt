import Link from 'next/link';
import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">My Store</Link>
      </h1>
      <nav>
        <div className={styles.dropdown}>
            <Link href="/new-in" className={styles.dropbtn}>New In</Link>
            <div className={styles.dropdownContent}>
                <Link href="/new-in/autumn-collection">Autumn Collection</Link>
                <Link href="/new-in/halloween">Halloween</Link>
                <Link href="/new-in/magical-homes">Magical Homes</Link>
            </div>
        </div>

        <div className={styles.dropdown}>
            <Link href="/shop" className={styles.dropbtn}>Shop</Link>
            <div className={styles.dropdownContent}>
                <Link href="/shop/furniture">Furniture</Link>
                <Link href="/shop/wall-decor">Wall Decor</Link>
                <Link href="/shop/lighting">Lighting</Link>
                <Link href="/shop/accessories">Accessories</Link>
                <Link href="/shop/diy-projects">DIY Projects</Link>
            </div>
        </div>

        <div className={styles.dropdown}>
            <Link href="/inspiration" className={styles.dropbtn}>Inspiration</Link>
            <div className={styles.dropdownContent}>
                <Link href="/inspiration/blog">Blog</Link>
                <Link href="/inspiration/videos">Videos</Link>
                <Link href="/inspiration/gallery">Gallery</Link>
                <Link href="/inspiration/tips-ideas">Tips & Ideas</Link>
            </div>
        </div>

        <div className={styles.dropdown}>
            <Link href="/inquiry" className={styles.dropbtn}>Inquiry</Link>
            <div className={styles.dropdownContent}>
                <Link href="/inquiry/contact-us">Contact Us</Link>
                <Link href="/inquiry/customization">Customization</Link>
                <Link href="/inquiry/bulk-orders">Bulk Orders</Link>
            </div>
        </div>
        <Link href="/login" className={styles.dropbtn}>Login</Link>
        <Link href="/register" className={styles.dropbtn}>Register</Link>
      </nav>
    </header>
  );
}

export default Header;
