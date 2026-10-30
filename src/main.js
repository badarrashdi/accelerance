import './styles/main.css';
import { siteData } from './data/content.js';
import confetti from 'canvas-confetti';

const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="badge-pill">
            <span class="pulse-dot"></span>
            Accelerance Tech Engineering Studio
          </div>
          <h1>
            We Build Fast. <br />
            We Build Smart. <br />
            <span class="text-gradient">We Accelerate Growth.</span>
          </h1>
          <p class="hero-subtitle">
            Unlike generalist agencies, we concentrate our mastery on high-impact disciplines: 
            <strong>Shopify Plus Headless</strong>, <strong>HubSpot RevOps</strong>, 
            <strong>Custom AI SaaS Products</strong>, and <strong>Autonomous Chatbots</strong>.
          </p>
          <div class="hero-cta-group">
            <a href="#contact" class="btn btn-primary" id="heroCtaPrimary">
              <span>Start Your Build</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#ai-demo" class="btn btn-secondary" id="heroCtaSecondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>Test Our AI Bot</span>
            </a>
          </div>

          <div class="hero-stats">
            ${siteData.stats.map(s => `
              <div class="stat-item">
                <h4 class="stat-counter" data-target="${s.value}">${s.value}</h4>
                <p>${s.label}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Interactive 3D/Glass Hero Visual -->
        <div class="hero-visual">
          <div class="floating-chip chip-1">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: #10B981; box-shadow: 0 0 10px #10B981;"></div>
            <div>
              <div style="font-size: 0.75rem; color: #94A3B8;">Shopify Conversion</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #F8FAFC;">+38.4% Lift</div>
            </div>
          </div>

          <div class="floating-chip chip-2">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: #8B5CF6; box-shadow: 0 0 10px #8B5CF6;"></div>
            <div>
              <div style="font-size: 0.75rem; color: #94A3B8;">Autonomous AI Agent</div>
              <div style="font-size: 0.95rem; font-weight: 700; color: #F8FAFC;">84% Automated</div>
            </div>
          </div>

          <div class="hero-mockup-wrapper">
            <div class="mockup-header">
              <div class="mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="mockup-title">accelerance-core-engine.ts</div>
              <span style="font-size: 0.7rem; color: #10B981; font-family: monospace;">● LIVE PIPELINE</span>
            </div>
            
            <div class="code-preview" style="font-family: 'JetBrains Mono', monospace; font-size: 0.84rem; line-height: 1.7; color: #CBD5E1;">
              <p><span style="color: #F43F5E;">import</span> { <span style="color: #38BDF8;">ShopifyEngine</span> } <span style="color: #F43F5E;">from</span> <span style="color: #FDE047;">'@accelerance/commerce'</span>;</p>
              <p><span style="color: #F43F5E;">import</span> { <span style="color: #38BDF8;">HubSpotRevOps</span> } <span style="color: #F43F5E;">from</span> <span style="color: #FDE047;">'@accelerance/crm'</span>;</p>
              <p><span style="color: #F43F5E;">import</span> { <span style="color: #38BDF8;">RAGAgent</span> } <span style="color: #F43F5E;">from</span> <span style="color: #FDE047;">'@accelerance/ai'</span>;</p>
              <br/>
              <p><span style="color: #64748B;">// Real-time autonomous multi-channel execution</span></p>
              <p><span style="color: #818CF8;">export async function</span> <span style="color: #38BDF8;">accelerateEnterprise</span>(client) {</p>
              <p style="padding-left: 1.2rem;"><span style="color: #818CF8;">const</span> store = <span style="color: #F43F5E;">await</span> ShopifyEngine.deployHeadless({ speed: <span style="color: #A78BFA;">'sub-second'</span> });</p>
              <p style="padding-left: 1.2rem;"><span style="color: #818CF8;">const</span> crm = <span style="color: #F43F5E;">await</span> HubSpotRevOps.syncDataLake(store.events);</p>
              <p style="padding-left: 1.2rem;"><span style="color: #818CF8;">const</span> bot = <span style="color: #F43F5E;">await</span> RAGAgent.initializeAssistant({ model: <span style="color: #A78BFA;">'claude-3-5'</span> });</p>
              <p style="padding-left: 1.2rem;"><span style="color: #F43F5E;">return</span> { status: <span style="color: #10B981;">'200_OPTIMIZED'</span>, roiMultiplier: <span style="color: #EC4899;">4.8</span> };</p>
              <p>}</p>
            </div>

            <!-- Visual interactive health meter -->
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(5, 7, 13, 0.7); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.5rem;">
                <span style="color: #94A3B8;">System Throughput &amp; Vitals</span>
                <span style="color: #38BDF8; font-weight: 700;">100 / 100 PageSpeed</span>
              </div>
              <div style="width: 100%; height: 6px; background: rgba(255, 255, 255, 0.1); border-radius: 3px; overflow: hidden;">
                <div style="width: 98%; height: 100%; background: linear-gradient(90deg, #10B981, #06B6D4, #6366F1); border-radius: 3px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Marquee Ticker -->
    <div class="tech-marquee-section">
      <div class="marquee-title">Powers High-Growth Brands With The Modern Stack</div>
      <div class="marquee-wrapper">
        <div class="marquee-track" id="marqueeTrack">
          ${[...siteData.ecosystem, ...siteData.ecosystem].map(item => `
            <div class="marquee-item">
              <span style="display:inline-block; width: 8px; height: 8px; border-radius: 50%; background: #38BDF8;"></span>
              <span>${item.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Specialized Services Section -->
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-head">
          <div class="badge-pill">Focused Expertise</div>
          <h2>We Don't Do Everything. <br/><span class="text-gradient">We Do These 5 Exceptionally Well.</span></h2>
          <p>Generalist agencies stretch thin across 50 services. Accelerance Tech zeroes in on the tech stacks that generate revenue, automate workflows, and retain customers.</p>
        </div>

        <div class="services-grid">
          ${siteData.services.map((srv, idx) => `
            <div class="glass-panel service-card ${idx === 0 || idx === 1 ? 'span-2' : ''}" style="--card-accent: ${srv.accent};">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <div class="service-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      ${getIconSvg(srv.id)}
                    </svg>
                  </div>
                  <span class="tag-badge" style="color: #38BDF8; border-color: rgba(56, 189, 248, 0.3);">${srv.badge}</span>
                </div>
                <h3>${srv.title}</h3>
                <p>${srv.description}</p>
              </div>

              <div>
                <div style="margin-bottom: 1.2rem; font-size: 0.88rem; font-weight: 600; color: #F1F5F9; background: rgba(255, 255, 255, 0.04); padding: 0.6rem 0.9rem; border-radius: 8px; border-left: 3px solid #6366F1;">
                  ${srv.metrics}
                </div>
                <div class="tech-tags">
                  ${srv.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Deep-Dive Interactive Specialization Section -->
    <section class="specialization-section" id="specialization" style="background: rgba(8, 11, 20, 0.5);">
      <div class="container">
        <div class="section-head">
          <div class="badge-pill">Architectural Edge</div>
          <h2>How Accelerance Outperforms Standard Agencies</h2>
          <p>See why high-growth brands and SaaS creators choose our specialized engineering pods.</p>
        </div>

        <div class="matrix-tabs">
          <button class="tab-btn active" data-tab="tab-shopify">Shopify Plus Headless</button>
          <button class="tab-btn" data-tab="tab-hubspot">HubSpot RevOps Engine</button>
          <button class="tab-btn" data-tab="tab-ai">AI SaaS &amp; Microservices</button>
          <button class="tab-btn" data-tab="tab-chatbots">RAG Chatbots</button>
        </div>

        <div class="tab-content-wrapper">
          <!-- Tab 1: Shopify -->
          <div class="tab-pane active glass-panel spotlight-card" id="tab-shopify">
            <div>
              <span class="tag-badge" style="color:#10B981; margin-bottom:1rem; display:inline-block;">E-COMMERCE DOMINANCE</span>
              <h3 style="font-size: 2.2rem; margin-bottom: 1.2rem;">Headless Shopify Plus That Converts at Scale</h3>
              <p style="margin-bottom: 1.5rem;">
                Traditional Liquid themes bloat with dozens of apps. We build blazing-fast headless Hydrogen architectures with Next.js edge caching, custom checkout extensions, and real-time inventory synchronization.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #10B981;">✔</span> Instant sub-second page transitions increasing mobile checkout completions
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #10B981;">✔</span> Custom private Shopify apps connecting ERP, Netsuite, &amp; 3PL logistics
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #10B981;">✔</span> Custom Cart and checkout UI extensions with dynamic one-click upsells
                </li>
              </ul>
              <a href="#contact" class="btn btn-primary btn-sm">Discuss Shopify Architecture</a>
            </div>
            <div>
              <div style="background: #0A0D18; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1.25rem;">
                  <span style="font-size: 0.85rem; color: #94A3B8;">Shopify Benchmark Audit</span>
                  <span style="color: #10B981; font-weight: 700;">Top 1% Global Tier</span>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 800; color: #38BDF8;">0.65s</div>
                    <div style="font-size: 0.78rem; color: #94A3B8;">Largest Contentful Paint</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 800; color: #10B981;">+44%</div>
                    <div style="font-size: 0.78rem; color: #94A3B8;">Average Order Value</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 800; color: #EC4899;">0.00</div>
                    <div style="font-size: 0.78rem; color: #94A3B8;">Cumulative Layout Shift</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px;">
                    <div style="font-size: 1.8rem; font-weight: 800; color: #A78BFA;">99.99%</div>
                    <div style="font-size: 0.78rem; color: #94A3B8;">Checkout Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 2: HubSpot -->
          <div class="tab-pane glass-panel spotlight-card" id="tab-hubspot">
            <div>
              <span class="tag-badge" style="color:#FF7A59; margin-bottom:1rem; display:inline-block;">REVOPS &amp; CRM INTELLIGENCE</span>
              <h3 style="font-size: 2.2rem; margin-bottom: 1.2rem;">HubSpot Integrated Directly Into Your Stack</h3>
              <p style="margin-bottom: 1.5rem;">
                No more siloed sales leads or broken spreadsheets. We engineer deep API integrations between HubSpot CRM, your product database, payment gateways, and marketing analytics.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #FF7A59;">✔</span> Bi-directional webhook sync between customer app &amp; HubSpot CRM
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #FF7A59;">✔</span> Custom HubSpot CMS modules and serverless functions
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #FF7A59;">✔</span> Automated lifecycle triggers based on actual product telemetry
                </li>
              </ul>
              <a href="#contact" class="btn btn-primary btn-sm">Schedule RevOps Audit</a>
            </div>
            <div>
              <div style="background: #0A0D18; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 1.5rem;">
                <div style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 1rem;">Automated RevOps Pipeline Flow</div>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <div style="padding: 0.75rem; background: rgba(255, 122, 89, 0.1); border-left: 3px solid #FF7A59; border-radius: 6px; font-size: 0.88rem;">
                    <strong>Event:</strong> Web App Signup / Cart Abandonment Triggered
                  </div>
                  <div style="padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-left: 3px solid #6366F1; border-radius: 6px; font-size: 0.88rem;">
                    <strong>Process:</strong> AI Lead Enrichment &amp; Scoring Matrix Computed
                  </div>
                  <div style="padding: 0.75rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10B981; border-radius: 6px; font-size: 0.88rem;">
                    <strong>Action:</strong> Deal Auto-Assigned to AE with Custom Briefing Dossier
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 3: AI SaaS -->
          <div class="tab-pane glass-panel spotlight-card" id="tab-ai">
            <div>
              <span class="tag-badge" style="color:#8B5CF6; margin-bottom:1rem; display:inline-block;">PRODUCT INNOVATION</span>
              <h3 style="font-size: 2.2rem; margin-bottom: 1.2rem;">Full-Stack AI SaaS Products Built for Velocity</h3>
              <p style="margin-bottom: 1.5rem;">
                We turn AI concepts into bulletproof commercial SaaS platforms. From multi-tenant authentication, Stripe billing, LLM orchestration, and vector indexing, we handle the entire engineering lifecycle.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #8B5CF6;">✔</span> Python FastAPI + Next.js full-stack architectures
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #8B5CF6;">✔</span> PostgreSQL + pgvector &amp; Pinecone semantic embeddings
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #8B5CF6;">✔</span> Token-usage tracking, rate-limiting, and Stripe subscription tiering
                </li>
              </ul>
              <a href="#contact" class="btn btn-primary btn-sm">Build Your AI SaaS</a>
            </div>
            <div>
              <div style="background: #0A0D18; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 1.5rem;">
                <div style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 1rem;">SaaS Cloud Architecture</div>
                <div style="display: flex; flex-direction: column; gap: 0.6rem; font-family: monospace; font-size: 0.82rem;">
                  <div style="padding: 0.6rem; background: rgba(59, 130, 246, 0.15); border-radius: 6px; color: #93C5FD;">▲ Client: Next.js Edge + Tailwind V4 UI</div>
                  <div style="text-align: center; color: #64748B;">│ (REST / WebSockets)</div>
                  <div style="padding: 0.6rem; background: rgba(139, 92, 246, 0.15); border-radius: 6px; color: #C4B5FD;">⚙ API: FastAPI Microservices + Celery Worker</div>
                  <div style="text-align: center; color: #64748B;">│ (Semantic Vectors)</div>
                  <div style="padding: 0.6rem; background: rgba(236, 72, 153, 0.15); border-radius: 6px; color: #F472B6;">● Storage: PostgreSQL + pgvector + Redis Cache</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 4: Chatbots -->
          <div class="tab-pane glass-panel spotlight-card" id="tab-chatbots">
            <div>
              <span class="tag-badge" style="color:#06B6D4; margin-bottom:1rem; display:inline-block;">AGENTIC WORKFLOWS</span>
              <h3 style="font-size: 2.2rem; margin-bottom: 1.2rem;">Custom RAG Chatbots That Actually Solve Problems</h3>
              <p style="margin-bottom: 1.5rem;">
                Forget dumb canned chatbots. Accelerance builds intelligent agentic chatbots grounded in your enterprise knowledge base that can query live inventories, verify order statuses, and close sales.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #06B6D4;">✔</span> Zero-hallucination guardrails with citation-backed responses
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #06B6D4;">✔</span> Native integration into Shopify orders, HubSpot tickets, and Zendesk
                </li>
                <li style="display: flex; gap: 0.75rem; align-items: center; color: #CBD5E1;">
                  <span style="color: #06B6D4;">✔</span> Omnichannel deployment: Web widget, WhatsApp, Instagram, and SMS
                </li>
              </ul>
              <a href="#ai-demo" class="btn btn-primary btn-sm">Try Interactive Demo</a>
            </div>
            <div>
              <div style="background: #0A0D18; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 1.5rem; text-align: center;">
                <div style="font-size: 2.4rem; font-weight: 800; color: #06B6D4;">84%</div>
                <div style="font-size: 0.95rem; color: #F8FAFC; font-weight: 600; margin-bottom: 0.5rem;">First-Touch Resolution Rate</div>
                <p style="font-size: 0.85rem; color: #94A3B8;">Trained on over 100k+ customer transactions with strict compliance filters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive AI Chatbot Simulator Widget Section -->
    <section class="ai-demo-section" id="ai-demo">
      <div class="container">
        <div class="section-head">
          <div class="badge-pill">Live Interactive Lab</div>
          <h2>Experience the Accelerance AI Agent</h2>
          <p>Test out a live simulation of our conversational AI engine. Ask about Shopify solutions, HubSpot integrations, or project delivery timeframes.</p>
        </div>

        <div style="max-width: 760px; margin: 0 auto;">
          <div class="chatbot-demo-container">
            <div class="chat-header">
              <div class="chat-agent-info">
                <div class="chat-avatar">AT</div>
                <div>
                  <div style="font-size: 0.95rem; font-weight: 700; color: #FFFFFF;">Accelerance AI Concierge</div>
                  <div style="font-size: 0.75rem; color: #10B981; display: flex; align-items: center; gap: 4px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: #10B981;"></span> Online • RAG Engine Connected
                  </div>
                </div>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary btn-sm" id="resetChatBtn" style="padding: 0.3rem 0.7rem; font-size: 0.75rem;">Clear Chat</button>
              </div>
            </div>

            <div class="chat-body" id="chatBody">
              <div class="chat-msg bot">
                👋 Welcome to Accelerance Tech! I am your AI solution architect. What is your primary objective today? (e.g. <em>"We need a Shopify Plus redesign"</em> or <em>"How do you integrate HubSpot with our AI SaaS?"</em>)
              </div>
            </div>

            <!-- Quick Suggestion Prompt Chips -->
            <div style="padding: 0.5rem 1rem; display: flex; gap: 0.5rem; overflow-x: auto; background: rgba(11, 14, 25, 0.9);">
              <button class="tag-badge chat-chip" data-prompt="How fast can you build a headless Shopify Plus store?">⚡ Headless Shopify Speed</button>
              <button class="tag-badge chat-chip" data-prompt="Can you integrate HubSpot CRM with our custom database?">📊 HubSpot CRM Sync</button>
              <button class="tag-badge chat-chip" data-prompt="What tech stack do you use for AI SaaS apps?">🤖 AI SaaS Stack</button>
              <button class="tag-badge chat-chip" data-prompt="How does your chatbot handle order returns?">📦 Chatbot Order Lookup</button>
            </div>

            <form class="chat-input-bar" id="chatForm">
              <input type="text" id="chatInput" placeholder="Ask about services, tech stack, or get an instant solution preview..." autocomplete="off" />
              <button type="submit" class="btn btn-primary btn-sm" style="padding: 0.65rem 1.25rem;">
                <span>Send</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies / Featured Work -->
    <section class="case-studies-section" id="case-studies">
      <div class="container">
        <div class="section-head">
          <div class="badge-pill">Proven Results</div>
          <h2>Featured Case Studies</h2>
          <p>Real-world engineering triumphs for high-scaling brands and venture-backed SaaS startups.</p>
        </div>

        <div class="case-study-grid">
          ${siteData.caseStudies.map(cs => `
            <div class="case-card">
              <div class="case-image-wrapper">
                <img src="${cs.image}" alt="${cs.title}" class="case-img" loading="lazy" />
                <span class="case-overlay-tag">${cs.category}</span>
              </div>
              <div class="case-info">
                <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">${cs.title}</h3>
                <p style="font-size: 0.95rem; line-height: 1.6;">${cs.description}</p>
                <div class="case-metrics-bar">
                  ${cs.results.map(r => `
                    <div>
                      <div class="case-metric-number">${r.metric}</div>
                      <div class="case-metric-label">${r.label}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Interactive Project Scope & Cost Estimator Calculator -->
    <section class="estimator-section" id="estimator">
      <div class="container">
        <div class="section-head">
          <div class="badge-pill">Transparent Planning</div>
          <h2>Interactive Project Estimator</h2>
          <p>Select your scope and requirements to calculate estimated timelines and engineering investment.</p>
        </div>

        <div class="estimator-card">
          <div class="estimator-grid">
            <div>
              <div class="form-group">
                <label>1. Primary Discipline</label>
                <select id="estimatorDiscipline" style="width: 100%; padding: 0.85rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; color: white;">
                  <option value="shopify">Shopify Plus / Headless Commerce Store</option>
                  <option value="hubspot">HubSpot Enterprise RevOps &amp; CRM Architecture</option>
                  <option value="ai-saas">Custom AI SaaS Web Application</option>
                  <option value="chatbot">Enterprise RAG Chatbot &amp; Agentic System</option>
                  <option value="full-stack">Full Digital Ecosystem (Store + CRM + AI)</option>
                </select>
              </div>

              <div class="form-group">
                <label>2. Project Scale &amp; Complexity</label>
                <select id="estimatorScale" style="width: 100%; padding: 0.85rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; color: white;">
                  <option value="mvp">Fast Launch / MVP Launch (Speed Focused)</option>
                  <option value="scale" selected>Scaling Brand / Mid-Market (Comprehensive)</option>
                  <option value="enterprise">Global Enterprise (Multi-region &amp; Custom ERP)</option>
                </select>
              </div>

              <div class="form-group">
                <label>3. Desired Delivery Speed</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: normal; font-size: 0.9rem; cursor: pointer;">
                    <input type="radio" name="speed" value="standard" checked /> Standard (4-6 weeks)
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: normal; font-size: 0.9rem; cursor: pointer;">
                    <input type="radio" name="speed" value="rush" /> Sprint Velocity (2-3 weeks)
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label>4. Key Add-ons</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer;">
                    <input type="checkbox" id="addonSeo" checked /> Full SEO &amp; Core Vitals Audit
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer;">
                    <input type="checkbox" id="addonRag" checked /> Custom RAG AI Bot Included
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer;">
                    <input type="checkbox" id="addonCrm" /> Custom HubSpot Sync
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer;">
                    <input type="checkbox" id="addonSla" /> 90-Day Priority SLA Support
                  </label>
                </div>
              </div>
            </div>

            <div class="estimator-output-box">
              <span class="tag-badge" style="color: #10B981; border-color: rgba(16, 185, 129, 0.4);">ESTIMATED RANGE</span>
              <div class="estimated-price" id="calcPrice">$9,500 - $14,000</div>
              <div style="font-size: 0.95rem; color: #94A3B8; margin-bottom: 1.5rem;" id="calcTimeline">Estimated Sprint: 4 to 6 weeks</div>
              
              <p style="font-size: 0.85rem; color: #64748B; margin-bottom: 2rem;">
                Includes UI/UX wireframes, dedicated project lead, clean architecture documentation, and production deployment guarantee.
              </p>

              <button class="btn btn-primary" id="lockInEstimateBtn" style="width: 100%;">
                <span>Lock In This Estimate</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Consultation Booking -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div>
            <div class="badge-pill">Let's Connect</div>
            <h2 style="font-size: 2.8rem; margin-bottom: 1.25rem;">Ready to Accelerate Your Digital Platform?</h2>
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2.5rem;">
              Whether you need to scale Shopify store sales, automate lead handoff via HubSpot, or build a bespoke AI SaaS, our lead engineers are ready to scope your roadmap.
            </p>

            <div class="contact-info-list">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style="font-size: 0.8rem; color: #94A3B8; text-transform: uppercase;">Direct Engineering Desk</div>
                  <div style="font-size: 1.1rem; font-weight: 600; color: #FFFFFF;">sales@accelerance.in</div>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div style="font-size: 0.8rem; color: #94A3B8; text-transform: uppercase;">Response Time Guarantee</div>
                  <div style="font-size: 1.1rem; font-weight: 600; color: #10B981;">Guaranteed reply within 4 business hours</div>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div style="font-size: 0.8rem; color: #94A3B8; text-transform: uppercase;">Confidentiality</div>
                  <div style="font-size: 1.1rem; font-weight: 600; color: #FFFFFF;">Strict Mutual NDA before code disclosure</div>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-panel contact-form-panel">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.6rem;">Book a Technical Discovery Session</h3>
            <p style="font-size: 0.92rem; margin-bottom: 2rem;">Fill in your requirements below for a detailed architecture audit.</p>

            <form id="contactForm" class="contact-form">
              <div class="input-row">
                <div>
                  <input type="text" id="contactName" placeholder="Your Name *" required />
                </div>
                <div>
                  <input type="email" id="contactEmail" placeholder="Work Email *" required />
                </div>
              </div>

              <div class="input-row">
                <div>
                  <input type="text" id="contactCompany" placeholder="Company / Website" />
                </div>
                <div>
                  <select id="contactService" required>
                    <option value="" disabled selected>Primary Service Needed *</option>
                    <option value="Shopify Plus">Shopify Plus / Headless Store</option>
                    <option value="HubSpot RevOps">HubSpot RevOps &amp; CRM Sync</option>
                    <option value="AI SaaS">Custom AI SaaS Product</option>
                    <option value="AI Chatbot">Autonomous RAG Chatbot</option>
                    <option value="Custom Software">Modern Web &amp; Software Engineering</option>
                  </select>
                </div>
              </div>

              <div style="margin-bottom: 1.25rem;">
                <textarea id="contactMessage" rows="4" placeholder="Tell us about your project goals, timelines, and current tech stack..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem;" id="submitContactBtn">
                <span>Request Project Proposal</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="/brand/logo.svg" alt="Accelerance Tech" style="height: 38px; width: auto;" />
            <p>Accelerance Tech is a dedicated digital engineering practice delivering elite Shopify, HubSpot, AI SaaS, and custom software systems globally.</p>
            <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
              <span class="tag-badge" style="color: #10B981;">● Shopify Plus Partner</span>
              <span class="tag-badge" style="color: #FF7A59;">● HubSpot Solutions</span>
            </div>
          </div>

          <div class="footer-col">
            <h5>Core Focus</h5>
            <ul class="footer-links">
              <li><a href="#services">Shopify Plus Headless</a></li>
              <li><a href="#services">HubSpot RevOps &amp; CRM</a></li>
              <li><a href="#services">AI SaaS Architectures</a></li>
              <li><a href="#services">Autonomous RAG Bots</a></li>
              <li><a href="#services">Modern Web Applications</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Ecosystem</h5>
            <ul class="footer-links">
              <li><a href="#specialization">Next.js 14 &amp; React</a></li>
              <li><a href="#specialization">Python &amp; FastAPI</a></li>
              <li><a href="#specialization">Vector Embeddings (RAG)</a></li>
              <li><a href="#specialization">PostgreSQL &amp; Redis</a></li>
              <li><a href="#specialization">Shopify Hydrogen API</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Agency</h5>
            <ul class="footer-links">
              <li><a href="#hero">About Accelerance</a></li>
              <li><a href="#case-studies">Client Work</a></li>
              <li><a href="#estimator">Cost Calculator</a></li>
              <li><a href="#contact">Schedule Audit</a></li>
              <li><a href="#contact">Careers &amp; Engineering</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} Accelerance Tech LLC. All rights reserved.
          </div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  initInteractiveFeatures();
}

function getIconSvg(id) {
  switch(id) {
    case 'shopify':
      return '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>';
    case 'hubspot':
      return '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>';
    case 'ai-saas':
      return '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>';
    case 'chatbots':
      return '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>';
    default:
      return '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>';
  }
}

function initInteractiveFeatures() {
  // Sticky Header Scroll effect
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Interactive Cursor Follower
  const cursorFollower = document.getElementById('cursorFollower');
  if (cursorFollower && window.innerWidth > 992) {
    document.addEventListener('mousemove', (e) => {
      cursorFollower.style.opacity = '1';
      cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    document.addEventListener('mouseleave', () => {
      cursorFollower.style.opacity = '0';
    });
  }

  // Matrix Tabs Navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add('active');
    });
  });

  // Chatbot Lab Interaction
  initChatbotLab();

  // Project Estimator Calculation
  initEstimator();

  // Contact Form Submission Handler
  initContactForm();

  // Floating AI Trigger
  const floatingTrigger = document.getElementById('floatingAiTrigger');
  if (floatingTrigger) {
    floatingTrigger.addEventListener('click', () => {
      const demoSection = document.getElementById('ai-demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
        const chatInput = document.getElementById('chatInput');
        if (chatInput) setTimeout(() => chatInput.focus(), 600);
      }
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const nav = document.querySelector('.nav-links');
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#0A0C16';
        nav.style.padding = '1.5rem';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });
  }
}

function initChatbotLab() {
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  const resetBtn = document.getElementById('resetChatBtn');
  const chips = document.querySelectorAll('.chat-chip');

  const botResponses = [
    {
      keywords: ['shopify', 'store', 'ecommerce', 'checkout', 'headless'],
      reply: '⚡ For Shopify Plus, Accelerance develops custom Hydrogen/Next.js headless frontends, private apps for ERP synchronization, and checkout UI extensions with 1-click upsells. We consistently achieve 0.6-0.8s load times and +35% conversions.'
    },
    {
      keywords: ['hubspot', 'crm', 'revops', 'pipeline', 'sync'],
      reply: '📊 Our HubSpot RevOps team builds direct webhooks and bi-directional synchronizations with your product databases, customer events, and payment processors. We also engineer custom HubSpot CMS modules and automated lead scoring.'
    },
    {
      keywords: ['ai', 'saas', 'llm', 'rag', 'chatbot', 'gpt', 'claude'],
      reply: '🤖 We build enterprise-grade AI SaaS architectures utilizing Next.js, Python FastAPI, pgvector/Pinecone vector databases, and multi-tenant authentication. Our chatbots feature verifiable grounding, eliminating hallucinations.'
    },
    {
      keywords: ['cost', 'pricing', 'price', 'rate', 'quote', 'estimate'],
      reply: '💼 Accelerance projects typically range from $4,500 (starter setup/store sprint) to $15,000+ (comprehensive headless ecosystem + custom AI agents). You can also use our interactive Project Estimator section below!'
    },
    {
      keywords: ['time', 'timeline', 'how long', 'weeks', 'duration'],
      reply: '⏱️ Most builds launch in 3 to 6 weeks. We work in dedicated engineering sprints with weekly code releases and live staging environments.'
    }
  ];

  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleQuery(queryText) {
    if (!queryText.trim()) return;
    appendMessage('user', queryText);
    chatInput.value = '';

    // Simulate bot thinking
    const thinking = document.createElement('div');
    thinking.className = 'chat-msg bot';
    thinking.innerHTML = '<em>Thinking with RAG context...</em>';
    chatBody.appendChild(thinking);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      thinking.remove();
      const lower = queryText.toLowerCase();
      let matched = botResponses.find(item => item.keywords.some(k => lower.includes(k)));
      if (matched) {
        appendMessage('bot', matched.reply);
      } else {
        appendMessage('bot', `✨ That's a great scope! Accelerance Tech specializes in this exact engineering workflow. We combine modern Web/TypeScript, specialized Shopify/HubSpot APIs, and high-throughput AI agents. Would you like to schedule a technical discovery call with our team?`);
      }
    }, 700);
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleQuery(chatInput.value);
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      handleQuery(prompt);
    });
  });

  resetBtn.addEventListener('click', () => {
    chatBody.innerHTML = `
      <div class="chat-msg bot">
        👋 Chat cleared! How can our Accelerance engineering team help elevate your digital platform?
      </div>
    `;
  });
}

function initEstimator() {
  const discipline = document.getElementById('estimatorDiscipline');
  const scale = document.getElementById('estimatorScale');
  const speedInputs = document.querySelectorAll('input[name="speed"]');
  const addonSeo = document.getElementById('addonSeo');
  const addonRag = document.getElementById('addonRag');
  const addonCrm = document.getElementById('addonCrm');
  const addonSla = document.getElementById('addonSla');
  const priceDisplay = document.getElementById('calcPrice');
  const timelineDisplay = document.getElementById('calcTimeline');
  const lockInBtn = document.getElementById('lockInEstimateBtn');

  function calculate() {
    let baseMin = 4500;
    let baseMax = 7500;
    let weeksMin = 3;
    let weeksMax = 5;

    const disc = discipline.value;
    if (disc === 'shopify') {
      baseMin = 5000; baseMax = 9000;
    } else if (disc === 'hubspot') {
      baseMin = 4500; baseMax = 8000;
    } else if (disc === 'ai-saas') {
      baseMin = 8500; baseMax = 15000;
      weeksMin = 5; weeksMax = 8;
    } else if (disc === 'chatbot') {
      baseMin = 4000; baseMax = 7500;
      weeksMin = 2; weeksMax = 4;
    } else if (disc === 'full-stack') {
      baseMin = 14000; baseMax = 25000;
      weeksMin = 6; weeksMax = 10;
    }

    const sc = scale.value;
    if (sc === 'scale') {
      baseMin *= 1.4; baseMax *= 1.4;
      weeksMin += 1; weeksMax += 2;
    } else if (sc === 'enterprise') {
      baseMin *= 2.2; baseMax *= 2.2;
      weeksMin += 3; weeksMax += 4;
    }

    let isRush = false;
    speedInputs.forEach(i => { if (i.checked && i.value === 'rush') isRush = true; });
    if (isRush) {
      baseMin *= 1.25; baseMax *= 1.25;
      weeksMin = Math.max(2, Math.floor(weeksMin * 0.65));
      weeksMax = Math.max(3, Math.floor(weeksMax * 0.65));
    }

    if (addonSeo.checked) { baseMin += 800; baseMax += 1200; }
    if (addonRag.checked) { baseMin += 1800; baseMax += 2800; }
    if (addonCrm.checked) { baseMin += 1500; baseMax += 2200; }
    if (addonSla.checked) { baseMin += 1200; baseMax += 1800; }

    const formatCurrency = (val) => '$' + Math.round(val / 100) * 100;
    priceDisplay.textContent = `${formatCurrency(baseMin)} - ${formatCurrency(baseMax)}`;
    timelineDisplay.textContent = `Estimated Sprint: ${weeksMin} to ${weeksMax} weeks ${isRush ? '⚡ Rush Priority' : ''}`;
  }

  [discipline, scale, addonSeo, addonRag, addonCrm, addonSla].forEach(elem => {
    elem.addEventListener('change', calculate);
  });
  speedInputs.forEach(input => input.addEventListener('change', calculate));

  calculate();

  lockInBtn.addEventListener('click', () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const msgBox = document.getElementById('contactMessage');
      if (msgBox) {
        msgBox.value = `Hi Accelerance team, I calculated an estimate for [${discipline.options[discipline.selectedIndex].text} - ${scale.options[scale.selectedIndex].text}]. Estimated investment: ${priceDisplay.textContent}. Let's discuss details!`;
      }
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitContactBtn');
    btn.disabled = true;
    btn.innerHTML = `<span>Transmitting to Engineering Desk...</span>`;

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      form.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); border: 2px solid #10B981; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: #10B981;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-size: 1.8rem; margin-bottom: 0.8rem; color: #FFFFFF;">Project Brief Received!</h3>
          <p style="color: #94A3B8; font-size: 1rem; max-width: 440px; margin: 0 auto 1.5rem auto;">
            Thank you! A Principal Solutions Architect at Accelerance Tech will review your requirements and reach out within 4 business hours.
          </p>
          <button class="btn btn-secondary btn-sm" onclick="location.reload()">Send Another Message</button>
        </div>
      `;
    }, 900);
  });
}

renderApp();
