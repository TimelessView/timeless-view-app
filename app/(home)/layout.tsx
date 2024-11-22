import { ReactNode } from 'react';
import Hero from '@/components/Layout/Sections/Hero';
import PhotographySection from '@/components/Layout/Sections/PhotographySection';
import VideoGraphySection from '@/components/Layout/Sections/VideoGraphySection';
import TestimonialsSection from '@/components/Layout/Sections/TestimonialsSection';
import MyServicesSection from '@/components/Layout/Sections/MyServicesSection';
import Footer from '@/components/Layout/Footer';

interface HomePageLayout {
  children: ReactNode;
}

export default function
  Layout({ children }: Readonly<HomePageLayout>) {
  return (
    <>
      {children}
      <div className={`w-full`}>
        <div className={`sm:h-screen bg-hero mb-16 pb-12`}>
          <Hero />
        </div>
        <main>
          <PhotographySection />
          <VideoGraphySection />
          <TestimonialsSection />
          <MyServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}