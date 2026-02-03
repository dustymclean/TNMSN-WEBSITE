
export interface Hub {
  id: string;
  name: string;
  zip: string;
  highlights: string[];
}

export interface Specialty {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
}

export interface PricingResult {
  base: number;
  stamps: number;
  printing: number;
  premiums: number;
  total: number;
}
