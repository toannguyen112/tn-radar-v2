import Discord from '@/app/components/Icon/Discord';
import Telegram from '@/app/components/Icon/Telegram';
import Twitter from '@/app/components/Icon/Twitter';

export default function Footer() {
  return (
    <footer className='container 	relative	mt-[81px] pb-[54px] max-lg:mt-8 max-md:mt-4'>
      <div className='relative overflow-hidden rounded-[17px]'>
        <div className='absolute inset-0'>
          <img
            src='/images/fotter.webp'
            alt='wrapper hero'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='relative px-[20px] pb-[39px] pt-[48px] md:px-[12px] xl:px-[65px] xl:pt-[64px]'>
          <div className='mx-auto mb-10 w-full max-w-[140px] md:hidden md:max-w-[250px] xl:max-w-[380px] 2xl:max-w-[495px]'>
            <img
              src='/images/logo.png'
              alt='wrapper hero'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-12 gap-y-10 md:gap-x-5 xl:gap-x-10'>
            <div className='col-span-full flex flex-col justify-between space-y-10 md:col-span-4 md:space-y-0'>
              <div className='space-y-[10px]'>
                <div className='font-syne text-blue text-[30px] font-extrabold capitalize max-sm:text-[24px] md:text-[20px] lg:text-[24px]'>
                  SITE MAP
                </div>
                <div className='text-[18px] font-normal text-[#858585]'>
                  Term & Conditions
                </div>
              </div>

              <div className='space-y-[10px]'>
                <div className='font-syne text-[28px] font-extrabold uppercase text-white max-sm:text-[20px] md:text-[16px] lg:text-[20px]'>
                  newsletter
                </div>
                <div>
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='text-blue font-inter h-[48px] rounded-xl border-none bg-black px-[14px] py-[10px] text-[18px] placeholder:text-[#4E4E4E] focus:outline-none focus:ring-0 xl:h-[70px]'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-full hidden space-y-[60px]  border-[#005B97] md:col-span-5 md:block  md:border-l md:border-r'>
              <div className='font-inter text-center text-[18px] text-[#737373]'>
                <p>Copyright Radar Network 2023</p>
                <p>All Rights Resered</p>
              </div>
              <div className='mx-auto w-full max-w-[140px] md:max-w-[250px] xl:max-w-[380px] 2xl:max-w-[495px]'>
                <img
                  src='/images/logo.png'
                  alt='wrapper hero'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='font-inter text-center text-[18px] text-[#737373]'>
                <p>Copyright Radar Network 2023</p>
                <p>All Rights Resered</p>
              </div>
            </div>
            <div className='col-span-full flex flex-col justify-between md:col-span-3'>
              <div className='space-y-[20px]'>
                <p className='font-syne text-blue text-[30px] font-extrabold capitalize max-sm:text-[24px] md:text-[20px] lg:text-[24px]'>
                  CONTACT
                </p>
                <div className='flex items-center space-x-[19px]'>
                  <div className='lg:hover:border-blue lg:hover:bg-blue flex h-[35px] w-[35px] items-center justify-center rounded border border-white duration-300 ease-in-out max-lg:h-8 max-lg:w-8'>
                    <Discord />
                  </div>
                  <div className='lg:hover:border-blue lg:hover:bg-blue flex h-[35px] w-[35px]  items-center justify-center rounded border border-white duration-300 ease-in-out max-lg:h-8 max-lg:w-8'>
                    <Telegram />
                  </div>
                  <div className='lg:hover:border-blue lg:hover:bg-blue flex h-[35px] w-[35px]  items-center justify-center rounded border border-white duration-300 ease-in-out max-lg:h-8 max-lg:w-8'>
                    <Twitter />
                  </div>
                </div>
              </div>
              <div className='font-inter space-y-[20px] text-[18px] text-[#737373] max-md:mt-5 xl:space-y-[30px]'>
                <div>Report</div>
                <div>Term & Conditions</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className='font-inter mt-10 text-center text-[18px] text-[#737373] md:hidden'>
            <p>Copyright Radar Network 2023</p>
            <p>All Rights Resered</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
