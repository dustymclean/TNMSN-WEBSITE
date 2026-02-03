import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { HUBS } from '../constants';

const AreaPage: React.FC = () => (
  <div className="py-24 bg-white min-h-screen px-4 animate-in text-left">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Radius-Based Network (25 Strategic Hubs)" subtitle="Secured mileage is calculated in all directions from our HQ center point in Tillatoba. Serving 12+ Counties in North Mississippi." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HUBS.map(hub => (
          <Link key={hub.id} to={`/hub?id=${hub.id}`} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] text-left hover:border-[#c5a059] hover:shadow-xl transition-all">
            <h3 className="font-serif text-2xl font-bold text-[#0a192f] mb-4">Notary {hub.name}</h3>
            <div className="space-y-2 mb-8">
              {hub.highlights.slice(0, 2).map(item => (
                <p key={item} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">• {item}</p>
              ))}
            </div>
            <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.3em] border-b border-[#c5a059]">View Market Details</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default AreaPage;