import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import DiscordHeader from '@/app/components/Icon/DiscordHeader';
import TelegramHeader from '@/app/components/Icon/TelegramHeader';
import TwitterHeader from '@/app/components/Icon/TwitterHeader';

// const arrayMission = [
//   {
//     index: '001',
//     content:
//       'With Polygon Radar, we provide fresh updates, detailed insights, on-chain analysis, and comprehensive data analytics in a vibrant green and purple spectrum.',
//     image: '/images/is-1.png',
//   },
//   {
//     index: '002',
//     content:
//       'zkSync Radar is your go-to source for insights, news, and analytics on the revolutionary zkSync Era – the future-proof scaling solution for zkEVM.',
//     image: '/images/is-2.png',
//   },
//   {
//     index: '003',
//     content:
//       'Meet Base Radar, your gateway to the future of blockchain. As the media platform for Base, we bring you vital insights, news, and analytics on this secure, low-cost Ethereum Layer 2 designed to onboard the next billion users to the decentralized realm.',
//     image: '/images/is-3.png',
//   },
//   {
//     index: '004',
//     content:
//       'Discover the future with Optimism Radar, your media ally for essential insights on Optimism—a swift, stable, and scalable Layer 2 blockchain. Stay ahead with vital news and analytics as we unravel the possibilities of this cutting-edge technology.',
//     image: '/images/is-4.png',
//   },
//   {
//     index: '005',
//     content:
//       'Step into the cosmic frontier with Cosmos Radar, your media companion for crucial insights on Cosmos—the Internet of Blockchains. Stay tuned for essential news and analytics as we journey through the interconnected universe of decentralized possibilities.',
//     image: '/images/is-5.png',
//   },
//   {
//     index: '006',
//     content:
//       'Embark on the future with Linea Radar, your media ally for critical insights on Linea—the pioneering evolution of ConsenSys zkEVM. Stay informed with essential news and analytics as Linea powers the new wave of decentralized applications.',
//     image: '/images/is-6.png',
//   },
//   {
//     index: '007',
//     content:
//       'Mantle Radar is your media ally for crucial insights on Mantle—an L2 scalability solution elevating Ethereum. Stay tuned for essential news and analytics as we navigate the evolving realm of blockchain efficiency and scalability.',
//     image: '/images/is-7.png',
//   },
//   {
//     index: '008',
//     content:
//       'Discover the vibrant world of BNB Chain through BNB Radar, a trusted media outlet offering valuable perspectives on this dynamic blockchain ecosystem. Uncover revolutionary scaling solutions at both the Layer-1 and Layer-2 levels.',
//     image: '/images/is-8.png',
//   },
//   {
//     index: '009',
//     content:
//       'Unleash the Blockchain Revolution with Layer2 Radar! Dive into the epicenter of Layer 2 platforms as we redefine the future of blockchain. Your go-to media for all things Layer 2 – where innovation knows no bounds!',
//     image: '/images/is-9.png',
//   },
//   {
//     index: '010',
//     content:
//       'Unleash the Blockchain Revolution with Layer2 Radar! Dive into the epicenter of Layer 2 platforms as we redefine the future of blockchain. Your go-to media for all things Layer 2 – where innovation knows no bounds!',
//     image: '/images/is-10.png',
//   },
//   {
//     index: '011',
//     content:
//       'Unleash the Blockchain Revolution with Layer2 Radar! Dive into the epicenter of Layer 2 platforms as we redefine the future of blockchain. Your go-to media for all things Layer 2 – where innovation knows no bounds!',
//     image: '/images/is-11.png',
//   },
// ];

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
    <div className='mt-[105px] max-lg:mt-8 max-md:mt-4'>
      <div className='xs:mb-[32px] mb-[74px] max-lg:flex max-lg:gap-2 max-md:mb-4'>
        <p className='font-primary max-xs:text-[24px] text-[64px] font-normal uppercase leading-[60px] text-white max-lg:text-[45px] max-md:text-[30px]'>
          RADAR
        </p>
        <p className='font-primary max-xs:text-[24px] text-[64px] font-normal uppercase  leading-[60px] text-[#1E9CD7] max-lg:text-[45px] max-md:text-[30px]'>
          Network
        </p>
      </div>
      <div className=''>
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
            1920: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className='mySwiper xs:h-[335px] max-xs:h-[290px] 2xl: xl:h-[431px]'
        >
          {coin.map((val: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <div className='xxs:h-[170px] xs:h-[230px] relative md:h-[205px] lg:h-[174px] xl:h-[247px] 2xl:h-[247px]'>
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
                        <a target='_blank' href={val.attributes.telegram_link}>
                          <TelegramHeader />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='mt-[38px]'>
                    <p className='font-Khyay text-xs text-white'>
                      {val.attributes.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
