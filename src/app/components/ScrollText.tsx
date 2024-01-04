import React, { useState } from 'react';

interface ScrollTextProps {
  text: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({ text }) => {
  const [opacityValues, setOpacityValues] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  return (
    <div className='font-montserrat mb-12 text-[28px] font-medium leading-none text-white max-sm:text-[20px]'>
      {text.split(' ').map((char, index) => (
        <span key={index} className='word'>
          {char + ' '}
        </span>
      ))}
    </div>
  );
};

export default ScrollText;
