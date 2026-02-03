import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { SPECIALTIES, Icons } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen animate-in text-left">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Professional Notary Logistics" subtitle="From residential deeds to hospital power of attorney, our mobile units are dispatched with the tools for precision." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((service) => (
            <div key={service.id} className="p-10 bg-slate-50 border border-slate-200 rounded-[2.5rem] text-left hover:border-[#c5a059] transition-all group">
              <div className="w-16 h-16 bg-[#0a192f] text-[#c5a059] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                {service.icon === 'Calculator' ? <Icons.Calculator /> : service.icon === 'Phone' ? <Icons.Phone /> : service.icon === 'FileText' ? <Icons.FileText /> : <Icons.MapPin />}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0a192f] mb-4 uppercase tracking-tighter italic">{service.name}</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8">{service.description}</p>
              <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a059] border-b border-[#c5a059] pb-1">Request Service</Link>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#0a192f] rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 gold-accent-pattern"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-serif font-bold mb-6 italic">Ready for Dispatch?</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">Most North Mississippi markets can be reached within 60-90 minutes of dispatch from our Tillatoba HQ.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/calculator" className="bg-[#c5a059] text-[#0a192f] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">Calculate Travel Fee</Link>
                <Link to="/contact" className="bg-transparent border border-white/20 hover:border-[#c5a059] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition">Contact Dispatch</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <div className="text-[#c5a059]"><Icons.Check /></div>
                 <p className="text-xs uppercase font-bold tracking-widest">GLBA Compliant Security</p>
              </div>
              <div className="flex gap-4 items-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                 <div className="text-[#c5a059]"><Icons.Check /></div>
                 <p className="text-xs uppercase font-bold tracking-widest">NNA Certified Signing Agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;