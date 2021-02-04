import React from 'react';
import SpeechNavigation from './../components/SpeechNavigation';
import SwitchToEn from '../components/SwitchToEn';
import SwitchToPt from '../components/SwitchToPt';
import SwitchToNl from '../components/SwitchToNl';

export default function AllPagesLayout(props) {
  return (
    <div>
      {props.children}
      <SwitchToPt />
      <SwitchToNl />
      <SwitchToEn />
      <SpeechNavigation />
    </div>
  );
}
