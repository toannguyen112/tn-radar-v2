import moment from 'moment';
import { useEffect, useState } from 'react';
import 'swiper/css';

import More from '@/app/components/Icon/More';
interface TablePost {
  attributes: {
    isNoTablePost: boolean;
    link: string;
    title: string;
    date: any;
    createdAt: any;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
export default function SectionRadarNews() {
  const [tablePosts, setTablePosts] = useState<TablePost[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/posts-radar-v2s?populate=*',
          {
            method: 'GET',
          }
        );
        const data = await response.json();
        const arr: TablePost[] = [];
        if (data?.data.length > 0) {
          data?.data.map((val: TablePost) => {
            val.attributes.isNoTablePost ? arr.push(val) : console.log('');
          });
        }
        setTablePosts(arr);
      } catch (error) {
        console.error('Error fetching data:', error);
        setTablePosts([]);
      }
    }
    fetchData();
  }, []);
  return (
    <div className='container mt-[149px] max-lg:mt-[32px] max-md:mt-[16px]'>
      <div className=''>
        <div className='mb-[61px] w-full  text-right max-lg:mb-[16px] max-lg:text-center max-lg:leading-none'>
          <p className='font-primary max-xs:text-[40px] text-[8.4rem] font-normal uppercase leading-[60px] text-white max-xl:text-[60px] max-lg:text-[50px]'>
            RADAR{' '}
            <span className='font-primary text-blue max-xs:text-[40px] text-[8.4rem] leading-[60px] max-xl:text-[60px] max-lg:text-[50px]'>
              NEWS
            </span>
          </p>
        </div>
      </div>
      <div className='max-xs:gap-0 grid grid-cols-12 gap-[35px]'>
        <div className='col-span-4 rounded-2xl bg-[#181818] p-[30px] max-lg:col-span-full max-lg:mb-[20px]'>
          <div className='font-montserrat flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373] px-5  text-[12px] uppercase text-white'>
            {tablePosts[tablePosts.length - 1]?.attributes?.date
              ? tablePosts[tablePosts.length - 1]?.attributes?.date
              : moment(
                  tablePosts[tablePosts.length - 1]?.attributes?.createdAt
                ).format('DD/MM/YYYY')}
          </div>
          <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
            <p className='font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
              {tablePosts[tablePosts.length - 1]?.attributes?.title}
            </p>
          </div>
          <div className='mb-[20px] flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
            <a
              href={tablePosts[tablePosts.length - 1]?.attributes?.link}
              className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'
            >
              Read More
            </a>
            <More />
          </div>
          <div className='h-[650px] w-full overflow-hidden rounded-lg bg-[#D9D9D9] max-lg:h-[300px] max-md:h-[180px]'>
            <img
              src={`https://3.106.127.44.nip.io${
                tablePosts[tablePosts.length - 1]?.attributes?.thumbnail?.data
                  ?.attributes?.url
              }`}
              alt='image'
              className='slider-image-content aspect-square h-full w-full'
            />
          </div>
        </div>
        <div className='col-span-8 max-lg:col-span-full '>
          <div className='rounded-2xl bg-[#181818] p-[30px]'>
            <div className='h-[180px]  overflow-hidden rounded-lg bg-[#D9D9D9]'>
              <img
                src={`https://3.106.127.44.nip.io${
                  tablePosts[tablePosts.length - 2]?.attributes?.thumbnail?.data
                    ?.attributes?.url
                }`}
                alt='image'
                className='slider-image-content aspect-square h-full w-full'
              />
            </div>
            <div className='font-montserrat mt-[20px] flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373]  px-5 text-[12px] uppercase text-white'>
              {tablePosts[tablePosts.length - 2]?.attributes?.date
                ? tablePosts[tablePosts.length - 2]?.attributes?.date
                : moment(
                    tablePosts[tablePosts.length - 2]?.attributes?.createdAt
                  ).format('DD/MM/YYYY')}
            </div>
            <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
              <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                {tablePosts[tablePosts.length - 2]?.attributes?.title}
              </p>
              {/* <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px] '>
                Supperchain
              </p> */}
            </div>
            <div className='flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
              <a
                href={tablePosts[tablePosts.length - 2]?.attributes?.link}
                className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'
              >
                Read More
              </a>
              <More />
            </div>
          </div>
          <div className='mt-[38px] grid grid-cols-8 gap-[27px]'>
            {tablePosts?.slice(0, -2)?.map((val: TablePost, index: number) => {
              return (
                <>
                  <div
                    className='col-span-4 rounded-lg bg-[#181818] p-[30px] max-lg:col-span-full'
                    key={index}
                  >
                    <div className='h-[180px]  overflow-hidden rounded-lg bg-[#D9D9D9]'>
                      <img
                        src={`https://3.106.127.44.nip.io${val?.attributes?.thumbnail?.data?.attributes?.url}`}
                        alt='image'
                        className='slider-image-content aspect-square h-full w-full'
                      />
                    </div>
                    <div className='font-montserrat mt-[20px] flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373]  px-5 text-[12px] uppercase text-white'>
                      {val?.attributes?.date
                        ? val?.attributes?.date
                        : moment(val?.attributes?.createdAt).format(
                            'DD/MM/YYYY'
                          )}
                    </div>
                    <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
                      <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                        {val?.attributes?.title}
                      </p>
                    </div>
                    <div className='flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
                      <a
                        href={val?.attributes?.link}
                        className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'
                      >
                        Read More
                      </a>
                      <More />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
