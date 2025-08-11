import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/PortfollioPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="career" element={<CareerPage />} />
        </Route>
      </Routes>
    </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);

  return null;
};

export default App;