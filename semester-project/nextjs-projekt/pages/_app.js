import { UserProvider } from '../contexts/UserContext';
import "/styles/global.css";
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>

      <link href='https://fonts.googleapis.com/css?family=Zilla Slab' rel='stylesheet'/>      
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
