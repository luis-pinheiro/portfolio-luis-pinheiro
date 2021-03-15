import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const CardWork2 = ({ img, title, description, tags, link, linkCode, linkDeployed, codepenLink }) => {
  const [show, setShow] = useState(false);

  // const controls = useAnimation();

  // useEffect(() => {
  //   controls.start((i) => ({
  //     opacity: 0,
  //     x: 100,
  //     transition: {
  //       delay: i - 0.3,
  //     },
  //   }));
  // }, []);

  let website = true;
  if (link === '') {
    website = false;
  }

  let code = true;
  if (linkCode === '') {
    code = false;
  }

  let deployed = true;
  if (linkDeployed === '') {
    deployed = false;
  }

  let codepen = true;
  if (codepenLink === '') {
    codepen = false;
  }

  return (
    <div className="mx-auto card">
      <img
        className={`relative  object-cover object-center rounded-lg cursor-pointer img-card elevation-4 hover:elevation-12 transform duration-75 ${
          show ? ' scale-105 z-10 elevation-10' : 'z-20'
        }`}
        src={img}
        alt={title}
        onClick={() => {
          setShow(!show);
        }}
      />
      <AnimatePresence exitBeforeEnter>
        {show && (
          <motion.div
            className="relative flex flex-col content-between mx-auto rounded-lg opacity-95 w-275px elevation-7 pt-7 card-content bg-nord6 dark:bg-nord1"
            initial={{
              height: 0,
              zIndex: 10,
              y: 15,
              opacity: 0,
            }}
            animate={{
              height: '290px',

              y: [0, 15, -15],
              opacity: 1,
              zIndex: 20,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              height: 15,
              y: [0, 15, -168],
              opacity: 0,
              zIndex: 10,
            }}
          >
            <motion.h1
              className="mb-3 text-xl font-medium text-center text-nord2 dark:text-nord6 dark:text-shadow title-font "
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mb-3 leading-relaxed text-center text-nord2 dark:text-nord5 dark:text-shadow "
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.7,
                },
              }}
              exit={{ opacity: 0 }}
            >
              {description}
            </motion.p>
            <div className="flex flex-wrap content-around justify-center text-center ">
              {tags.split(' ').map((tag) => {
                return (
                  <motion.span
                    key={tag}
                    className="self-center px-2 py-1 m-1 text-xs rounded elevation-1 bg-nord4 dark:elevation-1 dark:text-shadow dark:text-nord4 dark:bg-nord3 text-nord3 caps-all-small"
                    custom={tag}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 0.9,
                      },
                    }}
                    exit={{ opacity: 0 }}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </div>
            <motion.div
              className="flex flex-row content-around mt-auto text-base "
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 1.1,
                },
              }}
              exit={{ opacity: 0 }}
            >
              {website && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center flex-1 w-full p-4 mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg text-nord3"
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                  }}
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="w-full text-lg fas fa-globe"></i>
                  <p className="">Website</p>
                </motion.a>
              )}

              {/* deployed */}
              {deployed && (
                <motion.a
                  href={linkDeployed}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center flex-1 w-full p-4 mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg text-nord3"
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                  }}
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="w-full text-lg fab fa-html5"></i>
                  <p>View Deployed</p>
                </motion.a>
              )}

              {/* codepen */}
              {codepen && (
                <motion.a
                  href={codepenLink}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center flex-1 w-full p-4 mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg text-nord3"
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                  }}
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="w-full text-lg fab fa-codepen"></i>
                  <p>View on CodePen</p>
                </motion.a>
              )}

              {code && (
                <motion.a
                  href={linkCode}
                  target="_blank"
                  rel="noopener"
                  className="flex flex-col items-center justify-center flex-1 w-full p-4 mx-auto text-center dark:hover:text-nord6 dark:text-shadow dark:text-nord4 dark:hover:text-shadow-lg text-nord3"
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                  }}
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <i className="w-full text-lg fas fa-code"></i>
                  <p>Source Code</p>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardWork2;
