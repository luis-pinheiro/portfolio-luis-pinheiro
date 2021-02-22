import React, { useContext } from 'react';
import Link from 'next/link';
import { PlayContext } from './../pages/_app';
import 'animate.css/animate.css';
import { motion } from 'framer-motion';

const iconLink = ({ to, icon, title, delay }) => {
  const isPlaying = useContext(PlayContext);
  let playing = isPlaying.isPlaying;

  const variants = {
    initial: {
      y: 100,
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
      className={` ${
        playing ? 'animate__animated animate__heartBeat animate__infinite ' + delay : ''
      } flex-1 p-0 m-2 text-center align-middle rounded-2xl  text-nord3 dark:text-nord6 dark:hover:text-nord-5 dark:text-shadow hover:text-nord1`}
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
    >
      <Link href={to}>
        <motion.a className="">
          <i className={`${icon} text-4xl sm:text-5xl `}></i>
          <p className="text-base uppercase sm:text-lg md:text-xl">{title}</p>
        </motion.a>
      </Link>
    </motion.div>
  );
};

export default iconLink;
