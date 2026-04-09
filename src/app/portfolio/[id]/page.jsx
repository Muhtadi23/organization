'use client';

import React, { use } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetails({ params }) {
  const { id: slug } = use(params);

  // Project data based on slug (expand this as you add more projects)
  const projects = {
    valvoline: {
      title: "Jsb.Online",
      category: "Web Application",
      client: "Valvoline",
      live: "https://japansolar-valvoline-62ce2c.ingress-haven.ewp.live/",
      year: "2026",
      role: "End-to-end Development",
      heroImage: "/valvoline.png",
      overview:
        "We built a modern, high-performance web platform for Jsb.Online, significantly improving user experience and operational efficiency.",
      challenge:
        "The existing platform suffered from slow loading times, poor mobile responsiveness, and limited scalability during peak traffic.",
      solution:
        "We redesigned and rebuilt the platform using Next.js and a modern stack, focusing on performance, SEO, and seamless user journeys.",
      results: [
        "60% faster page load times",
        "3.2x increase in mobile conversions",
        "95% user satisfaction score",
        "Significant improvement in SEO rankings"
      ],
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Vercel"
      ]
    },

    mahrajan: {
      title: "Mahrajan Store",
      category: "Web Application",
      client: "Mahrajan Store",
      live: "https://mahrajan.store/",
      year: "2026",
      role: "WordPress Development",
      heroImage: "/mahrajan.png",
      overview:
        "A modern and fully functional e-commerce platform built for Mahrajan Store, focused on performance and user experience.",
      challenge:
        "The client needed a fast, secure, and scalable online store with smooth checkout and easy inventory management.",
      solution:
        "We developed a customized WooCommerce solution with optimized performance, real-time inventory handling, and a streamlined checkout flow.",
      results: [
        "40% increase in online sales",
        "55% reduction in cart abandonment",
        "Improved mobile shopping experience",
        "Faster checkout process"
      ],
      techStack: ["WordPress", "WooCommerce", "PHP", "MySQL"]
    },
    mahrajan: {
      title: "Mahrajan Store",
      category: "Web Application",
      client: "Mahrajan Store",
      live: "https://mahrajan.store/",
      year: "2026",
      role: "WordPress Development",
      heroImage: "/mahrajan.png",
      overview:
        "A modern and fully functional e-commerce platform built for Mahrajan Store, focused on performance and user experience.",
      challenge:
        "The client needed a fast, secure, and scalable online store with smooth checkout and easy inventory management.",
      solution:
        "We developed a customized WooCommerce solution with optimized performance, real-time inventory handling, and a streamlined checkout flow.",
      results: [
        "40% increase in online sales",
        "55% reduction in cart abandonment",
        "Improved mobile shopping experience",
        "Faster checkout process"
      ],
      techStack: ["WordPress", "WooCommerce", "PHP", "MySQL"]
    },

    school: {
      title: "School Management System",
      category: "UI/UX Design",
      client: "Mirpur Bangla School",
      live: "https://school-dashboaord-ui.vercel.app/admin/",
      year: "2024",
      role: "UI/UX Design & Prototyping",
      heroImage: "/school.png",
      overview:
        "A complete UI/UX design for a school management system focused on simplicity, usability, and modern design standards.",
      challenge:
        "The system needed to handle complex workflows while remaining intuitive and user-friendly for administrators, teachers, and students.",
      solution:
        "We designed a clean, structured interface with clear navigation, improving usability and reducing system complexity.",
      results: [
        "Improved user navigation and workflow clarity",
        "Reduced learning curve for new users",
        "Modern and responsive UI design",
        "Scalable design system for future development"
      ],
      techStack: [
        "Figma",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Zod",
        "Framer Motion"
      ]
    }
  };
  const project = projects[slug];

  // Handle 404 if project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-black60 mb-8">Sorry, the project you're looking for doesn't exist.</p>
          <Button href="/portfolio">← Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Project Hero */}
      <SectionWrapper className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Button
            href="/portfolio"
            variant="ghost"
            className="mb-8 px-0 hover:bg-transparent hover:text-purple-600 text-black/60 flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to All Projects
          </Button>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-black/60 leading-relaxed mb-10 max-w-3xl">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 bg-white border border-black/10 rounded-xl text-sm font-medium">
              Client: {project.client}
            </span>
            <span className="px-5 py-2 bg-white border border-black/10 rounded-xl text-sm font-medium">
              Role: {project.role}
            </span>
            <span className="px-5 py-2 bg-white border border-black/10 rounded-xl text-sm font-medium">
              Year: {project.year}
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* Hero Image / Screenshot */}
      <SectionWrapper className="!py-0 -mt-12 relative z-10 px-0 max-w-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-8 border-white block"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </SectionWrapper>

      {/* Overview + Tech Stack */}
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-16 mt-20">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg text-black/70 leading-relaxed">
              <p>{project.challenge}</p>
              <p className="mt-6">{project.solution}</p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-[#fbfcff] p-8 rounded-3xl border border-black/5 sticky top-8">
              <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white text-sm font-medium rounded-2xl border border-black/10 hover:border-purple-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Challenges & Results */}
      <SectionWrapper bg="bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Challenges & Results</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-zinc-900 p-10 rounded-3xl border border-white/10">
            <h3 className="text-purple-400 font-semibold text-lg mb-4">THE CHALLENGE</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-white/10">
            <h3 className="text-sky-400 font-semibold text-lg mb-6">KEY RESULTS</h3>
            <ul className="space-y-5">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" size={24} />
                  <span className="text-white/90 text-lg">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="text-center py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Want similar results for your project?
        </h2>
        <p className="text-xl text-black/60 mb-10 max-w-md mx-auto">
          Let's discuss how we can help transform your idea into reality.
        </p>
        <Button href="/contact" size="lg">
          Start a Conversation
        </Button>
      </SectionWrapper>
    </div >
  );
}