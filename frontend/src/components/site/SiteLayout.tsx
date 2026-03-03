import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import WhatsAppButton from './WhatsAppButton';

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for anchor links
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed inset-0 -z-10 opacity-[0.02]" style={{ backgroundImage: 'url(/assets/generated/stayzy-pattern.dim_1024x1024.png)', backgroundSize: '400px' }} />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
