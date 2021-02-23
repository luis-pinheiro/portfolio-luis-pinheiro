import { motion } from 'framer-motion';

const FloatingButton = ({ showNav, setShowNav }) => {
  return (
    <motion.button
      className="fixed block w-12 h-12 border-2 rounded-full bg-nord3 dark:bg-nord4 border-nord4 elevation-5 z-70 dark:border-nord3 right-5 "
      style={{ bottom: '40px' }}
      onClick={() => setShowNav(!showNav)}
      whileTap={{ rotate: 90, scale: 0.75 }}
      whileHover={{
        scale: 1.3,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
    >
      <i className="fas fa-ellipsis-v text-nord4 dark:text-nord3"></i>
    </motion.button>
  );
};

export default FloatingButton;
