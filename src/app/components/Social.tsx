'use client';
import Discord from '@/app/components/Icon/Discord'
import Telegram from '@/app/components/Icon/Telegram'
import Twitter from '@/app/components/Icon/Twitter'
import React, { useEffect, useState } from 'react'

function Social() {

  const [setting, setSetting] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/config',
          {
            method: 'GET',
          }
        );
        const data = await response.json();

        setSetting(data.data.attributes);
        console.log(data.data.attributes);

      } catch (error) {
        console.error('Error fetching data:', error);
        setSetting([]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='flex items-center space-x-[19px]'>
      <div className='lg:hover:border-blue lg:hover:bg-blue flex h-[35px] w-[35px] items-center justify-center rounded border border-white duration-300 ease-in-out max-lg:h-8 max-lg:w-8'>
        <a href={setting.discord_link} target='_blank'>
          <Discord />
        </a>
      </div>
      <div className='lg:hover:border-blue lg:hover:bg-blue flex h-[35px] w-[35px]  items-center justify-center rounded border border-white duration-300 ease-in-out max-lg:h-8 max-lg:w-8'>
        <a href={setting.telegram_link} target='_blank'>
          <Telegram />
        </a>
      </div>
      <div className='lg:hover:border-blue lg:hover:bg-blue flex h-[35px] w-[35px]  items-center justify-center rounded border border-white duration-300 ease-in-out max-lg:h-8 max-lg:w-8'>
        <a href={setting.x_link} target='_blank'>
          <Twitter />
        </a>
      </div>
    </div>
  )
}

export default Social