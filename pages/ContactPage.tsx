import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Icons, HUBS } from '../constants';
import { triggerSMS } from '../utils';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', city: 'Tillatoba', brief: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brief = params.get('brief');
    if (brief) {
      setFormData(prev => ({ ...prev, brief: decodeURIComponent(brief) }));
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    
    try {
      const response = await fetch('https://formspree.io/f/mqelgeag', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', city: 'Tillatoba', brief: '' });
      } else {
        const data = await response.json();
        if (data && Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form");
        }
        setStatus('ERROR');
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem submitting your form");
      setStatus('ERROR');
    }
  };

  const handleSMSDispatch = () => {
    const message = `Dispatch Request:\nName: ${formData.name}\nCity: ${formData.city}\nBrief: ${formData.brief}`;
    triggerSMS(message);
  };

  return (
    <div className="py-24 bg-white min-h-screen px-4 animate-in text-left">
      <div className="max-w-7xl mx-auto">
        {status === 'SUCCESS' ? (
          <div className="max-w-2xl mx-auto text-center py-24 bg-slate-50 rounded-[3rem] border border-slate-100 animate-in">
            <div className="w-24 h-24 bg-[#c5a059] text-[#0a192f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Icons.Check />
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#0a192f] mb-4 text-center">Dispatch Initiated</h2>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto text-center">Thanks for your submission! Our mobile unit has received your request and will follow up shortly.</p>
            <button onClick={() => setStatus('IDLE')} className="text-[#c5a059] font-bold uppercase tracking-widest text-xs border-b border-[#c5a059] pb-1">Submit Another Request</button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader title="Initiate Secured Dispatch" subtitle="All requests are processed through our encrypted GLBA-compliant infrastructure." />
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#0a192f] text-[#c5a059] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"><Icons.Phone /></div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#0a192f]">Urgent Dispatch Line</h4>
                    <p className="text-2xl font-black text-[#c5a059] mb-1">601-300-0702</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Immediate corporate response</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <h4 className="font-serif text-xl font-bold text-[#0a192f] mb-4 italic uppercase tracking-tighter">Document Review & Printing</h4>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm">
                    <strong>Instructions:</strong> For high-stakes missions requiring industrial dual-tray printing or complex legal review, please email your packets or documents to the address below prior to dispatch.
                  </p>
                  <div className="flex items-center gap-3 text-[#c5a059] font-black uppercase tracking-widest text-sm bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <Icons.FileText />
                    <a href="mailto:notary@northmsnotary.com" className="hover:underline">notary@northmsnotary.com</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Mobile Logistics Quick Action</h4>
                  <button onClick={handleSMSDispatch} className="flex items-center justify-center gap-3 bg-[#c5a059] text-[#0a192f] py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition shadow-xl w-full max-w-sm">
                    <Icons.MessageSquare /> Immediate SMS Text
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0a192f] p-12 rounded-[3rem] shadow-2xl relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none gold-accent-pattern"></div>
              <form onSubmit={handleFormSubmit} className="relative z-10 space-y-6">
                <h3 className="text-white font-serif text-2xl font-bold italic mb-6">Dispatch Request Form</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      required 
                      type="text"
                      name="name"
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059] transition" 
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      required 
                      type="email"
                      name="email"
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059] transition" 
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Service City</label>
                    <select 
                      name="city"
                      value={formData.city} 
                      onChange={(e) => setFormData({...formData, city: e.target.value})} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059] appearance-none cursor-pointer"
                    >
                      {HUBS.map(h => <option key={h.id} value={h.name} className="bg-[#0a192f]">{h.name}</option>)}
                      <option value="Other Regional" className="bg-[#0a192f]">Other Regional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Mission Brief / Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.brief} 
                      onChange={(e) => setFormData({...formData, brief: e.target.value})} 
                      rows={4} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white outline-none focus:border-[#c5a059] transition" 
                      placeholder="Describe the signing requirements, number of signers, etc."
                    ></textarea>
                  </div>
                </div>

                {status === 'ERROR' && (
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                    {errorMessage}
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'SENDING'}
                  className={`w-full bg-[#c5a059] text-[#0a192f] py-5 rounded-xl font-black uppercase tracking-widest text-lg transition shadow-2xl ${status === 'SENDING' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
                >
                  {status === 'SENDING' ? 'Processing...' : 'Request Dispatch'}
                </button>
                <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest italic">
                  Powered by Formspree Secure Infrastructure
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;