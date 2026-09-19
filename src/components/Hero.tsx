import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreCollections,
}) => {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative pt-28 sm:pt-32 pb-16 md:pb-24 lg:pb-28 overflow-hidden bg-[#F7F5F0]"
    >
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#20242A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Headline, Description & Actions (approx 45–48%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Atelier Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="h-px w-6 bg-[#E58B4D]" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
                Architectural Studio & Curated Living
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-semibold text-[#20242A] tracking-[-0.02em] leading-[1.08] mb-6"
            >
              Spaces Designed to Feel Like Home.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6F706F] leading-relaxed mb-8 max-w-xl font-normal">
              Thoughtfully curated interiors, timeless furniture, and refined details designed around the way you live. We balance architectural proportion with tactile warmth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                id="hero-explore-collections-btn"
                onClick={onExploreCollections}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E58B4D] hover:bg-[#C96F37] text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-book-consultation-btn"
                onClick={onOpenConsultation}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDE8DF] text-[#20242A] border border-[#E3DED5] font-semibold text-[15px] px-6 py-3.5 rounded-lg shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Key Editorial Metrics / Endorsements */}
            <div className="pt-6 border-t border-[#E3DED5] grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif-heading text-2xl font-semibold text-[#20242A]">180+</p>
                <p className="text-xs text-[#6F706F] mt-0.5">Spaces Realized</p>
              </div>
              <div>
                <p className="font-serif-heading text-2xl font-semibold text-[#20242A]">12 Yrs</p>
                <p className="text-xs text-[#6F706F] mt-0.5">Design Practice</p>
              </div>
              <div>
                <p className="font-serif-heading text-2xl font-semibold text-[#20242A]">100%</p>
                <p className="text-xs text-[#6F706F] mt-0.5">Bespoke Curation</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Photograph (approx 52–55%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              {/* Decorative subtle border frame */}
              <div className="relative overflow-hidden rounded-2xl bg-[#EDE8DF] shadow-[0_18px_45px_-15px_rgba(32,36,42,0.12)] border border-[#E3DED5]">
                <img
                  src={HERO_IMAGE}
                  alt="CasaVera contemporary living room with neutral sofa, warm oak timber, travertine coffee table, and soft natural sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[580px] object-cover object-center transform hover:scale-[1.015] transition-transform duration-700 ease-out"
                />

                {/* Subtle Editorial Caption Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl border border-[#E3DED5]/80 shadow-sm flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E58B4D] shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#20242A]">Tribeca Private Residence</p>
                    <p className="text-[11px] text-[#6F706F]">Custom oak millwork & tactile bouclé seating</p>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#3A2A20] text-[#EDE8DF] px-4 py-2.5 rounded-lg shadow-md border border-[#523E30] items-center gap-2">
                <Compass className="w-4 h-4 text-[#E58B4D]" />
                <span className="text-[11px] tracking-wider uppercase font-medium">Bespoke Living Edition</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
