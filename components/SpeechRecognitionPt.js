import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Router, { useRouter } from 'next/router';
import '@fortawesome/fontawesome-free/css/all.css';

const SpeechNavigation = () => {
  let locale = useRouter().locale;

  const commands = [
    {
      command: ['Abre *', 'Vai para *'],
      callback: (redirectPage) => redirectToPage(redirectPage),
    },
  ];

  const { transcript, listening } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['casa', 'sobre', 'trabalhos', 'serviços', 'contacto'];
  const urls = {
    casa: '/',
    sobre: '/about',
    trabalhos: '/work',
    serviços: '/services',
    contacto: '/contact',
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
        <div
          className="fixed top-0 flex flex-col items-center justify-around w-screen h-screen bg-center bg-no-repeat bg-contain bg-rings bg-opacity-90 dark:bg-nord3 bg-nord4 z-60"
          style={{ backgroundBlendMode: 'hue' }}
        >
          <div className="flex flex-col items-center justify-around w-screen h-screen bg-center bg-no-repeat ">
            <h4 className="font-semibold text-7xl tangerine text-nord3 dark:text-nord5 dark:text-shadow ">
              A escutar em português.
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
              <h5 className="text-2xl text-center text-nord2">Como funciona?</h5>
              <p className="text-center text-nord2">Diz:</p>
              <p className="text-center text-nord2">"Vai para [pagina]" ou "Abre [pagina]"</p>
              <p className="mt-2 text-xl text-center text-nord2">Exemplo:</p>
              <p className="text-center text-nord2"> "Abre trabalhos"</p>
              <p className="text-center text-nord2">ou</p>
              <p className="text-center text-nord2"> "Vai para trabalhos"</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          SpeechRecognition.startListening({ language: 'pt-PT' });
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
