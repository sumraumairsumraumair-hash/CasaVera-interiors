import React from 'react';
import { PenTool, Gem, Home } from 'lucide-react';
import { TRUST_HIGHLIGHTS } from '../data';

export const TrustStrip: React.FC = () => {
  const icons = [PenTool, Gem, Home];

  return (
    <section
      id="trust-strip"
      aria-label="Design Philosophy"
      className="border-y border-[#E3DED5] bg-[#EDE8DF]/50 py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="font-serif-heading text-xl sm:text-2xl font-medium text-[#20242A] tracking-tight">
            Designed with intention. Crafted for everyday living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_HIGHLIGHTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F5F0]/70 border border-[#E3DED5]/60 hover:border-[#E3DED5] transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3A2A20] text-[#EDE8DF]">
                  <Icon className="w-5 h-5 text-[#E58B4D]" />
                </div>
                <div>
                  <h2 className="text-[15px] font-semibold text-[#20242A] mb-1">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#6F706F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
