import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Calendar, Clock, MapPin } from 'lucide-react';
import { BRAND } from '../data';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: prefilledService || 'Full Home Interior',
    budgetRange: '$50,000 – $100,000',
    preferredTimeline: 'Within 3 to 6 months',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a few notes about your space.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20242A]/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#F7F5F0] rounded-2xl shadow-2xl border border-[#E3DED5] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-[#E3DED5] bg-white">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E58B4D]">
              CasaVera Studio Concierge
            </span>
            <h2 id="consultation-modal-title" className="font-serif-heading text-2xl font-semibold text-[#20242A]">
              Book Your Design Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6F706F] hover:text-[#20242A] hover:bg-[#EDE8DF] rounded-lg transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E58B4D]/15 text-[#E58B4D] mx-auto flex items-center justify-center mb-5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif-heading text-2xl font-semibold text-[#20242A] mb-2">
                Consultation Reserved
              </h3>
              <p className="text-sm text-[#6F706F] max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <span className="font-semibold text-[#20242A]">{formData.fullName}</span>. Our design director has received your project details. We will email you at <span className="font-semibold text-[#20242A]">{formData.email}</span> within 24 business hours with our client welcome dossier and calendar scheduling link.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#20242A] hover:bg-[#3A2A20] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Return to CasaVera
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#20242A] bg-white focus:outline-none ${
                      errors.fullName ? 'border-rose-400' : 'border-[#E3DED5] focus:border-[#E58B4D]'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#20242A] bg-white focus:outline-none ${
                      errors.email ? 'border-rose-400' : 'border-[#E3DED5] focus:border-[#E58B4D]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (212) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-white focus:border-[#E58B4D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                    Project Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-white focus:border-[#E58B4D] focus:outline-none"
                  >
                    <option value="Interior Design">Full-Scope Interior Design</option>
                    <option value="Space Planning">Space Planning & Flow Blueprint</option>
                    <option value="Styling & Finishing">Styling & Finishing Curation</option>
                    <option value="Full Home Renovation">Comprehensive Estate Renovation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                    Investment Budget
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-white focus:border-[#E58B4D] focus:outline-none"
                  >
                    <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                    <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                    <option value="$100,000 – $250,000">$100,000 – $250,000</option>
                    <option value="$250,000+">$250,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                    Timeline Goal
                  </label>
                  <select
                    value={formData.preferredTimeline}
                    onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-white focus:border-[#E58B4D] focus:outline-none"
                  >
                    <option value="1–2 Months">Immediate (1–2 Months)</option>
                    <option value="3–6 Months">Within 3 to 6 months</option>
                    <option value="6+ Months">6+ Months / New Build</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-1.5">
                  About Your Space & Goals *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the property location, rooms involved, or your primary design aspirations..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#20242A] bg-white focus:outline-none ${
                    errors.message ? 'border-rose-400' : 'border-[#E3DED5] focus:border-[#E58B4D]'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] disabled:bg-[#E58B4D]/60 text-white font-semibold text-sm py-3.5 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'Confirming...' : 'Schedule Private Studio Consultation'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
