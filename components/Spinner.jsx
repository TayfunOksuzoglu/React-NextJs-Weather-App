import React from 'react';
import spinner from '../public/spinner-icon.gif';
import Image from 'next/image';

const Spinner = () => {
  return (
    <div className="relative">
      <Image
        className="w-[200px] m-auto block"
        src={spinner}
        alt="loading spinner..."
      />
    </div>
  );
};

export default Spinner;
