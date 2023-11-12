import React, { useState } from 'react';
import styles from '../../styles/Auth.module.css'; // Osigurajte da je ovo ispravna putanja

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementirajte logiku prijave
    console.log('Prijavljeni korisnik:', username, password);
  };

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>Login</h2>
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
          <label htmlFor="password">Lozinka:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.authInput}
          />
        </div>
        <button type="submit" className={styles.authButton}>Prijavi se</button>
      </form>
    </div>
  );
}

export default LoginPage;
