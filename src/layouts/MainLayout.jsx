import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AuthModal } from '../components/auth/AuthModal';
import { SmoothScroll } from '../components/motion/SmoothScroll';

// Scroll to top helper on route transition
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export const MainLayout = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#FEFBF4] text-[#1F1C17] selection:bg-[#C5A25D]/30 selection:text-[#1F1C17]">
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <AuthModal />
      </div>
    </SmoothScroll>
  );
};
