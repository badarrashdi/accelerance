"use client";

import { useState } from 'react';
import Link from 'next/link';

export const aboxServiceCategories = [
  {
    id: "development",
    categoryNumber: "01",
    name: "Development",
    headline: "Full-Stack Web & Headless CMS Engineering",
    description: "Build robust, scalable, and ultra-fast web platforms with modern headless and JAMstack technologies.",
    services: [
      {
        num: "01",
        title: "Custom Web Development",
        desc: "Tailored frontend and backend architectures built for performance, security, and effortless scalability.",
        tags: ["Next.js", "React", "TypeScript", "Node.js"]
      },
      {
        num: "02",
        title: "Next.js & SSG Development",
        desc: "Sub-second static site generation (SSG) with edge rendering, optimal Core Web Vitals, and SEO dominance.",
        tags: ["Next.js 14", "Edge Cache", "SSR", "Vercel"]
      },
      {
        num: "03",
        title: "Headless CMS (Storyblok & Strapi)",
        desc: "Decoupled visual content management empowering marketing teams without sacrificing code purity or developer agility.",
        tags: ["Storyblok", "Strapi", "Headless", "REST/GraphQL"]
      },
      {
        num: "04",
        title: "Headless WordPress",
        desc: "Familiar editorial publishing interface backed by WPGraphQL and ACF Pro, decoupled with a blistering fast React frontend.",
        tags: ["WPGraphQL", "ACF Pro", "Decoupled", "Enterprise"]
      },
      {
        num: "05",
        title: "Cross-Platform Mobile App (Flutter)",
        desc: "Native 60 FPS iOS and Android mobile applications compiled from a single performant Flutter codebase.",
        tags: ["Flutter", "Dart", "iOS", "Android"]
      },
      {
        num: "06",
        title: "API & Third-Party Integrations",
        desc: "Custom webhooks, payment gateways (BenefitPay, Mada, Apple Pay), ERPs, and bi-directional CRM synchronizations.",
        tags: ["REST APIs", "GraphQL", "Webhooks", "Microservices"]
      }
    ]
  },
  {
    id: "ai-automation",
    categoryNumber: "02",
    name: "AI & Automation",
    headline: "Autonomous AI Agents & Intelligent Systems",
    description: "Deploy custom conversational AI and workflow automations that resolve real customer inquiries without hallucinations.",
    services: [
      {
        num: "01",
        title: "Autonomous RAG Chatbots",
        desc: "Enterprise AI agents grounded on your company data, PDF manuals, and live inventories with citation-backed answers.",
        tags: ["RAG Pipeline", "pgvector", "LangChain", "Zero-Hallucination"]
      },
      {
        num: "02",
        title: "WhatsApp Business AI Agents",
        desc: "Automated 24/7 lead qualification, real-time shipment lookups, and customer self-service natively over WhatsApp.",
        tags: ["WhatsApp Cloud API", "FastAPI", "24/7 Inbound"]
      },
      {
        num: "03",
        title: "AI SaaS Product Architecture",
        desc: "End-to-end engineering of proprietary AI applications, vector indexing, multi-tenant billing, and OpenAI/Claude APIs.",
        tags: ["FastAPI", "Python", "Stripe", "pgvector"]
      },
      {
        num: "04",
        title: "Business Process Automation",
        desc: "Eliminate manual data re-entry between your web apps, CRM, ERP, and customer communication channels.",
        tags: ["Zapier / Make", "Custom Webhooks", "CRM Sync"]
      }
    ]
  },
  {
    id: "ecommerce",
    categoryNumber: "03",
    name: "Ecommerce",
    headline: "Shopify Plus & Conversion-Driven Storefronts",
    description: "Launch, migrate, and scale high-performing Shopify and Shopify Plus stores built for maximum average order value (AOV).",
    services: [
      {
        num: "01",
        title: "Shopify & Shopify Plus Development",
        desc: "Bespoke storefronts engineered from scratch for high conversion, brand distinction, and lightning load speed.",
        tags: ["Shopify Plus", "Liquid", "Storefront API"]
      },
      {
        num: "02",
        title: "Headless Commerce (Shopify Hydrogen)",
        desc: "Sub-second product transitions with headless Hydrogen and Next.js frontends connected to Shopify's checkout.",
        tags: ["Hydrogen", "Next.js", "Edge Caching"]
      },
      {
        num: "03",
        title: "Checkout UI Extensions",
        desc: "Custom one-click upsells, personalized customer notes, and localized payment gateway rules.",
        tags: ["Checkout Extensibility", "Post-Purchase Upsell"]
      },
      {
        num: "04",
        title: "CRO & Performance Optimization",
        desc: "Data-driven A/B testing, heatmap auditing, and Core Web Vitals optimization to reduce bounce and lift GMV.",
        tags: ["A/B Testing", "CRO", "PageSpeed", "Analytics"]
      }
    ]
  },
  {
    id: "revops-crm",
    categoryNumber: "04",
    name: "RevOps & CRM",
    headline: "HubSpot CRM & Inbound Revenue Engines",
    description: "Turn your HubSpot instance into a synchronized revenue generation engine connected to your product telemetry.",
    services: [
      {
        num: "01",
        title: "HubSpot CRM & API Synchronization",
        desc: "Bi-directional event tracking syncing product signups, store checkouts, and customer behavior into HubSpot.",
        tags: ["HubSpot API", "RevOps", "Data Lake"]
      },
      {
        num: "02",
        title: "Custom HubSpot CMS Modules",
        desc: "Drag-and-drop custom modules that give marketers freedom while enforcing strict design system consistency.",
        tags: ["HubL", "CMS Hub", "Reusable Modules"]
      },
      {
        num: "03",
        title: "Lifecycle Marketing & Automation",
        desc: "Automated deal routing, behavioral lead scoring, and multi-channel nurture workflows.",
        tags: ["Lead Scoring", "Pipelines", "Workflows"]
      }
    ]
  },
  {
    id: "design",
    categoryNumber: "05",
    name: "Design & UX",
    headline: "Conversion-Focused UI/UX & Brand Identity",
    description: "Crafting digital experiences and visual design systems that build immediate trust and captivate users.",
    services: [
      {
        num: "01",
        title: "UI/UX Design for Web & Mobile",
        desc: "Intuitive, research-backed user journeys, wireframes, interactive prototypes, and production-ready design systems in Figma.",
        tags: ["Figma", "Design Systems", "Prototyping", "WCAG AA"]
      },
      {
        num: "02",
        title: "Brand Identity & Visual Guidelines",
        desc: "Distinctive logos, typography hierarchies, and cohesive brand guidelines tailored for tech and modern commerce.",
        tags: ["Vector Branding", "Typography", "Visual Identity"]
      },
      {
        num: "03",
        title: "Design System Engineering",
        desc: "Bridging Figma tokens with React/Next.js and Flutter UI component libraries for pixel-perfect execution.",
        tags: ["Tailwind", "CSS Tokens", "Component Library"]
      }
    ]
  }
];

export default function InnovativeServices() {
  const [activeCategory, setActiveCategory] = useState("development");
  const [expandedIndex, setExpandedIndex] = useState(0);

  const currentCategory = aboxServiceCategories.find(c => c.id === activeCategory) || aboxServiceCategories[0];

  const handleCategorySwitch = (catId) => {
    setActiveCategory(catId);
    setExpandedIndex(0); // Reset accordion to first item
  };

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section className="abox-services-master-section" id="services">
      <div className="container">
        {/* Exact Abox Section Header */}
        <div className="abox-services-header">
          <div className="abox-service-eyebrow">
            <span className="dot-pulse"></span>
            SERVICES
          </div>
          <h2 className="abox-service-heading">
            Innovative Services.<br />
            <span className="abox-service-heading-gradient">To Drive Growth.</span>
          </h2>
          <p className="abox-service-subtext">
            We partner with ambitious companies across <strong>India (Delhi NCR HQ), Bahrain, UAE, and Saudi Arabia</strong> to deliver 
            clean design, cutting-edge web &amp; mobile engineering, and AI automation that directly move business needles.
          </p>
        </div>

        {/* Clean Category Selector Tabs (Abox Minimalist Style) */}
        <div className="abox-category-tabs-bar">
          {aboxServiceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySwitch(cat.id)}
              className={`abox-cat-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
            >
              <span className="tab-number">{cat.categoryNumber}</span>
              <span className="tab-name">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <div className="abox-category-intro-banner">
          <div>
            <h3 className="cat-headline">{currentCategory.headline}</h3>
            <p className="cat-description">{currentCategory.description}</p>
          </div>
          <Link href="#contact" className="btn-black-pill">
            <span>Book Strategy Call</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Interactive Accordion / Expandable Service List (Abox Signature Functionality) */}
        <div className="abox-service-accordion-list">
          {currentCategory.services.map((srv, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div 
                key={idx} 
                className={`abox-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <div 
                  className="abox-accordion-header" 
                  onClick={() => toggleAccordion(idx)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  <div className="accordion-left-meta">
                    <span className="accordion-num">{srv.num}</span>
                    <h4 className="accordion-title">{srv.title}</h4>
                  </div>

                  <div className="accordion-right-action">
                    <div className="accordion-tags-preview">
                      {srv.tags.slice(0, 3).map((t, tIdx) => (
                        <span key={tIdx} className="mini-tag">{t}</span>
                      ))}
                    </div>
                    <div className="accordion-icon-toggle">
                      {isOpen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="abox-accordion-body">
                    <div className="body-grid">
                      <p className="body-description">{srv.desc}</p>
                      <div className="body-tags-wrap">
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#5A5D69', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                          Key Tech &amp; Deliverables:
                        </span>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {srv.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="tech-badge-pill">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Bar */}
        <div className="abox-services-bottom-cta">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#5A5D69', letterSpacing: '0.08em' }}>
              Need a bespoke scope?
            </span>
            <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0D0E12', marginTop: '0.2rem' }}>
              We tailor engineering pods specifically for your timeline, tech stack, and budget.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/services/website-design-development/" className="btn-outline-pill">
              View All Services
            </Link>
            <a href="mailto:sales@accelerance.in" className="btn-black-pill">
              <span>Discuss Your Build</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
