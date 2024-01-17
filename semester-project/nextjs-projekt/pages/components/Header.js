import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();


  // Function to apply active styles based on the current route
  const getNavItemStyle = (path) => {
    return router.pathname === path ? styles.navItemActive : styles.navItem;
  };

  return (
    <div className={styles.header}>




        <Link href="/" passHref>
          <div className={getNavItemStyle('/')}>Home</div>
        </Link>
        <Link href="/new-in" passHref>
          <div className={getNavItemStyle('/new-in')}>Christmas </div>
        </Link>
        <Link href="/shop" passHref>
          <div className={getNavItemStyle('/shop')}>Shop</div>
        </Link>
        <Link href="/inspiration" passHref>
          <div className={getNavItemStyle('/inspiration')}>Inspiration</div>
        </Link>
        <Link href="/inquiry" passHref>
          <div className={getNavItemStyle('/inquiry')}>Inquiry</div>
        </Link>

       <div> <img src="/logo.png" alt="HCI Home Decor" className={styles.logo} /> </div>

      
    </div>
  );
}

export default Header;
