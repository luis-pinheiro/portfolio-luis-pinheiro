import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Router from 'next/router';
import '@fortawesome/fontawesome-free/css/all.css';

const SpeechNavigation = () => {
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
    about: '/about2',
    work: '/work2',
    services: '/services2',
    contact: '/contact',
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let message = '';

  function redirectToPage(redirectPage) {
    if (pages.includes(redirectPage)) {
      return Router.push(urls[redirectPage]);
    } else {
      return alert('Could not find page: ' + redirectPage);
    }
  }

  // let redirect = '';

  // if (redirectUrl) {
  //   return alert(redirectUrl);
  // if (pages.includes(redirectUrl)) {
  //   redirect = <Redirect to={urls[redirectUrl]} />;
  // } else {
  //   redirect = <p>Could not find page: {redirectUrl}</p>;
  // }
  // }

  return (
    <div className="">
      <div
        className={`${
          !listening ? 'hidden' : 'flex'
        } fixed top-0  flex-col items-center justify-center  w-screen h-screen bg-blue-700 bg-opacity-75 z-60`}
      >
        <h4 className="text-lg font-semibold text-shadow text-nord6">Listening</h4>
        <p className="text-4xl font-medium text-shadow text-nord6"> {transcript}</p>
      </div>

      <button
        onClick={SpeechRecognition.startListening}
        className="fixed flex items-center justify-center w-10 h-10 p-4 border-2 rounded-full bg-nord3 elevation-5 z-70 text-nord4 top-14 right-5 border-nord6"
      >
        <i className="fas fa-microphone"></i>
      </button>
    </div>
  );
};
export default SpeechNavigation;
