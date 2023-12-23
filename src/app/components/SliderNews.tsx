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

interface Post {
  attributes: {
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
  const [news, setLastNews] = useState<Post[]>([]);
  const token = process.env.NEXT_PUBLIC_TOKEN;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://strapi-be-hg6l.onrender.com/api/posts-radars?filters[isLastNew][$eq]=true&populate=*',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`, // notice the Bearer before your token
            },
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
    <div className='blur-slider md:translate-x-[48px] lg:translate-x-[64px] xl:translate-x-[81px]'>
      <Swiper
        slidesPerView={1.6}
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
                <div className='h-[350px] overflow-hidden rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'>
                  <img
                    src={`https://strapi-be-hg6l.onrender.com${post?.attributes?.thumbnail?.data?.attributes?.url}`}
                    alt='image'
                    className='slider-image-content'
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default SliderNews;
