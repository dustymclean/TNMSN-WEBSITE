import React, { useEffect } from 'react';
import { HUBS, Icons } from '../constants';

const HubDetail: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const hubId = searchParams.get('id');
  const hub = HUBS.find(h => h.id === hubId);

  useEffect(() => {
    if (hub) {
      document.title = `Notary ${hub.name}, MS | Mobile Logistics Hub`;
    }
  }, [hub]);

  if (!hub) return (
    <div className="py-48 text-center text-[#0a192f]">
      <h2 className="font-black uppercase tracking-widest mb-4">Market Hub Not Found</h2>
      <a href="area.html" className="text-[#c5a059] font-bold underline">Return to Area Map</a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white animate-in text-left">
      <div className="bg-[#0a192f] text-white pt-32 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <a 
            href="area.html" 
            className="inline-flex items-center gap-2 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 hover:text-white transition group bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Full Network
          </a>
          <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Regional Strategic Hub</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Notary {hub.name}, MS</h1>
          <p className="text-gray-400 text-xl font-light leading-relaxed">Secured dispatch serving the {hub.zip} corridor from our central Tillatoba HQ.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#0a192f] mb-8 italic">Field Environment Expertise</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
            Our {hub.name} unit is technically prepared for high-pressure corporate and clinical signing environments, including courthouses, industrial plants, and hospital wards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hub.highlights.map(item => (
              <div key={item} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-[#c5a059] transition-colors">
                <div className="w-2 h-2 bg-[#c5a059] rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="font-bold text-xs uppercase tracking-widest text-[#0a192f]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={`contact.html?brief=Dispatch%20Request%20for%20${hub.name}`} className="bg-[#0a192f] text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#c5a059] hover:text-[#0a192f] transition shadow-lg text-center">Initiate {hub.name} Dispatch</a>
            <a href="calculator.html" className="border-2 border-slate-200 text-[#0a192f] px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:border-[#0a192f] transition text-center">Calculate Mileage</a>
          </div>
        </div>
        <div className="bg-slate-900 aspect-square rounded-[3rem] border-8 border-slate-800 shadow-2xl flex flex-col items-center justify-center p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 pointer-events-none gold-accent-pattern"></div>
          <span className="text-[#c5a059] text-9xl font-serif font-black mb-8 italic opacity-20 group-hover:opacity-40 transition-opacity">{hub.name.charAt(0)}</span>
          <h4 className="text-white font-serif text-3xl font-bold italic mb-2 tracking-tighter">{hub.name} Corridor</h4>
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-xs">HQ Dispatch Territory 38961</p>
        </div>
      </div>
    </div>
  );
};

export default HubDetail;