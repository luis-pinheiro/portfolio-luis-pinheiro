import React, { useContext } from 'react';
import SpeechNavigation from './../components/SpeechNavigation';
import SwitchToEn from '../components/SwitchToEn';
import SwitchToPt from '../components/SwitchToPt';
import SwitchToNl from '../components/SwitchToNl';
import FloatingButton from './../components/FloatingButton';

export default function AllPagesLayout(props) {
  return (
    <div>
      {props.children}
      <SwitchToPt />
      <SwitchToNl />
      <SwitchToEn />
      <FloatingButton />
      <SpeechNavigation />
    </div>
  );
}
