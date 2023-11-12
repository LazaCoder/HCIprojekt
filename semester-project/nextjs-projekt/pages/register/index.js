import React, { useState } from 'react';
import styles from '../../styles/Auth.module.css'; // Osigurajte da je ovo ispravna putanja
const API_ENDPOINT = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Simple validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    try {
      const response = await fetch(`${API_ENDPOINT}/api/register`, { // Replace with your server URL if different
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // Do not send the password in plain text in a real app
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      const data = await response.json();
      console.log('Registered user with ID:', data.userId);
      // Redirect or show success message
    } catch (error) {
      console.error('Registration error:', error);
      // Handle errors, show messages, etc.
    }
  };
  

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>Register</h2>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div>
          <label htmlFor="username">Korisničko ime:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.authInput}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.authInput}
          />
        </div>
        <div>
          <label htmlFor="password">Lozinka:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.authInput}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Potvrdi lozinku:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.authInput}
          />
        </div>
        <button type="submit" className={styles.authButton}>Registriraj se</button>
      </form>
    </div>
  );
}

export default RegisterPage;
