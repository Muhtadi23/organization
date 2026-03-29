import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ServiceCard, ProjectCard } from '@/components/ui/Card';
import { Monitor, Cpu, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* 1. Hero Section */}
      <SectionWrapper className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple/10 to-skyBlue/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white text-purple text-sm font-semibold tracking-wider mb-6 border border-white80 shadow-sm">
            INNOVATE YOUR DIGITAL PRESENCE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-black">
            Build software that <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-skyBlue">transforms</span> your business.
          </h1>
          <p className="text-xl md:text-2xl text-black60 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a modern digital agency specializing in scalable web applications, stunning design, and robust engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/portfolio" variant="primary">View Our Work</Button>
            <Button href="/contact" variant="outline">Consult With Us</Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Services Overview */}
      <SectionWrapper id="services" bg="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-purple tracking-widest uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-black mb-6">Comprehensive Digital Solutions</h3>
          <p className="text-black60 max-w-2xl mx-auto text-lg hover:text-black90">From concept to deployment, we provide end-to-end services tailored to your unique challenges.</p>
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
            <div className="w-full h-96 bg-white80 rounded-3xl overflow-hidden relative shadow-lg">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-skyBlue/20 flex items-center justify-center">
                 <span className="text-black90 font-bold text-xl">Team Collaboration</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-skyBlue tracking-widest uppercase mb-3">Who We Are</h2>
            <h3 className="text-4xl font-bold text-black mb-6">A team of passionate creators and engineers.</h3>
            <p className="text-lg text-black60 mb-6 leading-relaxed">
              We started with a simple belief: technology should empower users, not confuse them. 
              Our diverse team of experts brings together years of experience across multiple industries to deliver exceptional digital products.
            </p>
            <ul className="space-y-4 mb-8">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-center text-black90 font-medium">
                  <CheckCircle2 className="text-purple mr-3" size={20} />
                  {item === 1 ? "Award-winning design team" : item === 2 ? "Agile & transparent workflow" : "Post-launch support"}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="ghost" className="px-0 hover:bg-transparent hover:text-purple">
              Learn More About Us <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Featured Projects */}
      <SectionWrapper bg="bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-purple tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl font-bold text-black">Selected Work</h3>
          </div>
          <Button href="/portfolio" variant="secondary">View All Projects</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard title="FinTech Dashboard" category="Web Application" href="/portfolio/fintech" />
          <ProjectCard title="Healthcare Platform" category="Cloud System" href="/portfolio/healthcare" />
        </div>
      </SectionWrapper>

      {/* 5. Testimonials */}
      <SectionWrapper bg="bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-skyBlue tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold text-white mb-6">What our clients say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-black90 p-8 rounded-2xl border border-black60/30">
              <div className="flex items-center gap-1 mb-6 text-purple">
                ★★★★★
              </div>
              <p className="text-white80 text-lg mb-8 leading-relaxed">"The team completely transformed our digital presence. Traffic increased by 200% and user retention skyrocketed. Absolutely stellar work."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black60 rounded-full flex items-center justify-center font-bold">JD</div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-white60">CEO, TechNova Startups</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. CTA Banner */}
      <SectionWrapper bg="bg-gradient-to-br from-purple to-skyBlue text-white" className="!py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-xl text-white80 mb-10 leading-relaxed">Join innovative companies that trust us to build their digital future. Let's discuss your vision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-purple hover:bg-white80 shadow-xl">Get in Touch</Button>
            <Button href="/services" className="bg-black/20 text-white hover:bg-black/30 border border-white/30">Explore Services</Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
