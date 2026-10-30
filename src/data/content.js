export const siteData = {
  name: "Accelerance Tech",
  tagline: "Architecting Elite Shopify, HubSpot, AI SaaS & Enterprise Products",
  description: "Specialized digital engineering powerhouse creating scalable Shopify Plus storefronts, unified HubSpot CRM engines, custom AI SaaS architectures, and autonomous chatbot systems.",
  stats: [
    { value: "$120M+", label: "Commerce GMV Enabled" },
    { value: "99.98%", label: "System Uptime SLA" },
    { value: "4.8x", label: "Average ROI Lift" },
    { value: "45+", label: "Enterprise Deployments" }
  ],
  services: [
    {
      id: "shopify",
      title: "Shopify Plus & Headless Commerce",
      badge: "Flagship Commerce",
      description: "Bespoke high-conversion storefronts, headless Hydrogen & Next.js architectures, custom Shopify App development, checkout extensions, and global ERP integrations.",
      tags: ["Shopify Plus", "Hydrogen", "Liquid", "Storefront API", "Checkout UI", "Klaviyo"],
      metrics: "⚡ 0.8s avg load time | +38% conversion boost",
      accent: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
      icon: "shopping-bag"
    },
    {
      id: "hubspot",
      title: "HubSpot CRM & RevOps Engineering",
      badge: "RevOps & Inbound",
      description: "Enterprise CRM implementation, custom CMS Hub modules, complex automation workflows, API synchronization with billing/data lakes, and full sales pipeline orchestration.",
      tags: ["HubSpot CMS", "RevOps", "Custom API Integrations", "Operations Hub", "Sales Automations"],
      metrics: "📈 65% faster lead qualification | Unified single customer view",
      accent: "linear-gradient(135deg, #FF7A59 0%, #F59E0B 100%)",
      icon: "layers"
    },
    {
      id: "ai-saas",
      title: "AI SaaS & Cloud Architecture",
      badge: "Next-Gen Software",
      description: "End-to-end modern web and cloud application engineering. Multi-tenant SaaS, vector database architectures, serverless microservices, and high-security compliance.",
      tags: ["Next.js", "Python / FastAPI", "Node.js", "PostgreSQL / pgvector", "AWS / Docker", "Tailwind"],
      metrics: "🚀 10x faster time-to-market | Enterprise enterprise-grade scalability",
      accent: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
      icon: "cpu"
    },
    {
      id: "chatbots",
      title: "Autonomous AI Chatbots & RAG Agents",
      badge: "Agentic AI",
      description: "Custom conversational AI fine-tuned on your proprietary data. Omnichannel support on Shopify, HubSpot, WhatsApp, and Web with autonomous order lookups and lead qualification.",
      tags: ["OpenAI / Claude APIs", "LangChain / LlamaIndex", "Vector DBs", "RAG Pipeline", "Omnichannel"],
      metrics: "🤖 84% support ticket resolution without human handoff",
      accent: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
      icon: "bot"
    },
    {
      id: "modern-web",
      title: "Performance Web & Custom Software",
      badge: "Core Engineering",
      description: "Pixel-perfect modern digital experiences matching the calibre of world-class agencies. 100/100 Core Web Vitals, ultra-responsive motion, and bulletproof security.",
      tags: ["TypeScript", "Micro-frontends", "GraphQL / REST", "CI/CD DevOps", "SEO Architecture"],
      metrics: "🌟 98+ PageSpeed rating | WCAG AA Accessible",
      accent: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
      icon: "code"
    }
  ],
  ecosystem: [
    { name: "Shopify Plus", icon: "shopping-cart" },
    { name: "HubSpot", icon: "activity" },
    { name: "OpenAI GPT-4", icon: "cpu" },
    { name: "Anthropic Claude", icon: "zap" },
    { name: "Next.js 14", icon: "globe" },
    { name: "TypeScript", icon: "terminal" },
    { name: "Python FastAPI", icon: "server" },
    { name: "PostgreSQL & pgvector", icon: "database" },
    { name: "AWS Cloud", icon: "cloud" },
    { name: "Tailwind CSS", icon: "palette" }
  ],
  caseStudies: [
    {
      title: "LuxEcom Global — Headless Shopify Plus Migration",
      category: "Shopify Plus & Headless",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Re-platformed a luxury apparel brand from legacy Magento to headless Shopify Plus with Hydrogen, achieving sub-second page transitions across 14 global territories.",
      results: [
        { metric: "+46%", label: "Conversion Rate" },
        { metric: "0.7s", label: "Mobile LCP" },
        { metric: "$18M", label: "Annual GMV" }
      ]
    },
    {
      title: "OmniHealth CRM — HubSpot RevOps & AI Data Engine",
      category: "HubSpot & Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Architected a custom bi-directional data bridge connecting HubSpot Enterprise with EHR health data and automated predictive lead scoring pipelines.",
      results: [
        { metric: "62%", label: "Shorter Sales Cycle" },
        { metric: "3.4x", label: "Inbound Pipeline" },
        { metric: "100%", label: "HIPAA Compliant" }
      ]
    },
    {
      title: "FlowMind AI — Autonomous E-commerce Support Agent",
      category: "AI SaaS & Chatbot",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "Deployed custom RAG chatbot trained on catalog specs and order databases, dynamically handling order tracking, refunds, and cart recovery.",
      results: [
        { metric: "81%", label: "Deflection Rate" },
        { metric: "< 2s", label: "Avg Response Time" },
        { metric: "+$340k", label: "Cart Recovery" }
      ]
    },
    {
      title: "FinMatrix SaaS — High-Throughput Analytics Dashboard",
      category: "Custom Web & Software",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description: "Engineered a real-time portfolio tracking application with micro-frontend architecture, sub-millisecond WebSocket streaming, and automated financial reporting.",
      results: [
        { metric: "100k+", label: "Active Users" },
        { metric: "99.99%", label: "Uptime" },
        { metric: "4.9/5", label: "Client CSAT" }
      ]
    }
  ],
  pricingTiers: [
    {
      name: "Starter Velocity",
      scope: "Shopify Store or HubSpot Setup",
      price: "$4,500 - $7,500",
      timeline: "2-3 Weeks",
      features: [
        "Custom UI/UX Designed Store or Portal",
        "Full Platform Integration & Tracking",
        "Mobile & Core Web Vitals Optimization",
        "Basic AI Chatbot integration",
        "30-day Post-Launch Warranty"
      ]
    },
    {
      name: "Growth Engine",
      scope: "Full-Stack Shopify + HubSpot + AI Agent",
      price: "$9,500 - $16,000",
      popular: true,
      timeline: "4-6 Weeks",
      features: [
        "Headless / Custom Liquid Architecture",
        "HubSpot Enterprise RevOps & Custom CRM",
        "Custom Autonomous AI Support Bot (RAG)",
        "Advanced Analytics & Dynamic Personalization",
        "Dedicated Engineering Team Lead",
        "Priority Support & SLA"
      ]
    },
    {
      name: "Custom Enterprise",
      scope: "Proprietary AI SaaS & Scaled Software",
      price: "Custom Scope",
      timeline: "Tailored Roadmap",
      features: [
        "Full Multi-Tenant SaaS Cloud Infrastructure",
        "Proprietary AI Model Fine-Tuning & Vector DB",
        "Enterprise Security & Role-Based Auth",
        "Global CDN & Multi-Region Database",
        "Continuous DevOps & Ongoing Engineering"
      ]
    }
  ]
};
