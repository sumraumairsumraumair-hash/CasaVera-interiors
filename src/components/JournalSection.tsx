import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { JOURNAL_POSTS } from '../data';

export const JournalSection: React.FC = () => {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="py-20 md:py-28 bg-[#F7F5F0] border-t border-[#E3DED5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#E58B4D]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
                Essays & Monograms
              </span>
            </div>
            <h2
              id="journal-heading"
              className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight"
            >
              The CasaVera Journal
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6F706F] leading-relaxed">
              Inquiries into contemporary architecture, Japanese joinery, natural materiality, and the art of unhurried living.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#6F706F]">
            <BookOpen className="w-4 h-4 text-[#E58B4D]" />
            <span>Quarterly Studio Publications</span>
          </div>
        </div>

        {/* 3 Journal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl border border-[#E3DED5] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#EDE8DF]">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#20242A] text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#6F706F] mb-2.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#E58B4D]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-xl font-semibold text-[#20242A] group-hover:text-[#E58B4D] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#6F706F] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#20242A] group-hover:text-[#E58B4D] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
