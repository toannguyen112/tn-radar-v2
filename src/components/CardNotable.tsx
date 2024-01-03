import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

declare module 'swiper/react' {
  interface SwiperProps {
    slidesPerView?: number;
    spaceBetween?: number;
    breakpoints?: any;
    centeredSlides?: boolean;
    speed?: number;
    loop?: boolean;
  }
}

function CardNotable() {
  return (
    <div className='space-y-[54px]'>
      <div className='text-[64px] font-primary text-white flex items-end space-x-[198px]' >
        <div>
          Text
        </div>
        <div className='flex items-end space-x-[20px] w-full'>
          <div className='flex items-end space-x-[20px]'>
            <div className='border-white border-4 w-[45px] h-[45px] flex items-center justify-center rounded-[12px] cursor-pointer'>
              <img src="/svg/arrow/left.svg" alt="" />
            </div>
            <div className='border-white border-4 w-[45px] h-[45px] flex items-center justify-center rounded-[12px] cursor-pointer'>
              <img src="/svg/arrow/right.svg" alt="" />
            </div>
          </div>
          <div className='bg-[#1E9CD7] h-[1px] w-full'>
          </div>
        </div>
      </div>
      <div className='blur-slider'>
        <Swiper
          slidesPerView={2}
          spaceBetween={25}
          centeredSlides={true}
          speed={1000}
          breakpoints={{
            768: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className='mySwiper'
        >
          <SwiperSlide >
            <a href='' className='space-y-[15px]'>
              <div className='relative overflow-hidden'>
                <img
                  src={`/images/frame-card.png`}
                  alt='image'
                  className='w-full '
                />
                <div className='absolute inset-y-[30px] inset-x-[60px]'>
                  <img
                    src={``}
                    alt='image'
                    className='h-full w-full  object-contain aspect-w-5 aspect-w-3'
                  />
                </div>
              </div>
              <div className='font-montserrat text-[24px] text-white font-medium' >
                Optimis Goes# Supperchain
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <a href='' className='space-y-[15px]'>
              <div className='relative overflow-hidden'>
                <img
                  src={`/images/frame-card.png`}
                  alt='image'
                  className='w-full '
                />
                <div className='absolute inset-y-[30px] inset-x-[60px]'>
                  <img
                    src={``}
                    alt='image'
                    className='h-full w-full  object-contain aspect-w-5 aspect-w-3'
                  />
                </div>
              </div>
              <div className='font-montserrat text-[24px] text-white font-medium' >
                Optimis Goes# Supperchain
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <a href='' className='space-y-[15px]'>
              <div className='relative overflow-hidden'>
                <img
                  src={`/images/frame-card.png`}
                  alt='image'
                  className='w-full '
                />
                <div className='absolute inset-y-[30px] inset-x-[60px]'>
                  <img
                    src={``}
                    alt='image'
                    className='h-full w-full  object-contain aspect-w-5 aspect-w-3'
                  />
                </div>
              </div>
              <div className='font-montserrat text-[24px] text-white font-medium' >
                Optimis Goes# Supperchain
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CardNotable