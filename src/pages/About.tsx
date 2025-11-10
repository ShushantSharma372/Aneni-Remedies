import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import researchLab from '@/assets/research-lab.jpg';
import sample from '@/assets/sample.jpg';
import back1 from '@/assets/sample4.jpg';
import map from '@/assets/map.png';
import { 
  Award, 
  Globe2, 
  Shield, 
  Heart,
  Target,
  Eye,
  UserCheck,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Dr. A. Sharma',
      title: 'Founder & Managing Director',
      experience: 'Over 20 years in pharmaceutical research and global healthcare operations',
      education: 'MD, MBA in Healthcare Management',
    },
    {
      name: 'Dr. P. Nair',
      title: 'Director – Exports & Business Development',
      experience: 'Extensive experience in international marketing and regulatory affairs',
      education: 'PhD in Pharmaceutical Sciences',
    },
    {
      name: 'Dr. R. Mehta',
      title: 'Director – Manufacturing & Quality',
      experience: '15+ years in large-scale pharmaceutical production and quality assurance',
      education: 'M.Pharm, Certified in GMP & Regulatory Compliance',
    },
    {
      name: 'Dr. S. Khan',
      title: 'Director – Research & Development',
      experience: 'Deep expertise in formulation development and product innovation',
      education: 'PhD in Pharmaceutics',
    },
  ];

  const certifications = [
    {
      name: 'WHO-GMP Certification',
      description: 'Good Manufacturing Practice compliance',
      issuer: 'World Health Organization',
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      issuer: 'International Organization for Standardization',
    },
    {
      name: 'Export Certification',
      description: 'Authorized exporter of pharmaceutical products',
      issuer: 'Government of India',
    },
    {
      name: 'Central Asia Regulatory Approval',
      description: 'Compliant with Central Asian market standards',
      issuer: 'Regional Health Authorities',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section
          className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${sample})`,
          }}
        >
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="relative container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                About Aneni Remedies
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Committed to Global 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Pharmaceutical Excellence</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Aneni Remedies is a fast-growing pharmaceutical company in India, dedicated to the manufacturing and export 
                  of a wide range of high-quality, affordable, and reliable pharmaceutical products. Founded by highly experienced 
                  and committed medical professionals, the company combines deep expertise in medicine, marketing, exports, 
                  and customer relationship management to deliver trusted healthcare solutions across Central Asia and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section
  className="py-20 bg-background bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url(${back1})`,
  }}
>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Target className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide cost-effective, innovation-driven, and superior quality pharmaceutical 
                  products across the globe — committed to improving and enhancing the quality of life 
                  through trust, excellence, and continuous care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Eye className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be a global pharmaceutical company admired for its affordability, accessibility, 
                  and quality of products — setting new benchmarks in ethical business practices and 
                  global healthcare standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Heart className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Ethics, quality, reliability, and consumer satisfaction form the foundation of everything 
                  we do. We believe in innovation with integrity and in building long-term relationships 
                  grounded in trust and transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            {/* Global Presence Section */}
      <section className="py-20 bg-gradient-subtle">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
      Our Presence in Central Asia
    </h2>
    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
      Aneni Remedies has a strong presence across region — connecting healthcare solutions from Russia to Central Asia.
    </p>

    <div className="flex justify-center">
      <img
        src={map}
        alt="CIS & Central Asia Map"
        className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      />
    </div>
  </div>
</section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by a team of visionary medical professionals with deep expertise in 
              pharmaceuticals, exports, and healthcare innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card backdrop-blur-sm overflow-hidden">
                <div className="relative h-24 bg-gradient-primary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-glass"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-16 h-16 bg-gradient-glass backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                      <UserCheck className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{leader.name}</CardTitle>
                    <CardDescription className="text-primary font-medium text-base">
                      {leader.title}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 p-4 bg-gradient-glass rounded-lg">
                    <div className="text-sm">
                      <strong>Experience:</strong> {leader.experience}
                    </div>
                    <div className="text-sm">
                      <strong>Education:</strong> {leader.education}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Quality Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our facilities and processes adhere to globally recognized quality and regulatory standards, 
              ensuring consistent excellence in every product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-pharma-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <strong>Issued by:</strong> {cert.issuer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering quality medicines to healthcare providers across Central Asia and other 
              international markets through strong distribution networks and ethical partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-pharma-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Globe2 className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Central Asia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Aneni Remedies has a strong presence across Central Asian countries, providing 
                  high-quality, affordable medicines through reliable partnerships and efficient 
                  supply chain systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-pharma-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Expanding Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  With a growing global footprint, we continue expanding into emerging healthcare 
                  markets, ensuring affordable access to trusted pharmaceutical solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-pharma-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every product from Aneni Remedies meets strict international regulatory standards,
                  reflecting our commitment to safety, reliability, and ethical excellence worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us for a Healthier Tomorrow
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover how Aneni Remedies can bring reliable, affordable, and high-quality 
            pharmaceutical products to your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/products">
                View Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
