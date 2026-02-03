import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { Icons, HUBS } from '../constants';

const HomePage: React.FC = () => (
  <div className="animate-in">
    <header className="relative bg-[#0a192f] py-32 md:py-48 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #c5a059 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
        <div>
          <span className="inline-block py-1 px-4 rounded bg-[#c5a059]/20 border border-[#c5a059] text-[#c5a059] text-xs font-black tracking-[0.3em] mb-8 uppercase">
            North Mississippi | 25-Hub Dispatch Radius
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight uppercase tracking-tighter">
            THE <span className="text-[#c5a059] italic">TECHNOLOGIST</span> NOTARY
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-xl mb-12 leading-relaxed">
            Secured mobile dispatch starting at $50. Optimized for legal, clinical, and corporate logistics starting from our Tillatoba HQ center.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/contact" className="bg-[#c5a059] text-[#0a192f] px-10 py-5 rounded-lg font-black text-xl hover:scale-105 transition shadow-2xl uppercase tracking-widest text-center">Request Dispatch</Link>
            <Link to="/services" className="bg-transparent border-2 border-gray-600 px-10 py-5 rounded-lg font-bold text-xl hover:border-[#c5a059] hover:text-[#c5a059] transition uppercase tracking-widest text-center">View Rates</Link>
          </div>
        </div>
        <div className="hidden lg:block relative group">
          <div className="absolute -inset-4 bg-[#c5a059]/20 rounded-2xl blur-xl group-hover:bg-[#c5a059]/30 transition"></div>
          <div className="relative bg-slate-900 aspect-video rounded-3xl border-4 border-slate-800 shadow-2xl flex items-center justify-center p-12 text-center">
            <div>
              <p className="font-serif italic text-3xl text-white mb-4">"Zero-Defect"</p>
              <div className="h-1 w-12 bg-[#c5a059] mx-auto mb-4"></div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Six Sigma Compliance Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="12+ County Delta-Hill Regional Network" subtitle="Secured travel fees are calculated based on the radius from our Tillatoba HQ center. Covering 25 major strategic hubs in North Mississippi." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HUBS.slice(0, 4).map(hub => (
            <Link key={hub.id} to={`/hub?id=${hub.id}`} className="group p-8 bg-slate-50 border border-slate-200 rounded-3xl text-left hover:border-[#c5a059] hover:shadow-2xl transition-all">
              <div className="text-[#c5a059] mb-6 group-hover:scale-110 transition-transform"><Icons.MapPin /></div>
              <h3 className="font-serif text-xl font-bold text-[#0a192f] mb-2">Notary {hub.name}</h3>
              <p className="text-sm text-gray-500 mb-6 font-light">Hub serving {hub.zip} and surrounding territory.</p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059]">View Details &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/area" className="text-[#c5a059] font-black uppercase tracking-[0.2em] text-xs border-b-2 border-[#c5a059] pb-1 hover:text-[#0a192f] hover:border-[#0a192f] transition">Explore Full 25-Hub Network</Link>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">Bridging the Gap Between <span className="text-[#c5a059]">Legal Authority</span> & Logistics</h2>
          <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
            Standard notaries are stationary. We are built for high-stakes field environments. Our rolling office units feature dual-tray laser printing for secured closings at any kitchen table or clinical bedside.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="bg-[#c5a059] p-1 rounded-full text-[#0a192f] flex-shrink-0"><Icons.Check /></div>
              <div><h4 className="font-bold text-sm uppercase tracking-widest text-white">Industrial Printing</h4><p className="text-xs text-gray-500">Legal/Letter dual-tray on-site fabrication.</p></div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-[#c5a059] p-1 rounded-full text-[#0a192f] flex-shrink-0"><Icons.Check /></div>
              <div><h4 className="font-bold text-sm uppercase tracking-widest text-white">Tillatoba Dispatch HQ</h4><p className="text-xs text-gray-500">Geographic mileage starting from center of town center.</p></div>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-slate-900 rounded-3xl p-10 flex flex-col justify-center border-2 border-slate-800 text-center">
            <span className="text-5xl font-black text-[#c5a059] mb-4">$50</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest leading-none">Residential Dispatch Start</span>
          </div>
          <div className="aspect-square bg-[#c5a059] rounded-3xl p-10 flex flex-col justify-center mt-12 text-center shadow-2xl">
            <span className="text-5xl font-black text-[#0a192f] mb-4">$75</span>
            <span className="text-[10px] uppercase font-bold text-[#0a192f]/60 tracking-widest leading-none">Pro Dispatch Start</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;