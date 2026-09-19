import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#EDE8DF]/60 border-t border-[#E3DED5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#E58B4D]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
              Client Voices
            </span>
            <span className="h-px w-6 bg-[#E58B4D]" />
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight"
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base text-[#6F706F] leading-relaxed">
            Stories of transformed daily lives, uncompromised craftsmanship, and spaces that truly feel like home.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl border border-[#E3DED5] p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-[#E58B4D]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-5" aria-label="5 out of 5 stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E58B4D] text-[#E58B4D]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif-heading text-base sm:text-lg text-[#20242A] leading-relaxed italic mb-6">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-[#EDE8DF]">
                <p className="font-semibold text-sm text-[#20242A]">
                  {testimonial.author}
                </p>
                <p className="text-xs text-[#6F706F] mt-0.5">
                  {testimonial.role} • {testimonial.location}
                </p>
                <p className="text-[11px] text-[#E58B4D] font-medium mt-1">
                  Project: {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
