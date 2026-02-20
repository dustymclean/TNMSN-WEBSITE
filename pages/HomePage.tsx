import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Icons, HUBS } from '../constants';

const HomePage: React.FC = () => {
  const [readinessStep, setReadinessStep] = useState(0);
  const checklist = [
    { q: "Do you possess a current, unexpired government photo ID?", icon: <Icons.FileText /> },
    { q: "Are all relevant signers physically present at one location?", icon: <Icons.MapPin /> },
    { q: "Have all necessary document fields been finalized prior to signature?", icon: <Icons.Check /> }
  ];

  return (
    <div className="animate-reveal">
      {/* Hero: Luxury Bureau Entry */}
      <header className="relative py-48 md:py-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0d1d31] to-[#0a192f]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[120px] rounded-full -mr-96 -mt-96 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[100px] rounded-full -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-4 py-2 px-6 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-ping"></span>
              <span className="text-[#d4af37] text-[10px] font-black tracking-[0.4em] uppercase font-cinzel">Mobile Bureau Dispatch</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-cinzel font-black leading-none uppercase tracking-tighter text-white">
              ELITE <span className="gold-gradient italic">NOTARY</span> LOGISTICS
            </h1>
            
            <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
              Serving North Mississippi with surgical precision. We provide high-capacity, dual-tray on-site fabrication and witnessing for legal, corporate, and clinical sectors.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <a href="https://contact.northmsnotary.com" className="group relative bg-[#d4af37] text-[#0a192f] px-12 py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#d4af37]/40 flex items-center gap-4">
                READY TO DISPATCH
                <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </a>
              <a href="https://services.northmsnotary.com" className="px-12 py-6 rounded-full border border-white/20 font-black text-xs tracking-[0.3em] uppercase text-white hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-500">
                VIEW PROTOCOLS
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-10 bg-[#d4af37]/5 rounded-[4rem] blur-[80px] group-hover:bg-[#d4af37]/10 transition duration-1000"></div>
            <div className="relative glass-card aspect-video rounded-[3rem] p-16 flex flex-col items-center justify-center border border-[#d4af37]/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="text-center">
                <p className="font-serif italic text-4xl text-white mb-6 tracking-wide">"Zero-Defect Integrity"</p>
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">Six Sigma Logistics Quality</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Technologist Driven Module */}
      <section className="py-32 bg-[#0a192f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-10 bg-[#d4af37]/5 blur-3xl rounded-full"></div>
             <div className="glass-card p-12 rounded-[4rem] border-[#d4af37]/20 luxury-shadow relative">
                <div className="flex gap-4 mb-8">
                   <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]"><Icons.FileText /></div>
                   <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-500"><Icons.Calculator /></div>
                   <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-500"><Icons.MapPin /></div>
                </div>
                <h3 className="text-3xl font-cinzel font-black text-white uppercase italic mb-6">Technologist <span className="gold-gradient">Security</span></h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  As a technologist-owned bureau, we integrate military-grade encryption with traditional legal protocols. We are one of the few regional units equipped for full <strong>Remote Online Notarization (RON)</strong>, allowing us to execute high-stakes documents globally while maintaining physical mobilization for the North MS territory.
                </p>
                <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span> Encrypted Digital Journals</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span> Secure Biometric Verification</li>
                   <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span> Remote Online Notarization (RON) Certified</li>
                </ul>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8 text-left">
             <h2 className="text-5xl font-cinzel font-black text-white uppercase tracking-tight">MISSION <span className="italic">CRITICAL</span> SPEED</h2>
             <p className="text-gray-400 text-lg font-light leading-relaxed">
               Our background in information technology allows us to streamline the logistics of document signing. Whether it's high-volume title packages or urgent medical directives, our digital-first workflow ensures zero downtime and absolute accuracy.
             </p>
          </div>
        </div>
      </section>

      {/* Diagnostic: High-Value Interaction */}
      <section id="diagnostic" className="py-32 bg-[#0d1d31]/30 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-16 rounded-[4rem] border border-[#d4af37]/30 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <div className="h-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20 transition-all duration-1000 ease-out" style={{ width: `${((readinessStep + 1) / checklist.length) * 100}%` }}></div>
            </div>
            
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4af37] mb-12 font-cinzel">Protocol Readiness Diagnostic</h3>
            
            <div className="flex flex-col items-center space-y-12">
              <div className="w-24 h-24 bg-[#0a192f] text-[#d4af37] rounded-[2rem] flex items-center justify-center shadow-inner border border-white/5 text-4xl">
                {checklist[readinessStep].icon}
              </div>
              
              <p className="text-3xl font-serif font-bold text-white italic leading-tight max-w-xl">
                "{checklist[readinessStep].q}"
              </p>
              
              <div className="flex flex-col md:flex-row gap-6">
                {readinessStep < checklist.length - 1 ? (
                  <button 
                    onClick={() => setReadinessStep(readinessStep + 1)}
                    className="bg-[#d4af37] text-[#0a192f] px-16 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/10"
                  >
                    Affirmative
                  </button>
                ) : (
                  <div className="space-y-8 animate-reveal">
                    <p className="text-[#d4af37] font-black uppercase tracking-[0.5em] text-[10px]">MISSION-READY STATUS CONFIRMED</p>
                    <a href="https://contact.northmsnotary.com" className="inline-block bg-white text-[#0a192f] px-16 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#d4af37] transition-colors">INITIATE DISPATCH</a>
                  </div>
                )}
                {readinessStep < checklist.length - 1 && (
                  <button 
                    onClick={() => setReadinessStep(0)}
                    className="text-gray-600 font-black uppercase tracking-[0.2em] text-[9px] hover:text-[#d4af37] transition-colors"
                  >
                    Reset Check
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network: Regional Elite */}
      <section className="py-48 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Strategic Regional Coverage" 
            subtitle="Our Bureau operates across 5 key counties with high-density local hub coverage, providing specialized dispatch throughout North Mississippi." 
            light 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-24">
            {HUBS.filter(h => ['tillatoba', 'oxford', 'grenada', 'batesville'].includes(h.id)).map(hub => (
              <a key={hub.id} href={`https://contact.northmsnotary.com?hub=${hub.name}`} className="group glass-card p-10 rounded-[3rem] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/40 transition-all duration-700 luxury-shadow">
                <div className="text-[#d4af37] mb-8 group-hover:scale-125 transition-transform duration-700 opacity-60"><Icons.MapPin /></div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 uppercase tracking-tighter italic">Notary {hub.name}</h3>
                <p className="text-[10px] text-gray-500 mb-8 font-black uppercase tracking-[0.3em]">Operational Code: {hub.zip}</p>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d4af37] border-b border-[#d4af37]/20 pb-1 group-hover:border-[#d4af37] transition-all">Hub Access &rarr;</span>
              </a>
            ))}
          </div>
          <div className="text-center mt-24">
              <a href="https://network.northmsnotary.com" className="text-[#d4af37] font-black uppercase tracking-[0.5em] text-[10px] border-b-2 border-[#d4af37]/10 pb-2 hover:text-white hover:border-white transition-all">Explore the Complete Regional Atlas</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;