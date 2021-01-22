import React from 'react';
import SpeechNavigation from './../components/SpeechNavigation';

export default function AllPagesLayout({ children }) {
  return (
    <div>
      <SpeechNavigation />
      {children}
    </div>
  );
}
