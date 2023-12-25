// Import Swiper styles
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
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
const arrayTraffic = [
  {
    title: 'follower twitter',
    content: 2,
  },
  {
    title: 'Monthly transaction',
    content: 100,
  },
  {
    title: 'Monthly Impression',
    content: 500,
  },
];
export default function SectionTraffic() {
  return (
    <section className='container'>
      <div className='max-lg:mt-8 max-lg:flex max-lg:gap-2 max-md:mt-4'>
        <p className='font-radar max-xs:text-[24px] text-[64px] font-normal uppercase leading-[60px] text-white  max-lg:text-[45px] max-md:text-[30px] lg:hidden '>
          RADAR
        </p>
        <p className='font-radar max-xs:text-[24px] text-[64px] font-normal uppercase leading-[60px] text-[#1E9CD7]  max-lg:text-[45px] max-md:text-[30px] '>
          TRAFFIC
        </p>
      </div>
      <div className='mt-[56px] max-lg:mt-8 max-md:mt-4'>
        <div className='hidden grid-cols-3 gap-[25px] lg:grid'>
          {arrayTraffic?.map((val: any, index: any) => {
            return (
              <div className='relative col-span-1 ' key={index}>
                <img
                  src='/images/bgTraffic.png'
                  alt='wrapper hero'
                  className='h-full w-full object-cover'
                />
                <div className='absolute left-5 top-5 w-full '>
                  <p className='font-montserrat text-left text-[24px] font-semibold uppercase text-[#46ABDD] max-xl:text-[16px]'>
                    {val.title}
                  </p>
                </div>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <p className='font-radar mt-9 text-center text-[60px] font-semibold uppercase text-[#1E9CD7]'>
                    <CountUp start={0} end={val.content} duration={4} />K
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='lg:hidden'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={false}
            speed={1000}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
            }}
            className='mySwiper '
          >
            {arrayTraffic.map((val: any, index: any) => {
              return (
                <SwiperSlide key={index}>
                  <div className='relative col-span-1 '>
                    <img
                      src='/images/bgTraffic.png'
                      alt='wrapper hero'
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute left-0 top-0 w-full p-3'>
                      <p className='font-montserrat max-xs:text-[16px] text-left text-[24px]  font-semibold uppercase text-[#46ABDD]'>
                        {val.title}
                      </p>
                      <p className='font-radar max-xs:text-[50px] mt-4 text-center text-[60px] font-semibold uppercase text-[#1E9CD7]'>
                        {val.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
