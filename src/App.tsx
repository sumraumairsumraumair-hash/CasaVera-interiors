import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedCollections } from './components/FeaturedCollections';
import { ServicesSection } from './components/ServicesSection';
import { EditorialFeature } from './components/EditorialFeature';
import { LatestArrivalsShop } from './components/LatestArrivalsShop';
import { DesignProcess } from './components/DesignProcess';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JournalSection } from './components/JournalSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ConsultationModal } from './components/ConsultationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LegalModal } from './components/LegalModals';
import { ProductItem, ProjectItem, ServiceItem, CollectionItem } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setConsultationPrefill(serviceTitle);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationPrefill(undefined);
  };

  const handleExploreCollections = () => {
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('spaces');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (collection: CollectionItem) => {
    // Scroll to portfolio or open consultation for this space
    handleOpenConsultation(`${collection.title} Collection`);
  };

  const handleStartProject = (service?: ServiceItem) => {
    handleOpenConsultation(service ? service.title : 'Full Home Interior');
  };

  const handleProductInquire = (productSummary: string) => {
    showToast(`Inquiry received for ${productSummary}. Our concierge will follow up shortly.`);
  };

  const handleProjectInquire = (projectName: string) => {
    handleOpenConsultation(`Inquiry inspired by ${projectName}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#20242A] flex flex-col selection:bg-[#E58B4D]/20 selection:text-[#3A2A20]">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 sm:right-8 z-50 bg-[#20242A] text-[#EDE8DF] px-4 py-3 rounded-xl shadow-xl border border-[#3A2A20] flex items-center gap-3 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 text-[#E58B4D] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-white transition-colors cursor-pointer"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Header / Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreCollections={handleExploreCollections}
        />

        {/* 2. Trust / Introduction Strip */}
        <TrustStrip />

        {/* 3. Featured Collections Section */}
        <FeaturedCollections onSelectCollection={handleSelectCollection} />

        {/* 4. Featured Design Services */}
        <ServicesSection onStartProject={handleStartProject} />

        {/* 5. Large Editorial Feature Section */}
        <EditorialFeature
          onExplorePortfolio={handleExplorePortfolio}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 6. Latest Arrivals / Shop Section (Warm Espresso Dark) */}
        <LatestArrivalsShop onSelectProduct={setSelectedProduct} />

        {/* 7. Design Process Section */}
        <DesignProcess />

        {/* 8. Portfolio / Project Showcase ("Selected Spaces") */}
        <PortfolioShowcase onSelectProject={setSelectedProject} />

        {/* 9. Testimonials Section */}
        <TestimonialsSection />

        {/* 10. Studio Journal Section */}
        <JournalSection />

        {/* 11. Strong Conversion Call-to-Action Section */}
        <CtaSection
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreWork={handleExplorePortfolio}
        />

        {/* 12. Contact & Consultation Section */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        prefilledService={consultationPrefill}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={handleProductInquire}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleProjectInquire}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
