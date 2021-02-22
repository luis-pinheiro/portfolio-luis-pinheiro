import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Router, { useRouter } from 'next/router';
import '@fortawesome/fontawesome-free/css/all.css';
import { motion, AnimatePresence } from 'framer-motion';

const SpeechNavigation = ({ setShowNav }) => {
  let locale = useRouter().locale;

  const commands = [
    {
      command: ['Open *', 'Go to *'],
      callback: (redirectPage) => redirectToPage(redirectPage),
    },
  ];

  const { transcript, listening } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['home', 'about', 'work', 'services', 'contact'];
  const urls = {
    home: '/',
    about: '/about',
    work: '/work',
    services: '/services',
    contact: '/contact',
  };

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null;
  // }

  let message = '';

  function redirectToPage(redirectPage) {
    if (pages.includes(redirectPage)) {
      return Router.push(urls[redirectPage]);
    } else if (redirectPage) {
      return alert(`Could not find page ${redirectPage}`);
    }
    return alert(`${transcript} is not a valide command`);
  }

  const variants = {
    initial: {
      y: 200,
      opacity: 0,
      scale: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        stiffness: 1000,
      },
    },
    hover: {
      scale: 1.3,
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div id="speech" className="">
      {listening && (
        <div
          className="fixed top-0 flex flex-col items-center justify-around w-screen h-screen bg-center bg-no-repeat bg-contain bg-opacity-90 dark:bg-nord3 bg-nord4 z-60"
          style={{ backgroundBlendMode: 'hue' }}
        >
          <div className="flex flex-col items-center justify-around w-screen h-screen bg-center bg-no-repeat ">
            <h4 className="font-semibold text-7xl tangerine text-nord3 dark:text-nord5 dark:text-shadow ">
              Listening...
            </h4>
            <p
              className={`${
                !listening ? 'hidden' : ''
              } text-4xl font-medium dark:text-shadow text-nord3 dark:text-nord6`}
            >
              {' '}
              {transcript}
            </p>
            <div className="items-center justify-center p-5 rounded bg-nord7 elevation-2">
              <h5 className="text-2xl text-center text-nord2">How it works?</h5>
              <p className="text-center text-nord2">Just say:</p>
              <p className="text-center text-nord2">"Go to [page]" or "Open [page]"</p>
              <p className="mt-2 text-xl text-center text-nord2">Example:</p>
              <p className="text-center text-nord2">"Go to work"</p>
              <p className="text-center text-nord2">or</p>
              <p className="text-center text-nord2">"Open services"</p>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        <motion.button
          onClick={() => {
            SpeechRecognition.startListening({ language: 'en-US' });
          }}
          className={`fixed flex items-center justify-center w-8 h-8  border-2 rounded-full ${
            !listening ? 'bg-nord3 dark:bg-nord4' : 'bg-nord11'
          }   elevation-5 z-70   right-7 dark:text-nord3 border-nord4  text-nord4 dark:border-nord3`}
          style={{ bottom: '316px' }}
          variants={variants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{
            type: 'spring',
            stiffness: 500,
          }}
          exit="exit"
        >
          <i className="fas fa-microphone"></i>
        </motion.button>
      </AnimatePresence>

      {listening && (
        <span
          className="fixed flex w-8 h-8 rounded-full animate-ping z-60 right-7 bg-nord11"
          style={{ bottom: '316px' }}
        ></span>
      )}
    </div>
  );
};
export default SpeechNavigation;
