import '../styles/globals.css';
import { Provider } from 'next-auth/client';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta tags og */}
        <meta property="og:title" content="Facebook Clone but better ⚡" />
        <meta
          property="og:description"
          content="This project has a main focus on re-creating the UI with some basic functionality of adding posts, images."
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/media/E-6wWh7VgAU8Dkm?format=jpg&name=4096x4096"
        />
        <meta
          property="og:url"
          content="https://facebook-clone-geo.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
