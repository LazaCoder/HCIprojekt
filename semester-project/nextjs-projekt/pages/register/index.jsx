
import React from 'react';
import Image from 'next/image';
import styles from "../../styles/Register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
       
        <Image src="/interior.png" alt="Home Decor" layout="fill" objectFit="cover" />
      </div>

      
      <div className={styles.formSection}>
      <div className={styles.logo}>
         
         <Image src="/logo.png" alt="HCI Home Decor" width={150} height={150} />
       </div>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Create an Account</h1>
          <form>
            <div className={styles.loginForm}>
              <div>
              <label htmlFor="username" className={styles.label}>Name</label>
              <input type="text" id='username' className={styles.inputField} required />
              </div>

              <div>
              <label htmlFor="surname" className={styles.label}>Surname</label>
              <input type="text" id='surname' className={styles.inputField} required />
              </div>
            </div>
            <div className={styles.dateOfBirth}>
              {/* Date of Birth fields */}
            </div>
            <div className={styles.gender}>

              <label htmlFor="gender" className={styles.label}>Gender</label>
              <label>
                <input type="radio" name="gender" id='gender' value="male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>
            <label htmlFor="email" className={styles.label} required >Email</label>
            <input type="email" id='email' className={styles.inputField} />
            <button type="submit" className={styles.submitButton}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
