import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND } from '../data';
import { ArrowRight, Instagram, Facebook, Check, Globe } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenConsultation,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  const handleSmoothScroll = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#20242A] text-[#EDE8DF] pt-16 md:pt-20 pb-12 border-t border-[#3A2A20]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3A2A20]">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo variant="light" showTagline />
            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 leading-relaxed max-w-sm">
              Contemporary architectural interior design and curated furniture collections. Crafting intentional living spaces that foster warmth, stillness, and enduring beauty.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 rounded-lg bg-[#3A2A20] hover:bg-[#E58B4D] text-[#EDE8DF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow CasaVera on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 rounded-lg bg-[#3A2A20] hover:bg-[#E58B4D] text-[#EDE8DF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Explore CasaVera Moodboards on Pinterest"
              >
                {/* Minimal Pinterest Pin SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C24.007 5.367 18.625 0 12.017 0z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-9 h-9 rounded-lg bg-[#3A2A20] hover:bg-[#E58B4D] text-[#EDE8DF] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Connect with CasaVera on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E58B4D] mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#EDE8DF]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#top')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Spatial Collections
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#spaces')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Spaces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Atelier Shop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Process
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (2 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E58B4D] mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#EDE8DF]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Full-Scale Interior Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Space Planning & Layouts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSmoothScroll('#services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Styling & Finishing Curation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-[#E58B4D] hover:text-[#C96F37] font-medium transition-colors cursor-pointer"
                >
                  Book Private Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E58B4D] mb-3">
              Studio Journal
            </h3>
            <p className="text-xs text-[#EDE8DF]/75 leading-relaxed">
              Subscribe for seasonal interior essays, materiality monographs, and new piece releases.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#E58B4D] bg-[#3A2A20] p-3 rounded-lg border border-[#523E30]">
                <Check className="w-4 h-4" />
                <span>You are subscribed to the CasaVera Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#3A2A20] border border-[#523E30] text-xs text-[#EDE8DF] placeholder-[#EDE8DF]/40 px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-[#E58B4D]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#E58B4D] hover:bg-[#C96F37] text-white px-3 rounded-md text-xs font-medium flex items-center transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs text-[#EDE8DF]/60 space-y-1">
              <p>{BRAND.address}</p>
              <p>{BRAND.phone}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE8DF]/60">
          <p>© 2026 CasaVera Interiors. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#E58B4D]" />
              <span>Worldwide Practice</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
