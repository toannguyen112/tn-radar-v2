'use client';
import React, { useEffect, useState } from 'react';

import CardNotable from '@/components/CardNotable';

import Header from '@/app/components/Header';
import BackgroundSection from '@/app/components/Icon/BackgroundSection';
// Import Swiper React components

function NotablePage() {
  const [coin, setCoin] = useState<any[]>([]);
  const [coinActive, setCoinActive] = useState<any>(null);
  const [video, setVideo] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/coin-radar-v2s?populate[parent][populate][child][populate]=*&sort[0]=id:asc',
          {
            method: 'GET',
          }
        );
        const data = await response.json();
        setCoin(data.data);
        setCoinActive(
          data.data.length
            ? data.data.find((item: any) => {
                return item.id == 1;
              })
            : null
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        setCoin([]);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://3.106.127.44.nip.io/api/config', {
          method: 'GET',
        });
        const data = await response.json();
        console.log('22222', data.data.attributes.video_notable);
        data.data.attributes.video_notable
          ? setVideo(data.data.attributes.video_notable)
          : setVideo('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setVideo('');
      }
    }
    fetchData();
  }, []);

  const handleTab = (id: number) => {
    setCoinActive(
      coin.find((item, index) => {
        return item.id == id;
      })
    );
  };

  return (
    <main className='pb-10'>
      <section className='relative h-[500px] overflow-hidden md:h-[430px] md:max-h-[1080px] lg:h-[500px] xl:h-screen'>
        <Header />
        <img
          src='/video/network.gif'
          alt='Your Alt Text'
          className='absolute inset-0 min-h-full min-w-full object-cover'
        />

        {/* <iframe
          title='Vimeo Video'
          src='https://player.vimeo.com/video/899789678'
          width='100%'
          height='100%'
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        /> */}

        <div className='z-9 absolute bottom-0 h-[100px] w-full 2xl:max-h-[236px]'>
          <BackgroundSection />
        </div>
      </section>
      <section className='container'>
        <div className='max-lg:mt-8 max-lg:flex-col max-lg:gap-2 max-md:mt-4'>
          <p className='font-primary max-xs:text-[24px] text-[64px] font-normal uppercase leading-[60px] text-white  max-lg:text-[45px] max-md:text-[30px]'>
            RADAR
          </p>
          <p className='font-primary max-xs:text-[24px] text-[64px] font-normal uppercase leading-[60px] text-[#1E9CD7]  max-lg:text-[45px] max-md:text-[30px] '>
            NOTABLE POST
          </p>
        </div>
        <div className='mt-[51px] grid grid-cols-12 max-lg:mt-8 max-md:mt-4 md:gap-x-[32px]'>
          <div className='col-span-full md:col-span-3'></div>
        </div>
      </section>
      <section className='container'>
        <div className='grid grid-cols-12 pb-[47px] max-md:gap-[12px]'>
          <div className='relative col-span-full border-r border-[#1E9CD7] md:col-span-3 md:pr-[79px]'>
            <div className='sticky top-[20px]'>
              {coin.map((val, index) => {
                return (
                  <div
                    onClick={() => handleTab(val.id)}
                    key={index}
                    className='flex cursor-pointer items-center space-x-[32px] border-b border-[#0C3345] py-[35px]'
                  >
                    <div
                      className='h-[50px] max-w-[244px]'
                      dangerouslySetInnerHTML={{ __html: val.attributes.icon }}
                    ></div>
                    {coinActive && coinActive.id == val.id && (
                      <div className='rotate min-w-[25px]'>
                        <img src='/svg/active_tab.svg' alt='active_tab' />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-span-full space-y-[52px] md:col-span-9 md:pl-[75px]'>
            {coinActive?.attributes?.parent?.map(
              (parent: any, index: number) => {
                return <CardNotable key={index} parent={parent} />;
              }
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotablePage;
