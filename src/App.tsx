/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import SMESolutions from './pages/SMESolutions';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Impact from './pages/Impact';
import FAQ from './pages/FAQ';

// Minimal Page Stubs for the rest as per PRD
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 container mx-auto px-4 text-center space-y-4">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="text-muted-foreground">This page is coming soon to Malaysia's digital ecosystem.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/sme-solutions" element={<SMESolutions />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/giggers" element={<PlaceholderPage title="For Giggers" />} />
          <Route path="/partnerships" element={<PlaceholderPage title="Partnerships" />} />
          <Route path="/news" element={<PlaceholderPage title="News & Media" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          
          <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

