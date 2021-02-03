import React from 'react';
import SpeechNavigation from './../components/SpeechNavigation';
import { SwitchToPt, SwitchToEn, SwitchToNl } from './../components/SwitchLanguage';

export default function AllPagesLayout(props) {
  return (
    <div>
      <SpeechNavigation />
      <SwitchToPt />
      <SwitchToNl />
      <SwitchToEn />
      {props.children}
    </div>
  );
}
