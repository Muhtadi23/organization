export const categories = ["All", "Engineering", "Design", "Architecture", "Culture", "News"];

export const blogPosts = [
  { 
    id: 1,
    title: "The Future of React in 2025", 
    excerpt: "Exploring server components and the evolving React ecosystem.", 
    content: "In the ever-evolving landscape of software development, staying ahead of React's new paradigms is crucial. At its heart, the pattern dictates a clear separation of concerns. You have your state management on one side, and your view layer on the other.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing Server Components might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Oct 12, 2024", 
    category: "Engineering", 
    slug: "future-of-react",
    author: { name: "John Doe", role: "Senior Engineer", initials: "JD" },
    readTime: "5 min read"
  },
  { 
    id: 2,
    title: "Designing for Accessibility", 
    excerpt: "Practical tips to make your SaaS product usable by everyone.", 
    content: "In the ever-evolving landscape of software development, designing for accessibility is crucial. At its heart, accessibility dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing accessible features might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Oct 05, 2024", 
    category: "Design", 
    slug: "accessibility-design",
    author: { name: "Jane Smith", role: "Product Designer", initials: "JS" },
    readTime: "4 min read"
  },
  { 
    id: 3,
    title: "Scaling Node.js Backends", 
    excerpt: "Understanding event loops, worker threads, and microservices.", 
    content: "In the ever-evolving landscape of software development, scaling Node.js is crucial. At its heart, the pattern dictates a clear separation of concerns. You have your state management on one side, and your view layer on the other.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing microservices might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Sep 28, 2024", 
    category: "Architecture", 
    slug: "scaling-nodejs",
    author: { name: "Alex Johnson", role: "Backend Lead", initials: "AJ" },
    readTime: "7 min read"
  },
  { 
    id: 4,
    title: "Our Open Source Journey", 
    excerpt: "Why we decided to open source our internal tooling.", 
    content: "In the ever-evolving landscape of software development, open source is crucial. At its heart, the pattern dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing open tooling might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Sep 15, 2024", 
    category: "Culture", 
    slug: "open-source-journey",
    author: { name: "Sam Lee", role: "CTO", initials: "SL" },
    readTime: "6 min read"
  },
  { 
    id: 5,
    title: "Tailwind CSS Best Practices", 
    excerpt: "Structuring your tailwind classes for maximum reusability.", 
    content: "In the ever-evolving landscape of software development, managing CSS classes is crucial. At its heart, the pattern dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing Tailwind might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Sep 02, 2024", 
    category: "Engineering", 
    slug: "tailwind-best-practices",
    author: { name: "John Doe", role: "Senior Engineer", initials: "JD" },
    readTime: "5 min read"
  },
  { 
    id: 6,
    title: "Understanding the Virtual DOM", 
    excerpt: "A quick primer on how React updates the browser.", 
    content: "In the ever-evolving landscape of software development, understanding React's internals is crucial. At its heart, the pattern dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing Virtual DOM concepts might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Aug 20, 2024", 
    category: "Engineering", 
    slug: "understanding-virtual-dom",
    author: { name: "Jane Smith", role: "Product Designer", initials: "JS" },
    readTime: "4 min read"
  },
  { 
    id: 7,
    title: "Color Theory in SaaS", 
    excerpt: "Why blue is dominating B2B applications.", 
    content: "In the ever-evolving landscape of software development, color theory is crucial. At its heart, the pattern dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing an accessible palette might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Aug 10, 2024", 
    category: "Design", 
    slug: "color-theory-saas",
    author: { name: "Alex Johnson", role: "Backend Lead", initials: "AJ" },
    readTime: "5 min read"
  },
  { 
    id: 8,
    title: "Choosing a Database", 
    excerpt: "SQL vs NoSQL in modern web applications.", 
    content: "In the ever-evolving landscape of software development, choosing the right database is crucial. At its heart, the pattern dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing a proper data layer might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Aug 01, 2024", 
    category: "Architecture", 
    slug: "choosing-database",
    author: { name: "Sam Lee", role: "CTO", initials: "SL" },
    readTime: "8 min read"
  },
  {
    id: 9,
    title: "Migrating from Monolith to Microservices",
    excerpt: "A deep dive into our recent client project where we decoupled a massive legacy monolith into 15 robust microservices using Node and Go.",
    content: "In the ever-evolving landscape of software development, migrating from monolith to microservices is crucial. At its heart, the pattern dictates a clear separation of concerns.\n\nWhen comparing the alternatives, we realized that sticking to the standard approach wouldn't yield the 10x improvement we were aiming for. Implementing microservices might seem daunting at first, but with the right foundational setup, your team can accelerate feature delivery significantly.",
    date: "Sep 20, 2024",
    category: "Architecture",
    slug: "migrating-monolith",
    author: { name: "John Doe", role: "Senior Engineer", initials: "JD" },
    readTime: "10 min read"
  }
];

export const featuredPost = {
  title: "Migrating from Monolith to Microservices",
  excerpt: "A deep dive into our recent client project where we decoupled a massive legacy monolith into 15 robust microservices using Node and Go.",
  category: "Architecture",
  slug: "migrating-monolith",
};
