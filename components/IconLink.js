import React, { useContext } from 'react';
import Link from 'next/link';
import { PlayContext } from './../pages/_app';
import 'animate.css/animate.css';

const iconLink = ({ to, icon, title, delay }) => {
  const isPlaying = useContext(PlayContext);
  let playing = isPlaying.isPlaying;

  return (
    <div
      className={` ${
        playing ? 'animate__animated animate__heartBeat animate__infinite ' + delay : ''
      } flex-1 p-0 m-2 text-center align-middle rounded-2xl`}
    >
      <Link href={to}>
        <a className=" text-nord3 dark:text-nord6 dark:hover:text-nord-5 dark:text-shadow hover:text-nord1">
          <i className={`${icon} text-4xl sm:text-5xl `}></i>
          <p className="text-base uppercase sm:text-lg md:text-xl">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default iconLink;
