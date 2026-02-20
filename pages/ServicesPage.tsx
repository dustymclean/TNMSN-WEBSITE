import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SPECIALTIES, Icons } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-32 bg-[#0a192f] min-h-screen animate-reveal text-left">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Elite Service Portfolio" 
          subtitle="Precision document witnessing and logistics. From executive loan closings to urgent clinical power of attorney, we dispatch with a zero-defect mandate." 
          light
        />
        
        {/* Main Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
          {SPECIALTIES.map((service) => (
            <div key={service.id} className="group glass-card p-12 rounded-[3.5rem] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/40 transition-all duration-700 luxury-shadow flex flex-col items-start">
              <div className="w-20 h-20 bg-[#d4af37] text-[#0a192f] rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-xl shadow-[#d4af37]/20">
                {service.icon === 'Calculator' ? <Icons.Calculator /> : service.icon === 'Phone' ? <Icons.Phone /> : service.icon === 'FileText' ? <Icons.FileText /> : <Icons.MapPin />}
              </div>
              <h3 className="font-cinzel text-2xl font-black text-white mb-6 uppercase tracking-tighter italic group-hover:text-[#d4af37] transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-sm">
                {service.description}
              </p>
              <ul className="space-y-3 mb-12 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> On-Site Execution</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> High-Capacity Printing</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Secured Scan-Backs</li>
              </ul>
              <a href={`./contact.html?service=${service.name}`} className="mt-auto text-[10px] font-black uppercase tracking-[0.4em] text-[#d4af37] border-b border-[#d4af37]/20 pb-2 group-hover:border-[#d4af37] transition-all">
                REQUEST DISPATCH &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Technical Capabilities Section */}
        <section className="mt-48 relative">
           <div className="absolute top-0 right-0 w-1/2 h-full gold-accent-pattern opacity-5 pointer-events-none"></div>
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="inline-block py-1 px-4 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] font-black tracking-[0.4em] uppercase font-cinzel">
                    Hardware Specifications
                 </div>
                 <h2 className="text-5xl md:text-6xl font-cinzel font-black uppercase tracking-tight text-white italic">Mobile Production <span className="gold-gradient">Capability</span></h2>
                 <p className="text-gray-400 text-lg font-light leading-relaxed">
                   Standard mobile notaries are often limited by consumer-grade equipment. Our Bureau Units are designed as portable, high-stakes office environments. We carry industrial-grade logistics gear to ensure zero-defect deployments.
                 </p>
                 <div className="grid gap-10">
                    <div className="flex gap-8 items-start">
                       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#d4af37] flex-shrink-0 border border-white/5 shadow-xl"><Icons.Calculator /></div>
                       <div>
                          <h4 className="font-cinzel text-lg font-black tracking-widest text-white mb-2 uppercase italic">Industrial Dual-Tray Fabrication</h4>
                          <p className="text-sm text-gray-500 font-light">Equipped with high-volume laser production units capable of printing Legal and Letter documents simultaneously, preserving document formatting and page count integrity.</p>
                       </div>
                    </div>
                    <div className="flex gap-8 items-start">
                       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#d4af37] flex-shrink-0 border border-white/5 shadow-xl"><Icons.FileText /></div>
                       <div>
                          <h4 className="font-cinzel text-lg font-black tracking-widest text-white mb-2 uppercase italic">Encrypted Satellite Comms</h4>
                          <p className="text-sm text-gray-500 font-light">Secure, dedicated hotspots provide encrypted connectivity for immediate scan-backs and real-time document verification via HIPAA/GLBA compliant channels.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-10 bg-[#d4af37]/10 rounded-[4rem] blur-[100px] group-hover:bg-[#d4af37]/20 transition-all duration-1000"></div>
                 <div className="glass-card aspect-square rounded-[4rem] p-16 flex flex-col items-center justify-center relative overflow-hidden group luxury-shadow">
                    <div className="text-center relative z-10">
                       <span className="text-9xl font-black gold-gradient font-cinzel mb-8 block group-hover:scale-110 transition-transform tracking-tighter">BUREAU</span>
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">Tillatoba Central Logistics HQ</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Deployment Tiers */}
        <section className="mt-48">
          <SectionHeader 
            title="Deployment Protocols" 
            subtitle="Categorized mobilization tiers to meet the specific requirements of residential signers or corporate legal departments." 
            light
          />
          <div className="grid md:grid-cols-2 gap-12 mt-20">
             <div className="glass-card p-16 rounded-[4rem] border-white/5 hover:border-[#d4af37]/20 transition-all duration-700">
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.5em] mb-4 block">Standard Protocol</span>
                <h3 className="font-cinzel text-3xl font-black text-white mb-4 italic uppercase">Residential</h3>
                <p className="text-[#d4af37] text-4xl font-serif font-black italic mb-10">$50 <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest">Starting</span></p>
                <ul className="space-y-4 mb-12">
                   <li className="flex items-center gap-3 text-sm text-gray-400 font-light"><Icons.Check /> Single Document Signing</li>
                   <li className="flex items-center gap-3 text-sm text-gray-400 font-light"><Icons.Check /> Basic Witnessing Service</li>
                   <li className="flex items-center gap-3 text-sm text-gray-400 font-light"><Icons.Check /> 4-Hour Dispatch Priority</li>
                </ul>
                <a href="./contact.html" className="inline-block w-full text-center border border-white/10 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all">SELECT PROTOCOL</a>
             </div>
             <div className="p-16 rounded-[4rem] bg-[#d4af37] text-[#0a192f] shadow-2xl shadow-[#d4af37]/20 relative overflow-hidden">
                <div className="absolute top-10 right-12 bg-[#0a192f] text-[#d4af37] px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.4em]">Priority SLA</div>
                <span className="text-[9px] font-black text-[#0a192f]/60 uppercase tracking-[0.5em] mb-4 block">Elite Protocol</span>
                <h3 className="font-cinzel text-3xl font-black mb-4 italic uppercase">Professional</h3>
                <p className="text-[#0a192f] text-4xl font-serif font-black italic mb-10">$75 <span className="text-[10px] uppercase font-bold opacity-60 tracking-widest">Starting</span></p>
                <ul className="space-y-4 mb-12">
                   <li className="flex items-center gap-3 text-sm font-bold"><Icons.Check /> High-Volume Package Execution</li>
                   <li className="flex items-center gap-3 text-sm font-bold"><Icons.Check /> Hospital / Correctional Access</li>
                   <li className="flex items-center gap-3 text-sm font-bold"><Icons.Check /> Dual-Tray Industrial Laser Print</li>
                   <li className="flex items-center gap-3 text-sm font-bold"><Icons.Check /> 60m Priority Dispatch Latency</li>
                </ul>
                <a href="./contact.html" className="inline-block w-full text-center bg-[#0a192f] text-white py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:scale-105 transition-transform">MOBILIZE UNIT</a>
             </div>
          </div>
        </section>

        {/* CTA Footer */}
        <div className="mt-48 glass-card rounded-[5rem] p-24 text-white relative overflow-hidden luxury-shadow border-[#d4af37]/10">
          <div className="absolute inset-0 opacity-[0.03] gold-accent-pattern"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-left">
              <h2 className="text-5xl font-cinzel font-black mb-8 italic uppercase tracking-tighter">Ready for Bureau Dispatch?</h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                Our elite mobile units are positioned for maximum efficiency across North Mississippi. Average mobilization latency remains below 60 minutes.
              </p>
              <div className="flex flex-wrap gap-8">
                <a href="./contact.html" className="bg-[#d4af37] text-[#0a192f] px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:scale-110 transition-transform">INITIATE INQUIRY</a>
                <a href="tel:6013000702" className="bg-transparent border border-white/20 hover:border-[#d4af37] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] transition-all">DIRECT LINE</a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-6 items-center p-8 bg-white/5 rounded-3xl border border-white/10 group hover:border-[#d4af37]/30 transition-all">
                 <div className="text-[#d4af37] w-10 h-10 rounded bg-[#d4af37]/10 flex items-center justify-center"><Icons.Check /></div>
                 <div>
                   <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white">GLBA/HIPAA Compliance Bureau</p>
                   <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Maximum data integrity standards</p>
                 </div>
              </div>
              <div className="flex gap-6 items-center p-8 bg-white/5 rounded-3xl border border-white/10 group hover:border-[#d4af37]/30 transition-all">
                 <div className="text-[#d4af37] w-10 h-10 rounded bg-[#d4af37]/10 flex items-center justify-center"><Icons.Check /></div>
                 <div>
                   <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white">NNA Elite Certified Personnel</p>
                   <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">High-capacity signing expertise</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;