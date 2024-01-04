import React from 'react'

import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
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

interface IProps {
  title: string
}

function CardNotable({ parent }: any) {

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = React.useRef<SwiperType>();

  return (
    <div className='space-y-[54px]'>
      <div className='text-[24px] md:text-[64px] font-primary text-white flex md:flex-row flex-col md:items-end lg:space-x-[198px] max-md:space-y-[12px]' >
        <div>
          {parent.title || "TEXT"}
        </div>
        <div className='flex items-end space-x-[20px] w-full'>
          <div className='flex items-end space-x-[20px]'>
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className='border-white border-4 w-[45px] h-[45px] flex items-center justify-center rounded-[12px] cursor-pointer'>
              <img src="/svg/arrow/left.svg" alt="" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className='border-white border-4 w-[45px] h-[45px] flex items-center justify-center rounded-[12px] cursor-pointer'>
              <img src="/svg/arrow/right.svg" alt="" />
            </div>
          </div>
          <div className='bg-[#1E9CD7] h-[1px] w-full'>
          </div>
        </div>
      </div>
      <div className='blur-slider'>
        <Swiper
          modules={[EffectFade]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={2}
          spaceBetween={25}
          centeredSlides={false}
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
        >
          {parent?.child?.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index} >
                <a href='' className='space-y-[15px]'>
                  <div className='relative overflow-hidden'>
                    <img
                      src={`/images/frame-card.png`}
                      alt='image'
                      className='w-full '
                    />
                    <div className='absolute inset-y-[30px] inset-x-[60px]'>
                      <img
                        src={`https://3.106.127.44.nip.io${item?.image?.data?.attributes?.url}`}
                        alt={item.title || ''}
                        className='h-full w-full  object-contain aspect-w-5 aspect-w-3'
                      />
                    </div>
                  </div>
                  <div className='font-montserrat text-[1rem] md:text-[24px] text-white font-medium' >
                    {item.title || ''}
                  </div>
                </a>
              </SwiperSlide>
            )

          })}

        </Swiper>
      </div>
    </div>
  )
}

export default CardNotable