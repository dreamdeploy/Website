export type ProjectCategory = 'all' | 'websites' | 'applications' | 'dashboards' | 'branding';

export type ProjectLabel = 
  | 'Concept Design'
  | 'Demo Build'
  | 'Internal Project'
  | 'Prototype'
  | 'Experimental Project';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  clientType: string;
  category: ProjectCategory;
  label: ProjectLabel;
  image: string;
  featured?: boolean;
  year: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  metricsOrHighlights: {
    label: string;
    value: string;
  }[];
  previewUrl?: string;
  interactiveFeatures?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  idealFor: string[];
  deliverables: string[];
  technologies: string[];
  badge?: string;
  isPrimary?: boolean;
  image?: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  deliverable: string;
  duration: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Process & Timeline' | 'Cost & Payment' | 'Technical';
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budgetRange: string;
  timeline: string;
  preferredContact: 'whatsapp' | 'email' | 'call';
  message: string;
}
