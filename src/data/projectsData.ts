import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'verdant-roast',
    title: 'Verdant Roast & Social',
    tagline: 'Artisan specialty coffee roastery & café web platform with WhatsApp order ahead.',
    clientType: 'Hospitality & Specialty Coffee',
    category: 'websites',
    label: 'Concept Design',
    image: '/images/project-1-web.jpg',
    featured: true,
    year: '2025',
    duration: '2 Weeks Sprint',
    overview: 'A boutique dining and café digital experience crafted to elevate local café presence in Jammu. Designed with warm editorial typography, interactive beverage menu with dietary filters, seat reservation flow, and instant WhatsApp order placement.',
    challenge: 'Independent cafés often rely on static social media or generic PDF menus that render poorly on mobile screens and fail to drive direct table bookings or takeaway sales.',
    solution: 'Designed an ultra-responsive web menu with quick mobile categories, dynamic table reservation modals, and direct integration with WhatsApp Business for zero-commission ordering.',
    deliverables: [
      'Responsive Web Application',
      'Interactive Dynamic Menu',
      'Direct WhatsApp Ordering Workflow',
      'Local SEO & Google Maps Optimization',
      'Custom Admin CMS for Daily Specials'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite'],
    metricsOrHighlights: [
      { label: 'Mobile Page Speed', value: '99/100' },
      { label: 'Ordering Steps', value: '3 clicks' },
      { label: 'Responsive Viewports', value: '100% Fluid' }
    ],
    interactiveFeatures: [
      'Instant Category Switcher (Espresso, Brews, Bakery, Kitchen)',
      'WhatsApp Cart Builder',
      'Jammu Local Time Status Indicator (Open / Closed)'
    ]
  },
  {
    id: 'veloce-ops',
    title: 'Veloce Store & Ops Suite',
    tagline: 'Android-first retail order dispatch and real-time inventory management.',
    clientType: 'Retail & Local Commerce',
    category: 'applications',
    label: 'Demo Build',
    image: '/images/project-2-app.jpg',
    featured: true,
    year: '2025',
    duration: '3 Weeks Sprint',
    overview: 'A purpose-built Android application interface designed for store managers, delivery riders, and counter staff to manage instant order receipts, low-stock alerts, and delivery handoffs without complex hardware.',
    challenge: 'Small-to-medium retail outlets struggle with bulky legacy POS systems that lack mobile fluidity, leading to order delays and stock inaccuracies during peak hours.',
    solution: 'Engineered a lightweight, high-contrast mobile interface with tactile haptic feedback cues, offline-first local caching, and instant notification sound triggers for incoming orders.',
    deliverables: [
      'Android Mobile Application UI/UX',
      'Real-time Order Status Pipeline',
      'Barcode / SKU Quick Scanner Layout',
      'Daily Revenue & Sales Summary Widget',
      'Role-based Counter & Dispatch Modes'
    ],
    technologies: ['Android / Kotlin', 'React Native Prototype', 'Tailwind CSS', 'State Management'],
    metricsOrHighlights: [
      { label: 'App Startup Time', value: '< 1.2s' },
      { label: 'Offline Sync Support', value: 'Full Local Cache' },
      { label: 'Order Dispatch Speed', value: 'Under 10s' }
    ],
    interactiveFeatures: [
      'Interactive Order Kanban Board',
      'Low Stock Warning Toggles',
      'Direct Customer Calling Trigger'
    ]
  },
  {
    id: 'orion-admin',
    title: 'Orion Core Operations Panel',
    tagline: 'High-density admin dashboard for business analytics, user roles, and operational workflows.',
    clientType: 'Business Systems & SaaS',
    category: 'dashboards',
    label: 'Internal Project',
    image: '/images/project-3-dashboard.jpg',
    featured: true,
    year: '2025',
    duration: 'Ongoing System',
    overview: 'A proprietary admin dashboard architecture developed at DreamDeploy to provide our clients with a turnkey, modular control center for managing customers, invoices, catalog items, and team permissions.',
    challenge: 'Custom business software often suffers from cluttered layouts, slow tabular data rendering, and confusing navigation that hinders non-technical staff.',
    solution: 'Built a disciplined dark-mode UI with high-contrast data visualization, keyboard shortcuts (Cmd+K command palette), and export-ready reporting tools.',
    deliverables: [
      'Full-featured Control Panel System',
      'Role & Permission Access Matrices',
      'Interactive Financial & Volume Charts',
      'Data Export (CSV / PDF / Excel)',
      'Activity Log & Audit Trail'
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite Singlefile'],
    metricsOrHighlights: [
      { label: 'Data Render Capacity', value: '10,000+ rows' },
      { label: 'Theme Support', value: 'Deep Dark & Crisp Light' },
      { label: 'Keyboard Navigation', value: 'Cmd + K Command Bar' }
    ],
    interactiveFeatures: [
      'Live Metric Toggles (Revenue, Orders, Conversion)',
      'Search & Filter Tables with Multi-select',
      'Instant Role Privilege Toggles'
    ]
  },
  {
    id: 'himalaya-botanica',
    title: 'Himalaya Botanica Visual Identity',
    tagline: 'Minimalist organic brand identity, packaging system, and digital typography standards.',
    clientType: 'Wellness & Natural Goods',
    category: 'branding',
    label: 'Concept Design',
    image: '/images/project-4-brand.jpg',
    featured: false,
    year: '2025',
    duration: '2 Weeks Sprint',
    overview: 'A complete brand design study inspired by the pristine natural herbs and botanical traditions of the Jammu & Kashmir region. Features bespoke wordmark styling, earthy color tokens, and eco-friendly packaging guidelines.',
    challenge: 'Natural wellness products often use generic green clip-art aesthetics that fail to convey modern luxury and clinical purity.',
    solution: 'Crafted a bespoke visual language combining refined serif display typography, structured grid stationery, and subtle violet-tinted earth tones.',
    deliverables: [
      'Primary & Secondary Brand Wordmarks',
      'Complete Color Token Hierarchy',
      'Typography Specimen Guidelines',
      'Product Packaging Mockup Suite',
      'Social Media Art Direction Templates'
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Brand Guideline System', 'Vector Assets'],
    metricsOrHighlights: [
      { label: 'Color Tokens', value: '12 Curated Shades' },
      { label: 'Typography Scale', value: '6 Optical Sizes' },
      { label: 'Asset Formats', value: 'SVG / EPS / WebP / PDF' }
    ],
    interactiveFeatures: [
      'Interactive Color Palette Inspector',
      'Typography Pairing Previewer',
      'Logo Spacing & Clearzone Guide'
    ]
  },
  {
    id: 'solstice-studio',
    title: 'Solstice Sanctuary & Salon',
    tagline: 'Editorial booking portal and treatment showcase for premium wellness salons.',
    clientType: 'Beauty & Lifestyle',
    category: 'websites',
    label: 'Prototype',
    image: '/images/project-5-salon.jpg',
    featured: false,
    year: '2025',
    duration: '2 Weeks Sprint',
    overview: 'An editorial-grade service platform designed for high-end salons, spas, and wellness studios. Features interactive treatment exploration, stylist portfolios, and frictionless appointment booking.',
    challenge: 'Salon clients often face confusing booking flows with unclear pricing, leading to appointment drop-offs and phone congestion.',
    solution: 'Created an intuitive 3-step appointment flow with transparent service pricing, stylist selection, and instant SMS / WhatsApp confirmation triggers.',
    deliverables: [
      'Editorial Treatment Showcase',
      'Interactive Slot Booking System',
      'Stylist Profile & Lookbook Grid',
      'Gift Card & Membership Portal Layout',
      'Direct Phone & WhatsApp Booking Hooks'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons'],
    metricsOrHighlights: [
      { label: 'Booking Step Flow', value: '3 Simple Steps' },
      { label: 'Mobile Conversion Focus', value: 'Sticky Action Bar' },
      { label: 'Image Load Optimization', value: 'Sub-second' }
    ],
    interactiveFeatures: [
      'Interactive Treatment Duration & Price Calculator',
      'Staff Availability Switcher',
      'Direct Booking Trigger'
    ]
  },
  {
    id: 'dreamdeploy-infra',
    title: 'DreamDeploy Cloud Edge Kit',
    tagline: 'Zero-config hosting, automated deployment pipelines, and custom domain setup toolkit.',
    clientType: 'Infrastructure & Tooling',
    category: 'applications',
    label: 'Experimental Project',
    image: '/images/service-hero-detail.jpg',
    featured: false,
    year: '2025',
    duration: 'Internal System',
    overview: 'An internal deployment orchestrator created to package, optimize, and deploy client websites to global edge CDNs with automated SSL, DNS routing, and sub-second asset delivery.',
    challenge: 'Small businesses often encounter high recurring server costs and complicated hosting interfaces with no local support.',
    solution: 'Assembled a predictable, high-reliability deployment workflow that delivers static & dynamic assets through global edge nodes at near-zero maintenance overhead.',
    deliverables: [
      'Automated Edge Deployment Scripts',
      'Custom Domain & Free SSL Provisioning',
      'Asset Compression & WebP Pipeline',
      'Uptime Monitoring & Alert Bot'
    ],
    technologies: ['Node.js', 'Vite Build Plugins', 'Edge CDN', 'DNS Automation'],
    metricsOrHighlights: [
      { label: 'Global Edge Latency', value: '< 45ms' },
      { label: 'SSL Auto-Renewal', value: '100% Automated' },
      { label: 'Hosting Uptime', value: '99.99%' }
    ],
    interactiveFeatures: [
      'Live Latency Inspector Mockup',
      'Deployment Status Check Simulator'
    ]
  }
];
