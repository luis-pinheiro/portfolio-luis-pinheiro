import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useRouter } from 'next/router';

const Dictaphone = () => {
  const [redirectUrl, setRedirectUrl] = useState('');

  const commands = [
    {
      command: ['Go to *', 'Open *'],
      // callback: (redirectPage) => setRedirectUrl(redirectPage),
      // callback: (redirectPage) => console.log('redirectPage -> ', redirectPage),
      callback: (redirectPage) => redirect(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });

  const redirect = (page) => {
    const router = useRouter();
    return router.push('/' + page);
  };

  // const redirectPage = (page) => {
  //   const router = useRouter();
  //   return router.push('/' + page);
  // };

  const pages = ['home', 'about', 'work', 'services', 'contact'];
  const urls = {
    home: '/',
    about: '/about2',
    work: '/work2',
    services: '/services',
    contact: '/contact',
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  // let redirect = '';

  // if (redirectUrl) {
  //   if (pages.includes(redirectUrl)) {
  //     console.log('redirectUrl -> ', redirectUrl);
  //   }
  // }

  // window.location.assign('/');

  return (
    <div className="flex flex-col justify-center w-3/4 text-center align-middle bg-gray-400 border mt-50 h-1/2">
      <p className="p-5 text-lg bg-gray-500">Transcript</p>
      <p>{transcript}</p>
      <p className="p-5 text-lg bg-gray-500">{window.location.href}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
  );
};
export default Dictaphone;
