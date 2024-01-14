import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component if you're using Next.js

import React from 'react'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        {/* Our Company Column */}
        <div className={styles.linksColumn}>
          <div className={styles.title}>Our company</div>
          <Link href="/about"><div className={styles.link}>About Us</div></Link>
          <Link href="/careers"><div className={styles.link}>Careers</div></Link>
          <Link href="/locations"><div className={styles.link}>Locations</div></Link>
          <Link href="/affiliate"><div className={styles.link}>Become an Affiliate</div></Link>
        </div>

        {/* Resources Column */}
        <div className={styles.linksColumn}>
          <div className={styles.title}>Resources</div>
          <Link href="/customer-service"><div className={styles.link}>Customer Service</div></Link>
          <Link href="/gift-cards"><div className={styles.link}>Gift Cards</div></Link>
          <Link href="/catalogs"><div className={styles.link}>Catalogs</div></Link>
          <Link href="/terms"><div className={styles.link}>Terms and Conditions</div></Link>
          <Link href="/cookies"><div className={styles.link}>Cookies</div></Link>
        </div>

        {/* Social Media Column */}
        <div className={styles.linksColumn}>
          <div className={styles.title}>Social Media</div> {/* Added title for consistency */}
          <div className={styles.socialIcons}>
            <Image src="/insta.png" alt="Instagram" width={35} height={32} />
            <Image src="/tiktok.png" alt="Instagram" width={56} height={56} />
            <Image src="/pinterest.png" alt="Instagram" width={35} height={35} />
            <Image src="/yt.png" alt="Instagram" width={32} height={32} />
          </div>
          Show us your ideas <br/>
           with: 
          <br/> #hcihomedecor 
           <br/>#hci
        </div>

        {/* Safe Online Shopping Column */}
        <div className={styles.linksColumn}>
          <div className={styles.title}>Safe Online Shopping</div> {/* Changed from h3 to div for consistency */}
          
          <div className={styles.paymentIcons}>
            <Image src="/visa.png" alt="Visa" width={75} height={50} />
            <Image src="/master.png" alt="Visa" width={60} height={50} />
            <Image src="/maestro.png" alt="Visa" width={60} height={50} />
            {/* Repeat for other payment options */}
          </div>
          <p>Free delivery on orders more than $99.99.</p>
          <p>Return is available for 14 days.</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        © HCI Home Decor 2024
      </div>
    </div>
  )
}
