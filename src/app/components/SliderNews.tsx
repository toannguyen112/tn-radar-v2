import React, { useEffect, useState } from 'react';
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

interface News {
  attributes: {
    isNew: boolean;
    link: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

// import required modules
function SliderNews() {
  const [news, setLastNews] = useState<News[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/posts-radar-v2s?populate=*&filters[isNoTablePost][$eq]=true&sort[0]=id:asc',
          {
            method: 'GET',
          }
        );

        const data = await response.json();
        setLastNews(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLastNews([]); // Set 'powers' to an empty array in case of an error
      }
    }
    fetchData();
  }, []);
  return (
    <div className='blur-slider '>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        loop={true}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className='mySwiper'
      >
        {news &&
          news.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <a href={post?.attributes?.link} className='space-y-[15px]'>
                  <div className='overflow-hidden rounded-xl border border-[#323232] bg-[#18181A] aspect-w-5 aspect-h-3 max-h-[325px]'>
                    <img
                      src={`https://3.106.127.44.nip.io${post?.attributes?.thumbnail?.data?.attributes?.url}`}
                      alt='image'
                      className='slider-image-content  h-full w-full  object-contain'
                    />
                  </div>
                  <div className='font-montserrat text-[32px] text-white font-bold' >
                    Optimis Goes# Supperchain
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default SliderNews;
