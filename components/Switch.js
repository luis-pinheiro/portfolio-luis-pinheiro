import React from 'react';

const Switch = ({ isToggled, onToggle }) => {
  return (
    <div className="fixed flex rounded-full z-60 w-11 h-7 top-3 lg:top-5 right-5">
      {/* Toggle Button */}
      <label htmlFor="toogleA" className="flex items-center justify-center rounded-full cursor-pointer">
        {/* toggle  */}
        <div className="relative rounded-full ">
          {/* input */}
          <input id="toogleA" type="checkbox" className="hidden" checked={isToggled} onChange={onToggle} />
          {/* line */}
          <div className="h-8 bg-white rounded-full w-14 toggle__line">
            <i className="absolute text-yellow-500 fas fa-sun left-2 top-2"></i>
            <i className="absolute fas fa-moon right-2 top-2"></i>
          </div>
          {/* dot */}
          <div className="absolute w-6 h-6 bg-blue-600 rounded-full shadow hover:elevation-7 inset-y-1 left-1 toggle__dot"></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;