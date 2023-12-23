import 'swiper/css';

import IconMenu from '@/app/components/Icon/IconMenu';
import SliderMission from '@/app/components/SliderMission';
export default function SectionMission() {
  return (
    <div className='container mt-[126px] max-lg:mt-8 max-md:mt-4'>
      <p className='font-radar max-xs:text-[40px] text-[64px] font-normal uppercase leading-[60px] text-[#1E9CD7] max-md:text-[50px]'>
        Mission
      </p>
      <div className='mt-[84px] grid grid-cols-12 items-center max-lg:mt-8 max-md:mt-4'>
        <div className='col-span-8 col-start-3 m-auto flex items-center gap-[54px] max-lg:col-span-12 max-lg:col-start-1 max-lg:gap-[25px]'>
          <div className='col-span-1 flex items-center justify-center'>
            <IconMenu />
          </div>
          <div className='col-span-7'>
            <p className='font-montserrat mb-12 text-[28px] font-medium leading-none text-white max-sm:text-[20px]'>
              We strive to deliver accurate, timely, and easily understandable
              information about the ever-evolving landscape of decentralized
              finance.
            </p>
            <p className='font-montserrat text-[28px] font-medium leading-none text-white max-sm:text-[20px]'>
              Recognizing the immense potential and transformative power of
              blockchain technology, we are dedicated to ensuring that this
              potential reaches the widest possible audience.
            </p>
          </div>
        </div>
      </div>
      <SliderMission />
    </div>
  );
}
