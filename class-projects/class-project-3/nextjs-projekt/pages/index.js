import Link from 'next/link';
import Header from './components/Header';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My Store!</h2>
        <p>Discover our latest collections and get inspired.</p>
      </main>
    </div>
  );
}


export default HomePage;
