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
  // const token = process.env.NEXT_API_URL;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/posts-radar-v2s?populate=*',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer 18288dd5c0600e8b785ec823c2bb562210879d7423a264f2e5b26cb25f86b45b46cd6b5c6450765d598d5d8166b3584fd0f43feb509008711aec23760db324f7cd2e495ab14c8fb3356a6da8dac5a035ae494556ceb207760f90a01311a39244622626534b730557cb4ccf1e5dfab49524f6c200701b6f7c2f165346f148600d`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
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
