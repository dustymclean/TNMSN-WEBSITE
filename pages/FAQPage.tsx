
import React from 'react';
import SectionHeader from '../components/SectionHeader';

const FAQPage: React.FC = () => (
  <div className="py-24 bg-slate-50 min-h-screen px-4 animate-in text-left">
    <SectionHeader title="Knowledge Center" subtitle="Preparing for a zero-defect mobile notary signing." />
    <div className="max-w-4xl mx-auto space-y-6">
      {[
        { q: "What is your mobile travel radius?", a: "Fees start at $50 (Residential) or $75 (Pro) from Tillatoba HQ and increase based on mileage in any direction." },
        { q: "What identification is required?", a: "Mississippi law requires a valid, current government-issued photo ID (Driver's License, State ID, or Passport). Digital copies are not legally sufficient." },
        { q: "What is dual-tray printing?", a: "Our mobile units are equipped with commercial dual-tray laser printers that automatically separate Legal and Letter documents." },
        { q: "Preparation Checklist", a: "You will need: Valid ID, all document pages present, and any required witnesses ready at the time of dispatch." }
      ].map((f, i) => (
        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-[#c5a059] transition-all group">
          <h3 className="text-xl font-serif font-bold text-[#0a192f] mb-4 italic group-hover:text-[#c5a059]">Q: {f.q}</h3>
          <p className="text-gray-500 font-light leading-relaxed">A: {f.a}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQPage;
