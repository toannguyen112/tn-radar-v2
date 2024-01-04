"use client"
import SectionAbout from '@/app/components/SectionAbout';
import SectionHeroAbout from '@/app/components/SectionHeroAbout';

export default function AboutPage() {
  return (
    <main className=' pb-10'>
      <SectionHeroAbout />
      <SectionAbout />
    </main>
  );
}
