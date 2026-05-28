import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { trackPageView } from './utils/analytics.js';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Tutorials from './pages/Tutorials.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

import SmartphoneBasics from './pages/categories/SmartphoneBasics.jsx';
import AIToolsForSeniors from './pages/categories/AIToolsForSeniors.jsx';
import OnlineSafety from './pages/categories/OnlineSafety.jsx';
import SocialMediaHelp from './pages/categories/SocialMediaHelp.jsx';
import EasyTechTutorials from './pages/categories/EasyTechTutorials.jsx';
import EverydayApps from './pages/categories/EverydayApps.jsx';

import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import Refund from './pages/legal/Refund.jsx';

export default function App() {
  const location = useLocation();
  useEffect(() => { trackPageView(location.pathname); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/category/smartphone-basics" element={<SmartphoneBasics />} />
          <Route path="/category/ai-tools-for-seniors" element={<AIToolsForSeniors />} />
          <Route path="/category/online-safety" element={<OnlineSafety />} />
          <Route path="/category/social-media-help" element={<SocialMediaHelp />} />
          <Route path="/category/easy-tech-tutorials" element={<EasyTechTutorials />} />
          <Route path="/category/everyday-apps" element={<EverydayApps />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
