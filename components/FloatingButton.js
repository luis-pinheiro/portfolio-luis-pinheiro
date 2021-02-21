import React from 'react';

const FloatingButton = () => {
  return (
    <button
      className="fixed block w-12 h-12 border-2 rounded-full bg-nord3 dark:bg-nord4 border-nord4 elevation-5 z-70 dark:border-nord3 right-5 "
      style={{ bottom: '90px' }}
    >
      <i className="fas fa-ellipsis-v text-nord4 dark:text-nord3"></i>
    </button>
  );
};

export default FloatingButton;
