import { useEffect } from 'react';
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Pages
import Homepage from './Pages/Homepage/Homepage';
import Blogpage from './Pages/Blogpage/Blogpage';
import Privacy from './Pages/Privacypage/Privacy'
import Support from './Pages/Support/Support'
import Terms from './Pages/Terms/Terms'
import OperationalGuide from './Pages/Articles/OperationalGuide';
import WithdrawalExceptions from './Pages/Articles/WithdrawalExceptions';
import WithdrawalAuditTrail from './Pages/Articles/WithdrawalTrial';

import './App.css'

function App() {

const location = useLocation();


// Reveal animation
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  const elements = document.querySelectorAll('.reveal');

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}, [location.pathname]);


// Handle page navigation + hash
useEffect(() => {
  // Wait for the new route/page to render
  const timer = setTimeout(() => {

    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }

  }, 100);

  return () => clearTimeout(timer);

}, [location.pathname, location.hash]);


  return (
    <>

      <Header />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog/eu-14-day-withdrawal-period" element={<OperationalGuide />} />
          <Route path="/blog/withdrawal-right-exceptions" element={<WithdrawalExceptions />} />
          <Route path="/blog/withdrawal-audit-trail" element={<WithdrawalAuditTrail />} />
        </Routes>
      </HelmetProvider>
      <Footer />
    </>
  )
}

export default App
