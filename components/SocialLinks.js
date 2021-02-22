import { motion } from 'framer-motion';

const SocialLinks = ({ className, icon, url }) => {
  const variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
    },
  };

  return (
    <motion.a
      className={`${className} text-nord3 dark:text-nord6 dark:hover:text-nord5 dark:text-shadow  text-2xl`}
      href={url}
      target="_blank"
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
      whileHover={{
        scale: 1.3,
      }}
    >
      <i className={`${icon} text-nord3 dark:text-nord6 dark:hover:text-nord5 dark:text-shadow `}></i>
    </motion.a>
  );
};

export default SocialLinks;
