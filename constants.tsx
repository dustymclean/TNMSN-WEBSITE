import React from 'react';
import { Hub, Specialty } from './types';

export const HUBS: Hub[] = [
  // Yalobusha County (HQ)
  { id: 'tillatoba', name: 'Tillatoba (HQ)', zip: '38961', highlights: ['Central Dispatch Nexus', 'Communities: Enid, Scobey, Sylva Rena', 'Regional Logistics HQ'] },
  { id: 'water-valley', name: 'Water Valley', zip: '38965', highlights: ['Yalobusha General Hospital', 'Communities: Jeffries, Torrance, Gums', 'Main St Creative District'] },
  { id: 'coffeeville', name: 'Coffeeville', zip: '38922', highlights: ['Yalobusha County Courthouse', 'Hwy 7 Logistics Corridor', 'Regional Medical District'] },
  { id: 'oakland', name: 'Oakland', zip: '38948', highlights: ['I-55 Logistics Hub', 'Yalobusha West District', 'Delta-Hill Corridor'] },

  // Lafayette County
  { id: 'oxford', name: 'Oxford', zip: '38655', highlights: ['Baptist Memorial Hospital', 'Chancery Court Legal Hub', 'Oxford District Unit'] },
  { id: 'university', name: 'University', zip: '38677', highlights: ['Ole Miss Student Union Hub', 'Student/Faculty Logistics', 'University Health Services'] },
  { id: 'abbeville', name: 'Abbeville', zip: '38601', highlights: ['Lafayette North Unit', 'Communities: Harmontown, Etta', 'Hwy 7 North Corridor'] },
  { id: 'taylor', name: 'Taylor', zip: '38673', highlights: ['Lafayette South Unit', 'Communities: Paris, Tula, Splinter', 'Arts District Logistics'] },

  // Grenada County
  { id: 'grenada', name: 'Grenada', zip: '38901', highlights: ['UMMC Grenada Medical', 'Communities: Elliott, Gore Springs', 'Regional Logistics Node'] },
  { id: 'holcomb', name: 'Holcomb', zip: '38940', highlights: ['Grenada West Hub', 'Communities: Tie Plant, Bew Springs', 'Hwy 8 Corridor'] },

  // Tallahatchie County
  { id: 'charleston', name: 'Charleston', zip: '38921', highlights: ['Tallahatchie General', 'Communities: Philipp, Cascilla', 'County Legal Dispatch'] },
  { id: 'sumner', name: 'Sumner', zip: '38957', highlights: ['West Tallahatchie Courthouse', 'Communities: Webb, Tutwiler', 'Sumner Legal Corridor'] },
  { id: 'glendora', name: 'Glendora', zip: '38928', highlights: ['Strategic Delta Hub', 'Communities: Minter City, Swan Lake', 'Vance-Glendora Unit'] },

  // Panola County
  { id: 'batesville', name: 'Batesville', zip: '38606', highlights: ['Panola Medical Center', 'Communities: Courtland, Pope', 'I-55 Logistics Center'] },
  { id: 'sardis', name: 'Sardis', zip: '38666', highlights: ['Sardis Lake Commercial', 'Communities: Como, Longtown', 'North Panola Justice Hub'] },
  { id: 'crenshaw', name: 'Crenshaw', zip: '38621', highlights: ['Panola-Quitman Border Unit', 'Communities: Falcon, Locke Station', 'Delta Border Logistics'] },
  { id: 'crowder', name: 'Crowder', zip: '38622', highlights: ['Panola-Quitman Border Hub', 'Communities: Ballentine, Curtis Station', 'Regional Agricultural Node'] }
];

export const SPECIALTIES: Specialty[] = [
  { id: 'loan', name: 'Loan Signing', path: 'loan-signing', icon: 'Calculator', description: 'Elite NNA-verified execution for high-value residential and commercial loan packages. Includes on-site dual-tray fabrication.' },
  { id: 'hospital', name: 'Hospital Notary', path: 'hospital-notary', icon: 'Phone', description: 'Immediate clinical mobilization for bedside notarization of Power of Attorney and Advance Directives.' },
  { id: 'ron', name: 'Remote Online (RON)', path: 'remote-online-notary', icon: 'FileText', description: 'Technologist-driven secure digital notarization. Global reach from our Mississippi bureau via encrypted channels.' },
  { id: 'family', name: 'Family Law', path: 'specialty-family-law', icon: 'MapPin', description: 'Secured handling of divorce settlements, adoptions, and matrimonial legal documentation with high-stakes confidentiality.' },
  { id: 'estate', name: 'Estate Planning', path: 'specialty-estate-planning', icon: 'FileText', description: 'Finalization of Wills, Trusts, and Power of Attorney protocols. Precise execution for legacy document integrity.' },
  { id: 'logistics', name: 'Business Logistics', path: 'specialty-business-logistics', icon: 'Calculator', description: 'Titles, liens, and permit logistics for regional enterprise. Secured on-site corporate witnessing.' }
];

export const Icons = {
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  Calculator: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
  ),
  FileText: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  ),
  Copy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  ),
  MessageSquare: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  )
};