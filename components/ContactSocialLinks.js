import '@fortawesome/fontawesome-free/css/all.css';
import { motion } from 'framer-motion';

const ContactSocialLinks = ({ link, icon, text, title }) => {
  return (
    <li className="px-4 py-2 mb-2 sm:mb-0 sm:block sm:w-full ">
      <motion.a
        className="px-5 py-2 text-sm text-center rounded-sm elevation-1 text-nord1 bg-nord6 sm:mx-auto sm:block sm:w-full hover:elevation-2 hover:bg-nord5"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        whileHover={{
          scale: 1.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
        }}
      >
        {' '}
        <i className={icon} title={title}></i> {text}
      </motion.a>
    </li>
  );
};

export default ContactSocialLinks;
