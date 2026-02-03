import React from 'react';
import { Hub, Specialty } from './types';

export const HUBS: Hub[] = [
  { 
    id: 'tillatoba', 
    name: 'Tillatoba (HQ)', 
    zip: '38961', 
    highlights: ['Mississippi Truck Stop (Hwy 330)', 'Central Dispatch HQ', 'Radius Center Point'] 
  },
  { 
    id: 'batesville', 
    name: 'Batesville', 
    zip: '38606', 
    highlights: ['Panola Medical Center', 'Eagle Crest Shopping Center', 'Panola County Courthouse', 'Hwy 6 Business Corridor'] 
  },
  { 
    id: 'bruce-vardaman', 
    name: 'Bruce / Vardaman', 
    zip: '38915', 
    highlights: ['Calhoun City Baptist Nursing Home', 'Sweet Potato Capital Logistics', 'Bruce Manufacturing Hub'] 
  },
  { 
    id: 'charleston', 
    name: 'Charleston', 
    zip: '38921', 
    highlights: ['Tallahatchie General Hospital', 'Tallahatchie Courthouse', 'Sumner Legal District', 'Charleston Square'] 
  },
  { 
    id: 'clarksdale', 
    name: 'Clarksdale', 
    zip: '38614', 
    highlights: ['Flowers Manor', 'Northwest MS Regional Medical', 'Coahoma County Courthouse', 'PeopleShores Delta Hub'] 
  },
  { 
    id: 'cleveland', 
    name: 'Cleveland', 
    zip: '38732', 
    highlights: ['Bolivar Medical Center', 'Delta State University', 'Baxter Healthcare Plant', 'Bolivar County Correctional'] 
  },
  { 
    id: 'coffeeville', 
    name: 'Coffeeville', 
    zip: '38922', 
    highlights: ['Yalobusha County Courthouse', 'Coffeeville Medical Clinic', 'Hwy 7 Logistics', 'Coffeeville City Hall'] 
  },
  { 
    id: 'greenwood', 
    name: 'Greenwood', 
    zip: '38930', 
    highlights: ['Greenwood Leflore Hospital', 'Viking Range Corporate HQ', 'Leflore County Courthouse', 'Historic Business District'] 
  },
  { 
    id: 'grenada', 
    name: 'Grenada', 
    zip: '38901', 
    highlights: ['UMMC Grenada Medical District', 'Grenada Living Center', 'Grenada County Courthouse', 'Kirk Auto Group Hub'] 
  },
  { 
    id: 'hernando', 
    name: 'Hernando', 
    zip: '38632', 
    highlights: ['DeSoto County Courthouse', 'Hernando Square Legal District', 'Commerce St Business Hub', 'Davis Family Medical'] 
  },
  { 
    id: 'holly-springs', 
    name: 'Holly Springs', 
    zip: '38635', 
    highlights: ['Alliance HealthCare System', 'Marshall County Courthouse', 'Rust College Campus', 'Holly Springs Square'] 
  },
  { 
    id: 'marks-lambert', 
    name: 'Marks / Lambert', 
    zip: '38646', 
    highlights: ['Quitman County Health & Rehab', 'Quitman County Courthouse', 'Delta Logistics Corridors'] 
  },
  { 
    id: 'new-albany', 
    name: 'New Albany', 
    zip: '38652', 
    highlights: ['Baptist Memorial-Union County', 'Toyota Mississippi Hub', 'Union County Health & Rehab', 'Tanglefoot Trailhead'] 
  },
  { 
    id: 'olive-branch', 
    name: 'Olive Branch', 
    zip: '38654', 
    highlights: ['Amazon Fulfillment Centers', 'Methodist Olive Branch Hospital', 'Goodman Rd Commercial Corridor'] 
  },
  { 
    id: 'oxford', 
    name: 'Oxford', 
    zip: '38655', 
    highlights: ['Baptist Memorial Hospital', 'Oxford Courthouse Square', 'Lafayette Chancery Court', 'Oxford Loop Commercial Hub'] 
  },
  { 
    id: 'parchman', 
    name: 'Parchman / Drew', 
    zip: '38738', 
    highlights: ['Mississippi State Penitentiary', 'Delta Correctional Facility', 'Sunflower County Justice Hub'] 
  },
  { 
    id: 'pontotoc', 
    name: 'Pontotoc', 
    zip: '38863', 
    highlights: ['Ashley Furniture Industries', 'Pontotoc County Courthouse', 'First Choice Medical', 'Ecru Business Hub'] 
  },
  { 
    id: 'sardis', 
    name: 'Sardis', 
    zip: '38666', 
    highlights: ['Sardis Lake Commercial Hub', 'Panola North District', 'Sardis City Hall', 'Main St Business Corridor'] 
  },
  { 
    id: 'senatobia', 
    name: 'Senatobia', 
    zip: '38668', 
    highlights: ['NWCC Campus', 'Tate County Courthouse (Historic)', 'Tate Heritage Museum', 'Main St Business District'] 
  },
  { 
    id: 'southaven', 
    name: 'Southaven', 
    zip: '38671', 
    highlights: ['Baptist Memorial-DeSoto', 'Goodman Road Business District', 'Tanger Outlets', 'Southaven Towne Center'] 
  },
  { 
    id: 'tunica', 
    name: 'Tunica / Robinsonville', 
    zip: '38664', 
    highlights: ['Gold Strike & Horseshoe Casinos', 'Tunica County Health & Rehab', 'Tunica Courthouse', 'MS River Logistics Hub'] 
  },
  { 
    id: 'university', 
    name: 'University', 
    zip: '38677', 
    highlights: ['Ole Miss Student Union', 'JD Williams Library', 'Faculty Admin Hubs', 'University Health Services'] 
  },
  { 
    id: 'vaiden-carrollton', 
    name: 'Vaiden / Carrollton', 
    zip: '39176', 
    highlights: ['Carroll County Regional Correctional', 'Vaiden Community Living Center', 'Carrollton Historic Square'] 
  },
  { 
    id: 'water-valley', 
    name: 'Water Valley', 
    zip: '38965', 
    highlights: ['Yalobusha General Hospital', 'Main St Creative District', 'Water Valley City Hall', 'Railroad Logistics'] 
  },
  { 
    id: 'winona', 
    name: 'Winona', 
    zip: '38967', 
    highlights: ['Montgomery County Courthouse', 'Tyler Holmes Memorial', 'Downtown Commercial District', 'Winona Community House'] 
  }
];

export const SPECIALTIES: Specialty[] = [
  { id: 'loan', name: 'Loan Signing', path: 'loan-signing', icon: 'Calculator', description: 'NNA Verified professional for mortgage and title closings.' },
  { id: 'hospital', name: 'Hospital Notary', path: 'hospital-notary', icon: 'Phone', description: 'Urgent bedside notarization for medical power of attorney.' },
  { id: 'i9', name: 'I-9 Verification', path: 'i9-verification', icon: 'FileText', description: 'Remote hiring authorized representative services.' },
  { id: 'family', name: 'Family Law', path: 'specialty-family-law', icon: 'MapPin', description: 'Divorce settlements, adoptions, and matrimonial legal docs.' },
  { id: 'estate', name: 'Estate Planning', path: 'specialty-estate-planning', icon: 'FileText', description: 'Wills, Trusts, and Power of Attorney execution.' },
  { id: 'logistics', name: 'Business Logistics', path: 'specialty-business-logistics', icon: 'Calculator', description: 'Titles, liens, and permit logistics for business operations.' }
];

export const Icons = {
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  )
};