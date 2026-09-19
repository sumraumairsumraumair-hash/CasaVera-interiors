import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BRAND } from '../data';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20242A]/75 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E3DED5] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#EDE8DF] bg-[#F7F5F0]">
          <div className="flex items-center gap-2.5">
            {isPrivacy ? (
              <Shield className="w-5 h-5 text-[#E58B4D]" />
            ) : (
              <FileText className="w-5 h-5 text-[#E58B4D]" />
            )}
            <h2 className="font-serif-heading text-xl font-semibold text-[#20242A]">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6F706F] hover:text-[#20242A] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-[#6F706F] leading-relaxed space-y-4">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-[#20242A]">
                Effective Date: January 1, 2026 • {BRAND.name}
              </p>
              <p>
                At {BRAND.name}, we hold our clients’ privacy and residential confidentiality to the highest ethical and professional standards. This Privacy Policy details how we collect, handle, and protect personal details submitted through our consultation platform.
              </p>
              <h3 className="text-sm font-semibold text-[#20242A] pt-2">
                1. Information Collection
              </h3>
              <p>
                We collect contact information (such as your name, email address, phone number, and physical residence city) exclusively when you choose to schedule a design consultation, request trade specifications, or subscribe to our studio journal.
              </p>
              <h3 className="text-sm font-semibold text-[#20242A] pt-2">
                2. Residential Nondisclosure
              </h3>
              <p>
                Architectural blueprints, site measurements, spatial photography, and project budgets are guarded under strict studio confidentiality. We never sell, lease, or distribute client data to external third parties or marketing networks.
              </p>
              <h3 className="text-sm font-semibold text-[#20242A] pt-2">
                3. Direct Contact & Rights
              </h3>
              <p>
                You may request complete erasure or modification of your inquiry records at any time by contacting our concierge director directly at {BRAND.email}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#20242A]">
                Effective Date: January 1, 2026 • {BRAND.name}
              </p>
              <p>
                Welcome to {BRAND.name}. By accessing our digital website, viewing our curated spatial collections, or booking an interior consultation, you agree to comply with our studio terms and conditions.
              </p>
              <h3 className="text-sm font-semibold text-[#20242A] pt-2">
                1. Architectural Copyright & Intellectual Property
              </h3>
              <p>
                All 3D renderings, custom joinery sketches, editorial photography, and brand materials displayed on this website are the proprietary property of {BRAND.name} and may not be reproduced without written authorization.
              </p>
              <h3 className="text-sm font-semibold text-[#20242A] pt-2">
                2. Consultation & Procurement Agreements
              </h3>
              <p>
                Submitting a consultation request initiates an exploratory discussion. Official project engagement begins only upon execution of a bilateral Letter of Agreement detailing scope of work, milestone retainers, and contractor liaisons.
              </p>
              <h3 className="text-sm font-semibold text-[#20242A] pt-2">
                3. Product Specifications
              </h3>
              <p>
                Custom bespoke furniture and natural materials (including travertine stone, raw white oak, and hand-loomed flax) feature natural grain and color variations inherent to organic materials.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-[#EDE8DF] text-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#20242A] text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-[#3A2A20] transition-colors cursor-pointer"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
