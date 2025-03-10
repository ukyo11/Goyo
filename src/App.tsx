import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import AboutLayout from './components/about/AboutLayout';
import Greeting from './components/about/Greeting';
import Philosophy from './components/about/Philosophy';
import Overview from './components/about/Overview';
import History from './components/about/History';
import Organization from './components/about/Organization';
import Certification from './components/about/Certification';
import Clients from './components/about/Clients';
import BusinessLayout from './components/business/BusinessLayout';
import Equipment from './components/business/Equipment';
import MetalProcessing from './components/business/MetalProcessing';
import Cleaning from './components/business/Cleaning';
import Parts from './components/business/Parts';
import Purchasing from './components/business/Purchasing';
import FactoryLayout from './components/factory/FactoryLayout';
import Processing from './components/factory/Processing';
import Assembly from './components/factory/Assembly';
import CleaningFacility from './components/factory/CleaningFacility';
import ProductsLayout from './components/products/ProductsLayout';
import ProductParts from './components/products/Parts';
import Cases from './components/products/Cases';
import SupportLayout from './components/support/SupportLayout';
import FAQ from './components/support/FAQ';
import Contact from './components/support/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route path="greeting" element={<Greeting />} />
            <Route path="philosophy" element={<Philosophy />} />
            <Route path="overview" element={<Overview />} />
            <Route path="history" element={<History />} />
            <Route path="organization" element={<Organization />} />
            <Route path="certification" element={<Certification />} />
            <Route path="clients" element={<Clients />} />
          </Route>
          <Route path="/business" element={<BusinessLayout />}>
            <Route path="equipment" element={<Equipment />} />
            <Route path="metal" element={<MetalProcessing />} />
            <Route path="cleaning" element={<Cleaning />} />
            <Route path="parts" element={<Parts />} />
            <Route path="purchasing" element={<Purchasing />} />
          </Route>
          <Route path="/factory" element={<FactoryLayout />}>
            <Route path="processing" element={<Processing />} />
            <Route path="assembly" element={<Assembly />} />
            <Route path="cleaning" element={<CleaningFacility />} />
          </Route>
          <Route path="/products" element={<ProductsLayout />}>
            <Route path="parts" element={<ProductParts />} />
            <Route path="cases" element={<Cases />} />
          </Route>
          <Route path="/support" element={<SupportLayout />}>
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App; 