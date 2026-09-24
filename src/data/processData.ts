import { ProcessStage } from '../types';

export const processStages: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understanding the core business, audience, and goals.',
    description: 'We begin with an in-depth alignment session to uncover what your business truly needs. We analyze your target customers, examine competitor touchpoints, map essential user journeys, and define a crystal-clear feature scope.',
    details: [
      'Business model & target customer profile mapping',
      'Technical requirements & integrations discovery',
      'Information architecture & sitemap blueprint',
      'Transparent milestone schedule and scope agreement'
    ],
    deliverable: 'Project Scope Document & Sitemap Architecture',
    duration: '1 – 3 Days'
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'Crafting an intentional visual identity and interactive experience.',
    description: 'We translate your brand narrative into high-fidelity interactive wireframes and design systems. We focus on visual hierarchy, purposeful typography, responsive grid ergonomics, and high-impact micro-interactions that resonate with your customers.',
    details: [
      'High-fidelity interactive visual layouts',
      'Color palette, typography & asset system curation',
      'Mobile-first responsive viewport prototypes',
      'Interactive client review & feedback refinement'
    ],
    deliverable: 'Interactive Figma Prototype & Design System',
    duration: '3 – 6 Days'
  },
  {
    number: '03',
    title: 'Develop',
    tagline: 'Engineering clean, fast, and maintainable software.',
    description: 'We bring the design to life with modern code architectures. We optimize for sub-second load times, smooth frame rates, accessibility standards, responsive fluidity across all screens, and seamless API integrations.',
    details: [
      'Clean TypeScript & modern React component structure',
      'Sub-second page loading & image optimization pipeline',
      'Form validation, WhatsApp hooks & CMS integration',
      'Cross-browser and cross-device rigorous QA testing'
    ],
    deliverable: 'Full Working Staging Build & Test Suite',
    duration: '4 – 10 Days'
  },
  {
    number: '04',
    title: 'Deploy',
    tagline: 'Testing, hosting configuration, launch, and handover.',
    description: 'We orchestrate the live release. We connect your custom domain, set up automated SSL encryption, configure edge CDN caching, run SEO audits, and provide a clear walkthrough so you feel confident in running your digital asset.',
    details: [
      'Custom domain DNS routing & free SSL provisioning',
      'Google Search Console & local SEO indexing setup',
      'Speed audit with 95+ Core Web Vitals score',
      'Client handover session & post-launch support guarantee'
    ],
    deliverable: 'Live Production Website & Admin Credentials',
    duration: '1 – 2 Days'
  }
];
