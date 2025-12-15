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
import d2 from '@/assets/d2.jpg';
import d1 from '@/assets/d1.jpg';
import CertificationsMarquee from '@/components/ui/certificatesMarquee';
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
      name: 'Dr. Hardeep Wadhwa',
      title: 'Founder',
      description: 'Dr. Hardeep, our Founder, is a distinguished medical professional with a strong international academic and clinical background. He earned his MBBS from KGMA, Bishkek, and completed his MD at KSMA, Krasnodar. He further advanced his expertise through higher studies at the University of Maryland, USA. With extensive clinical knowledge, fluency in multiple languages, and broad professional experience, Dr. Hardeep provides exceptional value to our partners, enabling impactful collaborations across diverse healthcare settings.',
      education: 'MD, MBA in Healthcare Management',
      image: d1,
      experience: 'Over 20 years in pharmaceutical research and global healthcare operations',
    },
    {
      name: 'Suchitra Nautiyal',
      title: 'Co- Founder and Director',
      description: 'Mrs. Suchitra is allied health care graduate from AIIMS (Delhi) and MBA from NMIMS (Pune). She has 15 plus years of experience in managing Global Health Care Market at various levels. Viewing challenges as opportunities, she is an asset to the company.',
      education: 'PhD in Pharmaceutical Sciences',
      image: d2,
      experience: 'Over 20 years in pharmaceutical research and global healthcare operations',
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
  className="py-20 relative overflow-hidden"
  style={{
    background: "linear-gradient(90deg, #ECE4FC, #FFFFFF)"
  }}
>

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-40 -top-20 left-1/4"></div>
    <div className="absolute w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-40 top-24 right-1/4"></div>
    <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40 bottom-16 left-1/3"></div>
  </div>

  
  <div className="container mx-auto px-8 relative z-10">
    {/* Header */}
    <div className="mb-16 text-left" style={{ fontFamily: "Georgia" }}>
      <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
        Principles
      </div>
      <h2 className="text-4xl font-semibold text-foreground mb-4 
                 transition-colors duration-300 
                 group-hover:text-primary"
      style={{ fontFamily: "Georgia" }}>
        Our Foundation
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Vision Card */}
      <Card className="border-0 shadow-elegant hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out text-center p-8 rounded-none bg-white" style={{ fontFamily: "Georgia" }}>
        <h3 className="text-2xl font-semibold text-[#471959] mb-4" style={{ fontFamily: "Georgia" }}>Vision</h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-2">
          To be a global pharmaceutical company admired for its affordability,
          accessibility, and quality of products — setting new benchmarks in
          ethical business practices and global healthcare standards.
        </p>
      </Card>

      {/* Mission Card */}
      <Card className="border-0 shadow-elegant hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out text-center p-8 rounded-none bg-white" style={{ fontFamily: "Georgia" }}>
        <h3 className="text-2xl text-[#471959] font-semibold mb-4" style={{ fontFamily: "Georgia" }}>Mission</h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-2">
        To provide cost-effective, innovation-driven, and superior quality pharmaceutical products across the globe — committed to improving and enhancing the quality of life through trust, excellence, and continuous care.
        </p>
      </Card>

      {/* Values Card */}
      <Card className="border-0 shadow-elegant hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out text-center p-8 rounded-none bg-white" style={{ fontFamily: "Georgia" }}>
        <h3 className="text-2xl text-[#471959] font-semibold mb-4" style={{ fontFamily: "Georgia" }}>Values</h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-2">
        Ethics, quality, reliability, and consumer satisfaction form the foundation of everything we do. We believe in innovation with integrity and in building long-term relationships grounded in trust and transparency.
        </p>
      </Card>
    </div>
  </div>
</section>



            {/* Global Presence Section */}
      <section className="py-20 bg-background">
  <div className="container mx-auto px-8 text-center">
  <h2
        className="text-left text-4xl font-semibold text-foreground mb-4 py-4"
        style={{ fontFamily: "Georgia" }}
      >
        Our Presence in Central Asia
      </h2>
    {/* <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
      Aneni Remedies has a strong presence across region — connecting healthcare solutions from Russia to Central Asia.
    </p> */}

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
      <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Leadership Team
      </h2> */}
      {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Guided by a team of visionary medical professionals with deep expertise in 
        pharmaceuticals, exports, and healthcare innovation.
      </p> */}
    </div>

    <div className="space-y-16 max-w-6xl mx-auto">
      {leadership.map((leader, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute -top-4 -left-4 text-8xl text-primary font-bold">“</div>
            <img
              src={leader.image}
              alt={leader.name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </div>

          {/* Text */}
          <div className={`flex-1 space-y-4 text-foreground ${
            index % 2 === 0 ? "" : "md:text-right"
            }`}
          >
            <h3 className="text-3xl font-bold">{leader.name}</h3>
            <p className="text-xl font-medium">{leader.title}</p>
            <p className="text-l">
              {leader.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-background">
  <div className="container mx-auto px-4 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
      Certifications & Quality Standards
    </h2>
    </div>

  {/* Logo Marquee */}
  <CertificationsMarquee />
</section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
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
            <Card className="border-0 shadow-pharma-card text-center bg-white">
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

            <Card className="border-0 shadow-pharma-card text-center bg-white">
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

            <Card className="border-0 shadow-pharma-card text-center bg-white">
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
