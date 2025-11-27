import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useToast } from '@/hooks/use-toast';
import sample6 from '@/assets/sample6.png';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Building2,
  Users,
  FileUp,
  Globe2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyzolrjn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: `Your ${formType} has been received. We'll get back to you within 24 hours.`,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: ['+91 9350822880'] },
    { icon: Mail, title: 'Email', details: ['aneniremedies@gmail.com'] },
    { icon: MapPin, title: 'Address', details: ['Aneni Remedies','SN. 209, Vikas Sudarshan Plaza,', 'Plot No. 4, Sector 5, Dwarka', 'New Delhi-110075 India',''] },
    { icon: Clock, title: 'Business Hours', details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-subtle bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${sample6})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Get in
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Touch</span>
              </h1>
              <p className="text-xl text-foreground leading-relaxed">
                Ready to partner with us?  <br/>
                Whether you're looking for pharmaceutical supplies, distribution opportunities, <br/>
                or career positions, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-pharma-card text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Inquiry Type
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Select the appropriate form below based on your specific needs. Our team will respond promptly.
              </p>
            </div>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="general" className="flex items-center space-x-2"><Mail className="h-4 w-4" /><span>General Inquiry</span></TabsTrigger>
                <TabsTrigger value="partnership" className="flex items-center space-x-2"><Building2 className="h-4 w-4" /><span>Partnership</span></TabsTrigger>
                <TabsTrigger value="distributor" className="flex items-center space-x-2"><Globe2 className="h-4 w-4" /><span>Distributor</span></TabsTrigger>
                <TabsTrigger value="career" className="flex items-center space-x-2"><Users className="h-4 w-4" /><span>Career</span></TabsTrigger>
              </TabsList>

              {/* General Inquiry Form */}
              <TabsContent value="general">
                <Card className="border-0 shadow-pharma-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2"><Mail className="h-5 w-5" /><span>General Inquiry</span></CardTitle>
                    <CardDescription>Send us a general message about our products or services.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, 'general inquiry')} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="general-name">Full Name *</Label>
                          <Input id="general-name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="general-email">Email Address *</Label>
                          <Input id="general-email" name="email" type="email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="general-company">Company</Label>
                          <Input id="general-company" name="company" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="general-country">Country</Label>
                          <Input id="general-country" name="country" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="general-subject">Subject *</Label>
                        <Input id="general-subject" name="subject" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="general-message">Message *</Label>
                        <Textarea id="general-message" name="message" rows={5} required />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        <Send className="mr-2 h-4 w-4" />{isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Partnership Form */}
              <TabsContent value="partnership">
                <Card className="border-0 shadow-pharma-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2"><Building2 className="h-5 w-5" /><span>Partnership Request</span></CardTitle>
                    <CardDescription>Explore business partnership opportunities with PharmaCorp.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, 'partnership request')} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="partner-name">Full Name *</Label>
                          <Input id="partner-name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partner-email">Email Address *</Label>
                          <Input id="partner-email" name="email" type="email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="partner-company">Company Name *</Label>
                          <Input id="partner-company" name="company" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partner-position">Position/Title</Label>
                          <Input id="partner-position" name="position" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnership-type">Partnership Type *</Label>
                        <Select name="partnershipType">
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manufacturing">Contract Manufacturing</SelectItem>
                            <SelectItem value="supply">Bulk Supply Agreement</SelectItem>
                            <SelectItem value="licensing">Licensing Partnership</SelectItem>
                            <SelectItem value="joint-venture">Joint Venture</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partner-requirements">Partnership Requirements *</Label>
                        <Textarea id="partner-requirements" name="requirements" rows={5} required />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        <Send className="mr-2 h-4 w-4" />{isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Distributor Form */}
              <TabsContent value="distributor">
                <Card className="border-0 shadow-pharma-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2"><Globe2 className="h-5 w-5" /><span>Distributor Application</span></CardTitle>
                    <CardDescription>Apply to become an authorized distributor in your region.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, 'distributor application')} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dist-name">Full Name *</Label>
                          <Input id="dist-name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dist-email">Email Address *</Label>
                          <Input id="dist-email" name="email" type="email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dist-company">Company Name *</Label>
                          <Input id="dist-company" name="company" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dist-country">Country/Region *</Label>
                          <Input id="dist-country" name="country" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dist-experience">Distribution Experience *</Label>
                        <Select name="experience">
                          <SelectTrigger>
                            <SelectValue placeholder="Years of experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dist-network">Distribution Network Details *</Label>
                        <Textarea id="dist-network" name="network" rows={5} required />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        <Send className="mr-2 h-4 w-4" />{isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Career Form */}
              <TabsContent value="career">
                <Card className="border-0 shadow-pharma-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2"><Users className="h-5 w-5" /><span>Career Application</span></CardTitle>
                    <CardDescription>Apply for career opportunities at PharmaCorp.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e, 'career application')} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="career-name">Full Name *</Label>
                          <Input id="career-name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="career-email">Email Address *</Label>
                          <Input id="career-email" name="email" type="email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="career-phone">Phone Number</Label>
                          <Input id="career-phone" name="phone" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="career-position">Position of Interest</Label>
                          <Input id="career-position" name="position" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="career-experience">Relevant Experience</Label>
                        <Select name="experience">
                          <SelectTrigger>
                            <SelectValue placeholder="Years of experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="career-resume">Resume/CV</Label>
                        <div className="flex items-center space-x-2">
                          <Input id="career-resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
                          <FileUp className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="career-cover">Cover Letter</Label>
                        <Textarea id="career-cover" name="coverLetter" rows={5} />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        <Send className="mr-2 h-4 w-4" />{isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
