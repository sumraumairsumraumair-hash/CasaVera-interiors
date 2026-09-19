import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      id="back-to-top-btn"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#20242A] text-white shadow-lg hover:bg-[#E58B4D] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E58B4D] cursor-pointer"
      aria-label="Scroll back to top of page"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
