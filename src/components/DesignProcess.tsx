import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Compass, CheckCircle } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F5F0] border-b border-[#E3DED5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#E58B4D]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
              Methodology & Rigor
            </span>
            <span className="h-px w-6 bg-[#E58B4D]" />
          </div>
          <h2
            id="process-heading"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight"
          >
            A Clear, Intentional Path
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6F706F] leading-relaxed">
            From preliminary sketches to white-glove handover, our four-phase framework protects your investment and ensures an unhurried, delightful experience.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl border border-[#E3DED5] p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Connector line on desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-[#E58B4D]/30 z-20 pointer-events-none" />
              )}

              <div>
                {/* Number & Indicator */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#E58B4D]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EDE8DF] text-[#3A2A20] flex items-center justify-center text-xs font-semibold">
                    0{index + 1}
                  </div>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F706F]">
                  {step.tagline}
                </span>

                <h3 className="font-serif-heading text-xl font-semibold text-[#20242A] mt-1 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13.5px] text-[#6F706F] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Milestone Tag */}
              <div className="pt-4 border-t border-[#EDE8DF] flex items-center gap-2 text-xs text-[#20242A] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#E58B4D] shrink-0" />
                <span className="truncate">{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
