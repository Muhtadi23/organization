'use client';

import React, { useState, useMemo } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/Card';

export default function Portfolio() {
  const allProjects = [
    {
      title: "Jsb.Online",
      category: "Web Application",
      slug: "valvoline",
      img: "/valvoline.png",
    },
    {
      title: "Mahrajan Store",
      category: "Web Application",
      slug: "mahrajan",
      img: "/mahrajan.png",
    },
    {
      title: "School Management System",
      category: "UI/UX Design",
      slug: "school",
      img: "/school.png",
    }
  ];

  const categories = ["All", "Web Application", "UI/UX Design", "Mobile App", "Enterprise Tech"];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects;
    return allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">
            Our Work
          </h1>
          <p className="text-xl text-black/60 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of successful projects and digital transformations
            that drive real business impact.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Featured Case Study */}
      <SectionWrapper bg="bg-black text-white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[16/10] bg-zinc-900 rounded-3xl overflow-hidden relative shadow-2xl border border-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-sm">
                Featured Project Image
              </div>
              {/* You can replace with <Image> component later */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold tracking-widest uppercase">
              ★ Featured Case Study
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Global FinTech Revolution
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              We helped a leading financial institution modernize their legacy systems,
              resulting in a 3× increase in user engagement and secure processing of millions in transactions.
            </p>

            <Button
              href="/portfolio/fintech"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base"
            >
              View Full Case Study →
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Filter + Project Grid */}
      <SectionWrapper className="py-20">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${activeCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-zinc-600 hover:text-black border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              href={`/portfolio/${project.slug}`}
              image={project.img}           // Make sure your ProjectCard accepts `image` prop
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </SectionWrapper>

      {/* 4. CTA */}
      <SectionWrapper bg="bg-[#fbfcff]" className="text-center py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-black/60 mb-10">
            Let's create something extraordinary together.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
          >
            Start a Conversation
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}