import Link from 'next/link';
import Header from '../components/Header';

function BulkOrders() {
  return (
    <div>
        <Header/>
      <h1>Bulk Orders</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export default BulkOrders;

