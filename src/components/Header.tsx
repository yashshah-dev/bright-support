'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/our-services' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6 flex-wrap">
              <a href="tel:1800407508" className="flex items-center gap-2 hover:text-white/90 transition-all duration-300 hover:scale-105">
                <Phone size={15} className="opacity-90" />
                <span className="font-medium">1800 407 508</span>
              </a>
              <a href="mailto:care@brightsupport.com.au" className="flex items-center gap-2 hover:text-white/90 transition-all duration-300 hover:scale-105">
                <Mail size={15} className="opacity-90" />
                <span className="font-medium">care@brightsupport.com.au</span>
              </a>
            </div>
            <div className="flex items-center gap-2 opacity-95">
              <Clock size={15} />
              <span className="font-medium">08:00am to 06:00pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
              <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text">Bright</span>Support
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:scale-105"
            >
              Send Us Referral
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-700 hover:text-indigo-600 transition-colors duration-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-slate-200 pt-6 animate-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 py-2 hover:pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Send Us Referral
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
