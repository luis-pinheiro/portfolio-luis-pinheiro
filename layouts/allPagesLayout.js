import React from 'react';
import { useRouter } from 'next/router';
import SpeechNavigation from './../components/SpeechNavigation';

export default function AllPagesLayout({ children }) {
  let router = useRouter();
  return (
    <div>
      <SpeechNavigation />
      {children}
    </div>
  );
}
