import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  
  const projectName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Project Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-4xl mx-auto">
          <Button href="/portfolio" variant="ghost" className="mb-8 px-0 hover:bg-transparent hover:text-purple text-black60">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Button>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">{projectName} Platform</h1>
          <p className="text-xl text-black60 leading-relaxed mb-8">
            A comprehensive digital transformation tailored for modern user needs, increasing overall efficiency and setting new industry standards.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
             <span className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-sm">Client: Acme Corp</span>
             <span className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-sm">Role: End-to-end</span>
             <span className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-sm">Year: 2024</span>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Screenshots Section (Hero Image) */}
      <SectionWrapper className="!py-0 -mt-10 relative z-10 w-full px-0 max-w-none">
         <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="w-full aspect-video bg-black90 rounded-3xl shadow-2xl flex items-center justify-center text-white60 border-8 border-white">
              Main Dashboard Image / Architecture Diagram
            </div>
         </div>
      </SectionWrapper>

      {/* 2. Project Overview & 3. Tech Stack */}
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-black mb-6">Project Overview</h2>
            <p className="text-black60 text-lg mb-6 leading-relaxed">
              The client approached us with a significant challenge: their legacy systems were unable to support their rapid growth. They needed a completely modernized architecture that could handle 10x their current volume without comprising security or user experience.
            </p>
            <p className="text-black60 text-lg leading-relaxed">
              Our team conducted rigorous discovery sessions to map out the current bottlenecks. Based on these insights, we designed a microservices-based backend feeding into a lightning-fast frontend built with React.
            </p>
          </div>
          <div className="w-full lg:w-1/3 bg-[#fbfcff] p-8 rounded-2xl border border-white80">
            <h3 className="text-xl font-bold text-black mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-white text-black border border-white80 font-medium rounded-full text-sm shadow-sm hover:border-skyBlue">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Challenges & Solutions */}
      <SectionWrapper bg="bg-black text-white">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Challenges & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black90 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-purple mb-4">The Challenge</h3>
            <p className="text-white80 leading-relaxed mb-6">
              Migrating millions of rows of data with zero downtime while dealing with highly sensitive user information in a heavily regulated industry.
            </p>
            <h3 className="text-xl font-bold text-skyBlue mb-4">The Solution</h3>
            <p className="text-white80 leading-relaxed">
              We developed a custom event-driven migration tool that mirrored traffic and incrementally moved data securely over a period of 4 weeks.
            </p>
          </div>
          <div className="bg-black90 p-8 rounded-2xl border border-white/10">
             <h3 className="text-xl font-bold text-purple mb-4">Results</h3>
             <ul className="space-y-4">
                {[
                  "Zero downtime during deployment",
                  "85% improvement in page load speeds",
                  "25% increase in conversion rate",
                  "Successful security compliance audit"
                ].map((res, idx) => (
                  <li key={idx} className="flex items-center text-white">
                    <CheckCircle2 className="text-skyBlue mr-3" size={20} />
                    <span>{res}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. CTA */}
      <SectionWrapper className="text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Want similar results?</h2>
        <Button href="/contact" variant="primary">Discuss Your Project</Button>
      </SectionWrapper>
    </div>
  );
}
