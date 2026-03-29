import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/Card';

export default function Portfolio() {
  const projects = [
    { title: "FinTech Dashboard", category: "Web Application", slug: "fintech" },
    { title: "Healthcare Platform", category: "Cloud System", slug: "healthcare" },
    { title: "E-commerce Redesign", category: "UI/UX Design", slug: "ecommerce" },
    { title: "SaaS Analytics Tool", category: "Web Application", slug: "saas-analytics" },
    { title: "Real Estate App", category: "Mobile App", slug: "real-estate" },
    { title: "Logistics Portal", category: "Enterprise Tech", slug: "logistics" },
  ];

  const categories = ["All", "Web Application", "UI/UX Design", "Mobile App", "Enterprise Tech"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">Our Work</h1>
          <p className="text-xl text-black60 leading-relaxed">
            Explore our portfolio of successful projects and digital transformations.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Featured Case Study */}
      <SectionWrapper bg="bg-black text-white">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
             <div className="aspect-[4/3] bg-black90 rounded-2xl border border-black60 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-white60">
                   Featured Image Placeholder
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-purple uppercase mb-3">Featured Case Study</h2>
            <h3 className="text-4xl font-bold mb-6">Global FinTech Revolution</h3>
            <p className="text-white80 text-lg mb-8 leading-relaxed">
              Discover how we helped a leading financial institution modernize their legacy systems, resulting in a 3x increase in user engagement and millions processed securely.
            </p>
            <Button href="/portfolio/fintech" className="bg-purple text-white hover:bg-white hover:text-black">
              View Case Study
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Project Grid & 4. Categories Filter UI */}
      <SectionWrapper>
        {/* Categories (Static UI) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                idx === 0 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black60 hover:text-black hover:bg-white80 border border-white80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              title={project.title} 
              category={project.category} 
              href={`/portfolio/${project.slug}`} 
            />
          ))}
        </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <SectionWrapper bg="bg-[#fbfcff]" className="text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Have a project in mind?</h2>
        <Button href="/contact" variant="secondary">Start a Conversation</Button>
      </SectionWrapper>
    </div>
  );
}
