
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons, HUBS } from '../constants';
import { triggerSMS } from '../utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Area', path: '/area' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 selection:bg-[#c5a059] selection:text-[#0a192f]">
      <nav className="bg-[#0a192f] text-white shadow-xl sticky top-0 z-50 border-b border-gray-800 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex flex-col text-left">
              <span className="font-serif font-black text-xl md:text-2xl tracking-tighter text-[#c5a059] leading-none uppercase">THE NORTH MS NOTARY</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">MOBILE LOGISTICS UNIT</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold transition uppercase tracking-widest border-b-2 pb-1 ${
                    isActive(link.path) ? 'text-[#c5a059] border-[#c5a059]' : 'text-gray-300 border-transparent hover:text-[#c5a059]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:6013000702" className="bg-[#c5a059] text-[#0a192f] px-5 py-2 rounded font-black text-sm hover:scale-105 transition shadow-lg">
                601-300-0702
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-[#0a192f] border-t border-gray-800 p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 font-bold uppercase tracking-widest text-sm ${
                  isActive(link.path) ? 'text-[#c5a059]' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
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
              Secured mobile office unit specializing in high-stakes document fabrication and legal witnessing across North MS. Technologist-owned with a zero-defect mindset.
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="text-[#c5a059] font-bold">Dispatch:</span> 601-300-0702</p>
              <p><span className="text-[#c5a059] font-bold">Email:</span> notary@northmsnotary.com</p>
              <p><span className="text-[#c5a059] font-bold">HQ:</span> Tillatoba, MS 38961</p>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Regional Hubs</h5>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {HUBS.slice(0, 10).map(hub => (
                <li key={hub.id}>
                  <Link to={`/hub?id=${hub.id}`} className="hover:text-[#c5a059] transition text-xs">Notary {hub.name}</Link>
                </li>
              ))}
              <li className="col-span-2 mt-4">
                <Link to="/area" className="text-[#c5a059] font-bold text-xs uppercase underline">Explore All 15 Hubs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Compliance & Tools</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/calculator" className="hover:text-[#c5a059] transition">Fee Calculator</Link></li>
              <li><Link to="/privacy" className="hover:text-[#c5a059] transition">Privacy Policy (GLBA)</Link></li>
              <li><Link to="/faq" className="hover:text-[#c5a059] transition">Knowledge Center</Link></li>
              <li><p className="text-[10px] leading-tight text-gray-600 mt-6 uppercase italic">High-stakes missions are subject to Professional Tier adjustment. I am not an attorney licensed to practice law.</p></li>
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
