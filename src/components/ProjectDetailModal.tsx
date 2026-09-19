import React, { useState, useEffect } from 'react';
import { X, MapPin, Calendar, Layers, Palette, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] || project.heroImage;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20242A]/80 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#E3DED5] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#6F706F] hover:text-[#20242A] bg-white/90 rounded-full shadow-2xs transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[88vh] overflow-y-auto">
          {/* Main Visual Stage */}
          <div className="relative bg-[#20242A] h-[360px] sm:h-[460px] md:h-[500px] w-full overflow-hidden">
            <img
              src={currentImage}
              alt={`${project.title} gallery preview`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-opacity duration-500"
            />
            
            {/* Top Bar with meta */}
            <div className="absolute top-6 left-6 right-16 flex items-center gap-3">
              <span className="bg-white/95 backdrop-blur-xs text-[#20242A] text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                {project.category}
              </span>
              <span className="bg-[#3A2A20]/80 backdrop-blur-xs text-[#EDE8DF] text-xs px-3 py-1 rounded-full">
                {project.area}
              </span>
            </div>

            {/* Gallery Thumbnail Strip */}
            {project.gallery.length > 1 && (
              <div className="absolute bottom-4 left-6 right-6 flex items-center gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === i ? 'border-[#E58B4D] scale-105 shadow-md' : 'border-white/50 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Content */}
          <div className="p-6 sm:p-10 space-y-8 bg-white">
            
            {/* Header info */}
            <div className="border-b border-[#EDE8DF] pb-6">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#6F706F] mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E58B4D]" />
                  {project.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#E58B4D]" />
                  Completed {project.year}
                </span>
                <span>•</span>
                <span>Spatial Scope: {project.area}</span>
              </div>

              <h2 id="project-modal-title" className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#20242A] tracking-tight">
                {project.title}
              </h2>
              <p className="text-base text-[#C96F37] font-medium mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Narrative & Client Brief */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20242A]">
                  Architectural Narrative
                </h3>
                <p className="text-sm sm:text-base text-[#6F706F] leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-[#F7F5F0] p-4 sm:p-5 rounded-xl border border-[#E3DED5] mt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E58B4D] block mb-1">
                    Client Vision & Brief:
                  </span>
                  <p className="text-xs sm:text-sm italic text-[#20242A]">
                    “{project.clientVision}”
                  </p>
                </div>
              </div>

              {/* Materials & Palette Sidebar (4 cols) */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20242A] flex items-center gap-1.5 mb-3">
                    <Layers className="w-3.5 h-3.5 text-[#E58B4D]" />
                    <span>Materials Specified</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.materialsUsed.map((mat) => (
                      <span
                        key={mat}
                        className="text-xs bg-[#EDE8DF] text-[#20242A] px-2.5 py-1 rounded-md"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20242A] flex items-center gap-1.5 mb-3">
                    <Palette className="w-3.5 h-3.5 text-[#E58B4D]" />
                    <span>Project Palette</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.palette.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-full border border-black/15 shadow-2xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#EDE8DF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#6F706F]">
                Interested in commissioning a residential project of similar scale?
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onInquireProject(project.title);
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#E58B4D] hover:bg-[#C96F37] text-white text-sm font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Inquire About This Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
