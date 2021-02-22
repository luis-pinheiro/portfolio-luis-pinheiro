import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SwitchToNl() {
  let router = useRouter();
  const variants = {
    initial: {
      y: 150,
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
    <div>
      <Link href={router.asPath} locale="nl">
        <motion.a
          className="fixed block right-7 z-70 "
          style={{ bottom: '148px' }}
          variants={variants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{
            type: 'spring',
            stiffness: 500,
          }}
        >
          <span
            className="block w-8 h-8 bg-center bg-cover border-2 rounded-full border-nord4 elevation-5 z-70 dark:border-nord3"
            style={{ backgroundImage: `url("/images/flags/NL.png")` }}
          ></span>
        </motion.a>
      </Link>
    </div>
  );
}
