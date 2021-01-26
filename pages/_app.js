import React, { useState } from 'react';
import Head from 'next/head';
import App from 'next/app';
import Switch from './../components/Switch2';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isToggled, setIsToggled] = useState(false);

  const Layout = Component.Layout || EmptyLayout;

  return (
    <div
      className={`relative flex flex-col justify-center min-h-screen align-middle bg-center bg-no-repeat bg-cover
       ${isToggled ? 'dark' : ''} bg-profitcreations effect7`}
    >
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />

      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />

        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
