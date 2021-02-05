import React, { useState, useContext } from 'react';
import { PlayContext } from './../pages/_app';

const Music = () => {
  let playing = useContext(PlayContext);
  console.log('playing -> ', playing);
  let song = new Audio('/audio/ignition.mp3');
  function onPlay() {
    song.play();
  }
  return (
    <div>
      <button onClick={onPlay} className="fixed block right-5 z-70 top-80">
        <span className="block w-10 h-10 bg-center bg-cover border-2 rounded-full border-nord4 elevation-5 z-70 dark:border-nord3"></span>
      </button>
    </div>
  );
};

export default Music;
