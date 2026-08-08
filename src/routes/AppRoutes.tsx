import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('../pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('../pages/Services').then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('../pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })));
const Fees = lazy(() => import('../pages/Fees').then((m) => ({ default: m.Fees })));
const Team = lazy(() => import('../pages/Team').then((m) => ({ default: m.Team })));
const TeamDetail = lazy(() => import('../pages/TeamDetail').then((m) => ({ default: m.TeamDetail })));
const Insights = lazy(() => import('../pages/Insights').then((m) => ({ default: m.Insights })));
const InsightDetail = lazy(() => import('../pages/InsightDetail').then((m) => ({ default: m.InsightDetail })));
const Contact = lazy(() => import('../pages/Contact').then((m) => ({ default: m.Contact })));
const Consultation = lazy(() => import('../pages/Consultation').then((m) => ({ default: m.Consultation })));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfUse = lazy(() => import('../pages/TermsOfUse').then((m) => ({ default: m.TermsOfUse })));
const LegalDisclaimer = lazy(() => import('../pages/LegalDisclaimer').then((m) => ({ default: m.LegalDisclaimer })));
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })));

// Scroll To Top on route transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback Loading Indicator
const RouteLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-bg dark:bg-dark-bg">
    <div className="space-y-4 text-center">
      <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto" />
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-goldDeep dark:text-dark-gold block">
        United Jurist Law Firm...
      </span>
    </div>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
