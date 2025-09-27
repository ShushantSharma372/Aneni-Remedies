import React from 'react';
import { Briefcase, Users, Award, MapPin } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import teamPhoto from '@/assets/quality-control.jpg';
import labWork from '@/assets/manufacturing.jpg';
import office from '@/assets/pharma-hero.jpg';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Filter,
  ArrowRight,
  FileText,
  Beaker,
  Shield,
  Truck,
  Globe2,
  Download,
  Heart,
  Pill,
  FlaskConical,
  Mail,
  Microscope,
  Activity,
  Zap
} from 'lucide-react';
export const openPositions = [
    {
      title: 'Research Scientist',
      location: 'Global R&D Center',
      type: 'Full-Time',
      description: 'Conduct pharmaceutical research and develop innovative solutions in a cutting-edge lab environment.',
    },
    {
      title: 'Quality Assurance Specialist',
      location: 'Manufacturing Facility',
      type: 'Full-Time',
      description: 'Ensure products meet GMP and ISO standards through rigorous testing and validation processes.',
    },
    {
      title: 'Regulatory Affairs Manager',
      location: 'Head Office',
      type: 'Full-Time',
      description: 'Manage compliance and submissions to regulatory authorities across multiple regions.',
    },
  ];

const Careers = () => {
  const jobHighlights = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description:
        'Join a team of passionate professionals working together to make a global impact in healthcare.',
      image: teamPhoto,
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description:
        'We offer continuous learning, mentorship, and opportunities for professional advancement.',
      image: office,
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description:
        'Exceptional contributions are recognized through awards, incentives, and career development programs.',
      image: labWork,
    },
  ];

  const benefits = [
    'Competitive Salary & Incentives',
    'Health Insurance & Wellness Programs',
    'Flexible Work Arrangements',
    'Professional Development & Training',
    'Diversity & Inclusion Initiatives',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-subtle py-20 text-center">
        
        <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Careers at 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Pharmacop</span>
              </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                Be part of a team dedicated to advancing healthcare globally. <br></br>
                Explore exciting opportunities, grow professionally, <br></br>
                and make a real difference.

                </p>
          </div>
        
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobHighlights.map((item, index) => (
            <Card
              key={index}
              className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-overlay"></div>
                <div className="absolute top-4 right-4 p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-subtle text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Employee Benefits</h2>
          <ul className="text-lg text-muted-foreground space-y-3 list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((job, index) => (
              <Card
                key={index}
                className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card backdrop-blur-sm overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {job.location} — {job.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            Ready to contribute to global healthcare innovation? Submit your application today and take your career to the next level.
          </p>
          <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Apply Now! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
