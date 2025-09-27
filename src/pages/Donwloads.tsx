import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileText, Tag, List, Handshake, BarChart3, Book, Download } from 'lucide-react';
import DownloadForm from "@/components/downloadForm";
import img1 from '@/assets/1.jpg'
import img2 from '@/assets/2.jpg'
import img3 from '@/assets/3.jpg'
import img4 from '@/assets/4.jpg'
import img5 from '@/assets/5.jpg'
import img6 from '@/assets/6.jpg'
const resources = [
  { id: 1, title: "Company Brochure", description: "Complete overview of our pharmaceutical products, services, and capabilities.", fileSize: "2.4 MB", lastUpdated: "Mar 2024", icon: FileText, category: "Company Information", image: img1 },
  { id: 2, title: "Quality Certificates", description: "FDA, GMP, ISO, and other regulatory certifications and compliance documents.", fileSize: "1.8 MB", lastUpdated: "Feb 2024", icon: Tag, category: "Certifications", image: img2},
  { id: 3, title: "Product Catalog", description: "Detailed specifications and information for our complete product range.", fileSize: "5.2 MB", lastUpdated: "Mar 2024", icon: List, category: "Products", image: img3 },
  { id: 4, title: "Partnership Guide", description: "Information for distributors and partners on collaboration opportunities.", fileSize: "1.5 MB", lastUpdated: "Jan 2024", icon: Handshake, category: "Partnership", image: img4 },
  { id: 5, title: "Annual Report", description: "Our latest annual report with financial performance and strategic updates.", fileSize: "3.7 MB", lastUpdated: "Dec 2023", icon: BarChart3, category: "Reports", image: img5 },
  { id: 6, title: "Safety Data Sheets", description: "Comprehensive safety information for all our pharmaceutical products.", fileSize: "4.1 MB", lastUpdated: "Feb 2024", icon: Book, category: "Safety", image: img6 }
];

export default function Downloads() {
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDownloadClick = (resource: typeof resources[0]) => {
    setSelectedResource(resource);
    setIsDialogOpen(true);
    // Optional: you can add your analytics here if needed
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Company Information": return "bg-primary/10 text-primary";
      case "Certifications": return "bg-primary/10 text-primary";
      case "Products": return "bg-accent/10 text-accent";
      case "Partnership": return "bg-primary/10 text-primary";
      case "Reports": return "bg-accent/10 text-accent";
      case "Safety": return "bg-accent/10 text-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle py-24">
        <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Resources & 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Downloads</span>
              </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                Access our comprehensive library of pharmaceutical resources,  <br></br>
                product specifications, and regulatory documentation.

                </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="group border-10 shadow-elegant hover:shadow-glow transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 p-3 bg-gradient-primary rounded-xl shadow-glow">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardHeader className="pt-4 pb-4">
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className={getCategoryColor(resource.category)}>{resource.category}</Badge>
                    <CardDescription className="mt-3 mb-4">{resource.description}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>PDF • {resource.fileSize}</span>
                      <span>Updated: {resource.lastUpdated}</span>
                    </div>
                    <Dialog open={isDialogOpen && selectedResource?.id === resource.id} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full" onClick={() => handleDownloadClick(resource)}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Download {selectedResource?.title}</DialogTitle>
                      </DialogHeader>

                      {/* Lead Capture Form */}
                      <DownloadForm resourceTitle={selectedResource?.title} />
                    </DialogContent>

                    </Dialog>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Custom Documentation?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Our team can provide customized technical documentation and product specifications tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="xl">
              Request Custom Documentation
            </Button>
            <Button variant="cta" size="xl">
              Speak with a Specialist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
