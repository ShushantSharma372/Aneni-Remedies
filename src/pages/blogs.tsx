import React, { useState, useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogs, Blog } from '@/blogsContent';

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0); // 👈 new state

  // Scroll to top when opening an article
  useEffect(() => {
    if (activeBlog) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeBlog]);

  const handleReadMore = (blog: Blog) => {
    // Save current scroll position
    setScrollPosition(window.scrollY);
    setActiveBlog(blog);
  };

  const handleBack = () => {
    setActiveBlog(null);

    // Restore previous scroll position after a short delay
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero section hidden in article view */}
      {!activeBlog && (
        <section className="py-20 bg-gradient-subtle text-center">
          <div className="container mx-auto px-4 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              A N E N I <span className="bg-gradient-hero bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our latest articles, research updates, and thought <br />
              leadership in pharmaceuticals and healthcare.
            </p>
          </div>
        </section>
      )}

      {/* Conditional Rendering */}
      {!activeBlog ? (
        // -------- Blog Grid View --------
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Latest Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="
                    overflow-hidden border-0
                    shadow-lg shadow-primary/10
                    hover:shadow-[0_0_35px_rgba(99,102,241,0.4)]
                    transition-all duration-500 flex flex-col
                    bg-gradient-card backdrop-blur-sm
                  "
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                        <Calendar size={14} /> {blog.date}
                      </p>
                      <CardTitle className="text-xl font-semibold mb-3">{blog.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {blog.excerpt}
                      </CardDescription>

                      {/* <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div> */}
                    </div>

                    <Button className="w-full mt-auto" onClick={() => handleReadMore(blog)}>
                      Read More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // -------- Single Article View --------
        <section className="py-16 bg-background">
          <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-5xl space-y-8">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleBack}
            >
              <ArrowLeft size={16} /> Back to Articles
            </Button>

            <div className="rounded-2xl overflow-hidden shadow-lg shadow-primary/10">
              <img
                src={activeBlog.image}
                alt={activeBlog.title}
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold">{activeBlog.title}</h2>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                <Calendar size={14} /> {activeBlog.date}
              </p>

              {/* <div className="flex flex-wrap gap-2 mb-4">
                {activeBlog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div> */}

              <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                {activeBlog.content}
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Blogs;
