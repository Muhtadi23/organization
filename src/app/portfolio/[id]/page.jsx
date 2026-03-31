'use client';

import React, { use } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProjectDetails({ params }) {
  const { id: slug } = use(params);

  // Project data based on slug (expand this as you add more projects)
  const projects = {
    valvoline: {
      title: "Jsb.Online",
      category: "Web Application",
      client: "Valvoline",
      year: "2024",
      role: "End-to-end Development",
      heroImage: "/valvoline.png",
      overview: "We built a modern, high-performance web platform for Jsb.Online that significantly improved user experience and operational efficiency.",
      challenge: "The existing platform struggled with slow loading times, poor mobile experience, and limited scalability during peak seasons.",
      solution: "We redesigned and rebuilt the entire platform using Next.js and a modern tech stack, focusing on performance, SEO, and seamless user flows.",
      results: [
        "60% faster page load times",
        "3.2x increase in mobile conversions",
        "95% user satisfaction score",
        "SEO ranking improved dramatically"
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"]
    },
    mahrajan: {
      title: "Mahrajan Store",
      category: "Web Application",
      client: "Mahrajan Store",
      year: "2025",
      role: "Full Stack Development",
      heroImage: "/mahrajan.png",
      overview: "A beautiful and fully functional e-commerce platform built for Mahrajan Store with excellent user experience.",
      challenge: "Needed a modern online store with fast performance, secure payments, and easy inventory management.",
      solution: "Developed a custom e-commerce solution with real-time inventory sync and smooth checkout experience.",
      results: [
        "40% increase in online sales",
        "Reduced cart abandonment by 55%",
        "Integrated multiple payment gateways",
        "Mobile-first responsive design"
      ],
      techStack: ["Next.js", "React", "Stripe", "Sanity CMS", "Tailwind CSS", "Vercel"]
    },
    ecommerce: {
      title: "E-commerce Redesign",
      category: "UI/UX Design",
      client: "Fashion Retailer",
      year: "2024",
      role: "UI/UX Design & Prototyping",
      heroImage: "/ecommerce-redesign.jpg",
      overview: "Complete redesign of an outdated e-commerce platform focusing on modern aesthetics and improved conversion rates.",
      challenge: "Old design was causing high bounce rates and poor user trust.",
      solution: "Conducted extensive user research and created a fresh, conversion-focused design system.",
      results: [
        "Conversion rate increased by 68%",
        "Bounce rate reduced by 42%",
        "Modern, trustworthy visual identity",
        "Improved accessibility score"
      ],
      techStack: ["Figma", "Webflow", "Framer", "User Testing"]
    },
    "saas-analytics": {
      title: "SaaS Analytics Tool",
      category: "Web Application",
      client: "Startup SaaS",
      year: "2025",
      role: "End-to-end Development",
      heroImage: "/saas-analytics.jpg",
      overview: "A powerful analytics dashboard for SaaS companies to track key metrics and user behavior.",
      challenge: "Client needed a clean, fast, and insightful analytics interface.",
      solution: "Built a responsive dashboard with real-time data visualization and customizable reports.",
      results: [
        "Real-time data processing",
        "Beautiful interactive charts",
        "Role-based access control",
        "High user adoption rate"
      ],
      techStack: ["Next.js", "Recharts", "Tailwind CSS", "Supabase", "TypeScript"]
    },
    "real-estate": {
      title: "Real Estate App",
      category: "Mobile App",
      client: "Property Group",
      year: "2024",
      role: "Mobile App Development",
      heroImage: "/real-estate-app.jpg",
      overview: "A modern real estate mobile application for browsing properties, virtual tours, and connecting with agents.",
      challenge: "Needed an intuitive mobile experience for property discovery.",
      solution: "Built a cross-platform mobile app with React Native featuring advanced search and AR preview.",
      results: [
        "50,000+ downloads in first 3 months",
        "Excellent app store ratings",
        "Integrated payment & booking system"
      ],
      techStack: ["React Native", "Expo", "Firebase", "Google Maps API"]
    },
    logistics: {
      title: "Logistics Portal",
      category: "Enterprise Tech",
      client: "Global Logistics Co.",
      year: "2025",
      role: "Enterprise Solution",
      heroImage: "/logistics-portal.jpg",
      overview: "Enterprise-grade logistics management portal with real-time tracking and advanced analytics.",
      challenge: "Complex operations required a unified, scalable digital solution.",
      solution: "Developed a comprehensive portal connecting drivers, warehouses, and clients in real-time.",
      results: [
        "40% reduction in operational costs",
        "Real-time shipment visibility",
        "Automated reporting system"
      ],
      techStack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis", "AWS"]
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
          <div className="relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
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
    </div>
  );
}