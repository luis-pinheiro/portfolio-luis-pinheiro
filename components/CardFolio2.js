import React from 'react';

const CardFolio2 = ({ children, classes, vh }) => {
  return (
    <main
      id="card-folio"
      className={` relative flex w-full m-auto overflow-hidden align-middle bg-white dark:bg-nord0 elevation-5  rounded bg-clip-padding ${classes}`}
    >
      <span className="z-40 border-animated" id="1"></span>
      <span className="z-40 border-animated" id="2"></span>
      <span className="z-40 border-animated" id="3"></span>
      <span className="z-40 border-animated" id="4"></span>
      <div className="w-full overflow-y-auto" style={{ height: `${vh}` }}>
        {children}
      </div>
    </main>
  );
};

export default CardFolio2;
