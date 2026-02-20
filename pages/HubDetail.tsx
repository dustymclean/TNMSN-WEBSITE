
import React from 'react';
import { HUBS, Icons } from '../constants';

const HubDetail: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const hubId = searchParams.get('id');
  const hub = HUBS.find(h => h.id === hubId);

  if (!hub) return (
    <div className="py-48 text-center text-white bg-[#0a192f] min-h-screen flex flex-col items-center justify-center">
      <p className="font-black uppercase tracking-[0.5em] mb-12 text-gray-600">DISTRICT HUB NOT FOUND</p>
      <a href="./area.html" className="text-[#d4af37] font-black border-b-2 border-[#d4af37]/20 uppercase tracking-[0.4em] text-[10px] pb-2 hover:border-[#d4af37] transition-all">Return to Atlas</a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a192f] animate-reveal text-left">
      <div className="pt-48 pb-32 text-center px-6 relative overflow-hidden bg-[#0d1d31]">
        <div className="absolute inset-0 opacity-[0.03] gold-accent-pattern"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center gap-4 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group"
          >
            <span className="group-hover:-translate-x-3 transition-transform">&larr;</span> Back to Network Atlas
          </button>
          <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block opacity-60">DISTRICT BUREAU HUB</span>
          <h1 className="text-6xl md:text-8xl font-cinzel font-black mb-8 italic text-white uppercase tracking-tighter">Notary {hub.name}, MS</h1>
          <p className="text-gray-400 text-2xl font-light leading-relaxed max-w-2xl mx-auto italic">Strategic mobile dispatch unit serving the {hub.zip} corridor from our central logistics bureau.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-48 grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-12">
          <h2 className="text-5xl font-cinzel font-black text-white mb-10 italic uppercase tracking-tight">Market Expertise</h2>
          <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light italic">The {hub.name} deployment unit is optimized for precision environments, including clinical medicine, commercial real estate, and high-stakes legal fabrication.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hub.highlights.map(item => (
              <div key={item} className="flex items-center gap-6 p-8 glass-card border-white/5 rounded-3xl hover:border-[#d4af37]/30 transition-all">
                <div className="w-2.5 h-2.5 bg-[#d4af37] rounded-full animate-pulse shadow-[0_0_10px_#d4af37]"></div>
                <span className="font-black text-[10px] uppercase tracking-[0.3em] text-white italic">{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-16 flex flex-wrap gap-8">
            <a href="./contact.html" className="bg-[#d4af37] text-[#0a192f] px-16 py-6 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:scale-110 transition-transform shadow-2xl shadow-[#d4af37]/20">INITIATE DEPLOYMENT</a>
            <a href="tel:6013000702" className="border-2 border-white/5 text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:border-[#d4af37] transition-all">DIRECT DISPATCH</a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-12 bg-[#d4af37]/5 rounded-[5rem] blur-[100px] group-hover:bg-[#d4af37]/10 transition duration-1000"></div>
          <div className="bg-slate-900 aspect-square rounded-[4rem] border-8 border-slate-800 shadow-[0_50px_150px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-24 text-center relative overflow-hidden luxury-shadow border-[#d4af37]/10">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none gold-accent-pattern"></div>
            <span className="text-[#d4af37] text-[200px] font-cinzel font-black mb-4 italic opacity-[0.05] leading-none select-none">{hub.name.charAt(0)}</span>
            <div className="relative z-10">
              <h4 className="text-white font-cinzel text-4xl font-black italic mb-4 uppercase tracking-tight">{hub.name} DISTRICT</h4>
              <div className="h-[2px] w-16 bg-[#d4af37] mx-auto mb-6"></div>
              <p className="text-gray-600 font-black uppercase tracking-[0.6em] text-[11px]">BUREAU OPS CODE: {hub.zip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubDetail;
