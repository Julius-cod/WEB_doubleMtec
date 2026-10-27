/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveSecurityDemo } from './components/LiveSecurityDemo';
import { ServicesGrid } from './components/ServicesGrid';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { AboutCompany } from './components/AboutCompany';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InstallationProcess } from './components/InstallationProcess';
import { ProjectGallery } from './components/ProjectGallery';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* Hero Section with Certified Technician & Value Props */}
        <Hero />

        {/* Interactive CCTV Live Monitoring Simulator */}
        <LiveSecurityDemo />

        {/* Comprehensive Services Grid with Filter */}
        <ServicesGrid />

        {/* Interactive Budget / Quote Simulator */}
        <InteractiveQuoteCalculator />

        {/* About Double M Tec (3 Years History & Team) */}
        <AboutCompany />

        {/* Why Choose Us & Certifications */}
        <WhyChooseUs />

        {/* Installation Workflow & Process */}
        <InstallationProcess />

        {/* Project Gallery & Lightbox */}
        <ProjectGallery />

        {/* Client Reviews & Social Proof */}
        <Testimonials />

        {/* Searchable Frequently Asked Questions */}
        <FaqSection />

        {/* High-Impact Final CTA */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
