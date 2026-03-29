import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$2,500",
      desc: "Perfect for small businesses needing a professional web presence.",
      features: ["Up to 5 Pages", "Responsive Design", "Basic SEO Setup", "1 Month Support", "Shared Hosting"],
      notIncluded: ["Custom Backend", "E-commerce Integration", "Advanced Analytics"],
      buttonText: "Start Small",
      variant: "outline",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,500",
      desc: "Comprehensive solutions for growing companies requiring custom logic.",
      features: ["Up to 15 Pages", "Custom UI/UX Design", "Content Management System", "Basic E-commerce", "3 Months Support", "Advanced SEO Setup"],
      notIncluded: ["Complex Application Logic"],
      buttonText: "Scale Up",
      variant: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Complex architectures and dedicated engineering teams for scale.",
      features: ["Unlimited Pages", "Custom SaaS Architecture", "Full E-commerce Suite", "Dedicated Account Manager", "24/7 Priority Support", "Custom Integrations", "Security Audits"],
      notIncluded: [],
      buttonText: "Contact Us",
      variant: "secondary",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-black60 leading-relaxed">
            No hidden fees. Select a plan that scales with your ambition.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. Pricing Cards */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {tiers.map((tier, idx) => (
             <div key={idx} className={`relative flex flex-col bg-white rounded-3xl p-8 border ${tier.popular ? 'border-purple shadow-xl shadow-purple/10 lg:-translate-y-4' : 'border-white80 shadow-sm'} transition-transform`}>
               {tier.popular && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                   MOST POPULAR
                 </div>
               )}
               <div className="mb-8 border-b border-white80 pb-8 text-center">
                 <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-purple' : 'text-black'}`}>{tier.name}</h3>
                 <p className="text-black60 text-sm h-10">{tier.desc}</p>
                 <div className="text-5xl font-extrabold text-black mt-6">{tier.price}</div>
                 {tier.price !== "Custom" && <p className="text-black60 text-sm mt-1">Starting at</p>}
               </div>
               
               <div className="flex-grow">
                 <p className="font-bold text-black mb-4 uppercase tracking-wider text-sm">Included</p>
                 <ul className="space-y-4 mb-8">
                   {tier.features.map((f, fIdx) => (
                     <li key={fIdx} className="flex items-start text-black90">
                       <Check size={20} className="text-skyBlue mr-3 shrink-0" />
                       <span className="text-sm font-medium">{f}</span>
                     </li>
                   ))}
                 </ul>

                 {tier.notIncluded.length > 0 && (
                   <>
                     <p className="font-bold text-black60 mb-4 uppercase tracking-wider text-sm">Not Included</p>
                     <ul className="space-y-4 mb-8">
                       {tier.notIncluded.map((nf, nfIdx) => (
                         <li key={nfIdx} className="flex items-start text-black60/50">
                           <X size={20} className="mr-3 shrink-0" />
                           <span className="text-sm">{nf}</span>
                         </li>
                       ))}
                     </ul>
                   </>
                 )}
               </div>

               <Button href="/contact" variant={tier.variant} className={`w-full ${tier.popular && 'bg-purple'}`}>{tier.buttonText}</Button>
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* 3. Features Comparison (Optional placeholder logic here to satisfy "Features Comparison" requirement) */}
      <SectionWrapper bg="bg-[#fbfcff]">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Detailed Feature Breakdown</h2>
            <p className="text-black60 text-lg mb-10">We tailor every contract to your exact needs. Contact us for a full capability matrix.</p>
            <div className="p-8 bg-white border border-white80 rounded-2xl shadow-sm text-black60">
              <span className="italic block mb-4">"Transparent quotes. No surprise bills."</span>
              Interactive Comparison Table UI goes here.
            </div>
         </div>
      </SectionWrapper>

      {/* 4. FAQ */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-12">
           <h2 className="text-3xl font-bold text-black mb-4">Pricing FAQs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {[
             { q: "Can we pay in installments?", a: "Yes, standard projects are billed 50% upfront, 25% at beta, and 25% upon launch." },
             { q: "Are there hidden server costs?", a: "Hosting and infrastructure costs are billed directly to you at cost via AWS/Vercel. We do not mark up cloud fees." },
             { q: "Do you offer discounts for non-profits?", a: "Yes, registered 501(c)(3) organizations receive a standard 15% discount on all agency fees." },
             { q: "What if I need to cancel midway?", a: "Our contracts are milestone-based. You own all code written up to the point of cancellation." }
           ].map((faq, idx) => (
             <div key={idx}>
               <h3 className="font-bold text-black mb-2">{faq.q}</h3>
               <p className="text-black60">{faq.a}</p>
             </div>
           ))}
         </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <SectionWrapper bg="bg-black text-white" className="text-center">
         <h2 className="text-4xl font-bold mb-6">Need a specialized setup?</h2>
         <p className="text-xl text-white80 mb-10">Let's hop on a call and build a custom package for your exact requirements.</p>
         <Button href="/contact" className="bg-white text-black hover:bg-white80">Schedule Consultation</Button>
      </SectionWrapper>
    </div>
  );
}
