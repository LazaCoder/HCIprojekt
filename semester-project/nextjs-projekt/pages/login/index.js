// pages/login.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Login.module.css'; // Assuming you'll create a separate CSS module file

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
      </Head>
      

     

      <div className={styles.loginContainer}>
        
      <div className={styles.logo}>
         
         <Image src="/logo.png" alt="HCI Home Decor" width={150} height={150} />
       </div>

        <h1 className={styles.title}>Login to Your Account</h1>

        <form className={styles.loginForm}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.inputField} required />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password"  className={styles.inputField} required />

          <a href="#" className={styles.forgotPassword}>Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>

        <div className={styles.signupPrompt}>
          <p>New Here?</p>
          <p>Sign up and discover a brand new world of modern home design.</p>
          <button type="button">Sign Up</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        
        <div className={styles.shadowWrapper}>
        <Image src="/interior.png" alt="Interior" layout='fill' objectFit='cover' className={styles.image} />
        </div>
      </div>
    </div>
  );
}
