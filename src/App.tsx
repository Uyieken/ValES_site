import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import WhatValesDoes from "./components/whatValesDoes";
import HowTheProcessWorks from "./components/HowTheProcessWorks";
import RefundPolicy from "./components/RefundPolicy";
import WhyUseVales from "./components/WhyUseVales";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Compliance from "./pages/Compliance";

function Home() {
  return (
    <>
      <Hero />
      <WhatValesDoes />
      <HowTheProcessWorks />
      <RefundPolicy />
      <WhyUseVales />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
