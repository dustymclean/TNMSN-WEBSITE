
import React from 'react';

const PrivacyPage: React.FC = () => (
  <div className="py-24 bg-white min-h-screen px-4 animate-in text-left">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-[#0a192f] mb-12 border-b-8 border-[#c5a059] pb-8 italic">Privacy & GLBA Compliance</h1>
      <div className="space-y-8 text-gray-600 font-light leading-relaxed">
        <p>We adhere to Gramm-Leach-Bliley Act standards for protecting Non-Public Personal Information. Digital documents are never stored on mobile units longer than necessary for fabrication.</p>
        <h3 className="text-xl font-serif font-bold text-[#0a192f] italic">1. Information We Collect</h3>
        <p>We only collect the minimum information required to complete a notarization request, including names of signers, contact details for dispatch, and document metadata required for notary journals.</p>
        <h3 className="text-xl font-serif font-bold text-[#0a192f] italic">2. Document Handling</h3>
        <p>Industrial printing on our mobile units is secured. Any digital files sent for fabrication are purged immediately following successful physical production and signing.</p>
        <h3 className="text-xl font-serif font-bold text-[#0a192f] italic">3. No Legal Advice</h3>
        <p>I am not an attorney licensed to practice law in the State of Mississippi, and I may not give legal advice or accept fees for legal advice.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPage;
