'use client';
import Link from 'next/link';
import { useState } from 'react';

import DiscordHeader from '@/app/components/Icon/DiscordHeader';
import Menu from '@/app/components/Icon/Menu';
import TelegramHeader from '@/app/components/Icon/TelegramHeader';
import TwitterHeader from '@/app/components/Icon/TwitterHeader';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=''>
      <div
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute left-0 top-0 z-20 w-full transform rounded-2xl border border-[#0B090C] bg-[#0B090C]  pb-10 transition-transform duration-200 max-xl:pb-6 max-md:pb-4 ${isHovered ? 'block translate-y-0' : 'hidden -translate-y-full'
          }`}
      >
        <div className='container pt-10 max-xl:pt-6 max-md:pt-4'>
          <div className='flex items-center justify-between'>
            <div className='w-full max-w-[70px] md:max-w-[180px] 2xl:max-w-[312px]'>
              <img
                src='/images/logo.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex gap-[30px] max-md:gap-2'>
              <Link href='/'>
                <p className='font-montserrat cursor-pointer text-[24px] font-semibold uppercase text-white duration-200 hover:text-[#3E97C3] max-md:text-[16px] max-sm:text-[14px]'>
                  home
                </p>
              </Link>
              <Link href='/about'>
                <p className='font-montserrat cursor-pointer text-[24px] font-semibold uppercase text-white duration-200 hover:text-[#3E97C3] max-md:text-[16px] max-sm:text-[14px]'>
                  about
                </p>
              </Link>
              <p className='font-montserrat cursor-pointer text-[24px] font-semibold uppercase text-white duration-200 hover:text-[#3E97C3] max-md:text-[16px] max-sm:text-[14px]'>
                event
              </p>
              <div
                onClick={() => setIsHovered(false)}
                className=' relative z-10 flex  h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white duration-300 ease-in-out lg:hover:border-[#00CC2D] lg:hover:bg-[#00CC2D] '
              >
                <Menu />
              </div>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-12 max-md:mt-4'>
            <div className='col-span-6 max-md:col-span-full'>
              <p className='font-radar max-xs:text-[30px] text-[64px] font-normal uppercase leading-[60px] text-[#1E9CD7] max-lg:leading-none max-md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px]'>
                about
              </p>
              <p className='font-montserrat mt-5 text-[18px] font-medium text-white max-lg:mb-8 max-md:mb-4 max-md:text-[14px]'>
                We strive to deliver accurate, timely, and easily understandable
                information about the ever-evolving landscape of decentralized
                finance. Recognizing the immense potential and transformative
                power of blockchain technology, we are dedicated to ensuring
                that this potential reaches the widest possible audience.
              </p>
            </div>
            <div className='col-span-2 max-lg:col-span-1 max-md:hidden'></div>
            <div className='col-span-4 max-lg:col-span-5 max-md:col-span-full'>
              <div className='relative h-[250px] w-full max-xl:h-[200px] max-md:h-[170px] '>
                <img
                  src='/images/bgTraffic.png'
                  alt='wrapper hero'
                  className='h-full w-full '
                />
                <div className='h-full w-full'>
                  <img
                    src='/images/bgAbout.png'
                    alt='wrapper hero'
                    className='absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 '
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-8 flex items-center gap-5 max-xl:hidden'>
            <TwitterHeader />
            <DiscordHeader />
            <TelegramHeader />
          </div>
        </div>
      </div>
      <div className='group-hover: container absolute left-1/2 z-10 w-full -translate-x-1/2 items-center pt-[33px]'>
        <div className='border-blue flex items-center justify-between rounded-[10px] border bg-[#0C334580] px-[50px] py-5 max-lg:px-[30px] max-md:px-[20px]'>
          <Link href="/">
            <div className='w-full max-w-[145px] md:max-w-[180px] max-h-[33px]'>
              <img
                src='/images/logo.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
          </Link>
          <div className='flex items-center gap-5 max-lg:hidden'>
            <TwitterHeader />
            <DiscordHeader />
            <TelegramHeader />
          </div>
          <div
            onClick={() => setIsHovered(true)}
            className=' relative z-10 flex  h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white duration-300 ease-in-out lg:hover:border-[#00CC2D] lg:hover:bg-[#00CC2D] '
          >
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
