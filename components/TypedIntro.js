import React from 'react';
import Typed from 'react-typed';

const TypedIntro = (props) => {
  const values = props.values;

  return (
    <div className="bg-blue-500 p-14">
      <Typed strings={values} typeSpeed={70} backSpeed={90} />
    </div>
  );
};

export default TypedIntro;
