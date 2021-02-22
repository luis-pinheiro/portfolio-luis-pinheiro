import Link from 'next/link';
import 'animate.css/animate.css';
import { motion } from 'framer-motion';

const iconLink = ({ to, icon, title, delay }) => {
  const variants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.3,
    },
  };

  return (
    <motion.div
      className="flex-1 p-0 m-2 text-center align-middle rounded-2xl text-nord3 dark:text-nord6 dark:hover:text-nord-5 dark:text-shadow hover:text-nord1"
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
      exit={{ scale: 0 }}
    >
      <Link href={to}>
        <a className="">
          <i className={`${icon} text-4xl sm:text-5xl `}></i>
          <p className="text-base uppercase sm:text-lg md:text-xl">{title}</p>
        </a>
      </Link>
    </motion.div>
  );
};

export default iconLink;
