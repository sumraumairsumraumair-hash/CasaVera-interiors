import React from 'react';
import { Sparkles, LayoutGrid, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onStartProject: (service?: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#E58B4D]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-[#E58B4D]" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-[#E58B4D]" />;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#EDE8DF]/60 border-y border-[#E3DED5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#E58B4D]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
              Studio Capabilities
            </span>
            <span className="h-px w-6 bg-[#E58B4D]" />
          </div>
          <h2
            id="services-heading"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight"
          >
            From Inspiration to Installation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6F706F] leading-relaxed">
            Whether redesigning an entire residence or curating finishing details, our architectural studio provides tailored end-to-end design excellence.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-xl border border-[#E3DED5] p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Icon & Timeline Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#E3DED5] flex items-center justify-center transition-transform group-hover:scale-105">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#EDE8DF] text-[#3A2A20]">
                    {service.timeline}
                  </span>
                </div>

                <span className="text-xs font-medium uppercase tracking-wider text-[#E58B4D]">
                  {service.tagline}
                </span>

                <h3 className="font-serif-heading text-2xl font-semibold text-[#20242A] mt-1 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#6F706F] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-[#EDE8DF]">
                  <p className="text-[11.5px] font-semibold uppercase tracking-wider text-[#20242A]">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#6F706F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E58B4D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#EDE8DF]">
                <button
                  type="button"
                  onClick={() => onStartProject(service)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F7F5F0] hover:bg-[#E58B4D] text-[#20242A] hover:text-white font-semibold text-[14px] py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <span>Select {service.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Strip */}
        <div className="mt-14 text-center">
          <button
            id="services-start-project-cta"
            onClick={() => onStartProject()}
            type="button"
            className="inline-flex items-center justify-center gap-2.5 bg-[#E58B4D] hover:bg-[#C96F37] text-white font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
