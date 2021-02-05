import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Router, { useRouter } from 'next/router';
import '@fortawesome/fontawesome-free/css/all.css';

const SpeechNavigation = () => {
  let locale = useRouter().locale;

  console.log('listening nl');

  const commands = [
    {
      command: ['Open *', 'Ga naar *'],
      callback: (redirectPage) => redirectToPage(redirectPage),
    },
  ];

  const { transcript, listening } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['huis', 'over', 'werk', 'diensten', 'contact'];
  const urls = {
    huis: '/',
    over: '/about',
    werk: '/work',
    diensten: '/services',
    contact: '/contact',
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let message = '';

  function redirectToPage(redirectPage) {
    if (pages.includes(redirectPage)) {
      return Router.push(urls[redirectPage]);
    } else if (redirectPage) {
      return alert(`Could not find page ${redirectPage}`);
    }
    return alert(`${transcript} is not a valide command`);
  }

  return (
    <div id="speech" className="">
      {listening && (
        <div className="fixed top-0 flex flex-col items-center justify-around w-screen h-screen bg-opacity-90 dark:bg-nord3 bg-nord4 z-60">
          {/* <h4 className={`${!listening ? 'hidden' : ''} text-lg font-semibold text-shadow text-nord6`}>Listening</h4> */}
          <h4 className="font-semibold text-7xl tangerine text-nord3 dark:text-nord4 dark:text-shadow ">
            Aan het luisteren in het nederlands.
          </h4>
          <p
            className={`${!listening ? 'hidden' : ''} text-4xl font-medium dark:text-shadow text-nord3 dark:text-nord6`}
          >
            {' '}
            {transcript}
          </p>
          <div className="items-center justify-center p-5 rounded bg-nord7 elevation-2">
            <h5 className="text-2xl text-center text-nord2">Hoe het werkt?</h5>
            <p className="text-center text-nord2">Zeg:</p>
            <p className="text-center text-nord2">"Ga naar [pagina]" of "Open [pagina]"</p>
            <p className="text-center text-nord2">Bijvoorbeeld:</p>
            <p className="text-center text-nord2"> "Open werk"</p>
            <p className="text-center text-nord2">of</p>
            <p className="text-center text-nord2"> "Ga naar diensten"</p>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          SpeechRecognition.startListening({ language: 'nl-NL' });
        }}
        className={`fixed flex items-center justify-center w-10 h-10 p-4 border-2 rounded-full ${
          !listening ? 'bg-nord3 dark:bg-nord4' : 'bg-nord11'
        }   elevation-5 z-70  top-14 right-5 dark:text-nord3 border-nord4  text-nord4 dark:border-nord3`}
      >
        <i className="fas fa-microphone"></i>
      </button>
    </div>
  );
};
export default SpeechNavigation;
