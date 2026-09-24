import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    badge: 'Core Specialty',
    isPrimary: true,
    shortDesc: 'Tailored, high-performance websites for cafés, restaurants, retail shops, salons, startups, and growing enterprises.',
    fullDesc: 'Your website is the single most important digital touchpoint for your brand. We build editorial, fast-loading, and conversion-focused websites engineered around your real business goals—not cookie-cutter themes. From boutique Jammu storefronts to regional startups, we ensure your brand looks world-class and turns visitors into inquiries.',
    idealFor: [
      'Cafés, Restaurants & Lounges',
      'Salons, Spas & Wellness Studios',
      'Retail Shops & Local Brands',
      'Professional Services & Consultancies',
      'Tech Startups & Product Launches'
    ],
    deliverables: [
      'Custom Responsive UI/UX Design',
      'Mobile-First Layout & Fast Load Speeds',
      'Direct WhatsApp Chat & Inquiry Integration',
      'Interactive Product / Menu Showcase',
      'Google Maps & Local Jammu SEO Optimization',
      'CMS for Easy Content & Image Updates',
      'Custom Domain & SSL Setup Included'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js architecture', 'Framer Motion'],
    image: '/images/service-hero-detail.jpg'
  },
  {
    id: 'android-apps',
    number: '02',
    title: 'Android Applications',
    badge: 'Mobile Systems',
    isPrimary: false,
    shortDesc: 'Custom Android application experiences designed around practical business workflows, customer ordering, and internal tools.',
    fullDesc: 'We develop intuitive, snappy Android apps that solve specific operational needs or connect directly with your customers. Whether you need a counter order management tool, delivery logistics app, or a customer loyalty portal, we design with native tactile feel and offline resilience.',
    idealFor: [
      'Store Managers & Inventory Staff',
      'Delivery & Dispatch Teams',
      'Customer Loyalty & Membership Portals',
      'Service Booking on the Go'
    ],
    deliverables: [
      'Clean Material Design UI/UX',
      'Push Notification Integration',
      'Offline-First Data Storage',
      'Camera / Barcode Scanner Support',
      'APK Build & Play Store Readiness'
    ],
    technologies: ['Android SDK', 'Kotlin', 'React Native Prototype', 'REST APIs', 'Firebase / Supabase'],
    image: '/images/project-2-app.jpg'
  },
  {
    id: 'admin-dashboards',
    number: '03',
    title: 'Admin Panels & Dashboards',
    badge: 'Operations',
    isPrimary: false,
    shortDesc: 'Purposeful, high-density interfaces for managing operations, catalog inventory, orders, customer data, and analytics.',
    fullDesc: 'Stop managing your business through chaotic spreadsheets. We build bespoke administrative dashboards with crisp data visualizations, role-based permissions, and streamlined workflows so your team can work faster without technical friction.',
    idealFor: [
      'Business Owners & General Managers',
      'Operations & Logistics Coordinators',
      'E-commerce & Catalog Supervisors',
      'Customer Support Leads'
    ],
    deliverables: [
      'Secure Multi-Role Authentication',
      'Real-time Metric Cards & Dynamic Graphs',
      'Searchable, Filterable Data Tables',
      'CSV / PDF Export Functionality',
      'Activity Logs & Audit History'
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Modular REST Architecture'],
    image: '/images/project-3-dashboard.jpg'
  },
  {
    id: 'brand-design',
    number: '04',
    title: 'Logo & Brand Design',
    badge: 'Visual Identity',
    isPrimary: false,
    shortDesc: 'Distinctive visual identities, typography pairings, and brand systems that help businesses communicate with authority.',
    fullDesc: 'A memorable brand identity is more than just a logo—it is the entire emotional atmosphere of your business. We craft timeless marks, sophisticated color palettes, typography scales, and social media kits that make your business instantly recognizable.',
    idealFor: [
      'New Business Launches',
      'Brand Identity Modernization & Refresh',
      'Boutique Hospitality & Retail',
      'Products Requiring Premium Packaging'
    ],
    deliverables: [
      'Primary, Secondary & Monogram Marks',
      'Curated Color Palette & Tokens',
      'Typography Hierarchy & Font Pairings',
      'Brand Guidelines Document (PDF)',
      'Vector Asset Suite (SVG, EPS, PNG, WebP)',
      'Social Media Avatar & Banner Templates'
    ],
    technologies: ['Vector Geometry', 'Color Theory', 'Typography Systems', 'Figma', 'Illustrator'],
    image: '/images/project-4-brand.jpg'
  },
  {
    id: 'deployment-setup',
    number: '05',
    title: 'Deployment & Technical Setup',
    badge: 'Cloud & Launch',
    isPrimary: false,
    shortDesc: 'End-to-end technical support for hosting, domain configuration, automated SSL, performance tuning, and launch handover.',
    fullDesc: 'Building great software is only half the journey. We handle the entire deployment process so your project goes live smoothly. From DNS configuration and SSL certificates to high-speed edge CDN caching and automated backups, we ensure your site is secure, fast, and always online.',
    idealFor: [
      'Businesses Moving to Custom Domains',
      'Sites Needing Speed & SEO Improvements',
      'Handoff & Hosting Migrations',
      'Ongoing Security & Uptime Monitoring'
    ],
    deliverables: [
      'Custom Domain Routing & DNS Setup',
      'Automated Free SSL / HTTPS Certificates',
      'Global Edge CDN Acceleration',
      'Business Email Configuration (@yourbrand.in)',
      'Automated Uptime & Error Monitoring',
      'Post-Launch Technical Handover Call'
    ],
    technologies: ['Edge CDNs', 'Cloudflare', 'Vercel / Netlify / VPS', 'DNS Management', 'SSL Provisioning'],
    image: '/images/service-hero-detail.jpg'
  }
];
