import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { BlogCard } from '@/components/ui/Card';

export default function Blog() {
  const posts = [
    { title: "The Future of React in 2025", excerpt: "Exploring server components and the evolving React ecosystem.", date: "Oct 12, 2024", category: "Engineering", slug: "future-of-react" },
    { title: "Designing for Accessibility", excerpt: "Practical tips to make your SaaS product usable by everyone.", date: "Oct 05, 2024", category: "Design", slug: "accessibility-design" },
    { title: "Scaling Node.js Backends", excerpt: "Understanding event loops, worker threads, and microservices.", date: "Sep 28, 2024", category: "Architecture", slug: "scaling-nodejs" },
    { title: "Our Open Source Journey", excerpt: "Why we decided to open source our internal tooling.", date: "Sep 15, 2024", category: "Culture", slug: "open-source-journey" },
    { title: "Tailwind CSS Best Practices", excerpt: "Structuring your tailwind classes for maximum reusability.", date: "Sep 02, 2024", category: "Engineering", slug: "tailwind-best-practices" },
  ];

  const categories = ["All", "Engineering", "Design", "Architecture", "Culture", "News"];

  return (
    <div className="flex flex-col min-h-screen bg-[#fbfcff]">
      {/* 1. Hero */}
      <SectionWrapper className="pt-32 pb-20 bg-white border-b border-white80">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">Our Blog</h1>
          <p className="text-xl text-black60 leading-relaxed">
            Insights, tutorials, and stories from our engineering and design teams.
          </p>
        </div>
      </SectionWrapper>

      {/* 4. Featured Post */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <h2 className="text-2xl font-bold text-black mb-8 border-b border-white80 pb-4">Featured Article</h2>
        <div className="bg-white rounded-3xl overflow-hidden border border-white80 shadow-md flex flex-col md:flex-row">
           <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-black90 flex items-center justify-center text-white60">
              Featured Image
           </div>
           <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-sm font-bold text-purple uppercase mb-3 text-skyBlue">Architecture</span>
              <h3 className="text-3xl font-bold text-black mb-4">Migrating from Monolith to Microservices</h3>
              <p className="text-black60 text-lg mb-8 leading-relaxed">
                A deep dive into our recent client project where we decoupled a massive legacy monolith into 15 robust microservices using Node and Go.
              </p>
              <Button href="/blog/migrating-monolith" variant="outline" className="self-start">Read Full Story</Button>
           </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 3. Categories Sidebar (UI only) */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-32">
              <h3 className="text-xl font-bold text-black mb-6">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      idx === 0 
                        ? 'bg-black90 text-white' 
                        : 'bg-white text-black60 hover:bg-[#fbfcff] hover:text-black border border-transparent hover:border-white80'
                    }`}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-gradient-to-br from-purple to-skyBlue rounded-2xl text-white">
                <h4 className="font-bold mb-2">Subscribe to our newsletter</h4>
                <p className="text-sm text-white80 mb-4">Get the latest posts delivered right to your inbox.</p>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded mb-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white" />
                <Button variant="secondary" className="w-full bg-white text-purple hover:bg-white80">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* 2. Blog Grid/List */}
          <div className="w-full lg:w-3/4">
             <h3 className="text-2xl font-bold text-black mb-8 border-b border-white80 pb-4">Recent Posts</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {posts.map((post, idx) => (
                 <BlogCard 
                   key={idx} 
                   title={post.title} 
                   excerpt={post.excerpt} 
                   date={post.date} 
                   category={post.category} 
                   href={`/blog/${post.slug}`} 
                 />
               ))}
             </div>
             
             <div className="mt-16 text-center">
               <Button variant="ghost">Load More Articles</Button>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CTA */}
      <SectionWrapper bg="bg-black text-white" className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Have an idea to share?</h2>
        <Button href="/contact" variant="primary">Write for Us</Button>
      </SectionWrapper>
    </div>
  );
}
