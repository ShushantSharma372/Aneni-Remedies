import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import researchLab from '@/assets/research-lab.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import qualityControl from '@/assets/quality-control.jpg';
import globalNetwork from '@/assets/global-network.jpg';
import { 
  Award, 
  Users, 
  Globe2, 
  Building2, 
  Shield, 
  Heart,
  Target,
  Eye,
  CheckCircle,
  FlaskConical,
  Microscope,
  UserCheck,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Dr. Robert Johnson',
      title: 'Chief Executive Officer',
      experience: '25+ years in pharmaceutical industry',
      education: 'PhD in Pharmaceutical Sciences, Harvard University',
    },
    {
      name: 'Sarah Williams',
      title: 'Chief Operating Officer',
      experience: '20+ years in global operations',
      education: 'MBA Operations Management, Wharton',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Chief Scientific Officer',
      experience: '22+ years in R&D leadership',
      education: 'PhD Biochemistry, Stanford University',
    },
    {
      name: 'Jennifer Martinez',
      title: 'Chief Quality Officer',
      experience: '18+ years in quality assurance',
      education: 'MS Regulatory Affairs, Johns Hopkins',
    },
  ];

  const milestones = [
    { year: '2004', event: 'Company founded with focus on quality pharmaceuticals' },
    { year: '2008', event: 'First international expansion to African markets' },
    { year: '2012', event: 'ISO 9001:2015 certification achieved' },
    { year: '2015', event: 'WHO-GMP certification obtained' },
    { year: '2018', event: 'ASEAN market entry and distribution network established' },
    { year: '2021', event: 'FDA registration completed for US market entry' },
    { year: '2023', event: 'Reached 500+ healthcare partners globally' },
    { year: '2024', event: '20th anniversary and continued expansion' },
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      issuer: 'International Organization for Standardization',
    },
    {
      name: 'WHO-GMP',
      description: 'Good Manufacturing Practice',
      issuer: 'World Health Organization',
    },
    {
      name: 'FDA Registration',
      description: 'US Food & Drug Administration',
      issuer: 'US FDA',
    },
    {
      name: 'CE Marking',
      description: 'European Conformity',
      issuer: 'European Union',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                About PharmaCorp
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Leading Global Healthcare 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Innovation</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  With over two decades of excellence in pharmaceutical manufacturing and distribution, 
                  PharmaCorp has established itself as a trusted partner in global healthcare, delivering 
                  life-changing medicines across continents.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img
                  src={researchLab}
                  alt="PharmaCorp Research Laboratory"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-overlay rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
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
                  To improve global health outcomes by providing high-quality, accessible pharmaceutical products and services while maintaining the highest standards of safety, efficacy, and regulatory compliance.
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
                  To be the most trusted pharmaceutical partner globally, recognized for innovation, quality excellence, and our contribution to advancing healthcare accessibility in emerging markets.
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
                  Integrity, Quality Excellence, Patient Safety, Innovation, Regulatory Compliance, Sustainability, and Collaborative Partnership guide every decision we make.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two decades of continuous growth, innovation, and expansion across global markets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="text-lg font-semibold text-foreground mb-2">{milestone.year}</div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
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
              Experienced leaders with decades of combined expertise in pharmaceuticals, operations, and global healthcare.
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
              Our commitment to quality is validated by international certifications and regulatory approvals.
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

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild className="group shadow-glow">
              <Link to="/downloads">
                Download Certificates <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
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
              Serving healthcare providers across three continents with reliable supply chains and local partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-pharma-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Globe2 className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Africa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Established distribution networks across 15 African countries with local regulatory compliance and supply chain infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-pharma-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">ASEAN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strategic partnerships in Southeast Asian markets with focus on emerging economies and healthcare accessibility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-pharma-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Americas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  FDA-registered operations serving North and South American markets with full regulatory compliance and quality assurance.
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
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover how our experience and commitment to quality can support your pharmaceutical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
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