import React, { useState, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { HUBS, Icons } from '../constants';

const AreaPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredHubs = useMemo(() => {
    const s = search.toLowerCase();
    return HUBS.filter(h => 
      h.name.toLowerCase().includes(s) || 
      h.zip.includes(s) ||
      h.highlights.some(hl => hl.toLowerCase().includes(s))
    );
  }, [search]);

  return (
    <div className="py-32 bg-[#0a192f] min-h-screen animate-reveal text-left relative overflow-hidden">
      {/* Background scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-gradient-to-b from-[#d4af37] to-transparent h-[2px] w-full animate-[scan_8s_linear_infinite]"></div>
      
      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Regional Bureau Atlas" 
          subtitle="Strategic high-density coverage across Lafayette, Grenada, Tallahatchie, Panola, and Yalobusha counties." 
          light
        />

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="space-y-12">
            <h3 className="text-5xl font-cinzel font-black uppercase tracking-tight italic text-white">The North Notary <span className="gold-gradient">Master List</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Our regional dispatch network is categorized by county, ensuring that we hit every key community from Oxford to Glendora. We maintain active deployment status in 5 primary counties, providing specialized logistics for all surrounding municipalities.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="p-10 glass-card rounded-[2.5rem] luxury-shadow border-white/5">
                  <p className="text-5xl font-black text-[#d4af37] mb-2 font-serif tracking-tighter italic">05</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Core Counties</p>
               </div>
               <div className="p-10 glass-card rounded-[2.5rem] luxury-shadow border-white/5">
                  <p className="text-5xl font-black text-[#d4af37] mb-2 font-serif tracking-tighter italic">{HUBS.length}</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Strategic Hubs</p>
               </div>
            </div>
          </div>
          
          <div className="flex justify-center relative group">
            <div className="absolute -inset-10 bg-[#d4af37]/5 rounded-[4rem] blur-[80px] group-hover:bg-[#d4af37]/10 transition-all duration-1000"></div>
            {/* MISSISSIPPI SVG MAP - GOLD & NAVY */}
            <svg viewBox="0 0 400 600" className="w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 transition-transform duration-700 hover:scale-[1.02]">
              <path 
                className="ms-map-path" 
                d="M100,50 L300,50 L300,450 L250,550 L100,550 L80,300 Z" 
                style={{ fill: '#0d1d31', stroke: '#d4af37', strokeWidth: '1.5' }}
              />
              <g className="nodes">
                {HUBS.map((hub, i) => {
                  const cx = 120 + (Math.sin(i * 13) * 80) + 40;
                  const cy = 80 + (i * 22);
                  if (cy > 500) return null;
                  return (
                    <g key={hub.id} className="group/node" onClick={() => window.location.href = `https://contact.northmsnotary.com?hub=${encodeURIComponent(hub.name)}`}>
                      <circle 
                        className="hub-node"
                        cx={cx} 
                        cy={cy} 
                        r="4.5" 
                      />
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r="15" 
                        fill="transparent" 
                        className="cursor-pointer"
                      />
                      <text 
                        x={cx + 12} 
                        y={cy + 4} 
                        className="hidden group-hover/node:block text-[10px] font-black font-cinzel fill-white opacity-80 uppercase tracking-widest pointer-events-none"
                      >
                        {hub.name}
                      </text>
                    </g>
                  );
                })}
                <text x="140" y="70" fill="#d4af37" className="text-[12px] font-black font-cinzel opacity-40 uppercase tracking-[0.5em] select-none pointer-events-none">NORTH NOTARY OPS</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-24 relative">
          <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none text-[#d4af37] opacity-60">
            <Icons.MapPin />
          </div>
          <input 
            type="text" 
            placeholder="SEARCH ATLAS BY HUB, COUNTY, OR ZIP..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-6 pl-20 pr-8 font-black text-xs tracking-[0.2em] text-[#d4af37] outline-none focus:border-[#d4af37]/40 transition-all luxury-shadow placeholder:text-gray-700"
          />
        </div>

        {filteredHubs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredHubs.map(hub => (
              <a 
                key={hub.id} 
                href={`https://contact.northmsnotary.com?hub=${encodeURIComponent(hub.name)}`} 
                className="group glass-card p-10 rounded-[3.5rem] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/40 transition-all duration-700 luxury-shadow relative overflow-hidden flex flex-col"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[#d4af37] group-hover:scale-125 transition-transform duration-700 opacity-60"><Icons.MapPin /></div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_green]"></span>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">DISPATCH READY</span>
                  </div>
                </div>
                <h3 className="font-cinzel text-2xl font-black text-white mb-3 uppercase tracking-tighter italic group-hover:text-[#d4af37] transition-colors">
                  {hub.name}
                </h3>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-8">
                  District S-ZIP: {hub.zip}
                </p>
                
                <div className="space-y-2 mb-10 flex-grow">
                   {hub.highlights.map((h, i) => (
                      <p key={i} className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-relaxed">{h}</p>
                   ))}
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-[9px] font-black text-[#d4af37] uppercase tracking-[0.5em] group-hover:translate-x-3 transition-transform">
                    INITIATE DISPATCH &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 glass-card rounded-[4rem] border-[#d4af37]/10">
            <p className="text-gray-600 font-black uppercase tracking-[0.5em] text-xs mb-8">District Data Not Found</p>
            <button onClick={() => setSearch('')} className="text-[#d4af37] font-black border-b border-[#d4af37]/30 uppercase tracking-[0.3em] text-[10px] hover:text-white transition-colors">Reset Atlas Search</button>
          </div>
        )}

        <div className="mt-48 p-24 glass-card rounded-[5rem] text-center relative overflow-hidden luxury-shadow border-[#d4af37]/10">
          <div className="absolute inset-0 opacity-[0.03] gold-accent-pattern"></div>
          <h2 className="text-white font-cinzel text-4xl font-black italic mb-6 uppercase tracking-tight relative z-10">Regional Specialization</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 relative z-10 text-lg font-light">From the Oxford Square to the Delta flatlands of Glendora, our Mobile Bureau is optimized for North Mississippi's unique logistical challenges.</p>
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            <a href="https://contact.northmsnotary.com" className="bg-[#d4af37] text-[#0a192f] px-16 py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:scale-110 transition-transform shadow-2xl">SECURED INQUIRY</a>
            <a href="tel:6013000702" className="border-2 border-white/20 text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:border-[#d4af37] transition-all">DIRECT LINE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPage;