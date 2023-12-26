'use client';
const arrayCollapse = [
  {
    title: 'Project Overview',
    content:
      'Impress users with a virtual infographic showcasing everything needed to know about your project.',
  },
  {
    title: 'Analytics',
    content: `Depending on your project, we will conduct research to generate a unique infographic point that guarantees high shareability.You'll receive a custom-designed infographic, meticulously crafted to align with your project's unique attributes.This infographic will be promoted on our community channels (X, Telegram, etc.).`,
  },
  {
    title: 'News',
    content:
      'Bringing your latest news and updates to our extensive community.',
  },
  {
    title: 'Thread',
    content:
      'A sequence of interlinked posts focusing on the attributes of your project provides a structured platform for audience interaction, opinions, and ideas.Through our thread, the audience can delve deep into your core technology, events, achievements, and more.',
  },
  {
    title: 'Retweet',
    content: `By retweeting your posts on our Twitter feed, we'll amplify the reach of your message, connecting you with an expansive network of engaged followers.This not only captivates our follower base but also sparks meaningful dialogue surrounding your content.`,
  },
  {
    title: 'Pin Tweets',
    content: `To achieve maximum impact, we'll pin your post at the top of our community timeline.Your post will be pinned for a duration of 24/48/72/120 hours`,
  },
  {
    title: 'Giveaway Announcement',
    content: `To attract more users to your project's community, collaborate with us on a GA event.The reward is sponsored by the project and should be transferred to us ahead of time.`,
  },
  {
    title: 'AMA',
    content: `Community AMA Session:Time commitment: 30-60 minutes Venue options: Twitter Space/Discord 1 Banner on our community channels (X, Telegram, Discord) 1 Repost for AMA reminder. Add-ons:1 AMA recap post *Rewards not included`,
  },
  {
    title: 'IDO/Launching Announcement',
    content: `To attract more users to your project's IDO/Launch, we are bringing your latest information and updates to our extensive community.`,
  },
  {
    title: 'New projects introduction Mention',
    content: `Monthly, we will host an extraordinary thread to introduce all of the hottest newcomers, which will be pinned on our Twitter feed.This ensures that your projects will receive a boost of engagement from our community.`,
  },
  {
    title: 'Quote tweet',
    content: `By quote tweet your posts on our Twitter feed, we'll amplify the reach of your message, connecting you with an expansive network of engaged followers.`,
  },
];
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import DiscordAbout from '@/app/components/Icon/DiscordAbout';
import More from '@/app/components/Icon/More';
import TelegramAbout from '@/app/components/Icon/TelegramAbout';
import TwitterAbout from '@/app/components/Icon/TwitterAbout';

const SectionAbout = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index: any) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <section className='container '>
      <div className='font-primary gradient-text max-xs:text-[30px] font-normal uppercase leading-[110%] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px]'>
        <p>ABOUT</p>
      </div>
      <div className='mt-[51px] grid grid-cols-12 max-lg:mt-8 max-md:mt-4 md:gap-x-[32px]'>
        <div className='col-span-full md:col-span-3'>
          <div className='aspect-w-1 aspect-h-1 max-h-[5360px]'>
            <img
              src='/video/network.gif'
              alt='Your Alt Text'
              className=' min-w-full object-cover'
            />
          </div>
        </div>
        <div className='col-span-9 col-start-4  space-y-[30px] max-lg:col-span-full max-lg:col-start-1 '>
          {arrayCollapse?.map((val: any, index: any) => {
            const isSelected = selectedItem === index;
            return (
              <>
                <div
                  key={index}
                  className={`flex h-[70px] w-full items-center justify-between rounded-xl border border-[#737373] px-[30px] py-[15px] transition-all duration-200 ${
                    isSelected ? 'bg-[#005B97] duration-200' : 'duration-200'
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  <p className='font-montserrat text-[32px] font-medium capitalize text-white max-lg:text-[20px] max-md:text-[14px]'>
                    {index + 1 + '. ' + val.title}
                  </p>
                  <div
                    className={`cursor-pointer ${
                      isSelected ? 'rotate-[90deg] duration-200' : ''
                    }`}
                  >
                    <More />
                  </div>
                </div>
                {isSelected && (
                  <div className='mt-2  grid grid-cols-12 items-center justify-between text-white transition-all duration-200'>
                    <p className='col-span-5 max-md:col-span-full'>
                      {val.title}
                    </p>
                    <p className='col-span-7 text-left max-md:col-span-full max-md:mt-2'>
                      {val.content}
                    </p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className='font-primary gradient-text max-xs:text-[30px] mt-[31px] font-normal uppercase leading-[110%] max-md:mt-4 md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px]'>
        <p>ABOUT</p>
      </div>
      <div className='mt-[84px] grid grid-cols-3 gap-[25px] max-lg:mt-8 max-lg:hidden max-md:mt-4'>
        <div className='relative  col-span-1 h-[330px] w-full max-lg:col-span-full'>
          <img
            src='/images/bgTraffic.png'
            alt='wrapper hero'
            className=' h-full w-full'
          />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <DiscordAbout />
          </div>
        </div>
        <div className='relative  col-span-1 h-[330px] w-full max-lg:col-span-full'>
          <img
            src='/images/bgTraffic.png'
            alt='wrapper hero'
            className=' h-full w-full'
          />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <TwitterAbout />
          </div>
        </div>
        <div className='relative  col-span-1 h-[330px] w-full max-lg:col-span-full'>
          <img
            src='/images/bgTraffic.png'
            alt='wrapper hero'
            className=' h-full w-full'
          />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <TelegramAbout />
          </div>
        </div>
      </div>
      <div className='lg:hidden '>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
          speed={1000}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
          className='mySwiper max-lg:mt-8 max-md:mt-4 '
        >
          <SwiperSlide>
            <div className='relative  col-span-1 h-[330px] w-full max-lg:col-span-full max-sm:h-[200px]'>
              <img
                src='/images/bgTraffic.png'
                alt='wrapper hero'
                className=' h-full w-full'
              />
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <DiscordAbout />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative  col-span-1 h-[330px] w-full max-lg:col-span-full max-sm:h-[200px]'>
              <img
                src='/images/bgTraffic.png'
                alt='wrapper hero'
                className=' h-full w-full'
              />
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <TwitterAbout />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative  col-span-1 h-[330px] w-full max-lg:col-span-full max-sm:h-[200px]'>
              <img
                src='/images/bgTraffic.png'
                alt='wrapper hero'
                className=' h-full w-full'
              />
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <TelegramAbout />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionAbout;
