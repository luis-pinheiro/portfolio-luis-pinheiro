import React from 'react';

const Switch = ({ isToggled, onToggle }) => {
  return (
    <div className="absolute z-30 flex border w-11 h-7 top-3 lg:top-5 right-5">
      {/* Toggle Button */}
      <label for="toogleA" className="flex items-center cursor-pointer">
        {/* toggle  */}
        <div className="relative">
          {/* input */}
          <input id="toogleA" type="checkbox" className="hidden" checked={isToggled} onChange={onToggle} />
          {/* line */}
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner toggle__line"></div>
          {/* dot */}
          <div className="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
