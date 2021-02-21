import React from 'react';

const Switch = ({ isToggled, onToggle }) => {
  return (
    <div id="switch" className="fixed flex rounded-full z-70 right-7" style={{ bottom: '307px' }}>
      {/* Toggle Button */}
      <label htmlFor="toogleA" className="flex items-center justify-center rounded-full cursor-pointer">
        {/* toggle  */}
        <div className="relative rounded-full ">
          {/* input */}
          <input id="toogleA" type="checkbox" className="hidden" checked={isToggled} onChange={onToggle} />
          {/* line */}
          <div className="flex items-center justify-center w-8 h-8 text-xs border-2 rounded-full bg-nord3 border-nord6 dark:bg-nord6 dark:text-nord3 dark:border-nord3 elevation-5 z-70 text-nord4">
            {isToggled ? <i className="absolute fas fa-sun"></i> : <i className="absolute fas fa-moon"></i>}
          </div>
          {/* dot */}
          {/* <div className="absolute w-6 h-6 bg-blue-600 rounded-full shadow hover:elevation-7 inset-y-1 left-1 toggle__dot"></div> */}
        </div>
      </label>
    </div>
  );
};

export default Switch;
