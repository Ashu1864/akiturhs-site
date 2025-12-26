import React from 'react';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import logo from './assets/brand/logo-akiturhs.png';


function App() {
  return (
    <div className="min-h-screen bg-[#020B1F] text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-30 bg-[#020B1F]/95 border-b border-slate-800 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="AKITURHS Tech Solutions LLP"
              className="h-8 w-auto"
            />
          </Link>

          <nav className="flex gap-4 text-sm">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/careers">Careers</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800 bg-[#020B1F]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} AKITURHS Tech Solutions LLP. All rights reserved.
          </span>
          <span>Designed &amp; developed by AKITURHS.</span>
        </div>
      </footer>
    </div>
  );
}

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'px-2 py-1 rounded transition-colors',
          isActive ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-300',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  );
}

export default App;
