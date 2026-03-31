import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/Card';
import { Layout, Smartphone, Database, Server, PenTool, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Web Development", icon: Layout, desc: "React, Next.js, and modern fullstack web experiences.", href: "/services/web-dev" },
    { title: "Mobile Apps", icon: Smartphone, desc: "Native and cross-platform applications for iOS & Android.", href: "/services/mobile" },
    { title: "Cloud Backend", icon: Server, desc: "Scalable microservices and monolithic architectures.", href: "/services/cloud" },
    { title: "Database Architecture", icon: Database, desc: "Optimized data structures using SQL and NoSQL engines.", href: "/services/database" },
    { title: "UI/UX Design", icon: PenTool, desc: "Wireframing, prototyping, and high-fidelity interfaces.", href: "/services/design" },
    { title: "SEO & Analytics", icon: BarChart, desc: "Data-driven marketing and technical SEO implementation.", href: "/services/marketing" },
  ];

  const process = [
    { num: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience." },
    { num: "02", title: "Strategy", desc: "Our architects map out the technical and design roadmap." },
    { num: "03", title: "Execution", desc: "Our engineers and designers build the product iteratively." },
    { num: "04", title: "Launch", desc: "Rigorous testing followed by a seamless deployment process." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">Our Services</h1>
          <p className="text-xl text-black60 leading-relaxed">
            End-to-end digital solutions that drive growth and empower your business.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Services Grid */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">What We Do</h2>
          <p className="text-black60 text-lg max-w-2xl mx-auto">We cover the full spectrum of software development across all major platforms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} title={s.title} description={s.desc} icon={s.icon} href={s.href} />
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Process / Workflow */}
      <SectionWrapper bg="bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-skyBlue uppercase mb-3">Our Workflow</h2>
          <h3 className="text-3xl font-bold text-white mb-6">How We Build</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((p, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-black text-white/10 mb-4">{p.num}</div>
              <h4 className="text-xl font-bold mb-3">{p.title}</h4>
              <p className="text-white60">{p.desc}</p>
              {idx < 3 && <div className="hidden md:block absolute top-10 -right-4 w-8 h-[2px] bg-white60/20" />}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Technologies Used */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Core Technologies</h2>
          <p className="text-black60 text-lg">We use industry standard, modern tech stacks.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Figma'].map((tech, idx) => (
            <span key={idx} className="px-6 py-3 bg-white border border-white80 text-black font-semibold rounded-full shadow-sm hover:border-purple transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Pricing Preview & CTA */}
      <SectionWrapper className="text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Ready to check our rates?</h2>
        <p className="text-xl text-black60 mb-10 max-w-2xl mx-auto">We offer transparent pricing tiers for standard projects and custom quotes for enterprise solutions.</p>
        <div className="flex justify-center gap-4">
          <Button href="/pricing" variant="outline">View Pricing</Button>
          <Button href="/contact" variant="primary">Request Custom Quote</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
