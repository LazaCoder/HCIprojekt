import Link from 'next/link';
import Header from '../components/Header';

function Gallery() {
  return (
    <div>
        <Header/>
      <h1>Gallery</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Gallery;

