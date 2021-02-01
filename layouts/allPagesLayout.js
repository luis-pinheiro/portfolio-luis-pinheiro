import React from 'react';
import { useRouter } from 'next/router';
import SpeechNavigation from './../components/SpeechNavigation';
import ChangeLanguage from './../components/ChangeLanguage';

export default function AllPagesLayout({ children }) {
  let router = useRouter();
  return (
    <div>
      <SpeechNavigation />
      <ChangeLanguage />
      {children}
    </div>
  );
}
