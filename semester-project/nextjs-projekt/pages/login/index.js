import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../contexts/UserContext'; // Adjust the import path as needed
import styles from '../../styles/Auth.module.css'; // Ensure the path to your CSS module is correct

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setIsLoggedIn } = useUser(); // Use the setIsLoggedIn function from UserContext

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);

        // Update the logged-in state and set localStorage
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to the home page
        router.push('/');
      } else {
        console.log('Login failed:', data.message);
        // Optionally handle login failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Optionally handle the error (e.g., show an error message)
    }
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
