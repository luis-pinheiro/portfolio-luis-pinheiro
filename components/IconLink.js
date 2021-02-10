import React, { useContext } from 'react';
import Link from 'next/link';
import { PlayContext } from './../pages/_app';
import 'animate.css/animate.css';

const iconLink = ({ to, icon, title, delay }) => {
  const isPlaying = useContext(PlayContext);
  let playing = isPlaying.isPlaying;

  console.log('playing Icon -> ', playing);

  return (
    <div
      className={` ${
        playing ? 'animate__animated animate__heartBeat animate__infinite ' + delay : ''
      } flex-1 p-0 m-2 text-center align-middle rounded-2xl`}
    >
      <Link href={to}>
        <a className=" text-nord3 dark:text-nord6 dark:hover:text-nord-5 dark:text-shadow hover:text-nord1">
          <i className={`${icon} r-2 `}></i>
          <p className="uppercase r-4">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default iconLink;
