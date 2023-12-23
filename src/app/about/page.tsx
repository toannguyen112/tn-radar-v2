import SectionAbout from '@/app/components/SectionAbout';
import SectionHeroAbout from '@/app/components/SectionHeroAbout';

export default function AboutPage() {
  return (
    <main className='bg-[#0B090C] pb-10'>
      <SectionHeroAbout />
      <SectionAbout />
    </main>
  );
}
