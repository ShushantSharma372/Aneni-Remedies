import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Download, FileText, Award } from 'lucide-react';
import logo from '@/assets/logo.png';
import name from '@/assets/name.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-white shadow-md">
                  <img
                    src={logo} // replace with actual path
                    alt="Aneni Remedies Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Company Name Image */}
                <div>
                  <img
                    src={name}// replace with actual path
                    alt="Aneni Remedies"
                    className="h-10 md:h-12 object-contain"
                  />
                </div>
            </Link>
            </div>
            <p className="text-sm text-muted-foreground">
            Aneni Remedies is a fast-growing pharmaceutical company delivering high-quality healthcare solutions across Central Asia and international markets, backed by years of expertise and ethical practices.
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
                { name: 'Blogs', path: '/blogs' },
                { name: 'Contact', path: '/contact' },
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
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Aneni Remidies</p>
                  <p>SN. 209, Vikas Sudarshan Plaza,</p>
                  <p>Plot No. 4, Sector 5, Dwarka</p>
                  <p>New Delhi-110075 India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+91 9350822880</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">aneniremedies@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Aneni. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <span>
                Privacy Policy
              </span>
              <span>
                Terms & Conditions
              </span>
              <span>
                Regulatory Information
              </span>
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
