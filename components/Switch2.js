import { motion, AnimatePresence } from 'framer-motion';

const Switch = ({ isToggled, onToggle }) => {
  const variants = {
    initial: {
      y: 200,
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
    exit: {
      y: -200,
      opacity: 0,
    },
  };

  return (
    <motion.div
      id="switch"
      className="fixed flex rounded-full z-70 right-7"
      style={{ bottom: '274px' }}
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{
        type: 'spring',
        stiffness: 500,
      }}
    >
      <AnimatePresence>
        {/* Toggle Button */}
        <motion.label
          htmlFor="toogleA"
          className="flex items-center justify-center rounded-full cursor-pointer"
          exit={{ y: -200, opacity: 0 }}
        >
          {/* toggle  */}
          <div className="relative rounded-full ">
            {/* input */}
            <input id="toogleA" type="checkbox" className="hidden" checked={isToggled} onChange={onToggle} />
            {/* line */}
            <div className="flex items-center justify-center w-8 h-8 text-xs border-2 rounded-full bg-nord3 border-nord6 dark:bg-nord6 dark:text-nord3 dark:border-nord3 elevation-5 z-70 text-nord4">
              {isToggled ? <i className="absolute fas fa-sun"></i> : <i className="absolute fas fa-moon"></i>}
            </div>
            {/* dot */}
          </div>
        </motion.label>
      </AnimatePresence>
    </motion.div>
  );
};

export default Switch;
