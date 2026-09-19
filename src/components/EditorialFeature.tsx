import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { EDITORIAL_BEDROOM_IMAGE } from '../data';

interface EditorialFeatureProps {
  onExplorePortfolio: () => void;
  onOpenConsultation: () => void;
}

export const EditorialFeature: React.FC<EditorialFeatureProps> = ({
  onExplorePortfolio,
  onOpenConsultation,
}) => {
  return (
    <section
      id="editorial"
      aria-labelledby="editorial-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F5F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Bedroom Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E3DED5] bg-[#EDE8DF]">
              <img
                src={EDITORIAL_BEDROOM_IMAGE}
                alt="CasaVera serene master bedroom with natural linen bedding, oak wood joinery, and warm morning light"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] lg:h-[580px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Editorial Frame Accent */}
              <div className="absolute top-6 left-6 bg-[#3A2A20]/90 backdrop-blur-xs text-[#EDE8DF] px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-medium">
                Volume IV • Issue 02
              </div>

              {/* Bottom Quote Strip */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#E3DED5] shadow-xs">
                <p className="font-serif-heading italic text-sm text-[#20242A]">
                  “Simplicity is not the absence of clutter, but the presence of purpose.”
                </p>
                <p className="text-[11px] text-[#6F706F] mt-1 font-sans">
                  The Kyoto Courtyard Residence — Designed by CasaVera Atelier
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#E58B4D]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
                THE ART OF LIVING
              </span>
            </div>

            <h2
              id="editorial-heading"
              className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#20242A] tracking-tight leading-[1.15] mb-6"
            >
              A Home Should Tell Your Story.
            </h2>

            <p className="text-base text-[#6F706F] leading-relaxed mb-6 font-normal">
              We reject sterile trends in favor of layered, soulful living spaces that age with grace. Our philosophy is rooted in warm minimalism—marrying natural timber, unhoned stone, tactile woven textiles, and sculpted light.
            </p>

            <p className="text-sm sm:text-[15px] text-[#6F706F] leading-relaxed mb-8">
              Every room is composed as a sanctuary for quiet mornings and effortless gatherings, where every sightline and surface invites touch and evokes calm.
            </p>

            {/* Design Standards */}
            <div className="space-y-3 mb-10">
              {[
                'Honest organic materials with zero toxic finishes',
                'Custom joinery tailored to your architectural footprint',
                'Lighting choreography tailored to circadian daylight cycles',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-[#20242A] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#E58B4D]/15 text-[#C96F37] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="editorial-explore-spaces-btn"
                type="button"
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 bg-[#20242A] hover:bg-[#3A2A20] text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>View Selected Spaces</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center text-sm font-semibold text-[#E58B4D] hover:text-[#C96F37] py-2 px-3 transition-colors underline-offset-4 hover:underline"
              >
                Schedule Atelier Visit →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
