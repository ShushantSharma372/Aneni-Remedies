import React from 'react';
import { Microscope, ShieldCheck, Beaker, Award, Users } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import researchLab from '@/assets/research-lab.jpg';
import qualityControl from '@/assets/quality-control.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import sample4 from '@/assets/sample5.jpg';

const QualityRD = () => {
  const highlights = [
    {
      icon: Microscope,
      title: 'Innovative Research',
      description:
        'Our dedicated R&D centers focus on developing breakthrough molecules and formulations to address unmet healthcare needs.',
      image: researchLab,
    },
    {
      icon: ShieldCheck,
      title: 'Stringent Quality Control',
      description:
        'Each product undergoes multi-stage testing and validation following GMP, ISO, and WHO guidelines.',
      image: qualityControl,
    },
    {
      icon: Beaker,
      title: 'State-of-the-Art Facilities',
      description:
        'Equipped with cutting-edge instruments, our labs and pilot plants ensure precision in every stage of development.',
      image: manufacturing,
    },
  ];

  const stats = [
    { icon: Award, label: 'Global Certifications', value: '15+' },
    { icon: Users, label: 'Scientists & Experts', value: '200+' },
    { icon: Microscope, label: 'Research Projects', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section
  className="relative bg-gradient-subtle py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${sample4})`,
  }}
>
        <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Quality
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Excellence</span>
              </h1>
                <p className="text-xl text-foreground leading-relaxed">
                At PharmaCorp, quality and research form the backbone of everything we do. <br></br>
                From innovative formulations to world-class quality standards, <br></br>
                we are committed to advancing healthcare globally.

                </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-glass rounded-2xl shadow-glass group-hover:shadow-glow transition-all duration-500">
                  <stat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Commitment to Global Standards
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to bring safe, effective, and innovative pharmaceutical 
            products to the world. Every discovery, every process, and every product 
            reflects our unwavering dedication to quality and research excellence.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityRD;
