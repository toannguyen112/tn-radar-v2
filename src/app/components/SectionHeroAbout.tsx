import Header from '@/app/components/Header';
import BackgroundSection from '@/app/components/Icon/BackgroundSection';

export default function SectionHeroAbout() {
  return (
    <section className='relative h-[500px] overflow-hidden md:h-[430px] md:max-h-[1080px] lg:h-[500px] xl:h-screen'>
      <Header />
      <img
        src='/video/network.gif'
        alt='Your Alt Text'
        className='absolute inset-0 min-h-full min-w-full object-cover'
      />
      <div className='container h-full '>
        <div className='relative h-full'>
          <div className='font-primary gradient-text max-xs:text-[30px] absolute left-0 top-[230px] font-normal uppercase leading-[110%] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px]'>
            <p>ABOUT</p>
          </div>
        </div>
      </div>
      <div className='z-9 absolute bottom-0 h-[100px] w-full 2xl:max-h-[236px]'>
        <BackgroundSection />
      </div>
    </section>
  );
}
