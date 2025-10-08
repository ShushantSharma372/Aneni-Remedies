import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import HeroCarousel from '@/components/hero-carousel';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import heroImage from '@/assets/pharma-hero.jpg';
import researchLab from '@/assets/research-lab.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import globalNetwork from '@/assets/global-network.jpg';
import qualityControl from '@/assets/quality-control.jpg';
import { 
  Globe2, 
  Award, 
  Users, 
  Download, 
  ArrowRight, 
  Building2,
  FlaskConical,
  Shield,
  Quote,
  Star,
  Microscope,
  Heart,
  Zap
} from 'lucide-react';

const Home = () => {
  const heroSlides = [
    {
      title: 'Advancing Healthcare',
      subtitle: 'Globally',
      description: 'Leading pharmaceutical company delivering quality healthcare solutions across Africa, ASEAN, and the Americas with over 20 years of excellence.',
      badge: 'Global Excellence in Pharmaceuticals',
      primaryAction: { text: 'Partner With Us', link: '/contact' },
      secondaryAction: { text: 'Download Brochure', link: '/downloads' },
      image: heroImage,
      imageAlt: 'PharmaCorp Laboratory Facility'
    },
    {
      title: 'Research &',
      subtitle: 'Innovation',
      description: 'State-of-the-art research facilities with cutting-edge technology, developing breakthrough pharmaceutical solutions for global healthcare challenges.',
      badge: 'Innovation Leader',
      primaryAction: { text: 'Explore R&D', link: '/about' },
      secondaryAction: { text: 'View Research', link: '/products' },
      image: researchLab,
      imageAlt: 'Advanced Research Laboratory'
    },
    {
      title: 'Quality',
      subtitle: 'Manufacturing',
      description: 'GMP-certified manufacturing facilities ensuring the highest quality standards with advanced production lines and rigorous quality control processes.',
      badge: 'GMP Certified Excellence',
      primaryAction: { text: 'Quality Standards', link: '/about' },
      secondaryAction: { text: 'Our Products', link: '/products' },
      image: manufacturing,
      imageAlt: 'Manufacturing Facility'
    }
  ];

  const stats = [
    { icon: Globe2, label: 'Countries Served', value: '25+', color: 'text-blue-500' },
    { icon: Building2, label: 'Years of Excellence', value: '20+', color: 'text-green-500' },
    { icon: Users, label: 'Healthcare Partners', value: '500+', color: 'text-purple-500' },
    { icon: Award, label: 'Certifications', value: '15+', color: 'text-orange-500' }
  ];

  const features = [
    {
      icon: FlaskConical,
      title: 'Advanced R&D',
      description: 'State-of-the-art research facilities with cutting-edge technology and expert scientists developing innovative pharmaceutical solutions.',
      image: researchLab,
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 and GMP certified manufacturing processes ensuring highest quality standards with rigorous testing protocols.',
      image: qualityControl,
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Established presence in Africa, ASEAN, and Americas with reliable distribution networks and strategic partnerships.',
      image: globalNetwork,
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Medical Officer, HealthCare Plus',
      content: 'PharmaCorp has been our trusted partner for over 5 years. Their quality standards and reliability are unmatched in the industry.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      title: 'Procurement Director, MediSupply Co.',
      content: 'The partnership with PharmaCorp has significantly improved our supply chain efficiency. Outstanding service and product quality.',
      rating: 5,
    },
    {
      name: 'Dr. Priya Patel',
      title: 'Research Director, Global Health Initiative',
      content: 'Their research capabilities and innovative approach to pharmaceutical development have exceeded our expectations consistently.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      title: 'CEO, MedDistribute Africa',
      content: 'PharmaCorp understands the African market like no other. Their products and distribution network are world-class.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4 py-20">
          <HeroCarousel slides={heroSlides} />
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-glass backdrop-blur-sm rounded-2xl shadow-glass group-hover:shadow-glow transition-all duration-500">
                    <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose PharmaCorp?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by healthcare providers worldwide for our commitment to quality, innovation, and regulatory excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is validated by international certifications and regulatory approvals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'ISO 9001:2015',
              'GMP Certified',
              'FDA Registered',
              'WHO-GMP',
              'CE Marking',
              'COPP Certified'
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-pharma-card transition-shadow">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-sm font-semibold text-foreground">{cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by healthcare professionals and organizations worldwide.
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Join hundreds of healthcare partners worldwide. Let's discuss how we can support your pharmaceutical needs with our cutting-edge solutions and global expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cta" size="xl" asChild className="group shadow-glow hover:shadow-elegant transition-all duration-300">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 shadow-glow" 
                asChild
              >
                <Link to="/products">
                  <Microscope className="mr-2 h-5 w-5" />
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
