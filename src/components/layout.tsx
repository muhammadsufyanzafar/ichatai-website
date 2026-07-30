import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { ScrollProgress } from './scroll-progress';
import { BackToTop } from './back-to-top';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
