import React from 'react';
import { notFound } from 'next/navigation';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { BlogCard } from '@/components/ui/Card';
import { blogPosts, featuredPost } from '@/data/blog';
import { ArrowLeft, Clock } from 'lucide-react';

export async function generateStaticParams() {
  const allPosts = [...blogPosts, featuredPost];
  const uniqueSlugs = Array.from(new Set(allPosts.map(p => p.slug)));
  return uniqueSlugs.map((slug) => ({
    id: slug,
  }));
}

export default async function BlogDetails({ params }) {
  const { id } = await params;

  let post = blogPosts.find(p => p.slug === id);
  if (!post && featuredPost.slug === id) {
    post = featuredPost;
  }
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  
  if (relatedPosts.length < 3) {
    const extraPosts = blogPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.find(rp => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...extraPosts);
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Blog Hero */}
      <SectionWrapper className="pt-32 pb-16 bg-white80">
        <div className="max-w-3xl mx-auto">
          <Button href="/blog" variant="ghost" className="mb-8 px-0 hover:bg-transparent hover:text-purple text-black60">
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Button>
          <div className="flex items-center gap-4 mb-6 text-sm text-black60 font-medium">
            <span className="px-3 py-1 bg-white text-purple rounded-full">{post.category}</span>
            <span className="flex items-center"><Clock size={16} className="mr-1" /> {post.readTime || "5 min read"}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-black60 leading-relaxed mb-8">
            {post.excerpt}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!py-0 -mt-8 relative z-10 w-full px-0 max-w-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-full aspect-video bg-black90 rounded-2xl shadow-xl flex items-center justify-center text-white60 overflow-hidden">
             {/* Note: In a real app, an Image component would go here. */}
            Article Header Image for &quot;{post.title}&quot;
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Article Content Layout & 3. Author Section */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto mt-16 flex flex-col items-start lg:flex-row gap-12">
          {/* Author info hidden on mobile, shown on side on desktop */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:sticky lg:top-32 border-b lg:border-b-0 border-white80 pb-8 lg:pb-0">
            <div className="w-16 h-16 bg-white80 rounded-full flex justify-center items-center text-black60 font-bold border-2 border-white">
              {post.author?.initials || "JD"}
            </div>
            <div>
              <p className="font-bold text-black">{post.author?.name || "John Doe"}</p>
              <p className="text-sm text-black60">{post.author?.role || "Author"}</p>
            </div>
            <div className="hidden lg:flex w-full h-[1px] bg-white80 my-4" />
            <div className="hidden lg:block text-sm text-black60">Share this article</div>
            <div className="hidden lg:flex gap-2 text-black60">
              <span className="cursor-pointer hover:text-purple transition-colors">Twitter</span>
              <span className="cursor-pointer hover:text-purple transition-colors">LinkedIn</span>
            </div>
          </div>

          <article className="w-full lg:w-3/4 prose prose-lg prose-headings:text-black prose-p:text-black60 max-w-none">
            {post.content ? (
              post.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-black60 mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-lg leading-relaxed text-black60 mb-6">Content goes here.</p>
            )}
            
            <div className="bg-[#fbfcff] p-6 rounded-xl border-l-4 border-purple my-8 text-black90 italic font-medium">
              &quot;The transition wasn&apos;t completely smooth, but the performance gains outweighed the initial learning curve by an order of magnitude.&quot;
            </div>
          </article>
        </div>
      </SectionWrapper>

      {/* 4. Related Posts */}
      <SectionWrapper bg="bg-[#fbfcff]">
        <h3 className="text-2xl font-bold text-black mb-8 border-b border-white80 pb-4 text-center">Read Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((rp, idx) => (
            <BlogCard
              key={idx}
              title={rp.title}
              excerpt={rp.excerpt}
              date={rp.date}
              category={rp.category}
              href={`/blog/${rp.slug}`}
            />
          ))}
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
