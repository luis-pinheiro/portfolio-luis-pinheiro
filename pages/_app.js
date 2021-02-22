import React, { useState } from 'react';
import Switch from './../components/Switch2';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import SpeechNavigation from './../components/SpeechNavigation';
import SwitchToEn from '../components/SwitchToEn';
import SwitchToPt from '../components/SwitchToPt';
import SwitchToNl from '../components/SwitchToNl';
import FloatingButton from './../components/FloatingButton';
import DynamicMusic from './../components/DynamicMusic';
import { motion, AnimatePresence } from 'framer-motion';

export const PlayContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [firstShowNav, setFirstShowNav] = useState(false);

  if (!firstShowNav) {
    setTimeout(() => {
      setShowNav(false);
      setFirstShowNav(true);
    }, 2000);
  }

  // const Layout = Component.Layout || EmptyLayout;

  const togglePlay = () => {
    setIsplaying((isPlaying) => !isPlaying);
  };

  return (
    <div
      className={`relative flex flex-col justify-center min-h-screen align-middle bg-center bg-no-repeat bg-cover
       ${isToggled ? 'dark' : ''} bg-profitcreations effect7`}
    >
      <div>
        <PlayContext.Provider value={{ isPlaying, togglePlay }}>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
          {showNav && (
            <div>
              <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} setShowNav={setShowNav} />

              <SwitchToPt setShowNav={setShowNav} />
              <SwitchToNl setShowNav={setShowNav} />
              <SwitchToEn setShowNav={setShowNav} />
              <SpeechNavigation setShowNav={setShowNav} />
              <DynamicMusic showNav={showNav} setShowNav={setShowNav} />
            </div>
          )}

          <FloatingButton showNav={showNav} setShowNav={setShowNav} />
        </PlayContext.Provider>
      </div>
    </div>
  );
}

export default MyApp;
