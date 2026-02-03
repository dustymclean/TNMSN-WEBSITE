import React, { useState } from 'react';
import { Icons, HUBS } from '../constants';
import { triggerSMS } from '../utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Use simple string matching for active states in MPA
  const currentPath = window.location.pathname;
  const isActive = (path: string) => currentPath.endsWith(path) || (path === 'index.html' && (currentPath === '/' || currentPath === ''));

  const navLinks = [
    { name: 'Home', path: 'index.html' },
    { name: 'Services', path: 'services.html' },
    { name: 'Area', path: 'area.html' },
    { name: 'Calculator', path: 'calculator.html' },
    { name: 'FAQ', path: 'faq.html' },
    { name: 'Contact', path: 'contact.html' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 selection:bg-[#c5a059] selection:text-[#0a192f]">
      <nav className="bg-[#0a192f] text-white shadow-xl sticky top-0 z-50 border-b border-gray-800 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="index.html" className="flex flex-col text-left group">
              <span className="font-serif font-black text-xl md:text-2xl tracking-tighter text-[#c5a059] leading-none uppercase group-hover:text-white transition-colors">THE NORTH MS NOTARY</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">MOBILE LOGISTICS UNIT</span>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-xs font-bold transition uppercase tracking-widest border-b-2 pb-1 ${
                    isActive(link.path) ? 'text-[#c5a059] border-[#c5a059]' : 'text-gray-300 border-transparent hover:text-[#c5a059]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:6013000702" className="bg-[#c5a059] text-[#0a192f] px-5 py-2 rounded font-black text-sm hover:scale-105 transition shadow-lg">
                601-300-0702
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-300" aria-label="Toggle Navigation">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-[#0a192f] border-t border-gray-800 p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`block w-full text-left py-2 font-bold uppercase tracking-widest text-sm ${
                  isActive(link.path) ? 'text-[#c5a059]' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:6013000702" className="block w-full text-center bg-[#c5a059] text-[#0a192f] py-3 rounded font-black uppercase tracking-widest text-sm">Call Now</a>
          </div>
        )}
      </nav>

      <main className="flex-grow pb-24 lg:pb-0">{children}</main>

      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50 flex gap-4 pointer-events-none">
        <a href="tel:6013000702" className="flex-1 pointer-events-auto bg-[#0a192f] text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs border border-white/10 active:scale-95 transition">
          <Icons.Phone /> Call
        </a>
        <button onClick={() => triggerSMS("Dispatch Request: ")} className="flex-1 pointer-events-auto bg-[#c5a059] text-[#0a192f] py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs active:scale-95 transition">
          <Icons.MessageSquare /> SMS Text
        </button>
      </div>

      <footer className="bg-[#0a192f] text-gray-400 py-20 border-t-8 border-[#c5a059]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-serif text-2xl font-bold text-white mb-6 uppercase tracking-tight">The North Mississippi Notary</h4>
            <p className="max-w-md mb-8 leading-relaxed text-sm">
              Secured mobile office unit specializing in high-stakes document fabrication and legal witnessing across 12+ Counties in North MS. Technologist-owned with a zero-defect mindset.
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="text-[#c5a059] font-bold">Dispatch Center:</span> 601-300-0702</p>
              <p><span className="text-[#c5a059] font-bold">Review Email:</span> notary@northmsnotary.com</p>
              <p><span className="text-[#c5a059] font-bold">HQ Base:</span> Tillatoba, MS 38961</p>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Regional Hubs (25 Markets)</h5>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {HUBS.slice(0, 10).map(hub => (
                <li key={hub.id}>
                  <a href={`hub.html?id=${hub.id}`} className="hover:text-[#c5a059] transition text-xs">Notary {hub.name}</a>
                </li>
              ))}
              <li className="col-span-2 mt-4">
                <a href="area.html" className="text-[#c5a059] font-bold text-xs uppercase underline hover:text-white transition">Explore Full 25-Market Network</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Expertise & Compliance</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="services.html" className="hover:text-[#c5a059] transition">Loan Closings</a></li>
              <li><a href="services.html" className="hover:text-[#c5a059] transition">Hospital Notarization</a></li>
              <li><a href="calculator.html" className="hover:text-[#c5a059] transition">Dispatch Calculator</a></li>
              <li><a href="privacy.html" className="hover:text-[#c5a059] transition">GLBA Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-800 text-center text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} The North Mississippi Notary. NNA Certified | E&O Insured ($100k) | LSS Verified.
        </div>
      </footer>
    </div>
  );
};

export default Layout;