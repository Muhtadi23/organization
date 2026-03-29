import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, BarChart } from 'lucide-react';

export default async function ServiceDetails({ params }) {
  const { id } = await params;
  
  // Dummy data for the specific service based on id
  const serviceName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Service Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-purple uppercase tracking-widest mb-4">Service Overview</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">{serviceName}</h1>
          <p className="text-xl text-black60 leading-relaxed max-w-2xl mx-auto">
            Comprehensive {serviceName.toLowerCase()} solutions designed to scale your business and outpace the competition.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Service Description */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-black mb-6">What is {serviceName}?</h3>
            <p className="text-black60 text-lg mb-6 leading-relaxed">
              We leverage cutting-edge technologies and deep industry expertise to deliver top-tier {serviceName.toLowerCase()} services. Our team works closely with you to understand your specific needs, ensuring the final output directly aligns with your business goals.
            </p>
            <p className="text-black60 text-lg leading-relaxed">
              From initial strategy formulation to the final deployment and ongoing maintenance, our comprehensive approach guarantees exceptional results.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#fbfcff] p-8 rounded-2xl border border-white80">
              <h4 className="text-xl font-bold text-black mb-6">Key Capabilities</h4>
              <ul className="space-y-4">
                {['Custom Architecture Design', 'Performance Optimization', 'Security Audits', 'Ongoing Support & SLA'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-black90">
                    <CheckCircle2 className="text-skyBlue mr-3" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Features List & Benefits */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-black mb-4">Why Choose This Service?</h3>
          <p className="text-black60 text-lg max-w-2xl mx-auto">The tangible benefits you can expect from our engagement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Increased ROI", desc: "Maximize your investment through optimized, high-converting implementations." },
            { title: "Scalability", desc: "Built to handle sudden traffic spikes and continuous future growth seamlessly." },
            { title: "Faster Time-to-Market", desc: "Agile methodologies ensure swift delivery without compromising on quality." }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-white80 text-center">
              <h4 className="text-xl font-bold text-black mb-3">{benefit.title}</h4>
              <p className="text-black60">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Case Study / Example */}
      <SectionWrapper bg="bg-black text-white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-video bg-black90 border border-black60/50 rounded-2xl flex items-center justify-center">
              <BarChart className="text-purple w-16 h-16 opacity-50" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-skyBlue uppercase mb-3">Featured Case Study</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Global E-commerce Overhaul</h3>
            <p className="text-white80 text-lg mb-6 leading-relaxed">
              We partnered with a leading retailer to rebuild their {serviceName.toLowerCase()} infrastructure. The result was a 40% increase in conversion rates, a complete modernization of their tech stack, and a major reduction in overhead costs.
            </p>
            <Button href="/portfolio/ecommerce-overhaul" variant="outline" className="border-white60 text-white hover:bg-white hover:text-black mt-4">
              Read the full case study
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <SectionWrapper className="text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Need help with {serviceName}?</h2>
        <p className="text-xl text-black60 mb-10 max-w-xl mx-auto">Contact our experts today for a free consultation and project estimation.</p>
        <Button href="/contact" variant="primary">Get a Proposal <ArrowRight size={18} className="ml-2" /></Button>
      </SectionWrapper>
    </div>
  );
}
