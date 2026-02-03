
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16 px-4">
    <h2 className={`text-4xl font-bold font-serif mb-4 ${light ? 'text-white' : 'text-[#0a192f]'}`}>{title}</h2>
    <div className="h-1 w-20 mx-auto mb-6 bg-[#c5a059]"></div>
    <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
  </div>
);

export default SectionHeader;
