import '../styles/globals.css';
import { Provider } from 'next-auth/client';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
