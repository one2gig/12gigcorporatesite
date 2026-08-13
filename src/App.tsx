/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import SMESolutions from './pages/SMESolutions';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Impact from './pages/Impact';
import FAQ from './pages/FAQ';
import { I18nProvider, useI18n } from './i18n/I18nProvider';

function NotFoundPage() {
  const { t } = useI18n();
  return (
    <div className="pt-40 pb-20 container mx-auto px-4 text-center space-y-4">
      <h1 className="text-4xl font-bold">{t.notFound.title}</h1>
      <p className="text-muted-foreground">{t.notFound.description}</p>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/sme-solutions" element={<SMESolutions />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </I18nProvider>
  );
}

