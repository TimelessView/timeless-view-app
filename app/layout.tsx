import type { Metadata } from 'next';
import './globals.css';
import Hero from '@/components/Layout/Sections/Hero';
import PhotographySection from '@/components/Layout/Sections/PhotographySection';
import VideoGraphySection from '@/components/Layout/Sections/VideoGraphySection';
import TestimonialsSection from '@/components/Layout/Sections/TestimonialsSection';
import MyServicesSection from '@/components/Layout/Sections/MyServicesSection';
import Footer from '@/components/Layout/Footer';
import BurgerMenu from '@/components/UI/BurgerMenu';
import GoToTheTopBtn from '@/components/UI/GoToTheTopBtn';
import ReduxProvider from '@/components/Providers/ReduxProvider';
import FullScreenImagery from '@/components/Layout/FullScreenImagery';

export const metadata: Metadata = {
  title: 'Timeless View – Capturing Beauty Through the Lens',
  description: `Welcome to Timeless View, where Calgary-based photographer and videographer Olena brings your moments to life through vibrant, timeless visual stories. Originally from a cozy village in Ukraine and now proudly calling Calgary, Canada, her home, Olena draws inspiration from her surroundings to create stunning works of art.
      Specializing in interior shoots, product photography, sports and dance projects, weddings, and special events, Olena captures the emotions, details, and beauty that make each moment unforgettable. With a background as a dance and stretching instructor, she brings a dynamic and artistic perspective to her craft.
      Looking for a passionate and creative photographer or videographer in Calgary? Explore Timeless View and let’s create something extraordinary together!`
};

export default function
  RootLayout({
               children
             }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`transition-all duration-150`}>
    <div id="form"></div>
    <ReduxProvider>
      <FullScreenImagery />
    </ReduxProvider>
    {children}
    <GoToTheTopBtn />
    <ReduxProvider>
      <BurgerMenu />
    </ReduxProvider>
    <div className={`w-full`}>
      <div className={`h-[120%] bp-1800:h-screen bg-hero mb-16 pb-24`}>
        <Hero />
      </div>
      <main>
        <ReduxProvider>
          <PhotographySection />
        </ReduxProvider>
        <VideoGraphySection />
        <TestimonialsSection />
        <MyServicesSection />
      </main>
      <Footer />
    </div>
    </body>
    </html>
  );
}
