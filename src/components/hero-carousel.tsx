import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  primaryAction: {
    text: string;
    link: string;
  };
  secondaryAction?: {
    text: string;
    link: string;
  };
  image: string;
  imageAlt: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

const HeroCarousel = ({ slides }: HeroCarouselProps) => {
  return (
    <Carousel
      className="w-full"
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 5000, // change every 5s
          stopOnInteraction: true, // pause if user clicks/scrolls
        }),
      ]}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
          <div className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden rounded-2xl">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
        
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        
            {/* Text Block (kept in same place as before, just overlaid) */}
            <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
              <div className="max-w-2xl space-y-6 text-white">
                <div className="space-y-4">
                  {slide.badge && (
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-none">
                      {slide.badge}
                    </Badge>
                  )}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                    <span className="bg-gradient-hero bg-clip-text text-transparent"> {slide.subtitle}</span>
                  </h1>
                  <p className="text-xl leading-relaxed text-gray-200">
                    {slide.description}
                  </p>
                </div>
        
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild className="group">
                    <Link to={slide.primaryAction.link}>
                      {slide.primaryAction.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  {slide.secondaryAction && (
                    <Button
                      variant="outline"
                      size="xl"
                      asChild
                      className="group bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
                    >
                      <Link to={slide.secondaryAction.link}>
                        <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                        {slide.secondaryAction.text}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex left-4 shadow-glow bg-gradient-glass backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
      <CarouselNext className="hidden lg:flex right-4 shadow-glow bg-gradient-glass backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
    </Carousel>
  );
};

export default HeroCarousel;
