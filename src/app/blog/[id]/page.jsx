import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ArrowLeft, Clock, User } from 'lucide-react';

export default async function BlogDetails({ params }) {
  const { id } = await params;

  const articleName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Blog Hero */}
      <SectionWrapper className="pt-32 pb-16 bg-white80">
        <div className="max-w-3xl mx-auto">
          <Button href="/blog" variant="ghost" className="mb-8 px-0 hover:bg-transparent hover:text-purple text-black60">
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Button>
          <div className="flex items-center gap-4 mb-6 text-sm text-black60 font-medium">
            <span className="px-3 py-1 bg-white text-purple rounded-full">Engineering</span>
            <span className="flex items-center"><Clock size={16} className="mr-1" /> 5 min read</span>
            <span>Oct 12, 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">{articleName}</h1>
          <p className="text-xl text-black60 leading-relaxed mb-8">
            A comprehensive guide to understanding the nuances of {articleName.toLowerCase()} and how it impacts modern software development.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!py-0 -mt-8 relative z-10 w-full px-0 max-w-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-full aspect-video bg-black90 rounded-2xl shadow-xl flex items-center justify-center text-white60">
            Article Header Image
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Article Content Layout & 3. Author Section */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto mt-16 flex flex-col items-start lg:flex-row gap-12">
          {/* Author info hidden on mobile, shown on side on desktop */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:sticky lg:top-32 border-b lg:border-b-0 border-white80 pb-8 lg:pb-0">
            <div className="w-16 h-16 bg-white80 rounded-full flex justify-center items-center text-black60 font-bold border-2 border-white">JD</div>
            <div>
              <p className="font-bold text-black">John Doe</p>
              <p className="text-sm text-black60">Senior Engineer</p>
            </div>
            <div className="hidden lg:flex w-full h-[1px] bg-white80 my-4" />
            <div className="hidden lg:block text-sm text-black60">Share this article</div>
            {/* Social sharing placeholders */}
          </div>

          <article className="w-full lg:w-3/4 prose prose-lg prose-headings:text-black prose-p:text-black60 max-w-none">
            <h2 className="text-2xl font-bold text-black mb-4 mt-8">Introduction</h2>
            <p className="text-lg leading-relaxed text-black60 mb-6">
              In the ever-evolving landscape of software development, staying ahead of {articleName.toLowerCase()} is crucial. We&apos;ve spent the last six months researching and implementing this across our client projects, and the results have been remarkable.
            </p>
            <h2 className="text-2xl font-bold text-black mb-4 mt-8">The Core Concepts</h2>
            <p className="text-lg leading-relaxed text-black60 mb-6">
              At its heart, the pattern dictates a clear separation of concerns. You have your state management on one side, and your view layer on the other. But what happens when you introduce server-side rendering into the mix?
            </p>
            <div className="bg-[#fbfcff] p-6 rounded-xl border-l-4 border-purple mb-6 text-black90 italic font-medium">
              &quot;The transition wasn&apos;t completely smooth, but the performance gains outweighed the initial learning curve by an order of magnitude.&quot;
            </div>
            <p className="text-lg leading-relaxed text-black60 mb-6">
              When comparing the alternatives, we realized that sticking to the standard approach wouldn&apos;t yield the 10x improvement we were aiming for. We had to rethink our fundamental architecture.
            </p>
            <h3 className="text-xl font-bold text-black mb-4 mt-8">Conclusion</h3>
            <p className="text-lg leading-relaxed text-black60 mb-6">
              Implementing {articleName.toLowerCase()} might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.
            </p>
          </article>
        </div>
      </SectionWrapper>

      {/* 4. Related Posts */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <h3 className="text-2xl font-bold text-black mb-8 border-b border-white80 pb-4 text-center">Read Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Assuming you have access to the BlogCard component via import. In a real scenario, you'd map related posts. */}
          <div className="bg-white p-6 rounded-2xl border border-white80 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-purple uppercase">Engineering</span>
            <h4 className="font-bold text-black mt-2 mb-3">Understanding the Virtual DOM</h4>
            <p className="text-sm text-black60">A quick primer on how React updates the browser.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-white80 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-purple uppercase">Design</span>
            <h4 className="font-bold text-black mt-2 mb-3">Color Theory in SaaS</h4>
            <p className="text-sm text-black60">Why blue is dominating B2B applications.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-white80 shadow-sm hover:shadow-md transition-shadow hidden lg:block">
            <span className="text-xs font-bold text-skyBlue uppercase">Architecture</span>
            <h4 className="font-bold text-black mt-2 mb-3">Choosing a Database</h4>
            <p className="text-sm text-black60">SQL vs NoSQL in modern web applications.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <SectionWrapper bg="bg-black text-white" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to work with our experts?</h2>
        <Button href="/contact" className="bg-white text-black hover:bg-white80">Get in Touch</Button>
      </SectionWrapper>
    </div>
  );
}
