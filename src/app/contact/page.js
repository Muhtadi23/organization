import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white80">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">Contact Us</h1>
          <p className="text-xl text-black60 leading-relaxed">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* 3. Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Get in touch</h3>
              <p className="text-black60 leading-relaxed max-w-md">Our friendly team is always here to chat. Fill out the form or use our direct contact info below.</p>
            </div>
            
            <div className="flex items-start">
               <div className="w-12 h-12 bg-[#fbfcff] rounded-xl flex justify-center items-center text-purple mr-4 border border-white80">
                 <Mail size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-black mb-1">Email</h4>
                 <p className="text-black60 text-sm mb-1">Our team typically replies in 2 hours.</p>
                 <a href="mailto:hello@agency.com" className="text-skyBlue hover:text-purple font-medium">hello@agency.com</a>
               </div>
            </div>

            <div className="flex items-start">
               <div className="w-12 h-12 bg-[#fbfcff] rounded-xl flex justify-center items-center text-skyBlue mr-4 border border-white80">
                 <Phone size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-black mb-1">Phone</h4>
                 <p className="text-black60 text-sm mb-1">Mon-Fri from 8am to 5pm PST.</p>
                 <a href="tel:+15550000000" className="text-skyBlue hover:text-purple font-medium">+1 (555) 000-0000</a>
               </div>
            </div>

            <div className="flex items-start">
               <div className="w-12 h-12 bg-[#fbfcff] rounded-xl flex justify-center items-center text-purple mr-4 border border-white80">
                 <MapPin size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-black mb-1">Office</h4>
                 <p className="text-black60 text-sm mb-1">Come say hello at our HQ.</p>
                 <p className="text-black90 font-medium">100 Tech Lane, Suite 200<br/>San Francisco, CA 94105</p>
               </div>
            </div>
          </div>

          {/* 2. Contact Form (UI only) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-white80">
              <div className="flex items-center mb-8">
                 <MessageSquare className="text-purple mr-3 w-8 h-8" />
                 <h3 className="text-2xl font-bold text-black">Send us a message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 bg-[#fbfcff] border border-white80 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2" htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 bg-[#fbfcff] border border-white80 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-[#fbfcff] border border-white80 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow" placeholder="jane@company.com" />
                </div>

                <div>
                   <label className="block text-sm font-bold text-black mb-2" htmlFor="subject">Subject</label>
                   <select id="subject" className="w-full px-4 py-3 bg-[#fbfcff] border border-white80 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow text-black60">
                      <option>Project Inquiry</option>
                      <option>Partnership</option>
                      <option>Career</option>
                      <option>Other</option>
                   </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2" htmlFor="message">Message</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-3 bg-[#fbfcff] border border-white80 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>

                <Button variant="primary" className="w-full py-4 text-lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Map Placeholder */}
      <SectionWrapper className="!py-0 relative z-10 w-full px-0 max-w-none">
         <div className="w-full h-96 bg-black90 flex flex-col items-center justify-center text-white60 border-y border-white80">
            <MapPin size={48} className="mb-4 text-white/30" />
            Interactive Map Component Placeholder
         </div>
      </SectionWrapper>

      {/* 5. FAQ Section */}
      <SectionWrapper bg="bg-[#fbfcff]">
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
               <p className="text-black60">Answers to some common inquiries.</p>
            </div>
            <div className="space-y-6">
               {[
                 { q: "What is your typical project timeline?", a: "Depending on scale, standard web applications take 6-12 weeks from discovery to deployment." },
                 { q: "Do you work with startups?", a: "Yes, we have specialized engagement models tailored for early-stage and high-growth startups." },
                 { q: "What happens after the project launches?", a: "We offer comprehensive SLA and maintenance packages to ensure your application remains secure and performant." }
               ].map((faq, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl border border-white80">
                    <h3 className="font-bold text-black lg:text-lg mb-2">{faq.q}</h3>
                    <p className="text-black60">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </SectionWrapper>
    </div>
  );
}
