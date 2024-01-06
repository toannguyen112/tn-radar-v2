'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

// import Splitting from 'splitting';
import IconMenu from '@/app/components/Icon/IconMenu';
import ScrollText from '@/app/components/ScrollText';

export default function SectionMission() {
  gsap.registerPlugin(ScrollTrigger);

  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    setHasRendered(true);
  }, []);

  const textRef: any = useRef(null);
  const playerRef: any = useRef(null);
  useEffect(() => {
    // const splitText = new SplitText(textRef.current, {
    //   type: 'word',
    // });

    const words = textRef.current.querySelectorAll('.word');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: playerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0, // Set scrub to 0
        onUpdate: (self) => {
          tl.progress(self.progress * 1.5);
        },
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
  }, [textRef]);
  return (
    <div
      className='container mt-[126px] max-lg:mt-8 max-md:mt-4'
      ref={playerRef}
    >
      <div className='top-0'>
        <p className='font-primary max-xs:text-[40px] text-[64px] font-normal uppercase leading-[60px] text-[#1E9CD7] max-md:text-[50px]'>
          Mission
        </p>
        <div className='mt-[84px] grid grid-cols-12 items-center max-lg:mt-8 max-md:mt-4'>
          <div className='col-span-8 col-start-3 m-auto flex h-full items-start gap-[54px] max-lg:col-span-12 max-lg:col-start-1 max-lg:gap-[25px]'>
            <div className='col-span-1 flex items-center justify-center'>
              <IconMenu />
            </div>
            <div className='col-span-7 h-full' ref={textRef}>
              <div
                className='h-full flex-col items-center justify-center'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <ScrollText
                  text='We strive to deliver accurate, timely, and easily understandable
                  information about the ever-evolving landscape of decentralized
                  finance.'
                />
                <ScrollText
                  text='Recognizing the immense potential and transformative power of
                  blockchain technology, we are dedicated to ensuring that this
                  potential reaches the widest possible audience.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
