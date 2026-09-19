import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { COLLECTIONS } from '../data';
import { CollectionItem } from '../types';

interface FeaturedCollectionsProps {
  onSelectCollection: (collection: CollectionItem) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCollection,
}) => {
  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#E58B4D]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
                Spatial Curations
              </span>
            </div>
            <h2
              id="collections-heading"
              className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight leading-tight"
            >
              Explore Our Collections
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6F706F] leading-relaxed">
              Curated pieces and interior concepts that bring warmth, character, and balance to every room.
            </p>
          </div>

          <div className="hidden md:flex items-center text-xs font-medium text-[#6F706F] gap-2">
            <Layers className="w-4 h-4 text-[#E58B4D]" />
            <span>4 Distinct Environments • Available for Project Specification</span>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              id={`collection-card-${collection.id}`}
              onClick={() => onSelectCollection(collection)}
              className="group bg-white rounded-xl border border-[#E3DED5] overflow-hidden shadow-[0_4px_20px_-4px_rgba(32,36,42,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(32,36,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
            >
              {/* Image Container with zoom */}
              <div className="relative h-64 sm:h-60 overflow-hidden bg-[#EDE8DF]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#20242A] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-2xs border border-[#E3DED5]/60">
                  {collection.itemCount} Items
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E58B4D]">
                    {collection.subtitle}
                  </span>
                  <h3 className="font-serif-heading text-xl font-semibold text-[#20242A] mt-1 mb-2.5">
                    {collection.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#6F706F] leading-relaxed line-clamp-3">
                    {collection.description}
                  </p>
                </div>

                {/* Explore Link CTA */}
                <div className="mt-6 pt-4 border-t border-[#EDE8DF] flex items-center justify-between text-[13.5px] font-semibold text-[#20242A] group-hover:text-[#E58B4D] transition-colors">
                  <span>Explore Collection</span>
                  <div className="w-7 h-7 rounded-full bg-[#F7F5F0] group-hover:bg-[#E58B4D] text-[#20242A] group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
