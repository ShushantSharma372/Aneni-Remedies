import React, { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Calendar, User } from 'lucide-react';

import { blogs, Blog } from '@/blogsContent';

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-subtle text-center">
        <div className="container mx-auto px-4">
        <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              PharmaCorp
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Insights</span>
              </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our latest articles, research updates, and thought <br></br>
                leadership in pharmaceuticals and healthcare.

                </p>
          </div>
          
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-10">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 h-48 md:h-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-between p-6">
                  <div>
                    <Badge variant="secondary" className="mb-3">Blog</Badge>
                    <CardTitle className="text-2xl mb-3">{blog.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {blog.excerpt}
                    </CardDescription>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><User size={16}/> {blog.author}</span>
                      <span className="flex items-center gap-1"><Calendar size={16}/> {blog.date}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setActiveBlog(blog)}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-2 md:px-6">
          <div className="bg-background w-full h-[95vh] rounded-2xl shadow-glow overflow-hidden relative flex flex-col">
            
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gradient-glass hover:bg-primary hover:text-primary-foreground transition"
              onClick={() => setActiveBlog(null)}
            >
              <X size={20} />
            </button>

            {/* Blog Image */}
            <div className="h-72 overflow-hidden shrink-0">
              <img
                src={activeBlog.image}
                alt={activeBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 p-8 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{activeBlog.title}</h2>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><User size={16}/> {activeBlog.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={16}/> {activeBlog.date}</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                {activeBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blogs;
