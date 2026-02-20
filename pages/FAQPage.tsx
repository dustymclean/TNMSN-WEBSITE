import React from 'react';
import SectionHeader from '../components/SectionHeader';

const FAQPage: React.FC = () => {
  const categories = [
    {
      title: "Legal Protocols",
      items: [
        { q: "What identity credentials are required?", a: "Mississippi statutes mandate valid, unexpired government-issued photo identification (License, State ID, or Passport). Digital reproductions or expired credentials are non-compliant and will result in a Mission Void status." },
        { q: "Can the Bureau offer legal guidance?", a: "Negative. Bureau personnel are strictly prohibited from offering legal advice, form selection, or explaining document intent. I am not an attorney licensed to practice law in Mississippi." },
        { q: "Are Remote I-9 Verifications supported?", a: "Affirmative. We act as Authorized Representatives for remote employers, conducting physical verification and completion of Section 2 or 3 of Form I-9 with high-stakes precision." }
      ]
    },
    {
      title: "Logistics & Mobilization",
      items: [
        { q: "What is the Bureau's mobilization radius?", a: "Minimum investments begin at $50 (Residential) or $75 (Professional Bureau) from our Tillatoba HQ. Travel fees are calculated based on precise mileage across our 12+ county network via optimized routing algorithms." },
        { q: "What is the standard engagement latency?", a: "Residential engagements typically conclude within 15-20 minutes. Complex loan or estate deployments require 45-60 minutes for precision verification and multi-signer execution." },
        { q: "Explain the Dual-Tray Fabrication capability.", a: "Our mobile units are outfitted with industrial dual-tray laser systems. This enables simultaneous on-site fabrication of Legal and Letter documents, ensuring package integrity for loan and estate deployments without resizing errors." }
      ]
    },
    {
      title: "Specialized Deployments",
      items: [
        { q: "Does the Bureau deploy to correctional facilities?", a: "Yes. We specialize in correctional logistics and maintain active protocols for Parchman (MS State Penitentiary), Carroll County Regional, and other Delta-Hill high-security facilities." },
        { q: "Does the Bureau provide witnesses?", a: "While requestors typically supply witnesses, we can mobilize additional bureau personnel for signing witnessing with 24-hour advanced notice for a professional witness fee." },
        { q: "What financial instruments are accepted?", a: "We process all major corporate credit cards via encrypted mobile terminals. Business checks and secured digital transfers (Venmo/CashApp) are supported for all professional-tier dispatch." }
      ]
    },
    {
      title: "Corporate & Title Protocols",
      items: [
        { q: "Do you offer 'Scan-Backs' on-site?", a: "Affirmative. Bureau units are equipped with high-speed document scanners. We can provide full digital PDF scan-backs of executed loan packages before departing the signing location." },
        { q: "Are you NNA Certified and Insured?", a: "The Bureau maintains NNA certification, LSS verification, and $100,000 E&O insurance coverage to protect high-value corporate and real estate transactions." },
        { q: "Can you manage multi-location signings?", a: "Yes. We coordinate complex, multi-hub logistics for institutional clients requiring simultaneous signings across different North MS districts." }
      ]
    }
  ];

  return (
    <div className="py-32 bg-[#0a192f] min-h-screen px-6 animate-reveal text-left">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Bureau Knowledge Base" 
          subtitle="Foundational protocols and logistical intelligence for zero-defect document witnessing. Organized by operational category for elite clarity." 
          light 
        />
        
        <div className="space-y-32 mt-24">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-12">
               <h2 className="text-4xl font-cinzel font-black uppercase tracking-[0.4em] text-[#d4af37] italic border-l-8 border-[#d4af37] pl-10">
                  {cat.title}
               </h2>
               <div className="grid gap-8 lg:grid-cols-2">
                  {cat.items.map((f, i) => (
                    <div key={i} className="group glass-card p-12 rounded-[3.5rem] hover:bg-[#d4af37]/5 hover:border-[#d4af37]/30 transition-all duration-700 luxury-shadow border-[#d4af37]/10">
                      <h3 className="text-2xl font-cinzel font-black text-white mb-6 italic group-hover:text-[#d4af37] transition-colors uppercase tracking-tight leading-tight">Q: {f.q}</h3>
                      <p className="text-gray-400 font-light leading-relaxed text-lg italic">A: {f.a}</p>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>

        <div className="mt-48 glass-card p-24 rounded-[4rem] border-[#d4af37]/20 text-center relative overflow-hidden luxury-shadow">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent"></div>
           <h3 className="text-3xl font-cinzel font-black uppercase tracking-widest text-white mb-8 italic">Specific Inquiries?</h3>
           <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">If your protocol requirements are not covered in this atlas, please initiate a direct dispatch inquiry for custom logistics planning.</p>
           <a href="./contact.html" className="inline-block bg-[#d4af37] text-[#0a192f] px-16 py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:scale-110 transition-transform shadow-2xl">CONTACT BUREAU</a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;