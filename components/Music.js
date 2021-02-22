import React, { useState, useEffect, useContext } from 'react';
import { PlayContext } from './../pages/_app';
import { motion } from 'framer-motion';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));

  const isPlaying = useContext(PlayContext);
  const playing = isPlaying.isPlaying;

  const toggle = () => {
    isPlaying.togglePlay();
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = () => {
  const [playing, toggle] = useAudio('./audio/ignition.mp3');

  const variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 1000,
      },
    },
    hover: {
      scale: 1.3,
    },
  };

  return (
    <motion.div
      id="music"
      className="fixed flex rounded-full z-70 right-7"
      style={{ bottom: '105px' }}
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
    >
      <label htmlFor="toggleMusic" className="flex items-center justify-center rounded-full cursor-pointer">
        <div className="relative rounded-full ">
          <input id="toggleMusic" type="checkbox" className="hidden" checked={playing} onChange={toggle} />
          <div className="flex items-center justify-center w-8 h-8 text-xs border-2 rounded-full bg-nord3 border-nord6 dark:bg-nord6 dark:text-nord3 dark:border-nord3 elevation-5 z-70 text-nord4">
            {playing ? <i className="absolute fas fa-pause"></i> : <i className="absolute fas fa-play"></i>}
          </div>
        </div>
      </label>
    </motion.div>
  );
};

export default Music;
