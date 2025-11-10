import React, { useState,  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import capsule from '@/assets/capsule.png';
import injection from '@/assets/injection.png';
import tablet from '@/assets/tablet.png';
import softgel from '@/assets/softgel.png';
import sample2 from '@/assets/sample2.jpg';

import { 
  Search, 
  Filter,
  ArrowRight,
  FileText,
  Beaker,
  Shield,
  Truck,
  Globe2,
  Syringe,
  Tablets,
  Download,
  Heart,
  Pill,
  FlaskConical,
  Mail,
  Microscope,
  Activity,
  Zap
} from 'lucide-react';
import manufacturing from '@/assets/manufacturing.jpg';
import { table } from 'console';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // --- Catalogue states ---
  const [allMedicines, setAllMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetch('/data/Simpleproducts.json')
      .then((res) => res.json())
      .then((data) => setAllMedicines(data))
      .catch((err) => console.error('Error loading medicines:', err));
  }, []);

  const categories = [
    { value: 'all', label: 'All Products' }, 
    { value: 'ANTI-ALLERGICS/ANTI-COLD/ANTI-ASTHMATICS', label: 'Anti-Allergics/Anti-Cold/Anti-Asthmatics' },
    { value: 'ANTI-CHOLESTEREMIC', label: 'Anti-Cholesteremic' },
    { value: 'ANTI-DIABETIC', label: 'Anti-Diabetic' },
    { value: 'ANTI-DIARRHEAL', label: 'Anti-Diarrheal' },
    { value: 'ANTI-DIARRHOEALS, ANTI-SPASMODICS, ANTI-PROTOZOALS & LAXATIVES', label: 'Anti-Diarrhoeals, Anti-Spasmodics, Anti-Protozoals & Laxatives' },
    { value: 'ANTI-EMETICS/ANTI-NAUSEANTS', label: 'Anti-Emetics/Anti-Nauseants' },
    { value: 'ANTI-FUNGALS & ANTI-LEPROTICS', label: 'Anti-Fungals & Anti-Leprotics' },
    { value: 'anti-fungal', label: 'Anti-Fungal' },
    { value: 'ANTI-MALARIALS', label: 'Anti-Malarials' },
    { value: 'ANTI-PROTOZOAL', label: 'Anti-Protozoal' },
    { value: 'ANTI-VIRAL', label: 'Anti-Viral' },
    { value: 'ANTACIDS/ANTI-ULCERANTS/ANTI-GERD', label: 'Antacids/Anti-Ulcerants/Anti-GERD' },
    { value: 'BETA LACTUM ANTIBIOTICS (CEPHALOSPORIN ANTIBIOTICS)', label: 'Beta Lactum Antibiotics (Cephalosporin Antibiotics)' },
    { value: 'bulk-drugs', label: 'Bulk Drugs' },
    { value: 'CARDIOVASCULAR', label: 'Cardiovascular' },
    { value: 'contract-manufacturing', label: 'Contract Manufacturing' },
    { value: 'DIURETICS', label: 'Diuretics' },
    { value: 'ERECTILE DYSFUNCTION', label: 'Erectile Dysfunction' },
    { value: 'NON-BETA LACTUM ANTIBIOTICS / ANTIBACTERIAL', label: 'Non-Beta Lactum Antibiotics / Antibacterial' },
    { value: 'narcotics', label: 'Narcotics' },
    { value: 'pharma-supplies', label: 'Pharma Supplies' },
    { value: 'STEROIDS', label: 'Steroids' },
    { value: 'tablets', label: 'Tablets' },
    { value: 'General', label: 'General' },
    { value: 'regulatory-services', label: 'Regulatory Services' },
  ];

  const products = [
    {
      id: 1,
      name: 'MEDILAN',
      salt: 'Nimesulide',
      power: '100mg',
      type: 'Tablet',
      description: 'Nimesulide tablet for pain relief and anti-inflammatory use.',
      status: 'Available',
      icon: Tablets,
      image: tablet,
    },
    {
      id: 2,
      name: 'ENIMET 500',
      salt: 'Metformin Hydrochloride (Hypoglycemic agent)',
      power: '500mg',
      type: 'Tablet',
      description: 'Oral hypoglycemic agent for managing type 2 diabetes.',
      status: 'Available',
      icon: Tablets,
      image: tablet,
    },
    {
      id: 4,
      name: 'GERMIL M1',
      salt: 'Glimepiride + Metformin Hydrochloride (Hypoglycemic agent)',
      power: '1mg + 500mg',
      type: 'Tablet',
      description: 'Combination therapy for type 2 diabetes mellitus.',
      status: 'Available',
      icon: Tablets,
      image: tablet,
    },
    {
      id: 5,
      name: 'MEDOSPAN',
      salt: 'Betamethasone',
      power: '2mg + 5mg/ml',
      type: 'Injection Suspension',
      description: 'Corticosteroid injection used for inflammation and allergy management.',
      status: 'Available',
      icon: Syringe,
      image: injection,
    },
    {
      id: 6,
      name: 'VEKCOLIN',
      salt: 'Clindamycin + Clotrimazole + Tinidazole',
      type: 'Softgel Capsule',
      description: 'Antibacterial, antifungal, and antiprotozoal combination capsule.',
      status: 'Available',
      icon: Pill,
      image: softgel,
    },
    {
      id: 7,
      name: 'DAPALOZIN',
      salt: 'Dapagliflozin',
      power: '10mg',
      type: 'Tablet',
      description: 'SGLT2 inhibitor for type 2 diabetes management.',
      status: 'Available',
      icon: Tablets,
      image: tablet,
    },
    {
      id: 8,
      name: 'LEVO-IN',
      salt: 'Levocarnitine',
      power: '200mg/ml',
      type: 'Injection',
      description: 'Nutritional supplement supporting fat metabolism and energy.',
      status: 'Available',
      icon: Syringe,
      image: injection,
    },
    {
      id: 9,
      name: 'KALKRA D3',
      salt: 'Vitamin D3',
      power: '500mg',
      type: 'Capsule',
      description: 'Vitamin D3 supplement for bone health and calcium absorption.',
      status: 'Available',
      icon: Pill,
      image: capsule,
    },
  ];
  

  const filterFunc = (item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  };

  const filteredProducts = products.filter(filterFunc);
  const filteredAll = allMedicines.filter(filterFunc);

  const totalPages = Math.ceil(filteredAll.length / itemsPerPage);
  const paginatedAll = filteredAll.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section
          className="relative py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${sample2})`,
          }}
        >
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
               
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Pharmaceutical 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Excellence</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover our comprehensive range of high-quality pharmaceutical products, 
                  manufactured to the highest international standards with cutting-edge technology and rigorous quality control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Beaker className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Bulk Drugs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  High-purity APIs and intermediates with complete documentation and regulatory compliance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Shield className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Pharma Supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ready-to-market finished formulations including tablets, capsules, and liquids.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Activity className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Contract Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  End-to-end manufacturing services from R&D to commercial scale production.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Globe2 className="h-12 w-12 text-primary-foreground opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Regulatory Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive regulatory support including documentation and submissions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="md:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
{/* --- Products Grid --- */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="
            border-0
            shadow-lg shadow-primary/10
            hover:shadow-[0_0_35px_rgba(99,102,241,0.4)]
            transition-all duration-500
            group bg-gradient-card backdrop-blur-sm overflow-hidden
          "
        >
          <div className="relative h-48 bg-white overflow-hidden flex items-center justify-center">
            <img
              src={product.image || '/images/default.png'}
              alt={product.name}
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4">
              <Badge
                variant={product.status === 'Available' ? 'default' : 'secondary'}
                className="shadow-glass backdrop-blur-sm"
              >
                {product.status}
              </Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
              {/* {product.name} */}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <CardDescription className="leading-relaxed text-base">
              {product.description}
            </CardDescription>

            <div className="space-y-2 p-4 bg-gradient-glass rounded-lg">
              <div className="text-sm text-muted-foreground"><strong>Salt:</strong> </div>
              {product.power && <div className="text-sm text-muted-foreground"><strong>Power:</strong> {product.power}</div>}
              <div className="text-sm text-muted-foreground"><strong>Type:</strong> {product.type}</div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="default" size="sm" className="flex-1 group/btn" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  Request Quote
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>


          {/* Catalogue List (JSON Data + Pagination) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Complete Catalogue</h2>

          <div className="divide-y rounded-lg border">
            {paginatedAll.map((med) => (
              <div
                key={med.id}
                className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
              >
                <div>
                  <p className="font-medium">{med.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {categories.find((c) => c.value === med.category)?.label}
                  </p>
                </div>
                <Button asChild size="sm">
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Request
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            
            <div className="flex justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Prev
              </Button>
              {/* {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  size="sm"
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))} */}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground text-lg mb-4">
                No products found matching your criteria.
              </div>
              <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team of experts can develop customized pharmaceutical solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Discuss Requirements <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/downloads">
                <Download className="mr-2 h-5 w-5" />
                Product Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
