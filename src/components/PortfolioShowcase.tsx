import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

interface PortfolioShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Living Room',
    'Bedroom',
    'Dining',
    'Home Office',
    'Minimal Interior',
    'Luxury Apartment',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="spaces"
      aria-labelledby="spaces-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#E58B4D]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C96F37]">
                Selected Portfolio
              </span>
            </div>
            <h2
              id="spaces-heading"
              className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#20242A] tracking-tight leading-tight"
            >
              Selected Spaces
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6F706F] leading-relaxed">
              Explore recent private residences, historic lofts, and tranquil retreats realized across New York, California, Copenhagen, and Zurich.
            </p>
          </div>

          <div className="text-xs text-[#6F706F]">
            Showing <span className="font-semibold text-[#20242A]">{filteredProjects.length}</span> curated works
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#20242A] text-white shadow-xs'
                    : 'bg-white text-[#6F706F] border border-[#E3DED5] hover:border-[#20242A] hover:text-[#20242A]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric / Masonry Grid of 6 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => {
            // Span variations for architectural rhythm
            const isFeatured = index === 0 || index === 4;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-xl overflow-hidden bg-[#EDE8DF] border border-[#E3DED5] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isFeatured ? 'md:row-span-1 lg:row-span-1' : ''
                }`}
              >
                {/* Image Container with Hover Zoom & Dark Translucent Overlay */}
                <div className="relative h-72 sm:h-80 md:h-88 lg:h-96 w-full overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Translucent Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20242A]/90 via-[#20242A]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-white/90 backdrop-blur-xs text-[#20242A] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-2xs">
                      {project.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Content with Project Title & "View Project →" */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                    <div className="flex items-center gap-2 text-xs text-[#EDE8DF]/80 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E58B4D]" />
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#EDE8DF]/90 line-clamp-2 mb-4 font-normal">
                      {project.tagline}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#E58B4D] group-hover:text-white transition-colors">
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#6F706F]">
            Seeking custom residential architecture or full-home furnishing?{' '}
            <a
              href="#contact"
              className="text-[#E58B4D] hover:text-[#C96F37] font-semibold underline underline-offset-4"
            >
              Request our private monographs portfolio
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
