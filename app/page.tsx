import Hero from '@/components/Layout/Sections/Hero';

export default function Home() {
  return (
    <div className={`w-full`}>
      <div className={`sm:h-screen bg-hero mb-16 pb-12`}>
        <Hero />
      </div>
      <main>
      </main>
    </div>
  );
}
