import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

import IconMenu from '@/app/components/Icon/IconMenu';
gsap.registerPlugin(ScrollTrigger);

export default function SectionMission() {
  const textRef: any = useRef(null);
  const playerRef: any = useRef(null);
  useEffect(() => {
    if (textRef && textRef.current) {
      const results = Splitting({ target: textRef.current, by: 'words' });
      const words = textRef.current.querySelectorAll('.word');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: playerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
        },
      });

      words.forEach((word: HTMLElement, index: number) => {
        tl.fromTo(
          word,
          { opacity: 0.5 },
          {
            opacity: 1,
            // duration: 10,
            // ease: "power4.out",
          }
        );
      });
    }
  }, [textRef]);
  return (
    <div
      className='container mt-[126px] h-[300vh] max-lg:mt-8 max-md:mt-4'
      ref={playerRef}
    >
      <div className='sticky top-0'>
        <p className='font-primary max-xs:text-[40px] text-[64px] font-normal uppercase leading-[60px] text-[#1E9CD7] max-md:text-[50px]'>
          Mission
        </p>
        <div className='mt-[84px] grid grid-cols-12 items-center max-lg:mt-8 max-md:mt-4'>
          <div className='col-span-8 col-start-3 m-auto flex items-start gap-[54px] max-lg:col-span-12 max-lg:col-start-1 max-lg:gap-[25px]'>
            <div className='col-span-1 flex items-center justify-center'>
              <IconMenu />
            </div>
            <div className='col-span-7' ref={textRef}>
              <p className='font-montserrat mb-12 text-[28px] font-medium leading-none text-white max-sm:text-[20px]'>
                We strive to deliver accurate, timely, and easily understandable
                information about the ever-evolving landscape of decentralized
                finance.
              </p>
              <p className='font-montserrat text-[28px] font-medium leading-none text-white max-sm:text-[20px]'>
                Recognizing the immense potential and transformative power of
                blockchain technology, we are dedicated to ensuring that this
                potential reaches the widest possible audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
