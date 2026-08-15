import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

function headerOffset() {
  const header = document.querySelector('header');
  if (!(header instanceof HTMLElement)) return 112;
  return header.getBoundingClientRect().height + 8;
}

function scrollToHashTarget(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = Math.max(0, window.scrollY + el.getBoundingClientRect().top - headerOffset());
  window.scrollTo({ top, left: 0, behavior: 'auto' });
  return true;
}

export function Layout({ children }: LayoutProps) {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;
    window.history.scrollRestoration = 'manual';
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;
    let attempts = 0;
    const timers: number[] = [];

    const tryScroll = () => {
      if (cancelled) return;
      if (scrollToHashTarget(id) || attempts >= 24) return;
      attempts += 1;
      timers.push(window.setTimeout(tryScroll, 50));
    };

    timers.push(window.setTimeout(tryScroll, 280));

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
