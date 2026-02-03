import React from 'react';
import SectionHeader from '../components/SectionHeader';

const FAQPage: React.FC = () => (
  <div className="py-24 bg-slate-50 min-h-screen px-4 animate-in text-left">
    <SectionHeader title="Knowledge Center" subtitle="Preparing for a zero-defect mobile notary signing." />
    <div className="max-w-4xl mx-auto space-y-6">
      {[
        { q: "What is your mobile travel radius?", a: "Fees start at $50 (Residential) or $75 (Pro) from Tillatoba HQ and increase based on mileage in any direction across our 12+ county network." },
        { q: "What identification is required?", a: "Mississippi law requires a valid, current government-issued photo ID (Driver's License, State ID, or Passport). Digital copies, photocopies, or expired IDs are not legally sufficient." },
        { q: "What is dual-tray printing?", a: "Our mobile units are equipped with commercial dual-tray laser printers that automatically separate Legal and Letter documents, ensuring your loan or estate packages are produced correctly on-site." },
        { q: "Do you notarize in jails or correctional facilities?", a: "Yes, we are specialized in correctional logistics. We frequently dispatch to Parchman (MS State Penitentiary), Carroll County Regional, and other Delta-Hill facilities." },
        { q: "What payment methods do you accept?", a: "We accept all major credit cards, cash, and corporate checks. For immediate dispatch, electronic payments via Venmo or CashApp are also available." },
        { q: "How long does a typical signing take?", a: "Residential single-document signings typically take 15-30 minutes. Complex loan or estate planning packages can take 45-60 minutes depending on the page count." },
        { q: "Can you provide witnesses?", a: "The requestor is generally responsible for providing any required witnesses. However, with 24-hour advance notice, we can often mobilize additional staff for an additional witness fee." },
        { q: "I'm not an attorney; can you tell me which form I need?", a: "No. I am not an attorney licensed to practice law in Mississippi, and I am strictly prohibited from giving legal advice or selecting specific forms for you. Please consult your legal counsel." }
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