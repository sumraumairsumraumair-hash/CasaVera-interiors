import React from 'react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

interface CtaSectionProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenConsultation,
  onExploreWork,
}) => {
  return (
    <section
      id="cta-section"
      aria-label="Call to Action"
      className="py-20 md:py-28 bg-[#EDE8DF] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-4 bg-white/60 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E3DED5] text-xs font-semibold uppercase tracking-wider text-[#C96F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#E58B4D]" />
          <span>Accepting New Client Commissions for 2026</span>
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#20242A] tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Ready to Reimagine Your Space?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#6F706F] leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us about your home, your style, and what you want to create. Let’s turn your ideas into a space that feels uniquely yours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-section-consultation-btn"
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E58B4D] hover:bg-[#C96F37] text-white font-semibold text-[15px] px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <button
            id="cta-section-explore-work-btn"
            type="button"
            onClick={onExploreWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F5F0] text-[#20242A] border border-[#E3DED5] font-semibold text-[15px] px-7 py-4 rounded-lg shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
