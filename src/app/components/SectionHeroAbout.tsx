import React, { useEffect, useState } from 'react';

import Header from '@/app/components/Header';
import BackgroundSection from '@/app/components/Icon/BackgroundSection';

export default function SectionHeroAbout() {
  const [video, setVideo] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://3.106.127.44.nip.io/api/config', {
          method: 'GET',
        });
        const data = await response.json();
        data.video_about ? setVideo(data.video_about) : setVideo('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setVideo('');
      }
    }
    fetchData();
  }, []);
  return (
    <section className='relative h-[500px] overflow-hidden md:h-[430px] md:max-h-[1080px] lg:h-[500px] xl:h-screen'>
      <Header />
      <img
        src='/video/network.gif'
        alt='Your Alt Text'
        className='absolute inset-0 min-h-full min-w-full object-cover'
      />
      {/* <video autoPlay muted loop className='min-w-full object-cover'>
        <source src={video} type='video/mp4' />
      </video> */}
      <div className='container h-full '>
        <div className='relative h-full'>
          <div className='font-primary gradient-text max-xs:text-[30px] absolute left-0 top-[230px] font-normal uppercase leading-[110%] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px]'>
            <p>ABOUT</p>
          </div>
        </div>
      </div>
      <div className='z-9 absolute bottom-0 h-[100px] w-full 2xl:max-h-[236px]'>
        <BackgroundSection />
      </div>
    </section>
  );
}
