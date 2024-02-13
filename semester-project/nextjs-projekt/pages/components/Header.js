import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';
import { slide as Menu } from 'react-burger-menu';
import { FaTimes } from 'react-icons/fa';

function Header() {

  const router=useRouter();

  useEffect(() => {
    if (router.isReady) {
      const currentPath = router.pathname;
  
    }
  }, [router.isReady, router.query]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(state => !state);
  };

  

  const fullScreenStyles = {

    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmMenuWrap: {
      top: '0px',
      left: '0px',
      height: isMenuOpen ? '100%' : '0',
      width: '100%'
    },
    bmMenu: {
      background: 'white', // Use a theme color of your choice
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '1.2em',
      height: '100%' // Make sure items cover the height
    },

    bmItem: {
      display: 'block',
      padding: '0.5em 1em',
      textDecoration: 'none',
      marginBottom: '10px',
      transition: 'background-color 0.2s',
      cursor: 'pointer'
    },
    
    bmOverlay: {
      display: 'none',
      background: 'rgba(0, 0, 0, 1)',
      position: 'fixed',
      width: '0',
      height: '0'
    }
    // You can add more styles if needed
  };


  // Function to apply active styles based on the current route
  const getNavItemStyle = (path) => {
    if( router.pathname.includes(path)) {

      return styles.navItemActive
    } else { 
      return styles.navItem}
  };
  

  const getHomeItemStyle = (path) => {
    if( router.pathname===path) {

      return styles.navItemActive
    } else { 
      return styles.navItem}
  };
  
  const getProductItemStyle = (path) => {
    if( router.pathname===path || router.pathname.includes( "product")) {

      return styles.navItemActive
    } else { 
      return styles.navItem}
  };


  return (
    <div className={styles.header}>
    <div className={classNames(styles.styled,styles.mobileOnly)}> <FaBars  onClick={toggleMenu}/> </div>
       <div className={styles.mobileOnly}>
  
       <Menu  styles={fullScreenStyles} isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}>
        <div className={styles.bmMenuWrap}>
                   
        <div className={styles.bmMenu}>
        <FaTimes className={styles.menuClose} onClick={toggleMenu} />
        <Link className={styles.bmItemList} href="/" passHref>
          <div>Home</div>
        </Link>
        <Link className={styles.bmItemList} href="/new-in" passHref>
          <div>Shop</div>
        </Link>
        <Link  className={styles.bmItemList} href="/shop" passHref>
          <div >Christmas</div>
        </Link>
        <Link className={styles.bmItemList}  href="/inspiration" passHref>
          <div >Inspiration</div>
        </Link>
        <Link className={styles.bmItemList}  href="/inquiry" passHref>
          <div >Inquiry</div>
        </Link>
         </div>
        </div>
       </Menu>



       </div>

        <Link href="/" passHref>
          <div className={getHomeItemStyle('/')}>Home</div>
        </Link>
        <Link href="/new-in" passHref>
          <div className={getProductItemStyle('/new-in')}>Shop </div>
        </Link>
        <Link href="/shop" passHref>
          <div className={getNavItemStyle('/shop')}>Christmas</div>
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
