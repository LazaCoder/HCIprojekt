import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { useUser } from '../../contexts/UserContext';

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useUser();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navItem}>Home</Link>
        <Link href="/new-in" className={styles.navItem}>New In</Link>
        <Link href="/shop" className={styles.navItem}>Shop</Link>
        <Link href="/inspiration" className={styles.navItem}>Inspiration</Link>
        <Link href="/inquiry" className={styles.navItem}>Inquiry</Link>
      </div>
    </header>
  );
}

export default Header;
