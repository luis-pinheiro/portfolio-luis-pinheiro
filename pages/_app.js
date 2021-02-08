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

  // ./Play

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
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */}
      </Head>
      <Layout>
        <div>
          <PlayContext.Provider value={{ isPlaying, togglePlay }}>
            <DynamicMusic />
            <Component {...pageProps} />
          </PlayContext.Provider>
        </div>
      </Layout>

      {/* <div className="flex justify-center align-middle">
        <ReactAudioPlayer
          src="/audio/ignition.mp3"
          controls
          className="fixed bottom-0 rounded "
          onPlay={toggleIsPlaying}
          onPause={toggleIsPlaying}
        />
      </div> */}
    </div>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
