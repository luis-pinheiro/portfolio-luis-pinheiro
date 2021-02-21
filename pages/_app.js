import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';
import Switch from './../components/Switch2';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
// import ReactAudioPlayer from 'react-audio-player';
import SpeechNavigation from './../components/SpeechNavigation';
import SwitchToEn from '../components/SwitchToEn';
import SwitchToPt from '../components/SwitchToPt';
import SwitchToNl from '../components/SwitchToNl';
import FloatingButton from './../components/FloatingButton';
import DynamicMusic from './../components/DynamicMusic';

export const PlayContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // const Layout = Component.Layout || EmptyLayout;

  const togglePlay = () => {
    setIsplaying((isPlaying) => !isPlaying);
  };

  return (
    <div
      className={`relative flex flex-col justify-center min-h-screen align-middle bg-center bg-no-repeat bg-cover
       ${isToggled ? 'dark' : ''} bg-profitcreations effect7`}
    >
      <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />

      {/* <Layout> */}
      <div>
        <PlayContext.Provider value={{ isPlaying, togglePlay }}>
          <Component {...pageProps} />
          <DynamicMusic />
          <SwitchToPt />
          <SwitchToNl />
          <SwitchToEn />
          <FloatingButton />
          <SpeechNavigation />
        </PlayContext.Provider>
      </div>
      {/* </Layout> */}
    </div>
  );
}

// const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
