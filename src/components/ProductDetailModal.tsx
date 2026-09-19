import React, { useState, useEffect } from 'react';
import { X, Check, Truck, Shield, Ruler, Sparkles, Send } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('');
  const [addedToSpec, setAddedToSpec] = useState(false);

  useEffect(() => {
    if (product && product.finishes.length > 0) {
      setSelectedFinish(product.finishes[0].name);
      setAddedToSpec(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && product) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const handleAddSpecification = () => {
    setAddedToSpec(true);
    setTimeout(() => {
      onInquire(`${product.name} (${selectedFinish})`);
      onClose();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20242A]/75 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#E3DED5] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#6F706F] hover:text-[#20242A] bg-white/90 rounded-full shadow-2xs transition-colors cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Image (5 cols) */}
          <div className="md:col-span-5 bg-[#F7F5F0] relative min-h-[300px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-[#3A2A20] text-[#EDE8DF] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                {product.tag}
              </span>
            )}
          </div>

          {/* Details (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E58B4D]">
                  {product.category}
                </span>
                <span className="font-serif-heading text-2xl font-bold text-[#20242A]">
                  {product.formattedPrice}
                </span>
              </div>

              <h2 id="product-detail-modal-title" className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#20242A] mb-3">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-[#6F706F] leading-relaxed mb-6">
                {product.fullDetails}
              </p>

              {/* Finish Options */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#20242A] mb-2">
                  Select Material Finish: <span className="font-normal text-[#6F706F]">{selectedFinish}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.finishes.map((f) => (
                    <button
                      key={f.name}
                      type="button"
                      onClick={() => setSelectedFinish(f.name)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                        selectedFinish === f.name
                          ? 'border-[#E58B4D] bg-[#F7F5F0] text-[#20242A] shadow-2xs'
                          : 'border-[#E3DED5] text-[#6F706F] hover:border-[#20242A]'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/20 shrink-0" style={{ backgroundColor: f.hex }} />
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="border-t border-[#EDE8DF] pt-4 mb-6 space-y-2.5 text-xs">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#6F706F] font-medium flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#E58B4D]" /> Dimensions:
                  </span>
                  <span className="text-[#20242A] text-right font-medium">{product.dimensions}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#6F706F] font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E58B4D]" /> Materials:
                  </span>
                  <span className="text-[#20242A] text-right font-medium">{product.materials}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#6F706F] font-medium flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#E58B4D]" /> Origin:
                  </span>
                  <span className="text-[#20242A] text-right font-medium">{product.origin}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[#6F706F] font-medium flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#E58B4D]" /> Availability:
                  </span>
                  <span className="text-[#20242A] text-right font-medium text-emerald-700">{product.leadTime}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#EDE8DF] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddSpecification}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] text-white text-sm font-semibold py-3 px-5 rounded-lg transition-colors cursor-pointer"
              >
                {addedToSpec ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Inquiry Recorded!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Inquire / Request Spec Sheet</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center text-xs font-medium text-[#6F706F] hover:text-[#20242A] py-2 px-4 transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
