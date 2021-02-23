import { motion } from 'framer-motion';

const SocialLinks = ({ className, icon, url }) => {
  const variants = {
    initial: {
      scale: 0,
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.3,
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
      exit="exit"
    >
      <a
        className={`${className} text-nord3 dark:text-nord6 dark:hover:text-nord5 dark:text-shadow  text-2xl`}
        href={url}
        target="_blank"
      >
        <i className={`${icon} text-nord3 dark:text-nord6 dark:hover:text-nord5 dark:text-shadow `}></i>
      </a>
    </motion.div>
  );
};

export default SocialLinks;
