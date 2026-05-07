import { HeroSection } from '@/components/sections/hero';
import { BentoGrid } from '@/components/sections/bento';


export default function Home() {
  return (
    <main className="w-full">
        <HeroSection />
        <BentoGrid />
    </main>
  );
}
