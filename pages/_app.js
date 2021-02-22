import React, { useState, useEffect } from 'react';
import Switch from './../components/Switch2';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import SpeechNavigation from './../components/SpeechNavigation';
import SwitchToEn from '../components/SwitchToEn';
import SwitchToPt from '../components/SwitchToPt';
import SwitchToNl from '../components/SwitchToNl';
import FloatingButton from './../components/FloatingButton';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [isToggled, setIsToggled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [firstShowNav, setFirstShowNav] = useState(false);

  if (!firstShowNav) {
    setTimeout(() => {
      setShowNav(false);
      setFirstShowNav(true);
    }, 2000);
  }

  return (
    <div
      className={`relative flex flex-col justify-center min-h-screen align-middle bg-center bg-no-repeat bg-cover
       ${isToggled ? 'dark' : ''} bg-profitcreations effect7`}
    >
      <div>
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
          </div>
        )}

        <FloatingButton showNav={showNav} setShowNav={setShowNav} />
      </div>
    </div>
  );
}

export default MyApp;
