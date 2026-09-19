import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['top', 'collections', 'services', 'editorial', 'shop', 'process', 'spaces', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#top', id: 'top' },
    { label: 'Collections', href: '#collections', id: 'collections' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Shop', href: '#shop', id: 'shop' },
    { label: 'Spaces', href: '#spaces', id: 'spaces' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'About', href: '#editorial', id: 'editorial' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-xs border-b border-[#E3DED5] py-3.5'
            : 'bg-[#F7F5F0] py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <BrandLogo variant="dark" />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-nav"
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center space-x-7 xl:space-x-8"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative text-[14.5px] font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#E58B4D]'
                        : 'text-[#20242A]/85 hover:text-[#20242A]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E58B4D] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+12125843920"
                className="text-xs font-medium text-[#6F706F] hover:text-[#20242A] flex items-center gap-1.5 transition-colors"
                title="Call Soho Atelier"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#E58B4D]" />
                <span>(212) 584-3920</span>
              </a>

              <button
                id="header-consultation-cta"
                onClick={onOpenConsultation}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] text-white text-[14px] font-semibold tracking-wide px-5 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 opacity-90" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-quick-cta"
                onClick={onOpenConsultation}
                className="bg-[#E58B4D] text-white text-xs font-semibold px-3 py-2 rounded-md hover:bg-[#C96F37] transition-colors"
              >
                Consultation
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#20242A] hover:bg-[#EDE8DF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E58B4D]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#20242A]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#20242A]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-30 lg:hidden bg-[#20242A]/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F7F5F0] shadow-2xl p-6 pt-24 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="border-b border-[#E3DED5] pb-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6F706F]">
                  Navigation
                </span>
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg font-medium text-[#20242A] hover:text-[#E58B4D] py-1.5 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#6F706F]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#E3DED5] space-y-4">
              <div className="space-y-1 text-xs text-[#6F706F]">
                <p className="font-semibold text-[#20242A]">CasaVera Soho Atelier</p>
                <p>482 West Broadway, New York</p>
                <p>Mon–Fri: 9am – 6pm EST</p>
              </div>

              <button
                id="mobile-drawer-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] text-white text-[15px] font-semibold py-3 px-4 rounded-lg shadow-sm transition-all"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
