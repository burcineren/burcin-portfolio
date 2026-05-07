import { ExperienceSection } from '@/components/sections/experience';
import { Metadata } from 'next';
import { buildMetadata } from '@/config/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Experience | Burçin Eren',
  description: 'Professional experience and career journey of Burçin Eren.',
});

export default function ExperiencePage() {
  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-muted-foreground text-lg">
              A timeline of my professional journey and the companies I&apos;ve worked with.
            </p>
          </div>
          <ExperienceSection />
        </div>
      </div>
    </main>
  );
}
