import { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';

import DiscordHeader from '@/app/components/Icon/DiscordHeader';
import TelegramHeader from '@/app/components/Icon/TelegramHeader';
import TwitterHeader from '@/app/components/Icon/TwitterHeader';
const initialLogos = [
  'https://i.ibb.co/Vv5rkDK/api-partner-verzon.png',
  'https://i.ibb.co/J399KDg/api-partner-netflix.png',
  'https://i.ibb.co/TKT0F5L/api-partner-yelp.png',
  'https://i.ibb.co/HG6KR89/api-partner-adobe.png',
  'https://i.ibb.co/hMSJ1sg/api-partner-ring.png',
  'https://i.ibb.co/4RWQcMS/api-partner-nespresso.png',
];

declare module 'swiper/react' {
  interface SwiperProps {
    slidesPerView?: number;
    spaceBetween?: number;
    breakpoints?: any;
    centeredSlides?: boolean;
    speed?: number;
    modules?: any;
    freeMode?: any;
    freeModeMomentumRatio?: any;
    loop?: boolean;
    autoplay?: {
      delay: number;
      disableOnInteraction: boolean;
      pauseOnMouseEnter: boolean;
    };
  }
}
interface Coin {
  attributes: {
    title: string;
    discord_link: string;
    telegram_link: string;
    x_link: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
export default function SliderMission() {
  const [coin, setCoin] = useState<Coin[]>([]);
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
    <div className='mt-[80px] max-lg:mt-8 max-md:mt-4'>
      <div className='xs:mb-[32px] mb-[74px] max-lg:flex max-lg:gap-2 max-md:mb-4'>
        <p className='font-primary max-xs:text-[24px] text-[64px] font-normal uppercase leading-[60px] text-white max-lg:text-[45px] max-md:text-[30px]'>
          RADAR
        </p>
        <p className='font-primary max-xs:text-[24px] text-[64px] font-normal uppercase  leading-[60px] text-[#1E9CD7] max-lg:text-[45px] max-md:text-[30px]'>
          Network
        </p>
      </div>
      <div className='flex-container mt-4'>
        <div className='slider-container h-[450px] max-md:h-[350px]'>
          <ul className='slider gap-5 '>
            {coin.map((val: any, index: any) => {
              return (
                <div key={index} className='w-[400px] max-sm:w-[267px]'>
                  <div className='xxs:h-[157px] xs:h-[157px] relative md:h-[237px] lg:h-[237px] xl:h-[237px] 2xl:h-[237px]'>
                    <div className='absolute right-[43px] top-[14px] max-md:right-[20px] max-md:top-[5px]'>
                      <p className='font-primary text-[24px] capitalize text-white max-md:text-[18px]'>
                        {'00' + (index + 1)}
                      </p>
                    </div>
                    <img
                      src='/images/bgMission.png'
                      alt='wrapper hero'
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2'>
                      <div className='overflow-hidden '>
                        <img
                          src={
                            val?.attributes?.thumbnail?.data?.attributes?.url
                              ? `https://3.106.127.44.nip.io${val?.attributes?.thumbnail?.data?.attributes?.url}`
                              : '/images/is-10.png'
                          }
                          alt='wrapper hero'
                          className='max-h-[152px]'
                        />
                      </div>
                    </div>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 '>
                      <div className='relative h-8 w-full'>
                        <div className='absolute -bottom-full left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5  '>
                          <a target='_blank' href={val.attributes.x_link}>
                            <TwitterHeader />
                          </a>
                          <a target='_blank' href={val.attributes.discord_link}>
                            <DiscordHeader />
                          </a>
                          <a
                            target='_blank'
                            href={val.attributes.telegram_link}
                          >
                            <TelegramHeader />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='mt-[38px]'>
                      <p className='font-Khyay text-xs text-white md:px-[27px]'>
                        {val.attributes.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <li className='slider__slide'>
              <div className='slide__content'>1</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>2</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>3</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>1</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>2</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>3</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>1</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>2</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>3</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>1</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>2</div>
            </li>
            <li className='slider__slide'>
              <div className='slide__content'>3</div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
