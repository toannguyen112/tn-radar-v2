'use client';
import Header from '@/app/components/Header';
import BackgroundSection from '@/app/components/Icon/BackgroundSection';
import CardNotable from '@/components/CardNotable';
import { Coin } from '@/interface';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components

function NotablePage() {

  const [coin, setCoin] = useState<any[]>([]);
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/coin-radar-v2s?populate=*&sort[0]=id:asc',
          {
            method: 'GET',
          }
        );
        const data = await response.json();
        setCoin(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCoin([]);
      }
    }
    fetchData();
  }, []);

  return (
    <main className='bg-[#0B090C] pb-10'>
      <section className='relative h-[500px] overflow-hidden md:h-[430px] md:max-h-[1080px] lg:h-[500px] xl:h-screen'>
        <Header />
        <img
          src='/video/network.gif'
          alt='Your Alt Text'
          className='absolute inset-0 min-h-full min-w-full object-cover'
        />
        <div className='z-9 absolute bottom-0 h-[100px] w-full 2xl:max-h-[236px]'>
          <BackgroundSection />
        </div>
      </section>
      <section className='container'>
        <div className='max-lg:mt-8 max-lg:flex max-lg:gap-2 max-md:mt-4'>
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
        <div className='grid grid-cols-12  pb-[47px]'>
          <div className='relative col-span-full border-r border-[#1E9CD7] md:col-span-3 md:pr-[79px]'>
            <div className='sticky top-[20px]'>
              {
                coin.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className='border-b border-[#0C3345] py-[35px]'>
                      <div className='w-[244px] h-[50px]'>
                        <img
                          src={
                            val?.attributes?.icon
                              ? val?.attributes?.icon
                              : '/svg/coin/base.svg'
                          } />

                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='col-span-full space-y-[52px] md:col-span-9 md:pl-[75px]'>
            <CardNotable />
            <CardNotable />
            <CardNotable />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotablePage;
