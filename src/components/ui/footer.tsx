import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Download, FileText, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <div className="w-6 h-6 bg-primary-foreground rounded flex items-center justify-center">
                  <span className="text-primary font-bold">P</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">PharmaCorp</span>
                <p className="text-xs text-muted-foreground">Global Excellence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading pharmaceutical company delivering quality healthcare solutions across Africa, ASEAN, and the Americas with over 20 years of excellence.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>GMP Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Quality & R&D', path: '/quality' },
                { name: 'Careers', path: '/careers' },
                { name: 'Downloads', path: '/downloads' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Contract Manufacturing</li>
              <li>Bulk Drug Supply</li>
              <li>Quality Assurance</li>
              <li>Regulatory Support</li>
              <li>Distribution Partnership</li>
            </ul>
            <div className="pt-2">
              <Link
                to="/downloads"
                className="inline-flex items-center space-x-2 text-sm text-primary hover:text-pharma-green transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Company Brochure</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Pharma Boulevard</p>
                  <p>Healthcare District, HC 12345</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@pharmacorp.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 PharmaCorp. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/regulatory" className="hover:text-primary transition-colors">
                Regulatory Information
              </Link>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Regulatory Disclaimer: Products subject to local regulations
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;