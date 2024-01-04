import FlickerText from '@/app/components/FlickerText';
import Header from '@/app/components/Header';
import BackgroundSection from '@/app/components/Icon/BackgroundSection';

export default function SectionHero() {
  return (
    <section className='relative h-[500px] overflow-hidden md:h-[430px] md:max-h-[1080px] lg:h-[500px] xl:h-screen'>
      <Header />
      <video
        autoPlay
        muted
        loop
        className='absolute inset-0 min-h-full min-w-full object-cover'
      >
        <source src='/video/network.mp4' type='video/mp4' />
      </video>

      <div className='container h-full'>
        <div className='relative h-full'>
          <div className='font-primary gradient-text xxs:text-[30px] absolute left-0	top-[230px] font-normal uppercase leading-[110%] md:text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px]'>
            <FlickerText text='Unravels' />
            <FlickerText text="DeFi's Signals" />
          </div>
        </div>
      </div>
      <div className='z-9 absolute bottom-0 h-[100px] w-full 2xl:max-h-[236px]'>
        <div className='container absolute left-1/2 top-[30px] z-10 -translate-x-1/2 max-lg:hidden'>
          <p className='font-primary max-xs:text-[40px] text-[64px] font-normal uppercase leading-[60px] text-white max-md:text-[50px] max-md:leading-7'>
            RADAR
          </p>
        </div>
        <BackgroundSection />
      </div>
    </section>
  );
}
