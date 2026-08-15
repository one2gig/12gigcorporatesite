/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Impact from './pages/Impact';
import FAQ from './pages/FAQ';
import WhatWeDo from './pages/WhatWeDo';
import ForGiggers from './pages/ForGiggers';
import ForUsers from './pages/ForUsers';
import ForOrganisasi from './pages/ForOrganisasi';
import Partnerships from './pages/Partnerships';
import News from './pages/News';
import Beta from './pages/Beta';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookieSettings from './pages/CookieSettings';
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
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-giggers" element={<ForGiggers />} />
          <Route path="/for-users" element={<ForUsers />} />
          <Route path="/for-organisasi" element={<ForOrganisasi />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/sme-solutions" element={<Navigate to="/for-organisasi" replace />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-settings" element={<CookieSettings />} />
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

