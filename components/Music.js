const Music = ({ isPlaying, onToggle }) => {
  console.log('isPlaying -> ', isPlaying);
  return (
    <div id="music" className="fixed flex rounded-full z-70 w-11 h-7 top-80 right-4">
      {/* Toggle Button */}
      <label htmlFor="toggleMusic" className="flex items-center justify-center rounded-full cursor-pointer">
        {/* toggle  */}
        <div className="relative rounded-full ">
          {/* input */}
          <input id="toggleMusic" type="checkbox" className="hidden" checked={isPlaying} onChange={onToggle} />
          {/* line */}
          <div className="flex items-center justify-center w-10 h-10 text-lg border-2 rounded-full bg-nord3 border-nord6 dark:bg-nord6 dark:text-nord3 dark:border-nord3 elevation-5 z-70 text-nord4">
            {isPlaying ? <i className="absolute fas fa-pause"></i> : <i className="absolute fas fa-play"></i>}
          </div>
          {/* dot */}
          {/* <div className="absolute w-6 h-6 bg-blue-600 rounded-full shadow hover:elevation-7 inset-y-1 left-1 toggle__dot"></div> */}
        </div>
      </label>
    </div>
  );
};

export default Music;
