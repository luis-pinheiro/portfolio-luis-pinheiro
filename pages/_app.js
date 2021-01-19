import React, { useState } from 'react';
import Head from 'next/head';
import Switch from './../components/Switch2';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={`relative flex flex-col justify-center min-h-screen align-middle bg-center bg-no-repeat bg-cover ${
        isToggled ? 'dark' : ''
      } bg-profitcreations effect7`}
    >
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Oswald" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />

        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
