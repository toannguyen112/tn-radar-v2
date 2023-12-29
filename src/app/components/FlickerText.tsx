import React, { useEffect, useState } from 'react';

interface FlickerTextProps {
  text: string;
}

const FlickerText: React.FC<FlickerTextProps> = ({ text }) => {
  const [opacityValues, setOpacityValues] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const textArray: string[] = text.split('');
    const initialOpacityValues: number[] = Array(textArray.length).fill(0);

    setOpacityValues(initialOpacityValues);

    const flickerInterval = setInterval(() => {
      const newOpacityValues: number[] = initialOpacityValues.map(() =>
        Math.random() < 0.5 ? 0 : 1
      );

      setOpacityValues(newOpacityValues);

      if (newOpacityValues.every((value) => value === 1)) {
        setIsComplete(true);
      }
    }, 300);

    return () => {
      clearInterval(flickerInterval);
    };
  }, [text]);

  return (
    <div className='flicker-text'>
      {text.split('').map((char, index) => (
        <span key={index} style={{ opacity: opacityValues[index] }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default FlickerText;
