import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

const Dencrypt = (props) => {
  let values = props.values;

  const options = {
    chars: '!<>-_\\/[]{}—=+*^?#________',
  };

  const { result, dencrypt } = useDencrypt(options);

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 7000);

    return () => clearInterval(action);
  }, [values]);

  return (
    <div className="flex justify-center w-full h-20 overflow-hidden text-base text-center align-middle dark:text-nord6 dark:text-shadow text-nord3 code">
      <p className="my-auto">{result}</p>
    </div>
  );
};

export default Dencrypt;
