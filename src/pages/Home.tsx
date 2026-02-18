import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import HeroCarousel from '@/components/hero-carousel';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import heroImage from '@/assets/pharma-hero.jpg';
import researchLab from '@/assets/research-lab.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import globalNetwork from '@/assets/global-network.jpg';
import qualityControl from '@/assets/quality-control.jpg';
import MedicalCards from '@/components/ui/homeCard.tsx';
import CertificationsMarquee from '@/components/ui/certificatesMarquee';


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
      title: 'ANENI',
      subtitle: 'REMEDIES',
      description: 'Aneni Remedies is a fast-growing pharmaceutical company delivering high-quality healthcare solutions across Central Asia and international markets, backed by years of expertise and ethical practices.',
      badge: 'Excellence in Pharmaceuticals',
      primaryAction: { text: 'Partner With Us', link: '/contact' },
      secondaryAction: { text: 'Products Catalog', link: '/products' },
      image: heroImage,
      imageAlt: 'Aneni Remedies Laboratory Facility'
    },
    
    {
      title: 'Formulation',
      subtitle: 'Range',
      description: 'A comprehensive range of pharmaceutical formulations including tablets, capsules, softgel capsules, syrups, eye drops, ampoules, vials, and other dosage forms designed to meet varied healthcare needs.',
      badge: 'Diverse Product Portfolio',
      primaryAction: { text: 'Quality Standards', link: '/about' },
      secondaryAction: { text: 'Our Products', link: '/products' },
      image: manufacturing,
      imageAlt: 'Manufacturing Facility'
    },
    {
      title: 'Quality',
      subtitle: 'Manufacturing',
      description: 'GMP-certified manufacturing facilities ensure the highest quality standards, advanced production lines, and rigorous quality control for reliable healthcare solutions.',
      badge: 'GMP Certified Excellence',
      primaryAction: { text: 'Explore R&D', link: '/quality' },
      secondaryAction: { text: 'View Blogs', link: '/blogs' },
      image: researchLab,
      imageAlt: 'Advanced Research Laboratory'
    }
  ];
  

  const stats = [
    { icon: Globe2, label: 'Countries Served', value: '15+', color: 'text-blue-500' },
    { icon: Building2, label: 'Years of Excellence', value: '10+', color: 'text-green-500' },
    { icon: Users, label: 'Healthcare Partners', value: '200+', color: 'text-purple-500' },
    { icon: Award, label: 'Certifications', value: '10+', color: 'text-orange-500' }
  ];
  
  const features = [
    {
      icon: FlaskConical,
      title: 'Advanced R&D',
      description: 'Cutting-edge research facilities and expert scientists focused on developing innovative pharmaceutical solutions for both local and international markets.',
      image: researchLab,
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 and WHO-GMP certified manufacturing processes ensuring the highest quality standards and safety compliance.',
      image: qualityControl,
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Strong presence across Central Asia with expanding distribution networks and international partnerships to deliver healthcare products reliably.',
      image: globalNetwork,
    },
  ];

  const testimonials = [
    {
      name: 'Rina Mehta',
      title: 'Pharmacy Owner, Sunrise Pharmacy',
      content: 'Aneni Remedies has been a reliable supplier for our store. The quality of their products and timely deliveries make our work so much easier.',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      title: 'Procurement Manager, GreenCare Clinic',
      content: 'Working with Aneni Remedies has streamlined our stock management. Their products are consistent and dependable.',
      rating: 5,
    },
    {
      name: 'Simran Kaur',
      title: 'Local Distributor, HealthMart',
      content: 'We’ve been impressed with Aneni Remedies’ variety and quality. They are easy to work with and always meet our orders on time.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      title: 'Pharmacy Assistant, CityMed Store',
      content: 'Aneni Remedies provides excellent products for our daily needs. Their support team is responsive and helpful whenever we have questions.',
      rating: 5,
    },
  ];
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <HeroCarousel slides={heroSlides} />
      </section>


      {/* Company Highlights */}
      <section>
      <div className="container mx-auto">
      {/* other content above */}
      <h2 className="text-5xl py-20 text-center font-semibold text-foreground mb-4 
                 transition-colors duration-300 
                 group-hover:text-primary"
                 style={{ fontFamily: "Georgia" }}>
        Why Choose ANENI?
      </h2>
      
      <MedicalCards />

        {/* other content below */}
      </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
  <div className="container mx-auto px-4 text-center mb-16">
  <div className="h-20"></div> 
  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
      Certifications & Quality Standards
    </h2>
    
  </div>

  {/* Logo Marquee */}
  <CertificationsMarquee />
</section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
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
