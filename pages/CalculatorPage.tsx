import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { Icons } from '../constants';
import { copyToClipboard, triggerSMS } from '../utils';

const CalculatorPage: React.FC = () => {
  const navigate = useNavigate();
  const [stamps, setStamps] = useState(1);
  const [pages, setPages] = useState(0);
  const [distance, setDistance] = useState(10);
  const [afterHours, setAfterHours] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [isProTier, setIsProTier] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  const pricing = useMemo(() => {
    let travelFee;
    if (isProTier) {
      if (distance <= 15) travelFee = 75;
      else if (distance > 15 && distance <= 30) travelFee = 100;
      else if (distance > 30 && distance <= 50) travelFee = 150;
      else if (distance > 50 && distance <= 75) travelFee = 200;
      else travelFee = 275;
    } else {
      if (distance <= 15) travelFee = 50;
      else if (distance > 15 && distance <= 30) travelFee = 75;
      else if (distance > 30 && distance <= 50) travelFee = 125;
      else if (distance > 50 && distance <= 75) travelFee = 175;
      else travelFee = 225;
    }

    const stampFees = stamps * 5;
    const printRate = isProTier ? 0.50 : 0.25;
    const printFees = pages * printRate;
    const premiumFees = (afterHours ? 25 : 0) + (holiday ? 50 : 0);

    return {
      base: travelFee,
      stamps: stampFees,
      printing: printFees,
      premiums: premiumFees,
      total: travelFee + stampFees + printFees + premiumFees
    };
  }, [stamps, pages, distance, afterHours, holiday, isProTier]);

  const quoteText = `North MS Notary Estimate\n------------------\nTier: ${isProTier ? 'Specialized Pro' : 'Standard Residential'}\nRadius: ${distance} miles\nStamps: ${stamps}\nPrinting: ${pages} pages\nAfter Hours: ${afterHours ? 'Yes' : 'No'}\nHoliday: ${holiday ? 'Yes' : 'No'}\n------------------\nTotal Est: $${pricing.total.toFixed(2)}`;

  const handleCopy = () => {
    copyToClipboard(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLockIn = () => {
    const brief = encodeURIComponent(`Quote: $${pricing.total.toFixed(2)} (${isProTier ? 'Pro' : 'Standard'}, ${distance}mi radius, ${stamps} stamps)`);
    navigate(`/contact?brief=${brief}`);
  };

  return (
    <div className="py-24 bg-slate-50 min-h-screen animate-in relative text-left">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          <SectionHeader title="Dynamic Fee Calculator" subtitle="Estimate your mobile logistics investment. Toggle between Residential or high-stakes Professional dispatch." />
          <button onClick={() => setShowInstructions(!showInstructions)} className="absolute top-0 right-4 flex items-center gap-2 text-[#c5a059] font-bold uppercase tracking-widest text-[10px] hover:text-[#0a192f] transition">
            <Icons.Info /> Instructions
          </button>
        </div>
        
        {showInstructions && (
          <div className="mb-12 bg-white p-10 rounded-[2rem] border-2 border-[#c5a059] shadow-xl animate-in text-left">
            <h3 className="font-serif text-2xl font-bold text-[#0a192f] mb-4 italic text-center">Calculator Guide</h3>
            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#0a192f] uppercase tracking-widest text-xs mb-2">1. Choose Your Tier</h4>
                <p>Standard: Best for residential. Pro: For Loan closings, Clinical, or Corporate.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0a192f] uppercase tracking-widest text-xs mb-2">2. Set Your Radius</h4>
                <p>Estimate mileage from Tillatoba center to your signing location.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0a192f] uppercase tracking-widest text-xs mb-2">3. Add Requirements</h4>
                <p>Select premiums for off-hours or industrial on-site printing.</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2">
            <button onClick={() => setIsProTier(false)} className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition ${!isProTier ? 'bg-[#0a192f] text-white' : 'text-gray-400 hover:text-[#0a192f]'}`}>Standard</button>
            <button onClick={() => setIsProTier(true)} className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition ${isProTier ? 'bg-[#c5a059] text-[#0a192f]' : 'text-gray-400 hover:text-[#c5a059]'}`}>Specialized/Pro</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8 bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200 text-left">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Radius from HQ: {distance} mi</label>
                <input type="range" min="0" max="100" step="5" value={distance} onChange={(e) => setDistance(parseInt(e.target.value))} className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#c5a059] bg-slate-100`} />
                <div className="flex justify-between text-[8px] text-gray-400 font-bold mt-2 uppercase tracking-widest">
                  <span>Tillatoba</span><span>50mi</span><span>100mi+</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Stamps Needed ($5 ea.)</label>
                <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2 border border-slate-200">
                  <button onClick={() => setStamps(Math.max(1, stamps - 1))} className={`w-10 h-10 flex items-center justify-center font-bold rounded-lg transition hover:bg-white`}>-</button>
                  <span className="flex-grow text-center font-black text-[#0a192f]">{stamps}</span>
                  <button onClick={() => setStamps(stamps + 1)} className={`w-10 h-10 flex items-center justify-center font-bold rounded-lg transition hover:bg-white`}>+</button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
               <div>
                 <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">On-site Printing (${isProTier ? '0.50' : '0.25'}/pg)</label>
                 <input type="number" value={pages} onChange={(e) => setPages(parseInt(e.target.value) || 0)} placeholder="Est. Page Count" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 font-bold text-[#0a192f] outline-none focus:border-[#c5a059] transition" />
               </div>
               <div className="space-y-4">
                 <label className="flex items-center gap-3 group cursor-pointer">
                   <input type="checkbox" checked={afterHours} onChange={() => setAfterHours(!afterHours)} className="w-5 h-5 accent-[#c5a059]" />
                   <span className="text-xs font-bold text-gray-600 group-hover:text-[#0a192f] transition uppercase tracking-widest">After Hours (6PM-8AM) +$25</span>
                 </label>
                 <label className="flex items-center gap-3 group cursor-pointer">
                   <input type="checkbox" checked={holiday} onChange={() => setHoliday(!holiday)} className="w-5 h-5 accent-[#c5a059]" />
                   <span className="text-xs font-bold text-gray-600 group-hover:text-[#0a192f] transition uppercase tracking-widest">Holiday Emergency +$50</span>
                 </label>
               </div>
            </div>
          </div>

          <div className="bg-[#0a192f] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col h-full text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 -mr-16 -mt-16 rounded-full"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif font-bold text-[#c5a059] italic uppercase tracking-tighter">Estimate Total</h3>
              <button onClick={handleCopy} className="p-2 hover:bg-white/10 rounded-lg transition text-gray-400 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest">
                {copied ? 'Copied!' : <><Icons.Copy /> Copy</>}
              </button>
            </div>
            
            <div className="space-y-4 text-sm font-light mb-12">
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Radius Travel:</span><span className="font-bold">${pricing.base.toFixed(2)}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Notary Acts:</span><span className="font-bold">${pricing.stamps.toFixed(2)}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Secured Printing:</span><span className="font-bold">${pricing.printing.toFixed(2)}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-2"><span>Service Premiums:</span><span className="font-bold text-[#c5a059]">+${pricing.premiums.toFixed(2)}</span></div>
            </div>

            <div className="mt-auto space-y-4">
              <div className="flex justify-between items-end">
                <span className="font-serif italic text-lg">Total</span>
                <span className="text-5xl font-black text-[#c5a059] tracking-tighter">${pricing.total.toFixed(2)}</span>
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <button onClick={handleLockIn} className="w-full bg-[#c5a059] text-[#0a192f] py-5 rounded-xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition">Lock in Rate</button>
                <button onClick={() => triggerSMS(quoteText)} className="w-full bg-transparent border-2 border-white/20 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:border-[#c5a059] hover:text-[#c5a059] transition text-sm">Confirm Dispatch (SMS)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;