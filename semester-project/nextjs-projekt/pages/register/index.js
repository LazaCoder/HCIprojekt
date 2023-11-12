import React, { useState } from 'react';
import styles from '../../styles/Auth.module.css'; // Osigurajte da je ovo ispravna putanja

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementirajte logiku registracije
    console.log('Registrirani korisnik:', username, email, password, confirmPassword);
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
