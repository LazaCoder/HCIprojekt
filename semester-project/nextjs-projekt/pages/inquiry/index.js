// pages/inquiry.js
import React, { useState } from 'react';
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import styles from '../../styles/Inquiry.module.css'; // Use CSS Modules for styling

const InquiryPage = () => {
  // State for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission here
    console.log({ name, email, message, newsletter });
  };

  return (
    <div>
    <div className={styles.background}>
     <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>Have questions or any special request?</h1>
        <p className={styles.subtitle}>Feel free to contact us.</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={styles.input}
          />
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input}
          />
          <textarea 
            placeholder="Enter your message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className={styles.textarea}
          />
          <label className={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              checked={newsletter} 
              onChange={(e) => setNewsletter(e.target.checked)} 
            />
            Subscribe to our newsletter
          </label>
          <button type="submit" className={styles.button}>Send</button>
        </form>
      </main>
     
    </div>
    <Footer />
    </div>

  );
};

export default InquiryPage;
