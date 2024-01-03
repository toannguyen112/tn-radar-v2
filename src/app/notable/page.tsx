"use client";
import Header from '@/app/components/Header'
import BackgroundSection from '@/app/components/Icon/BackgroundSection'
import CardNotable from '@/components/CardNotable';
import React, { useRef } from 'react';
// Import Swiper React components

function NotablePage() {
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
          <div className='col-span-full md:col-span-3'>
          </div>
        </div>
      </section>
      <section className='container' >
        <div className='grid grid-cols-12  pb-[47px]' >
          <div className="col-span-full md:col-span-3 border-r border-[#1E9CD7] md:pr-[79px]">
            <div className='py-[35px] border-b border-[#0C3345]'>
              <div>
                <img src="/svg/coin/base.svg" alt="" />
              </div>
            </div>
            <div className='py-[35px] border-b border-[#0C3345]'>
              <div>
                <img src="/svg/coin/base.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-9 md:pl-[75px] space-y-[52px]">
            <CardNotable />
            <CardNotable />
            <CardNotable />
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotablePage