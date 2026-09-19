import React from 'react';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { ProductItem } from '../types';

interface LatestArrivalsShopProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const LatestArrivalsShop: React.FC<LatestArrivalsShopProps> = ({
  onSelectProduct,
}) => {
  return (
    <section
      id="shop"
      aria-labelledby="shop-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#3A2A20] text-[#EDE8DF] relative overflow-hidden"
    >
      {/* Subtle organic light accent */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-[#E58B4D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-[#20242A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#E58B4D]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E58B4D]">
                Curated Shop & Atelier Edition
              </span>
            </div>
            <h2
              id="shop-heading"
              className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FFFFFF] tracking-tight leading-tight"
            >
              New Pieces, Timeless Character
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#EDE8DF]/80 leading-relaxed">
              Discover carefully selected furniture and decor designed to bring warmth and personality into your space.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#EDE8DF]/70">
            <Sparkles className="w-4 h-4 text-[#E58B4D]" />
            <span>Handcrafted in small artisan batches • Worldwide white-glove delivery</span>
          </div>
        </div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-[#FFFFFF] text-[#20242A] rounded-xl overflow-hidden shadow-lg border border-[#EDE8DF]/20 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#F7F5F0] cursor-pointer" onClick={() => onSelectProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  {product.tag && (
                    <div className="absolute top-3.5 left-3.5 bg-[#3A2A20]/90 backdrop-blur-xs text-[#EDE8DF] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  )}

                  {/* Quick view button overlay on hover */}
                  <div className="absolute inset-0 bg-[#20242A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-white/95 text-[#20242A] text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-[#E58B4D]" />
                      <span>Quick View</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F706F]">
                      {product.category}
                    </span>
                    <span className="font-serif-heading text-lg font-bold text-[#20242A]">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-xl font-semibold text-[#20242A] mb-2 group-hover:text-[#E58B4D] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#6F706F] leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Material / Finishes preview */}
                  <div className="mt-4 pt-3 border-t border-[#EDE8DF] flex items-center justify-between text-xs text-[#6F706F]">
                    <span>Finishes:</span>
                    <div className="flex items-center gap-1.5">
                      {product.finishes.map((finish) => (
                        <span
                          key={finish.name}
                          className="w-3.5 h-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: finish.hex }}
                          title={finish.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  id={`view-details-${product.id}`}
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] text-white font-semibold text-[13.5px] py-3 px-4 rounded-lg shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trade program hint */}
        <div className="mt-14 pt-8 border-t border-[#EDE8DF]/15 text-center text-xs text-[#EDE8DF]/70">
          Interior architects & licensed designers: Inquire about our trade procurement program with custom volume pricing.
        </div>

      </div>
    </section>
  );
};
