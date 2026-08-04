import { useEffect } from 'react';
import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { Features } from '@/components/sections/features';
import { AiModels } from '@/components/sections/ai-models';
import { CloudSync } from '@/components/sections/cloud-sync';
import { PromptLibrary } from '@/components/sections/prompt-library';
import { PrivacySection } from '@/components/sections/privacy-section';
import { Statistics } from '@/components/sections/statistics';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Layout } from '@/components/layout';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Global background effects */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,rgba(139,92,246,0.03),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
        </div>

        <Hero />
        <TrustedBy />
        <Features />
        <AiModels />
        <CloudSync />
        <PromptLibrary />
        <PrivacySection />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </Layout>
  );
}
