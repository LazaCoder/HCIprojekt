import Link from 'next/link';
import Header from '../components/Header';

function Videos() {
  return (
    <div>
        <Header/>
      <h1>Videos</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Videos;

