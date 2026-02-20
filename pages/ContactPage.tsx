import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Icons, HUBS } from '../constants';
import { triggerSMS } from '../utils';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', city: 'Tillatoba (HQ)', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hub = params.get('hub');
    const brief = params.get('brief');
    const service = params.get('service');
    if (hub) {
      setFormData(prev => ({ ...prev, city: decodeURIComponent(hub), message: `Protocol inquiry for ${decodeURIComponent(hub)} District Hub.` }));
    } else if (brief) {
       setFormData(prev => ({ ...prev, message: decodeURIComponent(brief) }));
    } else if (service) {
       setFormData(prev => ({ ...prev, message: `Requesting elite dispatch for: ${decodeURIComponent(service)}` }));
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    
    // Formspree Integration using fetch
    try {
      const response = await fetch('https://formspree.io/f/mqelgeag', {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', city: 'Tillatoba (HQ)', message: '' });
      } else {
        setStatus('ERROR');
        setErrorMessage("MISSION INTERRUPTED: ENCRYPTION HANDSHAKE FAILURE");
      }
    } catch (error) {
      setStatus('ERROR');
      setErrorMessage("MISSION INTERRUPTED: CARRIER SIGNAL DISCONNECT");
    }
  };

  const handleSMSDispatch = () => {
    const msg = `Dispatch Request:\nName: ${formData.name}\nDistrict: ${formData.city}\nBrief: ${formData.message}`;
    triggerSMS(msg);
  };

  return (
    <div className="py-48 bg-[#0a192f] min-h-screen px-6 animate-reveal text-left relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#d4af37]/5 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {status === 'SUCCESS' ? (
          <div className="max-w-3xl mx-auto text-center py-48 glass-card rounded-[5rem] border-[#d4af37]/30 luxury-shadow animate-reveal">
            <div className="w-32 h-32 bg-[#d4af37] text-[#0a192f] rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-[#d4af37]/20 text-4xl">
              <Icons.Check />
            </div>
            <h2 className="text-6xl font-cinzel font-black text-white mb-6 uppercase tracking-tight">Transmission Received</h2>
            <p className="text-gray-400 mb-12 max-w-sm mx-auto text-xl font-light leading-relaxed italic">Our Mobile Bureau has received your brief. A logistics officer will follow up via secure channel shortly.</p>
            <button onClick={() => setStatus('IDLE')} className="text-[#d4af37] font-black uppercase tracking-[0.5em] text-[10px] border-b-2 border-[#d4af37]/20 pb-2 hover:border-[#d4af37] transition-all">New Deployment Inquiry</button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div className="space-y-24">
              <SectionHeader title="Dispatch Inquiry" subtitle="Initiate secured communication with our Mobile Logistics Bureau. All transmissions are subject to GLBA-compliant protocols." light />
              
              <div className="space-y-20">
                <div className="flex gap-10 items-start group">
                  <div className="w-24 h-24 bg-white/5 text-[#d4af37] rounded-[2.5rem] flex items-center justify-center flex-shrink-0 shadow-2xl border border-white/5 group-hover:scale-110 transition-transform duration-700"><Icons.Phone /></div>
                  <div>
                    <h4 className="font-cinzel text-2xl font-black text-white uppercase tracking-tight mb-3 italic">Direct Dispatch Line</h4>
                    <p className="text-5xl font-black text-[#d4af37] tracking-tighter mb-3 font-serif italic">601-300-0702</p>
                    <p className="text-[10px] text-gray-700 uppercase tracking-[0.6em] font-black">24/7 Corporate Mobilization Protocols</p>
                  </div>
                </div>

                <div className="glass-card p-12 rounded-[4rem] border-[#d4af37]/10 luxury-shadow hover:bg-white/[0.02] transition-colors">
                  <h4 className="font-cinzel text-2xl font-black text-white mb-6 italic uppercase tracking-tight">Secure Packet Forwarding</h4>
                  <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm italic">
                    For high-stakes missions requiring industrial on-site printing, dual-tray fabrication, or multi-document review, please forward your encrypted packets to:
                  </p>
                  <div className="flex items-center gap-6 text-[#d4af37] font-black uppercase tracking-[0.4em] text-[11px] bg-white/5 p-8 rounded-[2.5rem] shadow-inner border border-white/5 group hover:border-[#d4af37]/40 transition-all">
                    <Icons.FileText />
                    <a href="mailto:notary@northmsnotary.com" className="hover:text-white transition-colors">notary@northmsnotary.com</a>
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="text-[11px] font-black text-gray-700 uppercase tracking-[0.6em] italic">Rapid Engagement Protocol</h4>
                  <button onClick={handleSMSDispatch} className="flex items-center justify-center gap-6 bg-[#d4af37] text-[#0a192f] py-7 px-16 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all shadow-[0_25px_60px_rgba(212,175,55,0.2)]">
                    <Icons.MessageSquare /> SECURED SMS DISPATCH
                  </button>
                </div>
              </div>
            </div>

            {/* Beautiful Glass Form */}
            <div className="glass-card p-16 rounded-[5rem] shadow-[0_100px_200px_rgba(0,0,0,0.7)] relative border-[#d4af37]/20 border-t-[12px] luxury-shadow">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none gold-accent-pattern"></div>
              <form 
                action="https://formspree.io/f/mqelgeag"
                method="POST"
                onSubmit={handleFormSubmit} 
                className="relative z-10 space-y-12"
              >
                <div className="flex justify-between items-end mb-12">
                   <h3 className="text-white font-cinzel text-4xl font-black italic uppercase tracking-tight">Deployment Brief</h3>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                   </div>
                </div>
                
                <div className="space-y-10">
                  <div className="group/field">
                    <label className="block text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-4 group-focus-within/field:text-[#d4af37] transition-colors">IDENTITY / FULL NAME</label>
                    <input 
                      required 
                      type="text"
                      name="name"
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white outline-none focus:border-[#d4af37]/60 transition-all font-bold text-sm shadow-inner group-hover/field:border-white/20" 
                      placeholder="FULL LEGAL NAME"
                    />
                  </div>
                  
                  <div className="group/field">
                    <label className="block text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-4 group-focus-within/field:text-[#d4af37] transition-colors">SECURED EMAIL</label>
                    <input 
                      required 
                      type="email"
                      name="email"
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white outline-none focus:border-[#d4af37]/60 transition-all font-bold text-sm shadow-inner group-hover/field:border-white/20" 
                      placeholder="MISSION@SECURE.COM"
                    />
                  </div>

                  <div className="group/field">
                    <label className="block text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-4 group-focus-within/field:text-[#d4af37] transition-colors">TARGET DISTRICT HUB</label>
                    <div className="relative">
                      <select 
                        name="city"
                        value={formData.city} 
                        onChange={(e) => setFormData({...formData, city: e.target.value})} 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 text-white outline-none focus:border-[#d4af37]/60 appearance-none cursor-pointer font-bold text-sm shadow-inner"
                      >
                        {HUBS.map(h => <option key={h.id} value={h.name} className="bg-[#0a192f]">{h.name}</option>)}
                        <option value="Other Regional" className="bg-[#0a192f]">OUTSIDE NETWORK DISPATCH</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-[#d4af37] font-bold">
                        &darr;
                      </div>
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="block text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-4 group-focus-within/field:text-[#d4af37] transition-colors">ENGAGEMENT INTEL / MISSION BRIEF</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message} 
                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                      rows={5} 
                      className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] py-6 px-8 text-white outline-none focus:border-[#d4af37]/60 transition-all font-bold text-sm resize-none shadow-inner group-hover/field:border-white/20" 
                      placeholder="DESCRIBE THE LOGISTICAL ENGAGEMENT PROTOCOLS..."
                    ></textarea>
                  </div>
                </div>

                {status === 'ERROR' && (
                  <p className="text-[#d4af37] text-[11px] font-black uppercase tracking-[0.4em] bg-[#d4af37]/10 p-8 rounded-[2rem] border border-[#d4af37]/20 animate-pulse text-center">
                    {errorMessage}
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'SENDING'}
                  className={`w-full bg-[#d4af37] text-[#0a192f] py-7 rounded-full font-black uppercase tracking-[0.5em] text-xs transition-all shadow-2xl ${status === 'SENDING' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-105'}`}
                >
                  {status === 'SENDING' ? 'MOBILIZING BUREAU...' : 'TRANSMIT BRIEF'}
                </button>
                <div className="flex items-center justify-center gap-6 py-4 opacity-30">
                  <div className="h-[1px] flex-grow bg-gradient-to-l from-white to-transparent"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.8em]">Encrypted Channel</span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white to-transparent"></div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;