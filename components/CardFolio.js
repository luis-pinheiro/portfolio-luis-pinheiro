import React, { useContext } from 'react';
import { motion } from 'framer-motion';

const CardFolio = ({ children, classes, vh }) => {
  const variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    exit: {
      scale: 0,
      transitionDuration: 1,
    },
  };

  return (
    <motion.main
      id="card-folio"
      className="container relative flex w-full pt-16 m-auto mb-5 overflow-hidden align-middle bg-white rounded-xl sm:px-14 pb-14 dark:bg-nord0 elevation-5 bg-clip-padding"
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        type: 'spring',
        stiffness: 200,
      }}
      exit={{
        scale: 0,
      }}
    >
      <span className="z-40 border-animated" id="1"></span>
      <span className="z-40 border-animated" id="2"></span>
      <span className="z-40 border-animated" id="3"></span>
      <span className="z-40 border-animated" id="4"></span>
      <div className="w-full " style={{ height: `${vh}` }}>
        {children}
      </div>
    </motion.main>
  );
};

export default CardFolio;
