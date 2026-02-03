import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Icons, HUBS } from '../constants';
import { triggerSMS } from '../utils';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', city: 'Tillatoba', brief: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brief = params.get('brief');
    if (brief) {
      setFormData(prev => ({ ...prev, brief: decodeURIComponent(brief) }));
    }
  }, []);

  const handleSMSDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Dispatch Request:\nName: ${formData.name}\nCity: ${formData.city}\nBrief: ${formData.brief}`;
    triggerSMS(message);
    setSent(true);
  };

  return (
    <div className="py-24 bg-white min-h-screen px-4 animate-in text-left">
      <div className="max-w-7xl mx-auto">
        {sent ? (
          <div className="max-w-2xl mx-auto text-center py-24 bg-slate-50 rounded-[3rem] border border-slate-100 animate-in fade-in zoom-in">
            <div className="w-24 h-24 bg-[#c5a059] text-[#0a192f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Icons.Check />
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#0a192f] mb-4">Dispatch Initiated</h2>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">Your text messaging app should have opened. If not, text 601-300-0702 directly.</p>
            <button onClick={() => setSent(false)} className="text-[#c5a059] font-bold uppercase tracking-widest text-xs border-b border-[#c5a059] pb-1">Modify Request</button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader title="Initiate Secured Dispatch" subtitle="All requests are processed through our encrypted GLBA-compliant infrastructure." />
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#0a192f] text-[#c5a059] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"><Icons.Phone /></div>
                  <div><h4 className="font-serif text-xl font-bold text-[#0a192f]">Urgent Dispatch Line</h4><p className="text-2xl font-black text-[#c5a059] mb-1">601-300-0702</p><p className="text-[10px] text-gray-400 uppercase tracking-widest">Immediate corporate response</p></div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a192f] p-12 rounded-[3rem] shadow-2xl relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none gold-accent-pattern"></div>
              <form onSubmit={handleSMSDispatch} className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                    <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Service City</label>
                    <select value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059] appearance-none">
                      {HUBS.map(h => <option key={h.id} value={h.name} className="bg-[#0a192f]">{h.name}</option>)}
                      <option value="Other Regional" className="bg-[#0a192f]">Other Regional</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Mission Brief</label>
                  <textarea value={formData.brief} onChange={(e) => setFormData({...formData, brief: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059]" placeholder="e.g. Loan Signing..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#c5a059] text-[#0a192f] py-5 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-white transition shadow-2xl">Confirm Dispatch (SMS)</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;