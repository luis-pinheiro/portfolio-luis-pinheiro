import React from 'react';

const CardFolio2 = ({ children, classes, vh }) => {
  return (
    <main
      id="card-folio"
      className="container relative flex w-full px-12 pb-5 m-auto mb-5 overflow-hidden align-middle bg-white rounded  dark:bg-nord0 elevation-5 bg-clip-padding"
    >
      <span className="z-40 border-animated" id="1"></span>
      <span className="z-40 border-animated" id="2"></span>
      <span className="z-40 border-animated" id="3"></span>
      <span className="z-40 border-animated" id="4"></span>
      <div className="w-full " style={{ height: `${vh}` }}>
        {children}
      </div>
    </main>
  );
};

export default CardFolio2;
