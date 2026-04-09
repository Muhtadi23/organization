'use client';

import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ServiceCard, ProjectCard } from '@/components/ui/Card';
import { Monitor, Cpu, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // Featured projects - consistent with your Portfolio page
  const featuredProjects = [
    {
      title: "Jsb.Online",
      category: "Web Application",
      href: "/portfolio/valvoline",
      image: "/valvoline.png",
    },
    {
      title: "Mahrajan Store",
      category: "Web Application",
      href: "/portfolio/mahrajan",
      image: "/mahrajan.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* 1. Hero Section */}
      <SectionWrapper className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple/10 to-skyBlue/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white text-purple text-sm font-semibold tracking-widest mb-6 border border-zinc-200 shadow-sm">
            INNOVATE YOUR DIGITAL PRESENCE
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-black">
            Build software that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-skyBlue">
              transforms
            </span>{' '}
            your business.
          </h1>

          <p className="text-xl md:text-2xl text-black/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a modern digital agency specializing in scalable web applications,
            stunning design, and robust engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/portfolio" variant="primary" size="lg">
              View Our Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Consult With Us
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Services Overview */}
      <SectionWrapper id="services">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-purple tracking-widest uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-black mb-6">Comprehensive Digital Solutions</h3>
          <p className="text-black/60 max-w-2xl mx-auto text-lg">
            From concept to deployment, we provide end-to-end services tailored to your unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Development"
            description="High-performance applications built with modern frameworks like Next.js and React."
            icon={Monitor}
            href="/services/web-dev"
          />
          <ServiceCard
            title="UI/UX Design"
            description="User-centric design systems that engage audiences and drive conversions."
            icon={Globe}
            href="/services/design"
          />
          <ServiceCard
            title="Cloud Architecture"
            description="Scalable, secure, and reliable backend infrastructures for your growing business."
            icon={Cpu}
            href="/services/cloud"
          />
        </div>
      </SectionWrapper>

      {/* 3. About Preview */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-skyBlue/20 flex items-center justify-center">
                <span className="text-2xl font-semibold text-black/70">Team Collaboration</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-skyBlue tracking-widest uppercase mb-3">Who We Are</h2>
            <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
              A team of passionate creators and engineers.
            </h3>

            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              We started with a simple belief: technology should empower users, not confuse them.
              Our diverse team brings together years of experience across multiple industries to deliver exceptional digital products.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Award-winning design team",
                "Agile & transparent workflow",
                "Dedicated post-launch support"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center text-black/90 font-medium">
                  <CheckCircle2 className="text-purple mr-3 flex-shrink-0" size={22} />
                  {text}
                </li>
              ))}
            </ul>

            <Button href="/about" variant="ghost" className="group px-0 hover:bg-transparent hover:text-purple">
              Learn More About Us
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Featured Projects — IMPROVED */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-purple tracking-widest uppercase mb-3">PORTFOLIO</h2>
            <h3 className="text-4xl font-bold text-black">Selected Work</h3>
          </div>
          <Button href="/portfolio" variant="secondary" className="group">
            View All Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              href={project.href}
              image={project.image}
            />
          ))}
        </div>

        {/* Optional: Subtle "More projects" hint */}
        <div className="text-center mt-12">
          <Link href="/portfolio" className="text-black/50 text-sm">
            + 4 more amazing projects in our full portfolio
          </Link>
        </div>
      </SectionWrapper>

      {/* 5. Testimonials */}
      <SectionWrapper bg="bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-skyBlue tracking-widest uppercase mb-3">TESTIMONIALS</h2>
          <h3 className="text-4xl font-bold text-white mb-6">What our clients say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: "The team completely transformed our digital presence. Traffic increased by 200% and user retention skyrocketed. Absolutely stellar work.",
              name: "John Doe",
              role: "CEO, TechNova Startups",
              initial: "JD"
            },
            {
              text: "Working with them was a game changer. They delivered beyond expectations on both design and technical execution.",
              name: "Sarah Chen",
              role: "Founder, Mahrajan Store",
              initial: "SC"
            },
            {
              text: "Professional, creative, and highly responsive. They turned our complex requirements into an elegant solution.",
              name: "Michael Rahman",
              role: "CTO, Valvoline Digital",
              initial: "MR"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-zinc-900 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                ★★★★★
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center font-semibold text-white">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Final CTA */}
      <SectionWrapper bg="bg-gradient-to-br from-purple to-skyBlue text-white" className="!py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join innovative companies that trust us to build their digital future.
            Let&apos;s discuss your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-black text-white hover:bg-white/90 hover:text-black shadow-xl font-medium">
              Get in Touch
            </Button>
            <Button
              href="/services"
              className="hover:text-black hover:bg-white font-medium"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}