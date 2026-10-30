// Comprehensive Data Store for Accelerance Tech (Digital Growth Agency)
// Inspired by leading agencies like Digital Nexa: Business-outcome focused, multi-channel capabilities

export const agencyInfo = {
  name: "Accelerance Tech",
  legalName: "Accelerance Technologies Private Limited",
  tagline: "Engineering Digital Growth for Ambitious Brands",
  shortDesc:
    "Award-winning digital agency delivering high-performance websites, scalable eCommerce, mobile applications, performance marketing, and CRM automation.",
  establishedYear: 2018,
  metrics: [
    {
      value: "150+",
      label: "Successful Launches",
      desc: "Across India, UAE, UK, Australia & Saudi Arabia",
    },
    {
      value: "98.4%",
      label: "Client Retention Rate",
      desc: "Long-term growth and recurring digital optimization",
    },
    {
      value: "3.4x",
      label: "Average Traffic Lift",
      desc: "Within first 6 months of platform launch",
    },
  ],
  offices: [
    {
      city: "Delhi (Global HQ)",
      country: "India",
      address: "Daryaganj, Delhi, India",
      phone: "+91 9711091363",
      email: "sales@accelerance.in",
      hours: "Mon – Fri: 9:00 AM – 7:00 PM IST",
      isHQ: true,
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Office 1402, Marina Plaza, Dubai Marina, Dubai, UAE",
      phone: "+971 4 456 7890",
      email: "dubai@accelerance.tech",
      hours: "Mon – Fri: 9:00 AM – 6:00 PM GST",
      isHQ: false,
    },
    {
      city: "Manama",
      country: "Kingdom of Bahrain",
      address: "Level 11, Almoayyed Tower, Seef District, Manama, Bahrain",
      phone: "+973 17 567 890",
      email: "bahrain@accelerance.tech",
      hours: "Sun – Thu: 8:30 AM – 5:30 PM AST",
      isHQ: false,
    },
    {
      city: "Riyadh",
      country: "Kingdom of Saudi Arabia",
      address: "King Fahd Road, Al Olaya District, Riyadh 12214, Saudi Arabia",
      phone: "+966 11 234 5678",
      email: "riyadh@accelerance.tech",
      hours: "Sun – Thu: 9:00 AM – 6:00 PM AST",
      isHQ: false,
    },
  ],
};

// ============================================================================
// 6 FEATURED CASE STUDIES WITH REAL CLIENT WEBSITES & DETAILED METRICS
// ============================================================================
export const caseStudiesList = [
  {
    id: "mybooksfactory",
    slug: "mybooksfactory",
    client: "MyBooksFactory",
    url: "https://mybooksfactory.com",
    domain: "Mybooksfactory.com",
    title:
      "Scaling India's Leading Academic & Medical Bookstore for Sub-Second Ordering",
    subtitle:
      "High-volume catalog architecture, instant search filtering, and frictionless mobile checkout.",
    industry: "eCommerce & Academic Publishing",
    category: "ecommerce",
    region: "India & South Asia",
    themeColor: "#1E3A8A",
    accentColor: "#3B82F6",
    heroImage:
      "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=1200&q=80",
    screenshotImage: "/images/case-studies/mybooksfactory-screenshot.png",
    iconImage: "/images/case-studies/icons/mybooksfactory-icon.svg",
    summary:
      "MyBooksFactory specializes in medical (MBBS, BDS), engineering, and competitive examination textbooks. We re-engineered their eCommerce platform to handle 40,000+ SKUs with sub-second catalog search and streamlined checkout, boosting sales during peak academic enrollment seasons.",
    keyMetrics: [
      {
        label: "Organic Search Growth",
        value: "+340%",
        sub: "Top rankings for medical entrance textbooks",
      },
      {
        label: "Search Latency",
        value: "0.8s",
        sub: "Instant multi-attribute faceted indexing",
      },
      {
        label: "Cart Abandonment Drop",
        value: "-42%",
        sub: "Frictionless one-page checkout",
      },
      {
        label: "Monthly Readers",
        value: "250K+",
        sub: "Active students & professionals",
      },
    ],
    challenge:
      "The previous monolithic bookstore suffered from severe slowdowns when thousands of students searched for specialized medical entrance textbooks simultaneously. Cart abandonment was above 70% due to multi-step checkout friction, and inventory synchronization across multiple distributors was failing.",
    solution:
      "We designed a high-velocity, conversion-centered eCommerce architecture. We implemented an instant predictive search engine capable of searching by ISBN, author, syllabus, and subject in under 0.8 seconds. We designed a clean, mobile-first buying flow with one-tap UPI, NetBanking, and COD options, coupled with automated WhatsApp shipping updates.",
    deliverables: [
      "Custom High-Speed eCommerce Platform",
      "Instant Predictive Search & ISBN Filtering",
      "One-Page Mobile Checkout with UPI & COD",
      "Automated WhatsApp & SMS Order Tracking",
      "Technical eCommerce SEO & Schema Markup",
    ],
    testimonial: {
      quote:
        "Our peak admissions season used to bring our store to its knees. Accelerance redesigned our platform with incredible speed and elegance. Our sales spiked by 340% and our customer support calls dropped in half.",
      author: "Rajesh S.",
      role: "Operations Director, MyBooksFactory",
    },
    snapshotPreview: {
      header: "Medical, Engineering & Academic Books at Lowest Prices",
      searchPlaceholder:
        "Search by Book Title, Author, MBBS, BDS, NEET PG, ISBN...",
      highlights: [
        "40,000+ Verified Academic Titles",
        "Fast Express Shipping Pan-India",
        "100% Genuine Publisher Guarantees",
      ],
      featuredCategories: [
        "Medical & Dental",
        "Engineering Tech",
        "Nursing & Pharma",
        "Competitive Exam Guides",
      ],
    },
  },
  {
    id: "commercial-roofers",
    slug: "commercial-roofers",
    client: "Commercial Roofers Australia",
    url: "https://commercialroofers.net.au",
    domain: "Commercialroofers.net.au",
    title:
      "Dominating Commercial & Industrial Roofing Tenders Across Australia",
    subtitle:
      "High-trust B2B lead generation platform, interactive scope estimator, and top search rankings.",
    industry: "B2B Commercial & Industrial Contracting",
    category: "b2b",
    region: "Sydney & NSW, Australia",
    themeColor: "#0F172A",
    accentColor: "#F59E0B",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    screenshotImage: "/images/case-studies/commercialroofers-screenshot.png",
    iconImage: "/images/case-studies/icons/commercialroofers-icon.svg",
    summary:
      "Commercial Roofers Australia provides large-scale roofing, cladding, and asset rehabilitation for warehouses, shopping complexes, and educational institutions. We built a high-authority digital presence that generates multi-million-dollar commercial tenders on autopilot.",
    keyMetrics: [
      {
        label: "Top-3 Google Rankings",
        value: "35+",
        sub: "Target industrial & commercial keywords",
      },
      {
        label: "Qualified Tender Inquiries",
        value: "+320%",
        sub: "Facility managers & property developers",
      },
      {
        label: "Attributed Pipeline",
        value: "$4.2M+",
        sub: "Commercial roofing contracts awarded",
      },
      {
        label: "Lead-to-Quote Rate",
        value: "3.8x",
        sub: "Driven by interactive scoping funnel",
      },
    ],
    challenge:
      "Commercial roofing contracts range from $50,000 to over $1,000,000. Decision-makers—strata managers, corporate facility directors, and asset developers—demand stringent proof of insurance, safety certifications, and past structural case studies. The previous site looked like a residential trade site and attracted zero commercial tenders.",
    solution:
      "We completely repositioned the brand as Australia's premier commercial roofing authority. The new site highlights past mega-projects with aerial drone visuals, detailed technical specs, WorkSafe compliance accreditations, and an interactive 'Commercial Scope Calculator'. We supported this with hyper-targeted B2B organic search architecture across Sydney and NSW.",
    deliverables: [
      "Enterprise B2B Corporate Website",
      "Interactive Commercial Roof Scope Estimator",
      "Drone Inspection & Project Portfolio Gallery",
      "Targeted Industrial B2B Search Strategy",
      "Instant CRM Lead Dispatch for Estimators",
    ],
    testimonial: {
      quote:
        "Accelerance transformed how our business is perceived in the market. We transitioned from competing on price for small jobs to winning tier-1 commercial warehouse re-roofing projects. A phenomenal return on investment.",
      author: "Brett Henderson",
      role: "Managing Director, Commercial Roofers Australia",
    },
    snapshotPreview: {
      header: "Australia’s Industrial & Commercial Roofing Specialists",
      searchPlaceholder:
        "Calculate commercial roof replacement or repair costs...",
      highlights: [
        "Master Builders & SafeWork NSW Certified",
        "25-Year Manufacturer & Workmanship Warranties",
        "$20M Public Liability Insurance Coverage",
      ],
      featuredCategories: [
        "Industrial Warehouse Roofing",
        "Commercial Metal Cladding",
        "Asbestos Safe Remediation",
        "Preventative Asset Maintenance",
      ],
    },
  },
  {
    id: "designer-handle",
    slug: "designer-handle",
    client: "Designer Handle UK",
    url: "https://designerhandle.co.uk",
    domain: "Designerhandle.co.uk",
    title:
      "Architectural Ironmongery & Hardware Platform with Real-Time Finish Filtering",
    subtitle:
      "High-spec interior hardware eCommerce with trade accounts, finish matching, and CAD specifications.",
    industry: "Interior Architecture & Trade eCommerce",
    category: "ecommerce",
    region: "United Kingdom",
    themeColor: "#27272A",
    accentColor: "#EAB308",
    heroImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    screenshotImage: "/images/case-studies/designerhandle-screenshot.png",
    iconImage: "/images/case-studies/icons/designerhandle-icon.svg",
    summary:
      "Designer Handle supplies luxury door handles, cabinet hardware, and architectural ironmongery to UK architects, interior designers, and discerning homeowners. We developed a sophisticated catalog with live finish previewing and dedicated trade client portals.",
    keyMetrics: [
      {
        label: "Organic Search Revenue",
        value: "+210%",
        sub: "High-intent interior design queries",
      },
      {
        label: "Repeat B2B Trade Orders",
        value: "+74%",
        sub: "Architect & contractor account portal",
      },
      {
        label: "SKU Combinations",
        value: "55,000+",
        sub: "Managed with sub-second filter speed",
      },
      {
        label: "Mobile Bounce Rate",
        value: "-38%",
        sub: "Fast visual gallery exploration",
      },
    ],
    challenge:
      "Architectural hardware has endless complexity: each handle comes in 6+ finishes (Satin Brass, Antique Bronze, Matte Black, Polished Chrome) and requires matching hinges, latches, and escutcheons. Customers were confused by disorganized options, and trade professionals lacked an easy way to specify whole-house schedules.",
    solution:
      "We built an intuitive, visual-first shopping experience. Users can toggle finishes across entire hardware collections simultaneously. We created a 'Project Hardware Scheduler' allowing architects to group selections by room, download PDF specifications for clients, and receive automatic trade volume discounts.",
    deliverables: [
      "Custom Architectural eCommerce Platform",
      "Dynamic Multi-Variant Finish Visualizer",
      "Architect & Interior Designer Trade Portal",
      "Room-by-Room Hardware Schedule Generator",
      "Technical Product Schema & Fast UK Shipping Logic",
    ],
    testimonial: {
      quote:
        "Specifying ironmongery used to be a headache for our architect clients. The new platform makes pairing finishes effortless. Our trade accounts have surged, and online revenue has more than doubled.",
      author: "James Thornton",
      role: "Commercial Director, Designer Handle UK",
    },
    snapshotPreview: {
      header: "Architectural Door Handles & Luxury Interior Ironmongery",
      searchPlaceholder:
        "Search by Finish (Satin Brass, Matte Black, Antique Bronze)...",
      highlights: [
        "Solid Brass & Marine Grade 316 Stainless Steel",
        "Trade Discount Accounts for Architects & Builders",
        "Next-Day Dispatch Across the UK",
      ],
      featuredCategories: [
        "Interior Door Handles",
        "Cabinet Knobs & Pulls",
        "Matching Locks & Hinges",
        "Architectural Window Fittings",
      ],
    },
  },
  {
    id: "sofinfra",
    slug: "sofinfra",
    client: "Sofinfra Realty Advisory",
    url: "https://sofinfra.com",
    domain: "Sofinfra.com",
    title:
      "Luxury Real Estate & Commercial Advisory Portal Capturing High-Net-Worth Investors",
    subtitle:
      "High-ticket property acquisition platform with yield calculators and confidential listing showcases.",
    industry: "Luxury Real Estate & Advisory",
    category: "realestate",
    region: "Delhi NCR, Gurugram & Noida, India",
    themeColor: "#09090B",
    accentColor: "#10B981",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    screenshotImage: "/images/case-studies/sofinfra-screenshot.png",
    iconImage: "/images/case-studies/icons/sofinfra-icon.svg",
    summary:
      "Sofinfra is an elite real estate advisory firm serving High-Net-Worth Individuals (HNWIs) and corporate investors seeking prime residential and commercial assets across Delhi NCR (Golf Course Road, Cyber City, Southern Peripheral). We designed a private-client advisory portal that exudes exclusivity and builds immediate trust.",
    keyMetrics: [
      {
        label: "Transaction Value Influenced",
        value: "$28M+",
        sub: "In luxury residential & office assets",
      },
      {
        label: "Qualified HNWI Leads",
        value: "68%",
        sub: "High-intent inquiry rate",
      },
      {
        label: "Private Consultations",
        value: "4.2x",
        sub: "Growth in booked advisory sessions",
      },
      {
        label: "Media Load Time",
        value: "0.9s",
        sub: "4K architectural asset streaming",
      },
    ],
    challenge:
      "High-value property investors are deterred by spammy listing portals with fake prices. Sofinfra needed a sophisticated digital presence that reflects discretion, institutional advisory caliber, and verified property market intelligence to attract Ultra-HNWIs and corporate occupiers.",
    solution:
      "We engineered a clean, minimalist platform reminiscent of Swiss private banking. Each luxury development features curated video tours, neighborhood infrastructure analytics, projected rental yields, and confidential inquiry gates. We integrated direct scheduling with senior partners and automated lead enrichment via enterprise CRM.",
    deliverables: [
      "Ultra-Luxury Real Estate Brand & Web Platform",
      "Interactive Investment Yield & Capital Gain Calculators",
      "Confidential Off-Market Property Vault",
      "VIP Private Advisor Booking System",
      "High-Security Enterprise CRM Integration",
    ],
    testimonial: {
      quote:
        "Our clients expect the highest standard of sophistication. Accelerance delivered a digital presence that sets us apart from ordinary brokers. It establishes credibility before our advisors even step into a meeting.",
      author: "Abhishek S.",
      role: "Partner & Head of Private Wealth, Sofinfra",
    },
    snapshotPreview: {
      header: "Curated Luxury Estates & Commercial Portfolios in Delhi NCR",
      searchPlaceholder:
        "Explore Prime Locations: Golf Course Ext Road, Cyber City, Diplomatic Enclave...",
      highlights: [
        "Verified Institutional & Luxury Assets Only",
        "Comprehensive Due Diligence & Yield Analysis",
        "Discreet Private Advisory for Family Offices",
      ],
      featuredCategories: [
        "Luxury Penthouses & Villas",
        "Grade-A Commercial Floors",
        "Pre-Leased High-Yield Assets",
        "Bespoke Land Parcels",
      ],
    },
  },
  {
    id: "deluxe-umrah",
    slug: "deluxe-umrah",
    client: "Deluxe Umrah Packages",
    url: "https://deluxeumrah.com",
    domain: "Deluxeumrah.com",
    title:
      "VIP Pilgrimage Travel Operator with Interactive Package Customization & Visa Assist",
    subtitle:
      "5-star luxury Umrah booking engine, distance-to-Haram transparency, and automated concierge routing.",
    industry: "Travel, Hospitality & Pilgrimage",
    category: "travel",
    region: "India, Saudi Arabia & Global",
    themeColor: "#1C1917",
    accentColor: "#F59E0B",
    heroImage:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    screenshotImage: "/images/case-studies/deluxeumrah-screenshot.jpg",
    iconImage: "/images/case-studies/icons/deluxeumrah-icon.svg",
    summary:
      "Deluxe Umrah curates structured, 5-star Umrah packages featuring elite accommodations directly in front of the Holy Mosques in Makkah and Madinah. We built an intuitive travel platform that provides transparent package comparisons, custom date selectors, and rapid WhatsApp booking support.",
    keyMetrics: [
      {
        label: "Pre-Season Bookings Lift",
        value: "+140%",
        sub: "Higher early bird package confirmations",
      },
      {
        label: "Pilgrim Satisfaction Score",
        value: "4.9/5",
        sub: "Flawless transparent booking flow",
      },
      {
        label: "Automated Lead Qualification",
        value: "92%",
        sub: "Filtered by hotel tier and travel dates",
      },
      {
        label: "Mobile Quote Requests",
        value: "3.5x",
        sub: "Instant WhatsApp itinerary generator",
      },
    ],
    challenge:
      "Pilgrimage travel is fraught with ambiguity around hotel distances, visa processing times, and hidden transport costs. Discerning pilgrims seeking 5-star luxury packages were frustrated by vague brochures and slow quote turnaround times.",
    solution:
      "We designed a transparent, deeply respectful digital travel experience. Pilgrims can customize their packages by selecting exact 5-star hotels (Makkah Clock Royal Tower, Oberoi Madinah, etc.), see exact walking distances to Haram courtyard gates, view transparent inclusions, and receive custom WhatsApp quotes within 60 seconds.",
    deliverables: [
      "Custom Pilgrimage Package Booking Platform",
      "Interactive Hotel Distance & Inclusions Visualizer",
      "Instant WhatsApp Quoting & Concierge Bot",
      "Bilingual Arabic / English Structure",
      "Pilgrim Testimonial Video & Review Showcase",
    ],
    testimonial: {
      quote:
        "Pilgrims travel for a once-in-a-lifetime spiritual journey, and trust is everything. Accelerance built a website that radiates authenticity, clarity, and elegance. Our luxury package bookings have reached an all-time record.",
      author: "Tariq K.",
      role: "Managing Director, Deluxe Umrah",
    },
    snapshotPreview: {
      header: "Luxury 5-Star Umrah Packages Facing the Holy Haramain",
      searchPlaceholder:
        "Choose Travel Month, Hotel Proximity & Flight Preferences...",
      highlights: [
        "Front-Row 5-Star Hotels in Makkah & Madinah",
        "VIP Private GMC Yukon Transport Included",
        "Complete Visa Processing & Dedicated 24/7 Guide",
      ],
      featuredCategories: [
        "5-Star VIP Ramadan Packages",
        "Family Deluxe Suites",
        "Custom Itinerary Builder",
        "Direct Flight Departures",
      ],
    },
  },
  {
    id: "watchkraft",
    slug: "watchkraft",
    client: "Watch Kraft",
    url: "https://watchkraft.in",
    domain: "Watchkraft.in",
    title:
      "Scaling a Vintage Horology & Custom Watch Atelier into a Global D2C Phenomenon",
    subtitle:
      "High-definition macro horology showcase, bespoke dial visualizers, and secure worldwide checkout.",
    industry: "Luxury Horology & Custom Watches",
    category: "ecommerce",
    region: "New Delhi, India & Global",
    themeColor: "#0F172A",
    accentColor: "#F59E0B",
    heroImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    screenshotImage: "/images/case-studies/watchkraft-screenshot.png",
    iconImage: "/images/case-studies/icons/watchkraft-icon.svg",
    summary:
      "Watch Kraft specializes in vintage mechanical watch restoration (HMT Kohinoor, vintage Seiko 5) and bespoke hand-painted custom dial editions. We built an elevated horology eCommerce flagship that captures the charm of heritage mechanical movements with seamless mobile ordering.",
    keyMetrics: [
      {
        label: "D2C Online Sales",
        value: "+280%",
        sub: "Direct collector orders worldwide",
      },
      {
        label: "Page Transition Latency",
        value: "0.9s",
        sub: "Sub-second product catalog browsing",
      },
      {
        label: "Collector Review Score",
        value: "4.9/5",
        sub: "Exceptional unboxing & transparency",
      },
      {
        label: "International Demand",
        value: "34%",
        sub: "Orders from US, UK & UAE collectors",
      },
    ],
    challenge:
      "Vintage watch enthusiasts demand extreme visual clarity: high-resolution macro details of dial textures, movement caliber verification, and authenticity guarantees. Watch Kraft's previous social-media-only selling model led to massive manual coordination overhead and lost high-value international collector inquiries.",
    solution:
      "We developed a bespoke D2C horology platform engineered for storytelling and micro-details. Features include interactive dial visualizers for vintage HMT and custom Seiko 5 editions, real-time caliber specifications (mechanical hand-wound vs automatic), transparent warranty tracking, and multi-currency checkout.",
    deliverables: [
      "Custom Horology eCommerce Storefront",
      "Macro Dial & Movement Visualizer",
      "Collector Edition Inventory Drop Engine",
      "International Multi-Currency Checkout",
      "Automated Certificate of Authenticity Generation",
    ],
    testimonial: {
      quote:
        "Our watches are works of art with decades of history. Accelerance built a website that treats vintage timepieces with the prestige they deserve. Our online orders skyrocketed and collectors from around the world now buy with total confidence.",
      author: "Karan M.",
      role: "Founder & Master Restorer, Watch Kraft",
    },
    snapshotPreview: {
      header: "Restored Vintage Mechanical & Custom Hand-Painted Timepieces",
      searchPlaceholder:
        "Explore Vintage HMT Kohinoor, Seiko 5 Automatic, Comic & Cosmic Editions...",
      highlights: [
        "100% In-House Movement Overhaul & Servicing",
        "1-Year Comprehensive Horology Warranty",
        "Worldwide Secure Express Dispatch",
      ],
      featuredCategories: [
        "Vintage HMT Kohinoor",
        "Custom Devanagari Dials",
        "Refurbished Seiko 5",
        "Cosmic & Comic 1/1s",
      ],
    },
  },
];

// ============================================================================
// COMPREHENSIVE SERVICES LIST (DETAILED PAGES LIKE DIGITAL NEXA)
// ============================================================================
export const servicesList = [
  {
    slug: "web-design-development",
    alternateSlugs: ["website-design-development"],
    num: "01",
    shortTitle: "Web Design & Dev",
    title: "Website Design & Custom Web Development",
    tagline:
      "High-Performance, Conversion-Focused Web Platforms Built for Growth",
    category: "Digital Platforms",
    iconName: "Globe",
    heroDesc:
      "We design and engineer enterprise-grade corporate websites, digital storefronts, and web platforms that combine world-class aesthetics with blisteringly fast load times and measurable conversion architectures.",
    overview:
      "Your website is the center of your digital universe. It shapes brand perception, converts high-intent traffic into qualified opportunities, and serves as your 24/7 revenue engine. We reject bloated templates and fragile page builders in favor of custom-crafted, secure, scalable digital architectures that consistently outrank competitors and deliver flawless user journeys across every device.",
    whyItMatters: [
      {
        title: "Sub-Second Load Times",
        desc:
          "Pages that load within 1.2 seconds convert at 3x the rate of sites taking 4+ seconds. Speed directly influences your revenue.",
      },
      {
        title: "Conversion-Engineered UI/UX",
        desc:
          "Strategic visual hierarchy, clear value propositions, and intentional click funnels designed to turn casual visitors into closed deals.",
      },
      {
        title: "Search Engine Dominance",
        desc:
          "Engineered from the ground up to comply with Google Core Web Vitals, rich schema markup, and international SEO standards.",
      },
      {
        title: "Empowered Marketing Teams",
        desc:
          "Modern content management systems that allow your non-technical marketing teams to publish campaigns effortlessly without breaking code.",
      },
    ],
    capabilities: [
      {
        name: "Enterprise Corporate Websites",
        desc:
          "High-authority digital flagships for conglomerates, professional services, B2B enterprises, and scaling technology leaders.",
      },
      {
        name: "Headless & Modern CMS Architectures",
        desc:
          "Decoupled visual content management using Storyblok, Strapi, or Headless WordPress for limitless speed and visual freedom.",
      },
      {
        name: "High-Converting Landing Pages",
        desc:
          "Precision campaign landing pages engineered for paid advertising campaigns with laser-focused conversion funnels.",
      },
      {
        name: "Interactive Web Calculators & Tools",
        desc:
          "Custom lead magnets, quote estimators, and interactive product configurators that capture high-intent buyers.",
      },
      {
        name: "Full-Stack API Integrations",
        desc:
          "Seamless two-way data synchronization connecting your web platform to CRMs (HubSpot, Salesforce), ERPs, and marketing tools.",
      },
      {
        name: "Internationalization & Localization",
        desc:
          "Multi-region, multi-currency, and bilingual (English/Arabic) architectures compliant with local privacy and payment laws.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Discovery & Architecture",
        desc:
          "We analyze your audience, audit competitor benchmarks, and structure information architecture for frictionless navigation.",
      },
      {
        step: "02",
        name: "Bespoke UI/UX Design",
        desc:
          "We create interactive Figma prototypes, design systems, and typography scales tailored to your brand personality.",
      },
      {
        step: "03",
        name: "Full-Stack Engineering",
        desc:
          "We build clean, robust code with modular components, responsive breakpoints, and 100/100 Core Web Vitals targets.",
      },
      {
        step: "04",
        name: "Launch, QA & Optimization",
        desc:
          "Rigorous cross-browser testing, SEO checklist verification, analytics event tracking, and post-launch speed audits.",
      },
    ],
    faqs: [
      {
        q: "How long does a custom website design and build take?",
        a:
          "A typical high-performance corporate website takes between 6 to 10 weeks from discovery to final deployment, depending on content volume, interactive features, and integrations.",
      },
      {
        q: "Will our internal marketing team be able to update content easily?",
        a:
          "Absolutely. We deliver an intuitive visual content editor where your marketing team can publish blog posts, create landing pages, and update copy without touching code.",
      },
      {
        q: "How do you ensure our website ranks well on Google?",
        a:
          "SEO is baked into every line of code we write—including perfect semantic HTML, lightning-fast Core Web Vitals, dynamic OpenGraph data, structured JSON-LD schema, and automated sitemap generation.",
      },
    ],
    relatedCaseStudyIds: ["mybooksfactory", "commercial-roofers", "sofinfra"],
  },
  {
    slug: "ecommerce-solutions",
    alternateSlugs: ["headless-shopify-ecommerce"],
    num: "02",
    shortTitle: "eCommerce Solutions",
    title: "eCommerce Development & Conversion Optimization",
    tagline:
      "Scalable Online Stores Engineered for Maximum Conversion & High Average Order Value",
    category: "Commerce",
    iconName: "ShoppingBag",
    heroDesc:
      "From bespoke high-converting direct-to-consumer storefronts to complex B2B multi-channel commerce platforms, we engineer eCommerce experiences that drive repeat purchases and scalable GMV growth.",
    overview:
      "Modern online shoppers expect lightning-fast page navigation, frictionless search, and instant one-tap checkout. If your store hesitates for even two seconds, shoppers bounce to your competitors. We build high-converting eCommerce engines combining sophisticated merchandising, localized payment options, automated inventory syncing, and conversion rate optimization (CRO) frameworks.",
    whyItMatters: [
      {
        title: "Lifted Conversion Rates",
        desc:
          "Every element—from product image zoom to sticky add-to-cart drawers—is tested to reduce cart drop-off and elevate conversions.",
      },
      {
        title: "Higher Average Order Value (AOV)",
        desc:
          "Automated cross-sells, bundle builders, and threshold-based free shipping triggers systematically increase revenue per order.",
      },
      {
        title: "Localized Payment Gateways",
        desc:
          "Support for regional favorite payments: UPI and NetBanking in India; Apple Pay, Tabby, Tamara, Mada, and BenefitPay across the GCC.",
      },
      {
        title: "Automated Operations",
        desc:
          "Direct integration with 3PL logistics, inventory management, ERP systems, and automated email/WhatsApp order notifications.",
      },
    ],
    capabilities: [
      {
        name: "Custom Shopify & Shopify Plus Development",
        desc:
          "Tailored themes and custom apps built on Shopify Plus for high-volume merchants seeking limitless brand distinction.",
      },
      {
        name: "Headless eCommerce Architecture",
        desc:
          "Decoupled frontends for instant sub-second page transitions, international multi-store catalogs, and omnichannel scaling.",
      },
      {
        name: "B2B Wholesale & Trade Portals",
        desc:
          "Tiered wholesale pricing, custom quotation workflows, VAT handling, and bulk order upload features for commercial clients.",
      },
      {
        name: "Custom Checkout Extensions",
        desc:
          "One-click post-purchase upsells, localized identity verification, custom delivery date pickers, and gift messaging.",
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        desc:
          "Continuous A/B testing, heatmap analysis, and checkout friction audits to maximize revenue from your existing traffic.",
      },
      {
        name: "ERP & Inventory Synchronization",
        desc:
          "Reliable automated connections to SAP, Oracle, Zoho, NetSuite, and warehouse management systems for live stock accuracy.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Commercial Audit & Funnel Review",
        desc:
          "We analyze current drop-off points, basket abandonment metrics, mobile behavior, and average order value trends.",
      },
      {
        step: "02",
        name: "Merchandising & UI/UX Design",
        desc:
          "We craft intuitive product discovery journeys, sticky conversion elements, and mobile-first shopping experiences.",
      },
      {
        step: "03",
        name: "Architecture & Integration",
        desc:
          "We build secure, PCI-compliant payment bridges, multi-currency logic, and automated warehouse fulfillment webhooks.",
      },
      {
        step: "04",
        name: "Conversion Testing & Launch",
        desc:
          "Rigorous end-to-end checkout stress testing under peak simulated traffic, followed by ongoing conversion rate optimization.",
      },
    ],
    faqs: [
      {
        q: "What eCommerce platforms do you work with?",
        a:
          "We are platform-agnostic and select the best engine for your operational needs—predominantly Shopify Plus, custom headless commerce, WooCommerce for specialized catalogs, and enterprise Magento/custom stacks.",
      },
      {
        q: "Can you help migrate our existing products and customer data?",
        a:
          "Yes. We handle zero-downtime data migration including customer accounts, order history, product variants, and SEO 301 redirect mapping to protect your organic traffic.",
      },
      {
        q: "Do you integrate Middle Eastern and Indian payment gateways?",
        a:
          "Yes, we have deep experience integrating Razorpay, Cashfree, UPI, Stripe, Tabby, Tamara, Mada, Apple Pay, and BenefitPay with multi-currency checkout.",
      },
    ],
    relatedCaseStudyIds: ["mybooksfactory", "lavendore", "designer-handle"],
  },
  {
    slug: "mobile-app-development",
    alternateSlugs: ["mobile-app-development-flutter"],
    num: "03",
    shortTitle: "Mobile & Web Apps",
    title: "Mobile App Development & Scalable Web Applications",
    tagline:
      "Fluid, High-Engagement Mobile & Web Applications for iOS, Android and Cloud",
    category: "Digital Platforms",
    iconName: "Smartphone",
    heroDesc:
      "We build intuitive, fluid mobile applications and cloud-native web portals that keep users engaged, drive repeat transactions, and automate everyday business processes.",
    overview:
      "Over 75% of digital interactions happen on mobile devices. A mobile application provides a direct, unmediated communication channel with your highest-value customers through push notifications, offline functionality, and one-tap biometric access. We engineer native-performance mobile apps and customer web portals designed for flawless stability, intuitive user experiences, and scalable cloud backends.",
    whyItMatters: [
      {
        title: "Direct Customer Engagement",
        desc:
          "Push notifications deliver up to 7x higher click-through rates compared to traditional email marketing.",
      },
      {
        title: "Fluid 60 FPS Performance",
        desc:
          "Silky-smooth animations, instant micro-interactions, and instant screen rendering elevate brand trust.",
      },
      {
        title: "Single Codebase Efficiency",
        desc:
          "Deploy simultaneously to Apple iOS and Google Android, slashing development costs and feature rollout timelines by 40%.",
      },
      {
        title: "Offline-First Reliability",
        desc:
          "Local data caching ensures seamless app utility even in low-connectivity environments, syncing instantly when back online.",
      },
    ],
    capabilities: [
      {
        name: "Consumer Mobile Applications",
        desc:
          "High-retention shopping, lifestyle, travel, and on-demand service apps featuring biometric auth and native in-app payments.",
      },
      {
        name: "Enterprise Field & Workflow Tools",
        desc:
          "Internal mobile utilities for field service technicians, sales representatives, warehouse inventory, and inspection reporting.",
      },
      {
        name: "Customer Web Portals & Dashboards",
        desc:
          "Secure self-service customer portals for account management, subscription billing, document sharing, and order tracking.",
      },
      {
        name: "Real-Time Push & Engagement",
        desc:
          "Automated, behavior-triggered push notification sequences with personalized deep-linking to boost lifetime value (LTV).",
      },
      {
        name: "Scalable Cloud APIs & Microservices",
        desc:
          "High-throughput backend architectures engineered on AWS, GCP, and Cloudflare to handle millions of concurrent API calls.",
      },
      {
        name: "App Store Optimization (ASO)",
        desc:
          "Strategic keyword placement, localized screenshots, and review prompt loops to rank at the top of App Store and Google Play.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Product Scoping & User Flow",
        desc:
          "We define core user personas, map interactive wireframes, and eliminate all unnecessary taps from the primary goal path.",
      },
      {
        step: "02",
        name: "Interactive UI/UX Design",
        desc:
          "We create pixel-perfect native iOS and Android interfaces conforming to Apple Human Interface and Material Design standards.",
      },
      {
        step: "03",
        name: "Agile Development Sprints",
        desc:
          "Two-week agile sprints with bi-weekly TestFlight and APK test builds so you can test features on real devices continuously.",
      },
      {
        step: "04",
        name: "Store Submission & Launch",
        desc:
          "End-to-end guidance through Apple App Store and Google Play review guidelines, security audits, and continuous cloud monitoring.",
      },
    ],
    faqs: [
      {
        q: "Do you build native or cross-platform mobile apps?",
        a:
          "We specialize in modern cross-platform engineering (Flutter and React Native) which compiles to native ARM code, delivering 60 FPS native performance while maintaining a single unified codebase for iOS and Android.",
      },
      {
        q:
          "Will you help us get the app approved on the Apple App Store and Google Play?",
        a:
          "Yes. We manage the complete app store submission process, including developer account configuration, privacy disclosures, screenshot generation, and addressing any reviewer guidelines.",
      },
      {
        q: "Can the mobile app share the same database as our website?",
        a:
          "Yes. We architect centralized API backends so that inventory, user accounts, orders, and content are synchronized across both your website and mobile app in real time.",
      },
    ],
    relatedCaseStudyIds: ["mybooksfactory", "lavendore", "deluxe-umrah"],
  },
  {
    slug: "seo-digital-growth",
    alternateSlugs: [],
    num: "04",
    shortTitle: "SEO & Organic Growth",
    title: "Search Engine Optimization & Organic Growth",
    tagline:
      "Sustainable High-Intent Search Visibility that Generates Inbound Revenue",
    category: "Growth & Marketing",
    iconName: "TrendingUp",
    heroDesc:
      "We execute data-driven, technical, and authority-building SEO campaigns that position your brand at the very top of Google for the commercial terms your highest-value customers are actively searching for.",
    overview:
      "Paid ads stop delivering the moment you stop spending. Organic search is an appreciating digital asset that compounds your authority and delivers qualified, high-intent leads day after day. We combine deep technical SEO architecture, strategic topical cluster content, high-authority backlink acquisition, and local search dominance across India, the GCC, the UK, and Australia.",
    whyItMatters: [
      {
        title: "Lower Customer Acquisition Cost",
        desc:
          "Organic search leads cost an average of 61% less than paid search clicks over a 12-month timeline.",
      },
      {
        title: "High Commercial Intent",
        desc:
          "Users searching for specific solutions on Google possess immediate buying readiness and convert faster.",
      },
      {
        title: "Unshakable Brand Authority",
        desc:
          "Ranking #1 for competitive industry keywords establishes instant market leadership and consumer trust.",
      },
      {
        title: "AI Search Ready (AEO / GEO)",
        desc:
          "We optimize your brand entity to be cited and recommended inside modern AI engines like Google Gemini, ChatGPT, and Perplexity.",
      },
    ],
    capabilities: [
      {
        name: "Technical SEO & Core Web Vitals",
        desc:
          "Fixing crawl errors, JavaScript rendering, site architecture, canonicalization, and speed bottlenecks that suppress rankings.",
      },
      {
        name: "Commercial Keyword Research & Strategy",
        desc:
          "Identifying high-intent, low-waste search queries that directly match your most profitable service and product lines.",
      },
      {
        name: "Topical Authority Content Clusters",
        desc:
          "Publishing comprehensive, expert-led editorial content that establishes your domain as the definitive industry authority.",
      },
      {
        name: "Local & Multi-Region SEO",
        desc:
          "Dominating local map packs and regional Google searches across Delhi NCR, Dubai, Riyadh, Sydney, London, and Manama.",
      },
      {
        name: "High-Authority Link Acquisition",
        desc:
          "Ethical digital PR and authoritative editorial backlink outreach that builds durable domain trust without penalty risks.",
      },
      {
        name: "eCommerce Category & Product SEO",
        desc:
          "Optimizing faceted navigation, product schema markup, breadcrumb hierarchies, and image search visibility for online stores.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Comprehensive Technical & Keyword Audit",
        desc:
          "We analyze your site's health, indexation status, competitor backlink profiles, and uncover untapped high-intent revenue keywords.",
      },
      {
        step: "02",
        name: "On-Page & Architecture Optimization",
        desc:
          "We fix site structure, optimize header hierarchies, write magnetic meta titles, and implement rich JSON-LD structured data.",
      },
      {
        step: "03",
        name: "Authority Building & Content Engine",
        desc:
          "We create authoritative cluster content and run digital PR campaigns to acquire editorial tier-1 backlinks.",
      },
      {
        step: "04",
        name: "Transparent Tracking & CRO",
        desc:
          "Monthly keyword movement reports, organic revenue attribution, and continuous conversion optimization on ranking landing pages.",
      },
    ],
    faqs: [
      {
        q: "How soon can we expect to see results from an SEO campaign?",
        a:
          "While technical fixes and quick-win keyword optimizations often show positive movement within 4 to 8 weeks, significant organic revenue growth typically compounds between months 3 through 6.",
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a:
          "No ethical agency can guarantee specific #1 rankings because Google's algorithm updates constantly. However, our proven methodology has achieved top-3 rankings for 90%+ of our retained clients across competitive sectors.",
      },
      {
        q: "What makes your SEO approach different from traditional agencies?",
        a:
          "We focus on revenue and qualified inbound pipeline, not vanity traffic. We align target keywords with your highest-margin products and optimize the post-click conversion experience.",
      },
    ],
    relatedCaseStudyIds: [
      "commercial-roofers",
      "designer-handle",
      "mybooksfactory",
    ],
  },
  {
    slug: "performance-marketing",
    alternateSlugs: [],
    num: "05",
    shortTitle: "Performance Marketing",
    title: "Performance Marketing & Paid Advertising",
    tagline:
      "Hyper-Targeted Paid Search, Social Ads & Retargeting that Generate Measurable ROI",
    category: "Growth & Marketing",
    iconName: "Target",
    heroDesc:
      "We manage high-efficiency paid media campaigns across Google Ads, Meta (Instagram & Facebook), LinkedIn, and YouTube, focusing strictly on return on ad spend (ROAS) and cost-per-acquisition (CPA).",
    overview:
      "Throwing ad spend at broad audiences without deep tracking is a recipe for burning capital. Modern performance marketing requires continuous creative iteration, precise audience segmentation, server-side conversion tracking (CAPI), and relentless landing page optimization. We treat your advertising budget with the discipline of an investment portfolio, optimizing every dollar for profitable revenue expansion.",
    whyItMatters: [
      {
        title: "Immediate Market Reach",
        desc:
          "Put your offers in front of ready-to-buy customers within 24 hours of campaign launch.",
      },
      {
        title: "Predictable Scaling",
        desc:
          "When unit economics are profitable (e.g. 4x ROAS), ad budgets can be scaled with confidence to capture more market share.",
      },
      {
        title: "Full-Funnel Retargeting",
        desc:
          "Re-engage visitors who browsed products or abandoned quotes with dynamic, customized social proof creatives.",
      },
      {
        title: "Clear Revenue Attribution",
        desc:
          "Transparent conversion tracking linking every campaign, ad creative, and audience directly to closed sales and inquiries.",
      },
    ],
    capabilities: [
      {
        name: "Google Search & Shopping Ads",
        desc:
          "Capturing high-intent buyers actively searching for your exact services or commercial product lines with high-converting copy.",
      },
      {
        name: "Meta Ads (Instagram & Facebook)",
        desc:
          "Visual storytelling, video hooks, and carousel ad sequences that captivate potential buyers and generate qualified leads.",
      },
      {
        name: "LinkedIn B2B Account-Based Marketing",
        desc:
          "Laser-targeted outreach directed at C-suite executives, facility heads, procurement managers, and key enterprise decision-makers.",
      },
      {
        name: "High-Converting Ad Creatives & Video",
        desc:
          "In-house creative studio designing arresting static banners, short-form reels, and customer testimonial video edits.",
      },
      {
        name: "Server-Side Conversion Tracking (CAPI)",
        desc:
          "Bypassing iOS privacy restrictions with robust first-party server-side tracking for 100% accurate attribution.",
      },
      {
        name: "Dedicated Campaign Landing Pages",
        desc:
          "Building custom, friction-free landing pages that double conversion rates compared to generic website pages.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Offer & Audience Strategy",
        desc:
          "We analyze unit economics, define target customer cohorts, and craft irresistible commercial hooks.",
      },
      {
        step: "02",
        name: "Creative Production & Tracking Setup",
        desc:
          "We design multi-variant creative assets and configure robust Conversions API, Google Tag Manager, and GA4 events.",
      },
      {
        step: "03",
        name: "Sprint Launch & Algorithmic Learning",
        desc:
          "Campaigns are deployed with disciplined budget allocation to train advertising algorithms toward high-value converters.",
      },
      {
        step: "04",
        name: "Scaling Winners & Trimming Waste",
        desc:
          "Weekly creative refreshes, negative keyword pruning, bid adjustments, and scaling winning audiences systematically.",
      },
    ],
    faqs: [
      {
        q: "What is the recommended minimum ad budget to get started?",
        a:
          "We recommend a minimum media spend of $2,500 – $5,000 per month (paid directly to the advertising networks) to allow sufficient data volume for algorithmic optimization.",
      },
      {
        q:
          "Do you create the ad graphics and copy, or do we need to provide them?",
        a:
          "Our full-service team handles everything—from creative strategy, copywriting, graphic design, and video editing to landing page builds and campaign execution.",
      },
      {
        q: "How do we track the results and return on ad spend (ROAS)?",
        a:
          "You receive access to a live 24/7 client reporting dashboard tracking impressions, clicks, cost-per-lead, cost-per-acquisition, total revenue, and ROAS in real time.",
      },
    ],
    relatedCaseStudyIds: ["deluxe-umrah", "lavendore", "commercial-roofers"],
  },
  {
    slug: "social-media-content",
    alternateSlugs: [],
    num: "06",
    shortTitle: "Social Media & Content",
    title: "Social Media Strategy & Content Marketing",
    tagline:
      "Build a Magnetic Brand Community and Turn Followers into Loyal Advocates",
    category: "Growth & Marketing",
    iconName: "Share2",
    heroDesc:
      "We craft compelling visual content, strategic social storytelling, and educational content that humanizes your brand, engages audiences, and drives qualified inbound leads.",
    overview:
      "Consumers and B2B buyers don't buy from anonymous corporations; they buy from brands with personality, authority, and consistent value. A scattered social media feed with generic stock photos damages your credibility. We build cohesive, content-driven social strategies across Instagram, LinkedIn, YouTube, and X that position your leadership team as industry authorities and keep your brand top-of-mind.",
    whyItMatters: [
      {
        title: "Consistent Brand Perception",
        desc:
          "High-caliber visual design and coherent messaging establish your brand as a polished, credible market leader.",
      },
      {
        title: "Community & Trust Building",
        desc:
          "Engaging discussions, user-generated content, and customer spotlights foster deep emotional loyalty and repeat sales.",
      },
      {
        title: "Organic Referral Flywheel",
        desc:
          "Remarkable visual assets and educational insights naturally get shared across peer networks, driving free referral traffic.",
      },
      {
        title: "Direct Social Selling",
        desc:
          "Converting social engagement directly into direct message (DM) inquiries, booked consultations, and eCommerce purchases.",
      },
    ],
    capabilities: [
      {
        name: "Social Media Strategy & Editorial Calendars",
        desc:
          "Multi-platform content roadmaps aligning key themes, product launches, and seasonal campaigns for maximum reach.",
      },
      {
        name: "High-Impact Visual Content Creation",
        desc:
          "Bespoke graphics, infographic carousels, typographic layouts, and branded quote templates tailored to your visual identity.",
      },
      {
        name: "Short-Form Video & Reels Production",
        desc:
          "Scripting, editing, and optimizing engaging Instagram Reels, TikToks, and YouTube Shorts that capture fleeting attention.",
      },
      {
        name: "LinkedIn Executive Thought Leadership",
        desc:
          "Ghostwriting authoritative articles and insightful posts for founders and C-suite executives to build commercial influence.",
      },
      {
        name: "Active Community Management",
        desc:
          "Timely comment moderation, customer inquiry triage, and proactive engagement with target industry accounts.",
      },
      {
        name: "Influencer & Creator Collaborations",
        desc:
          "Identifying, vetting, and managing niche brand ambassadors and creators who hold genuine trust with your target demographic.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Brand Voice & Visual Stylebook",
        desc:
          "We define your social tone of voice, visual aesthetic guidelines, content pillars, and competitive differentiation.",
      },
      {
        step: "02",
        name: "Content Production Sprints",
        desc:
          "Our creative studio shoots, designs, and writes monthly batches of content for your review and approval well ahead of time.",
      },
      {
        step: "03",
        name: "Omnichannel Publishing & Engagement",
        desc:
          "Scheduled publishing at peak audience hours paired with active daily community interaction to stimulate algorithm reach.",
      },
      {
        step: "04",
        name: "Performance Analytics & Iteration",
        desc:
          "Monthly reviews evaluating audience growth, engagement rates, click-throughs, and inbound lead attribution.",
      },
    ],
    faqs: [
      {
        q: "Which social media platforms should our business focus on?",
        a:
          "This depends on your business model. For B2B companies, industrial firms, and real estate, LinkedIn and YouTube deliver the highest lead quality. For luxury goods, eCommerce, and travel, Instagram and short-form video generate the most visual engagement.",
      },
      {
        q: "Do we get to approve posts before they go live?",
        a:
          "Yes. We prepare an interactive monthly content calendar with all copy, creative assets, and hashtags for your team's review and sign-off before scheduling.",
      },
      {
        q: "How does social media contribute to tangible business revenue?",
        a:
          "Social media acts as social proof for prospective buyers researching your company. We also implement dedicated link-in-bio funnels and direct-message automated lead capture to convert followers into customers.",
      },
    ],
    relatedCaseStudyIds: ["lavendore", "deluxe-umrah", "sofinfra"],
  },
  {
    slug: "crm-marketing-automation",
    alternateSlugs: ["hubspot-revops-crm"],
    num: "07",
    shortTitle: "CRM & RevOps",
    title: "HubSpot CRM, RevOps & Marketing Automation",
    tagline:
      "Unify Sales, Marketing and Service into an Automated Revenue Engine",
    category: "Operations & Intelligence",
    iconName: "Cpu",
    heroDesc:
      "We implement, configure, and synchronize enterprise CRM platforms (HubSpot, Salesforce) and automated workflow pipelines that shorten sales cycles and prevent leads from slipping through cracks.",
    overview:
      "Marketing brings in leads, but if your sales team is manually updating spreadsheets and forgetting follow-ups, your acquisition budget is wasted. A unified CRM and RevOps architecture connects your website inquiries, customer communications, sales pipelines, and transactional data into a single source of truth. We build automated nurture workflows, lead scoring models, and bidirectional data integrations that turn warm prospects into closed customers.",
    whyItMatters: [
      {
        title: "Zero Lost Inquiries",
        desc:
          "Automated routing instantly assigns inbound leads to the right sales reps with zero manual data re-entry.",
      },
      {
        title: "Shortened Sales Cycles",
        desc:
          "Behavior-triggered automated follow-up sequences keep prospects warm and reduce sales cycle times by up to 50%.",
      },
      {
        title: "Unified Customer Intelligence",
        desc:
          "Every email opened, web page visited, and quotation sent is visible in a single timeline for your sales team.",
      },
      {
        title: "Predictable Revenue Forecasting",
        desc:
          "Accurate deal pipeline stages and real-time revenue dashboards allow executives to make data-backed growth decisions.",
      },
    ],
    capabilities: [
      {
        name: "HubSpot CRM Architecture & Setup",
        desc:
          "Complete implementation of HubSpot Marketing Hub, Sales Hub, and Service Hub tailored to your sales process.",
      },
      {
        name: "Automated Lead Scoring & Routing",
        desc:
          "Scoring models based on prospect company size, budget, and website engagement to prioritize hot deals for sales.",
      },
      {
        name: "Lifecycle Nurture Workflows",
        desc:
          "Personalized multi-touch email sequences that educate cold prospects and guide them toward booking strategy calls.",
      },
      {
        name: "Custom API & Webhook Integrations",
        desc:
          "Synchronizing CRM data bi-directionally with your website, mobile app, ERP, WhatsApp, and accounting software.",
      },
      {
        name: "Sales Pipeline & Deal Stage Design",
        desc:
          "Standardized deal progression rules, automated quote generation, e-signature collection, and win/loss tracking.",
      },
      {
        name: "Executive Revenue Dashboards",
        desc:
          "Custom reporting dashboards tracking customer acquisition cost (CAC), pipeline velocity, and marketing source attribution.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Sales & Marketing Process Audit",
        desc:
          "We interview your team, audit existing customer data touchpoints, and map ideal pipeline stages.",
      },
      {
        step: "02",
        name: "CRM Configuration & Data Migration",
        desc:
          "We clean, deduplicate, and migrate legacy contact data, configure custom properties, and establish pipeline stages.",
      },
      {
        step: "03",
        name: "Automation & Integration Build",
        desc:
          "We build automated email follow-ups, lead assignment rules, task reminders, and integrate your website forms.",
      },
      {
        step: "04",
        name: "Team Training & Ongoing RevOps",
        desc:
          "Hands-on team training sessions, recorded SOPs, and ongoing operational support to maximize platform adoption.",
      },
    ],
    faqs: [
      {
        q: "Are you a certified HubSpot partner?",
        a:
          "Yes. Our RevOps engineers hold multiple HubSpot certifications across Marketing Hub, Sales Hub, and HubSpot CMS implementations.",
      },
      {
        q:
          "Can we integrate HubSpot with our existing proprietary software or ERP?",
        a:
          "Yes. We build custom API bridges and webhooks to synchronize contacts, transaction history, and status updates seamlessly.",
      },
      {
        q: "How does CRM automation help small-to-mid-sized sales teams?",
        a:
          "It eliminates manual data entry, guarantees instant follow-ups within minutes of form submission, and ensures sales reps focus only on qualified, high-ticket prospects.",
      },
    ],
    relatedCaseStudyIds: ["commercial-roofers", "sofinfra", "designer-handle"],
  },
  {
    slug: "branding-ui-ux-creative",
    alternateSlugs: [],
    num: "08",
    shortTitle: "Branding & Creative",
    title: "Brand Identity, Creative Direction & UI/UX Design",
    tagline:
      "Distinctive Visual Identities and Digital Experiences that Captivate and Convert",
    category: "Design & Creative",
    iconName: "Palette",
    heroDesc:
      "We craft cohesive brand identities, modern design systems, and intuitive user experiences that differentiate your company from competitors and build enduring customer affinity.",
    overview:
      "In a crowded market, generic visuals mean you will be forgotten. Premium branding allows you to command higher prices, attract superior talent, and build unshakeable customer trust. We partner with founders and enterprise leaders to distill their core value proposition into iconic logos, cohesive design systems, and thoughtful UI/UX interfaces that elevate every digital touchpoint.",
    whyItMatters: [
      {
        title: "Command Premium Pricing",
        desc:
          "A polished, world-class brand aesthetic immediately signals quality and removes price resistance.",
      },
      {
        title: "Instant Market Recognition",
        desc:
          "Distinctive typography, colors, and iconography make your brand memorable across digital and offline channels.",
      },
      {
        title: "Effortless Digital Consistency",
        desc:
          "A comprehensive design system ensures that every landing page, pitch deck, and mobile screen looks cohesive.",
      },
      {
        title: "Enhanced User Retention",
        desc:
          "Intuitive, accessible, and delightful digital interfaces reduce user frustration and encourage repeat engagement.",
      },
    ],
    capabilities: [
      {
        name: "Comprehensive Visual Identity Systems",
        desc:
          "Iconic logos, secondary marks, color palettes, typographic scales, and brand style guides for digital and print.",
      },
      {
        name: "Digital Product & UI/UX Design",
        desc:
          "Wireframes, user journeys, interactive Figma prototypes, and responsive interface design for web and mobile.",
      },
      {
        name: "Design System Engineering",
        desc:
          "Reusable component libraries and design tokens bridging Figma directly with React, Next.js, and Flutter code.",
      },
      {
        name: "Corporate Collateral & Pitch Decks",
        desc:
          "Investor pitch decks, executive brochures, annual reports, and commercial proposal templates that close deals.",
      },
      {
        name: "Packaging & Physical Touchpoints",
        desc:
          "Bespoke unboxing experiences, luxury product packaging, retail bags, and shipping collateral for premium brands.",
      },
      {
        name: "Brand Repositioning & Rebranding",
        desc:
          "Modernizing heritage brands to appeal to contemporary digital audiences while preserving hard-earned market equity.",
      },
    ],
    methodology: [
      {
        step: "01",
        name: "Brand Immersion & Positioning",
        desc:
          "We unpack your company DNA, interview key stakeholders, study market whitespace, and define your brand archetype.",
      },
      {
        step: "02",
        name: "Creative Concepts & Visual Exploration",
        desc:
          "We present distinct creative directions exploring logos, typography, color palettes, and real-world application mockups.",
      },
      {
        step: "03",
        name: "Design System & Asset Refinement",
        desc:
          "We formalize chosen directions into a comprehensive brand book, icon suites, component kits, and digital asset libraries.",
      },
      {
        step: "04",
        name: "Digital Rollout & Implementation",
        desc:
          "We apply the new visual identity across your website, social channels, collateral, and marketing materials.",
      },
    ],
    faqs: [
      {
        q:
          "What files and deliverables do we receive at the end of a branding project?",
        a:
          "You receive vector logo assets in all formats (SVG, EPS, PNG, PDF), master brand guidelines covering typography and color codes, iconography sets, social media templates, and Figma component libraries.",
      },
      {
        q:
          "Can you redesign our website based on our existing brand guidelines?",
        a:
          "Yes. If you already have established brand guidelines, our UI/UX team will faithfully translate them into a high-performance modern web experience.",
      },
      {
        q: "How long does a brand identity project take?",
        a:
          "A comprehensive brand identity project typically takes 4 to 6 weeks, which includes stakeholder discovery, visual concept presentations, revisions, and brand book assembly.",
      },
    ],
    relatedCaseStudyIds: ["lavendore", "sofinfra", "designer-handle"],
  },
];

// Preserving legacy aliases so any existing bookmark or link continues to work seamlessly
export const fullServicesList = servicesList.map((s) => ({
  slug: s.slug,
  num: s.num,
  title: s.title,
  shortDesc: s.tagline,
  desc: s.heroDesc,
  tags: s.capabilities.map((c) => c.name),
  outcomes: s.whyItMatters.map((w) => w.title),
  link: `/services/${s.slug}/`,
}));

export const regionalMarkets = agencyInfo.offices.map((o) => ({
  slug: o.city.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  country: o.country,
  city: o.city,
  headline: `Digital Growth, Web Design & Marketing in ${o.city}`,
  description: `Accelerance Tech delivers premier web design, eCommerce, SEO, and digital growth services for businesses in ${o.city} and across ${o.country}.`,
  phone: o.phone,
  metaTitle: `Digital Agency & Web Development in ${o.city}, ${o.country} | Accelerance Tech`,
  metaDesc: `Top-rated digital growth agency, web design, eCommerce, and marketing in ${o.city}, ${o.country}. Contact our local team.`,
  link: `/locations/${o.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/`,
}));

export const portfolioCaseStudies = caseStudiesList;
