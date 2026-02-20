import React, { useState, useEffect } from 'react';
import { Icons, HUBS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = window.location.pathname;

  const tickerMessages = [
    "LOGISTICS UNIT 01: ACTIVE • OXFORD DISTRICT",
    "LOGISTICS UNIT 02: DEPLOYED • GRENADA MEDICAL HUB",
    "ELITE DISPATCH PROTOCOL: 45m AVG LATENCY",
    "SYSTEM STATUS: ALL 25 STRATEGIC HUBS OPERATIONAL",
    "SECURED DUAL-TRAY PRINTING BUREAU ONLINE"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 6000);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: './index.html' },
    { name: 'Services', path: 'https://services.northmsnotary.com' },
    { name: 'Regional Network', path: 'https://network.northmsnotary.com' },
    { name: 'Knowledge', path: 'https://knowledge.northmsnotary.com' },
    { name: 'Dispatch Inquiry', path: 'https://contact.northmsnotary.com' },
  ];

  const isActive = (path: string) => {
    const cleanPath = path.replace('./', '').replace('https://', '').split('.')[0];
    if (path.includes('index.html')) {
        return currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '';
    }
    return currentPath.toLowerCase().includes(cleanPath.toLowerCase());
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0a192f] text-white">
      <div className="bg-[#d4af37] text-[#0a192f] py-2 overflow-hidden z-[60] relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#0a192f] rounded-full animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-cinzel">
              {tickerMessages[tickerIndex]}
            </span>
          </div>
          <span className="hidden lg:block text-[9px] font-black uppercase tracking-[0.4em] opacity-80">
            Premium Logistics Bureau • MS-NORTH DIVISION
          </span>
        </div>
      </div>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'translate-y-0' : 'translate-y-8'} px-4`}>
        <div className={`max-w-7xl mx-auto rounded-[1.5rem] border border-white/5 transition-all duration-700 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-2xl py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
          <div className="px-8 flex justify-between items-center">
            <a href="./index.html" className="flex flex-col text-left group">
              <span className="font-cinzel font-black text-xl md:text-2xl tracking-tighter text-[#d4af37] leading-none uppercase group-hover:text-white transition-all duration-500">THE NORTH MS NOTARY</span>
              <span className="text-[9px] uppercase tracking-[0.5em] text-gray-500 font-bold mt-1 group-hover:text-[#d4af37] transition-colors">MOBILE BUREAU UNIT</span>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-[10px] font-black transition-all uppercase tracking-[0.25em] relative group ${
                    isActive(link.path) ? 'text-[#d4af37]' : 'text-gray-400 hover:text-[#d4af37]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#d4af37] transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ))}
              <div className="flex items-center gap-3">
                <a href="https://faq.northmsnotary.com" className="border border-[#d4af37]/40 text-[#d4af37] px-5 py-2.5 rounded-full font-black text-[9px] tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#0a192f] transition shadow-lg">
                  FAQs
                </a>
                <a href="https://contact.northmsnotary.com" className="bg-[#d4af37] text-[#0a192f] px-6 py-3 rounded-full font-black text-[10px] tracking-widest uppercase hover:scale-105 transition shadow-xl hover:shadow-[#d4af37]/20">
                  Direct Dispatch
                </a>
              </div>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#d4af37]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 bg-[#0a192f] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl animate-reveal">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`block w-full text-left py-2 font-black uppercase tracking-[0.2em] text-xs ${
                  isActive(link.path) ? 'text-[#d4af37]' : 'text-gray-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="https://faq.northmsnotary.com" className="block w-full text-center border border-[#d4af37] text-[#d4af37] py-3 rounded-2xl font-black uppercase tracking-widest text-xs">FAQs</a>
            <a href="tel:6013000702" className="block w-full text-center bg-[#d4af37] text-[#0a192f] py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Direct Call</a>
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#0a192f] text-gray-500 py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 text-left">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-cinzel text-2xl font-black text-white mb-8 uppercase tracking-tighter">THE NORTH <span className="text-[#d4af37]">MISSISSIPPI</span> NOTARY</h4>
            <p className="max-w-md mb-10 leading-relaxed text-sm font-light">
              Mississippi's premier mobile logistics bureau. Specialized in high-stakes document witnessing, estate execution, and clinical power of attorney deployments.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://privacy.northmsnotary.com" className="px-6 py-3 rounded-xl border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[9px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-white/5 shadow-xl">
                Bureau Privacy
              </a>
              <a href="https://faq.northmsnotary.com" className="px-6 py-3 rounded-xl border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[9px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-white/5 shadow-xl">
                Bureau FAQs
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Regional Hubs</h5>
            <ul className="grid grid-cols-2 gap-y-3 text-[10px] font-bold">
              {HUBS.slice(0, 10).map(hub => (
                <li key={hub.id}>
                  <a href={`https://contact.northmsnotary.com?hub=${encodeURIComponent(hub.name)}`} className="hover:text-[#d4af37] transition uppercase tracking-widest">Notary {hub.name}</a>
                </li>
              ))}
              <li className="col-span-2 mt-6">
                <a href="https://network.northmsnotary.com" className="text-[#d4af37] font-black uppercase tracking-widest border-b border-[#d4af37]">Network Atlas</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Bureau Protocols</h5>
            <ul className="space-y-4 text-[10px] font-bold tracking-widest">
              <li><a href="https://privacy.northmsnotary.com" className="hover:text-[#d4af37] transition">GLBA COMPLIANCE</a></li>
              <li><a href="https://knowledge.northmsnotary.com" className="hover:text-[#d4af37] transition">KNOWLEDGE BASE</a></li>
              <li><a href="https://services.northmsnotary.com" className="hover:text-[#d4af37] transition">SERVICE PORTFOLIO</a></li>
              <li className="pt-8">
                <p className="text-[9px] leading-tight text-gray-700 uppercase italic">NNA Certified • E&O Insured • LSS Verified High-Capacity Units</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] font-black text-gray-600">
          <span>© {new Date().getFullYear()} The North MS Notary Bureau</span>
          <span className="mt-4 md:mt-0 italic">Technologist Owned • Zero-Defect Philosophy</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;