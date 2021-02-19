import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';
import Switch from './../components/Switch2';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import ReactAudioPlayer from 'react-audio-player';
// import 'animate.css/animate.css';
import DynamicMusic from './../components/DynamicMusic';

export const PlayContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);

  const Layout = Component.Layout || EmptyLayout;

  const togglePlay = () => {
    setIsplaying((isPlaying) => !isPlaying);
  };

  return (
    <div
      className={`relative flex flex-col justify-center min-h-screen align-middle bg-center bg-no-repeat bg-cover
       ${isToggled ? 'dark' : ''} bg-profitcreations effect7`}
    >
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />

      <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine&display=swap" />

        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet" /> */}
      </Head>
      <Layout>
        <div>
          <PlayContext.Provider value={{ isPlaying, togglePlay }}>
            <DynamicMusic />
            <Component {...pageProps} />
          </PlayContext.Provider>
        </div>
      </Layout>
    </div>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
