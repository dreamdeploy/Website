
export const services = [
  { n: "01", title: "Android Apps", desc: "Native Android, Kotlin, Jetpack — production-ready builds ready for Play Store review.", detail: "Compose • MVVM • Offline-first" },
  { n: "02", title: "Websites", desc: "Next.js, high-performance, SEO-ready — built to rank and convert.", detail: "Next.js • Edge • SEO" },
  { n: "03", title: "UI/UX Product Design", desc: "Flows, wireframes, design systems that developers actually want to build.", detail: "Figma • System • Prototyping" },
  { n: "04", title: "Admin & Dashboards", desc: "Role-based dashboards, analytics, and ops tools your team will use daily.", detail: "RBAC • Charts • Tables" },
  { n: "05", title: "Backend & APIs", desc: "Scalable APIs, auth, databases — the invisible engine that never fails.", detail: "Node • Postgres • Auth" },
  { n: "06", title: "Integrations", desc: "Payments, maps, comms, and third-party services wired correctly.", detail: "Stripe • Maps • Twilio" },
  { n: "07", title: "Brand & Identity", desc: "Logo, visual system, guidelines — a brand that feels funded on day one.", detail: "Identity • Type • Guidelines" },
  { n: "08", title: "Deploy & Scale", desc: "Cloud, CI/CD, domains, monitoring — from git push to production.", detail: "Vercel • AWS • Monitoring" },
];

export const projects = [
  { id: "p1", title: "Commerce OS", category: "Platforms", year: "2025 • Concept", tags: ["Web","Admin","Payments"], description: "Commerce OS — Concept Build", problem: "Fragmented tools for inventory, orders, and payouts slow down small merchants.", solution: "Unified OS with real-time inventory, checkout, and finance.", stack: ["Next.js","Postgres","Stripe"], timeline: "6 weeks • Concept", color: "#EAE6FF" },
  { id: "p2", title: "Clinic Platform", category: "Apps", year: "2025 • Concept", tags: ["Android","Backend"], description: "Clinic Platform — Concept", problem: "Clinics juggle bookings, records, and follow-ups across WhatsApp and paper.", solution: "Android-first clinic app with offline charting, queue, and automated reminders.", stack: ["Kotlin","Jetpack","Firebase"], timeline: "8 weeks • Concept", color: "#DDF2E4" },
  { id: "p3", title: "Logistics Dashboard", category: "Platforms", year: "2025 • Concept", tags: ["Dashboard","Maps"], description: "Logistics Dashboard — Concept", problem: "Fleet visibility is spreadsheet-driven with 12-hour delays.", solution: "Live fleet dashboard with ETA prediction, geofence alerts.", stack: ["React","Mapbox","Node.js"], timeline: "5 weeks • Concept", color: "#FFE9C9" },
  { id: "p4", title: "Studio Website", category: "Websites", year: "2024 • Concept", tags: ["Website","Brand"], description: "Studio Website — Concept Build", problem: "Creative studio site scored 42 Lighthouse and lost 60% mobile visitors.", solution: "Rebuilt with edge rendering, 98 Lighthouse.", stack: ["Next.js","Framer Motion"], timeline: "4 weeks • Concept", color: "#E8E8E8" },
  { id: "p5", title: "Finance Companion", category: "Apps", year: "2025 • Concept", tags: ["Android","Fintech"], description: "Finance Companion — Concept", problem: "Expense tracking apps ignore bank sync and Indian UPI realities.", solution: "Android app with UPI categorization, bill nudges, and spend forecasts.", stack: ["Kotlin","Compose"], timeline: "7 weeks • Concept", color: "#D6E8FF" },
  { id: "p6", title: "HireFlow", category: "Websites", year: "2024 • Concept", tags: ["Platform","Admin"], description: "HireFlow — Concept", problem: "Hiring pipeline lives in 4 tools; candidates ghost due to delays.", solution: "Single pipeline: sourcing, eval, interview notes, and offer.", stack: ["Next.js","Prisma"], timeline: "6 weeks • Concept", color: "#FFF0D6" },
];

export const phases = [
  { id: "01", title: "Discover", dur: "3-5 days", desc: 'We map your dream to reality. Goals, users, constraints, and what "live" means.', deliverables: ["Product brief & scope map","User flows & JTBD","Technical risks","Success metrics"] },
  { id: "02", title: "Design", dur: "1-2 weeks", desc: "Wireframes to high-fidelity. System, not screens — so build stays fast.", deliverables: ["Wireframes & flows","Design system in Figma","Prototype & micro-interactions","Content & empty states"] },
  { id: "03", title: "Build", dur: "3-6 weeks", desc: "Frontend, backend, and mobile in parallel. Weekly demos, not black boxes.", deliverables: ["Working builds weekly","API & database setup","Auth, roles, core features","QA & performance budget"] },
  { id: "04", title: "Integrate", dur: "1 week", desc: "Payments, maps, emails, analytics — wired, tested, and failure-proofed.", deliverables: ["Payment & webhook tests","Third-party integration log","Analytics & events","Security & access review"] },
  { id: "05", title: "Deploy", dur: "2-3 days", desc: "Domain, CI/CD, monitoring, and handoff. Your dream goes live, for real.", deliverables: ["Production deploy & domain","CI/CD & rollback plan","Monitoring & alerts","Handoff & docs"] },
];

export const featuresList = ["Auth & Profiles","Payments","Admin Panel","Real-time Chat","Maps & Location","File Uploads","Notifications","Analytics","Search & Filters","API / Integrations"];
