import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND } from '../data';
import { ConsultationFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Full Home Interior',
    budgetRange: '$50,000 – $100,000',
    preferredTimeline: 'Within 3 to 6 months',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief note about your space.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate, pristine client-side booking feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Studio Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-[#E58B4D]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
                  Atelier & Studio
                </span>
              </div>

              <h2
                id="contact-heading"
                className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight leading-tight mb-6"
              >
                Let’s Begin Your Transformation
              </h2>

              <p className="text-base text-[#6F706F] leading-relaxed mb-10">
                We welcome inquiries for private residences, executive offices, and custom architectural styling. Our design team reviews every submission within one business day.
              </p>

              {/* Contact Information Block */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EDE8DF] text-[#3A2A20] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E58B4D]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#20242A]">Studio Address</h3>
                    <p className="text-xs sm:text-sm text-[#6F706F] mt-0.5">{BRAND.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EDE8DF] text-[#3A2A20] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E58B4D]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#20242A]">Direct Inquiries</h3>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-xs sm:text-sm text-[#E58B4D] hover:text-[#C96F37] font-medium mt-0.5 block"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EDE8DF] text-[#3A2A20] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E58B4D]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#20242A]">Studio Concierge</h3>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-xs sm:text-sm text-[#6F706F] hover:text-[#20242A] font-medium mt-0.5 block"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EDE8DF] text-[#3A2A20] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#E58B4D]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#20242A]">Studio Hours</h3>
                    <p className="text-xs sm:text-sm text-[#6F706F] mt-0.5">{BRAND.hours}</p>
                    <p className="text-xs text-[#6F706F]">{BRAND.weekendHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 p-4 rounded-xl bg-white border border-[#E3DED5] text-xs text-[#6F706F]">
              <span className="font-semibold text-[#20242A]">Privacy Commitment:</span> All floor plans, private photographs, and client conversations remain strictly confidential under our studio nondisclosure policy.
            </div>
          </div>

          {/* Right Column: Clean Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E3DED5] p-8 sm:p-10 shadow-sm">
              
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E58B4D]/15 text-[#E58B4D] mx-auto flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#20242A] mb-3">
                    Thank You, {formData.fullName.split(' ')[0]}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6F706F] max-w-md mx-auto leading-relaxed mb-8">
                    Your design consultation request has been received by our Soho studio director. We will review your project parameters and respond within 24 hours at <span className="font-semibold text-[#20242A]">{formData.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        projectType: 'Full Home Interior',
                        budgetRange: '$50,000 – $100,000',
                        preferredTimeline: 'Within 3 to 6 months',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E58B4D] hover:text-[#C96F37]"
                  >
                    <span>Submit another inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-serif-heading text-2xl font-semibold text-[#20242A] mb-1">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-[#6F706F]">
                      Provide basic details about your project to schedule an exploratory call or studio visit.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lauren Hastings"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#20242A] placeholder-[#6F706F]/50 bg-[#F7F5F0]/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-[#E3DED5] focus:border-[#E58B4D]'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. lauren@example.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#20242A] placeholder-[#6F706F]/50 bg-[#F7F5F0]/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-[#E3DED5] focus:border-[#E58B4D]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] placeholder-[#6F706F]/50 bg-[#F7F5F0]/50 focus:bg-white focus:border-[#E58B4D] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-projectType" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        id="contact-projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-[#F7F5F0]/50 focus:bg-white focus:border-[#E58B4D] focus:outline-none transition-colors"
                      >
                        <option value="Full Home Interior">Full Home Interior & Architecture</option>
                        <option value="Living Room & Dining">Living Room & Dining Sanctuary</option>
                        <option value="Primary Bedroom Suite">Primary Bedroom Suite</option>
                        <option value="Space Planning Only">Space Planning & Layout Blueprint</option>
                        <option value="Curated Styling & Finishing">Curated Styling & Finishing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Budget Range */}
                    <div>
                      <label htmlFor="contact-budgetRange" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="contact-budgetRange"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-[#F7F5F0]/50 focus:bg-white focus:border-[#E58B4D] focus:outline-none transition-colors"
                      >
                        <option value="$25,000 – $50,000">$25,000 – $50,000 (Room Specific)</option>
                        <option value="$50,000 – $100,000">$50,000 – $100,000 (Multi-Room)</option>
                        <option value="$100,000 – $250,000">$100,000 – $250,000 (Full Residence)</option>
                        <option value="$250,000+">$250,000+ (Comprehensive Architectural Estate)</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="contact-timeline"
                        value={formData.preferredTimeline}
                        onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E3DED5] text-sm text-[#20242A] bg-[#F7F5F0]/50 focus:bg-white focus:border-[#E58B4D] focus:outline-none transition-colors"
                      >
                        <option value="Immediate (1–2 Months)">Immediate (1–2 Months)</option>
                        <option value="Within 3 to 6 months">Within 3 to 6 months</option>
                        <option value="6 to 12 months">6 to 12 months (New Build/Renovation)</option>
                        <option value="Flexible / Early Planning">Flexible / Early Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#20242A] uppercase tracking-wider mb-2">
                      Tell Us About Your Space & Vision *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your home location, square footage, architectural style, or specific challenges..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#20242A] placeholder-[#6F706F]/50 bg-[#F7F5F0]/50 focus:bg-white focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-[#E3DED5] focus:border-[#E58B4D]'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] disabled:bg-[#E58B4D]/60 text-white font-semibold text-[15px] py-4 px-6 rounded-lg shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Request Studio Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
