import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import tab1 from '@/assets/tab1.jpg';
import tab2 from '@/assets/tab2.jpg';
import tab3 from '@/assets/tab3.jpg';
import syrup from '@/assets/syrup.jpg';
import suspension from '@/assets/suspension.jpeg';
import ampoule from '@/assets/ampoule.png';
import vial from '@/assets/vial.jpg';
import softgel from '@/assets/sofgel.jpg';
import capsule from '@/assets/capsule.jpg';
import cream from '@/assets/cream.jpg';
import drops from '@/assets/drops.jpg';
import sample2 from '@/assets/sample2.jpg';

import { 
  Search, 
  Filter,
  ArrowRight,
  Beaker,
  Shield,
  Truck,
  Globe2,
  Syringe,
  Tablets,
  Download,
  Pill,
  Activity,
  Mail
} from 'lucide-react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // assuming Tabs component

const productTypes = [
  "Vial / Lyophilized Vial",
  "Tablet",
  "Capsule",
  "Softgel Capsules",
  "Ampoule",
  "Syrup",
  "Suspension",
  "Cream and Ointment",
  "Drops"
];

const itemsPerPage = 10;

const Products = () => {
  const tabsRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [allMedicines, setAllMedicines] = useState([]);
  const [currentTab, setCurrentTab] = useState(productTypes[0]);
  const [tabPages, setTabPages] = useState(
    productTypes.reduce((acc, type) => ({ ...acc, [type]: 1 }), {})
  );

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
    { value: 'ANTI-EMETICS/ANTI-NAUSEANTS', label: 'Anti-Emetics/Anti-Nauseants' },
    { value: 'ANTI-FUNGALS & ANTI-LEPROTICS', label: 'Anti-Fungals & Anti-Leprotics' },
    { value: 'ANTI-MALARIALS', label: 'Anti-Malarials' },
    { value: 'ANTI-PROTOZOAL', label: 'Anti-Protozoal' },
    { value: 'ANTI-VIRAL', label: 'Anti-Viral' },
    { value: 'LYOPHILIZED RANGE', label: 'Lyophilized Vial' },
    { value: 'ANTACIDS/ANTI-ULCERANTS/ANTI-GERD', label: 'Antacids/Anti-Ulcerants/Anti-GERD' },
    { value: 'BETA LACTUM ANTIBIOTICS (CEPHALOSPORIN ANTIBIOTICS)', label: 'Beta Lactum Antibiotics' },
    { value: 'CARDIOVASCULAR', label: 'Cardiovascular' },
    { value: 'contract-manufacturing', label: 'Contract Manufacturing' },
    { value: 'DIURETICS', label: 'Diuretics' },
    { value: 'ERECTILE DYSFUNCTION', label: 'Erectile Dysfunction' },
    { value: 'NON-BETA LACTUM ANTIBIOTICS / ANTIBACTERIAL', label: 'Non-Beta Lactum Antibiotics / Antibacterial' },
    { value: 'narcotics', label: 'Narcotics' },
    { value: 'DRY POWDER', label: 'Dry Powder' },
    { value: 'LIQUID', label: 'Liquid' },
    { value: 'ANTI-ALLERGICS/ANTI-COLD/ANTI-ASTHMATICS', label: 'Anti-Allergics / Anti-Cold / Anti-Asthmatics' },
  { value: 'ANTIHISTAMINE DRUGS', label: 'Antihistamines' },
  { value: 'ANTIBIOTICS', label: 'Antibiotics' },
  { value: 'ANTI-DIABETIC', label: 'Anti-Diabetic' },
  { value: 'ANTI-MALARIALS', label: 'Anti-Malarials' },
  { value: 'ANTI-PROTOZOAL', label: 'Anti-Protozoal' },
  { value: 'ANTI-VIRAL', label: 'Anti-Viral' },
  { value: 'ANTI-FUNGALS & ANTI-LEPROTICS', label: 'Anti-Fungals & Anti-Leprotics' },
  { value: 'ANTACIDS/ANTI-ULCERANTS/ANTI-GERD', label: 'Antacids / Anti-Ulcer / GERD' },
  { value: 'CARDIOVASCULAR', label: 'Cardiovascular' },
  { value: 'DIURETICS', label: 'Diuretics' },
  { value: 'CENTRAL NERVOUS SYSTEM & SOME PSYCHIATRY PRODUCTS', label: 'CNS & Psychiatry' },
  { value: 'MUSCULO-SKELETAL/ANALGESIC PRODUCTS', label: 'Musculo-Skeletal / Analgesic' },
  { value: 'NSAIDs', label: 'NSAIDs' },
  { value: 'VITAMINS & NUTRACEUTICALS', label: 'Vitamins & Nutraceuticals' },
  { value: 'NUTRITIONAL PRODUCTS', label: 'Nutritional Products' },
  { value: 'DERMATOLOGY', label: 'Dermatology' },
  { value: 'UROLOGY PRODUCTS / ANTI-HYPERTENSIVE DRUG', label: 'Urology / Anti-Hypertensive' },
  { value: 'ERECTILE DYSFUNCTION', label: 'Erectile Dysfunction' },
  { value: 'CRITICAL CARE & ICU', label: 'Critical Care & ICU' },
  ];

  const products = [
    {
      id: 1, name: 'TABLET', salt: 'Nimesulide', power: '100mg', type: 'Tablets',
      description: 'Nimesulide tablet for pain relief and anti-inflammatory use.', status: 'Available',
      icon: Tablets, image: tab1
    },
    {
      id: 2, name: 'TABLET', salt: 'Metformin Hydrochloride', power: '500mg', type: 'Tablets',
      description: 'Oral hypoglycemic agent for managing type 2 diabetes.', status: 'Available',
      icon: Tablets, image: tab2
    },
    {
      id: 5, name: 'VIAL', salt: 'Betamethasone', power: '2mg + 5mg/ml', type: 'Vials',
      description: 'Corticosteroid injection used for inflammation and allergy management.', status: 'Available',
      icon: Syringe, image: vial
    },
    {
      id: 6, name: 'SOFTGEL CAPSULE', salt: 'Clindamycin + Clotrimazole + Tinidazole', type: 'Softgel',
      description: 'Antibacterial, antifungal, and antiprotozoal combination capsule.', status: 'Available',
      icon: Pill, image: softgel
    },
    {
      id: 8, name: 'LYOPHILIZED AMPOULE', salt: 'Levocarnitine', power: '200mg/ml', type: 'Ampoule',
      description: 'Nutritional supplement supporting fat metabolism and energy.', status: 'Available',
      icon: Syringe, image: ampoule
    },
    {
      id: 9, name: 'CAPSULE', salt: 'Vitamin D3', power: '500mg', type: 'Capsules',
      description: 'Vitamin D3 supplement for bone health and calcium absorption.', status: 'Available',
      icon: Pill, image: capsule
    },
  ];

  const filteredByTypeAndCategory = (type) => {
    return allMedicines.filter((med) => {
      const matchesType = med.type?.toLowerCase() === type.toLowerCase();
      const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
      const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesCategory && matchesSearch;
    });
  };

  const filterFunc = (item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  };

  const handlePageChange = (type, newPage) => {
    setTabPages((prev) => ({ ...prev, [type]: newPage }));
  };

  const filteredByType = (type) => {
    return allMedicines.filter((med) => med.type?.toLowerCase() === type.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${sample2})` }}
      >
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Pharmaceutical <span className="bg-gradient-hero bg-clip-text text-transparent">Excellence</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover our comprehensive range of high-quality pharmaceutical products, manufactured to the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(90deg, #fbf3f3, #FFFFFF)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-80 h-80 bg-white-200 rounded-full blur-3xl opacity-40 -top-20 left-1/4"></div>
          <div className="absolute w-80 h-80 bg-white-200 rounded-full blur-3xl opacity-40 top-24 right-1/4"></div>
          <div className="absolute w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-40 bottom-16 left-1/3"></div>
        </div>
        <div className="container mx-auto px-4" >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Beaker className="h-12 w-12 text-[#471959] opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Finished Formulations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bulk supply of diverse pharmaceutical formulations for all market requirements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Shield className="h-12 w-12 text-[#471959] opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Pharma Supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ready-to-market finished formulations including injectibles, tablets, capsules, and liquids.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 text-center bg-gradient-card backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Activity className="h-12 w-12 text-[#471959] opacity-80 group-hover:scale-110 transition-transform duration-500" />
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
              <div className="relative h-32 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glass"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Globe2 className="h-12 w-12 text-[#471959] opacity-80 group-hover:scale-110 transition-transform duration-500" />
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

      {/* Products Grid */}
      <section className="bg-background py-10">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-semibold text-foreground mb-12 text-center">
      Explore Our Product Categories
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {productTypes.map((type) => {
        // Optional: You can map type to an image
        const typeImage = {
          Tablet: tab3,
          Capsule: capsule,
          "Vial / Lyophilized Vial": vial,
          Ampoule: ampoule,
          Suspension: suspension,
          Syrup: syrup,
          "Softgel Capsules": softgel,
          "Cream and Ointment": cream,
          "Drops": drops,
        }[type];

        return (
          <Card key={type} className="border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md transition-all duration-300 rounded-xl bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={typeImage || '/images/default.png'}
                alt={type}
                className="w-full h-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-2 text-center">
              <h2 className="py-4 text-xl font-semibold tracking-[0.1rem] text-gray-900">{type}</h2>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 w-full rounded-xl text-sm border-gray-300 hover:bg-gray-100"
                onClick={() => {
                  setCurrentTab(type); // Switch the tab to the category they clicked
                  tabsRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll down
                }}
              >
                Explore
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
</section>


      {/* Search & Filter */}
      <section ref={tabsRef} className="py-10 bg-white">
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
                      <SelectItem key={category.value} value={category.value}>{category.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Catalogue Tabs */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Complete Catalogue</h2>
          <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="mb-6 flex justify-between flex-wrap gap-2 bg-transparent border-b-2 border-gray-200">
              {productTypes.map((type) => (
                <TabsTrigger
                  key={type}
                  value={type}
                  className="
                    flex-1
                    text-center
                    bg-transparent
                    border-none
                    text-gray-600
                    font-medium
                    py-2
                    px-4
                    rounded-lg
                    hover:bg-gray-100
                    hover:text-primary
                    data-[state=active]:bg-primary/10
                    data-[state=active]:text-primary
                    transition-colors
                    duration-300
                  "
                >
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>


            {productTypes.map((type) => {
              const filtered = filteredByTypeAndCategory(type);
              const totalPages = Math.ceil(filtered.length / itemsPerPage);
              const currentPage = tabPages[type];
              const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

              return (
                <TabsContent key={type} value={type}>
                  <h3 className="text-xl font-semibold mb-4">{type}</h3>
                  <div className="divide-y rounded-lg border">
                    {paginated.map((med) => (
                      <div key={med.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                        <div>
                          <p className="font-medium">{med.name}</p>
                          <p className="text-sm text-muted-foreground">{med.salt || med.description}</p>
                        </div>
                        <Button asChild size="sm">
                          <Link to="/contact"><Mail className="mr-2 h-4 w-4" /> Request</Link>
                        </Button>
                      </div>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => handlePageChange(type, currentPage - 1)}>Prev</Button>
                      <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => handlePageChange(type, currentPage + 1)}>Next</Button>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
      <div style={{ height: "2rem" }}></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team of experts can develop customized pharmaceutical solutions tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Discuss Requirements <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/blogs"><Download className="mr-2 h-5 w-5" /> Read Blogs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
