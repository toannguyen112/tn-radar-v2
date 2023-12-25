import 'swiper/css';

import More from '@/app/components/Icon/More';

export default function SectionRadarNews() {
  return (
    <div className='container mt-[149px] max-lg:mt-[32px] max-md:mt-[16px]'>
      <div className=''>
        <div className='mb-[61px] w-full  max-lg:mb-[16px] text-right max-lg:text-center max-lg:leading-none'>
          <p className='font-radar max-xs:text-[40px] xs:text-[8.4rem] font-normal uppercase leading-[60px] text-white max-md:text-[50px]'>
            RADAR{' '}
            <span className='font-radar text-blue max-xs:text-[40px] text-[8.4rem] leading-[60px] max-md:text-[50px]'>
              NEWS
            </span>
          </p>
        </div>
      </div>
      <div className='max-xs:gap-0 grid grid-cols-12 gap-[35px]'>
        <div className='col-span-4 rounded-2xl bg-[#181818] p-[30px] max-lg:col-span-full max-lg:mb-[20px]'>
          <div className='font-montserrat flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373] px-5  text-[12px] uppercase text-white'>
            November, 23rd 2023
          </div>
          <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
            <p className='font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
              Optimis Goes ##
            </p>
            <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px] '>
              Supperchain
            </p>
          </div>
          <div className='mb-[20px] flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
            <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
              Read More
            </p>
            <More />
          </div>
          <div className='h-[650px] w-full rounded-lg bg-[#D9D9D9] max-lg:h-[300px] max-md:h-[180px]'></div>
        </div>
        <div className='col-span-8 max-lg:col-span-full '>
          <div className='rounded-2xl bg-[#181818] p-[30px]'>
            <div className='h-[180px]  rounded-lg bg-[#D9D9D9]'></div>
            <div className='font-montserrat mt-[20px] flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373]  px-5 text-[12px] uppercase text-white'>
              November, 23rd 2023
            </div>
            <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
              <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                Optimis Goes ##
              </p>
              <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px] '>
                Supperchain
              </p>
            </div>
            <div className='flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
              <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                Read More
              </p>
              <More />
            </div>
          </div>
          <div className='mt-[38px] grid grid-cols-8 gap-[27px]'>
            <div className='col-span-4 rounded-lg bg-[#181818] p-[30px] max-lg:col-span-full'>
              <div className='h-[180px]  rounded-lg bg-[#D9D9D9]'></div>
              <div className='font-montserrat mt-[20px] flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373]  px-5 text-[12px] uppercase text-white'>
                November, 23rd 2023
              </div>
              <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
                <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                  Optimis Goes ##
                </p>
                <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px] '>
                  Supperchain
                </p>
              </div>
              <div className='flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
                <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                  Read More
                </p>
                <More />
              </div>
            </div>
            <div className='col-span-4 rounded-lg bg-[#181818] p-[30px] max-lg:col-span-full'>
              <div className='h-[180px]  rounded-lg bg-[#D9D9D9]'></div>
              <div className='font-montserrat mt-[20px] flex h-[30px] w-[216px] items-center rounded-lg border border-[#737373]  px-5 text-[12px] uppercase text-white'>
                November, 23rd 2023
              </div>
              <div className='my-[20px] h-[74px] font-semibold uppercase text-white max-lg:h-fit'>
                <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                  Optimis Goes ##
                </p>
                <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px] '>
                  Supperchain
                </p>
              </div>
              <div className='flex h-[69px]  items-center justify-between rounded-lg border border-[#737373] px-5 py-[15px] duration-200 hover:bg-[#005B97] max-lg:h-[50px]'>
                <p className='font-montserrat font-semibold uppercase leading-none text-white max-lg:text-[20px] max-md:leading-7 lg:text-[24px] xl:text-[32px]'>
                  Read More
                </p>
                <More />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
