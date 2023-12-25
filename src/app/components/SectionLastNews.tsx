import IconStar from '../components/Icon/Star';

export default function SectionLastNews() {
  return (
    <section className='container relative overflow-hidden  pt-[141px] max-lg:pt-[32px] max-md:pt-[16px]'>
      <div className=''>
        <div className='max-xs:px-0 grid h-[125px] grid-cols-12 border-b border-t border-white px-[30px] max-md:px-[10px] max-sm:px-0'>
          <div className='relative col-span-7 border-r border-white md:col-span-9'>
            <div className='flex h-full items-center gap-2'>
              <div className='flex gap-2 max-md:block'>
                <p className='font-radar text-[96px] max-2xl:text-[50px] max-xl:text-[50px] font-normal uppercase text-[#1E9CD7] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[22px]'>
                  NOTABLE
                </p>
                <p className='font-radar text-[96px] max-2xl:text-[50px] font-normal uppercase text-white max-lg:text-[40px] max-md:text-[35px] max-sm:text-[22px] '>
                  POST
                </p>
              </div>
            </div>
            <div className='absolute bottom-[-26px] right-[-23px]'>
              <IconStar />
            </div>
            <div className='absolute left-1/2 top-[-25px] -translate-x-1/2'>
              <IconStar />
            </div>
          </div>
          <div className='col-span-5 flex items-center md:col-span-3'>
            <div className='title-1 bg-blue lg:hover:text-blue ml-auto flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-[30px] px-[8px] py-[5px] font-semibold text-white duration-300 ease-in-out md:px-[11px] md:py-[7px] lg:hover:bg-white xl:h-[48px] xl:w-[152px] xl:px-[16px] xl:py-[10px] 2xl:h-[63px]'>
              See All
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 border-b px-[30px] max-md:px-[10px] max-sm:px-0'>
          <div className='relative  col-span-7 border-r border-white md:col-span-9'>
            <div className='title-1 ml-auto max-w-[1172px] pb-[25px] pr-[10px] pt-[18px]	text-white md:pr-[35px] md:pt-[25px] md:text-right xl:pr-[50px] xl:pt-[36px]'>
              We build concepts that are big enough to exist everywhere, brave
              enough to break boundaries in execution, and rich enough to
              connect with millions of people individually in the crypto world.
            </div>
            <div className='absolute left-1/2 top-[-25px] -translate-x-1/2'>
              <IconStar />
            </div>
          </div>
          <div className='col-span-5 flex items-center md:col-span-3'>
            <div className='h2 font-radar ml-auto mt-4 text-right font-extrabold text-white max-md:text-center md:mt-0'>
              2023
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mt-[39px]	md:mt-[55px] xl:mt-[78px]'>
        <SliderNews />
      </div> */}
    </section>
  );
}
