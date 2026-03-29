import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { Users, Target, Zap, Shield, ArrowRight } from 'lucide-react';

export default function About() {
  const team = [
    { name: "Alice Johnson", role: "CEO & Founder", init: "AJ" },
    { name: "Bob Smith", role: "CTO", init: "BS" },
    { name: "Charlie Davis", role: "Head of Design", init: "CD" },
    { name: "Diana Prince", role: "Lead Engineer", init: "DP" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">About Our Agency</h1>
          <p className="text-xl text-black60 leading-relaxed">
            We are a collective of digital craftsmen dedicated to building the experiences of tomorrow.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Company Story */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-purple uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl font-bold text-black mb-6">From a small studio to a global digital partner.</h3>
            <p className="text-black60 text-lg mb-4 leading-relaxed">Founded in 2018, we began with a simple mission: help ambitious brands navigate the digital landscape. Over the years, we&apos;ve grown from a small team of three into a multidisciplinary agency.</p>
            <p className="text-black60 text-lg leading-relaxed">We believe in transparent communication, agile methodologies, and pushing the boundaries of what is possible on the web.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] bg-gradient-to-tr from-skyBlue/20 to-purple/20 rounded-2xl flex items-center justify-center">
              <span className="text-black90 font-bold">Office Workspace Image</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Mission & Vision */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-white80">
            <Target className="text-purple mb-6 w-12 h-12" />
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-black60 text-lg leading-relaxed">To deliver exceptional digital products that empower our clients to succeed in an ever-evolving digital world. We prioritize quality, scalability, and user-centric design.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-white80">
            <Zap className="text-skyBlue mb-6 w-12 h-12" />
            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-black60 text-lg leading-relaxed">To become the industry standard for digital innovation, where creativity meets engineering perfectly. We envision a future where technology is seamless and accessible.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Team Members */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Meet Our Leadership</h2>
          <p className="text-black60 max-w-xl mx-auto text-lg">The brilliant minds driving our vision forward.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="w-48 h-48 mx-auto bg-white80 rounded-full mb-6 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border-4 border-white">
                <span className="text-4xl font-bold text-black60 group-hover:text-purple transition-colors">{member.init}</span>
              </div>
              <h4 className="text-xl font-bold text-black mb-1">{member.name}</h4>
              <p className="text-black60">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Why Choose Us */}
      <SectionWrapper bg="bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-purple uppercase mb-3">The Difference</h2>
          <h3 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-black90 rounded-2xl flex items-center justify-center mb-6 text-skyBlue">
              <Shield size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Proven Reliability</h4>
            <p className="text-white60">Over 100 successful deployments with 99.9% uptime track record.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-black90 rounded-2xl flex items-center justify-center mb-6 text-purple">
              <Users size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Dedicated Teams</h4>
            <p className="text-white60">You work directly with the experts building your product, no middlemen.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-black90 rounded-2xl flex items-center justify-center mb-6 text-skyBlue">
              <Zap size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Fast Execution</h4>
            <p className="text-white60">Agile sprints ensure we deliver core value rapidly and iterate efficiently.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. CTA Section */}
      <SectionWrapper className="text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Let&apos;s build something beautiful together.</h2>
        <Button href="/contact" variant="primary">Contact Our Team <ArrowRight size={18} className="ml-2" /></Button>
      </SectionWrapper>
    </div>
  );
}
