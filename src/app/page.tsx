'use client';

import React from 'react';

import Footer from '@/app/components/Footer';
import SectionHero from '@/app/components/SectionHero';
import SectionLastNews from '@/app/components/SectionLastNews';
import SectionMission from '@/app/components/SectionMission';
import SectionRadarNews from '@/app/components/SectionRadarNews';
import SectionTraffic from '@/app/components/SectionTraffic';

const HomePage = () => {
  return (
    <main className='bg-[#0B090C] '>
      <SectionHero />
      <SectionTraffic />
      <SectionMission />
      <SectionLastNews />
      <SectionRadarNews />
      <Footer />
    </main>
  );
};

export default HomePage;
