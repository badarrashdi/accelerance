import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'Autonomous AI Agents, Chatbots & Automation | Accelerance Tech',
  description: 'Enterprise conversational AI, customer deflection bots, and automated business workflows.',
};

export default function Page() {
  const service = {
    slug: "ai-agents-chatbots",
    num: "AI",
    shortTitle: "AI & Automation",
    title: "Autonomous AI Agents, Chatbots & Intelligent Automation",
    tagline: "Deploy Zero-Hallucination Conversational AI that Resolves Real Customer Inquiries",
    category: "Operations & Intelligence",
    heroDesc: "Eliminate repetitive customer service overhead and automate mid-funnel operations with customized conversational AI bots grounded on your company data and live inventories.",
    overview: "Modern buyers expect answers within seconds, day or night. Traditional scripted rule-based chatbots frustrate users, while unchecked generative models risk hallucinations. We engineer enterprise-grade AI agents with retrieval-augmented generation (RAG) that read your product documentation, catalog inventories, and company policies to answer customer questions with citation-backed accuracy across Web, WhatsApp, and CRM.",
    whyItMatters: [
      {
        title: "84% Support Deflection",
        desc: "Resolve routine order status, delivery, and pricing inquiries automatically without burdening human staff."
      },
      {
        title: "Under-2-Second Response",
        desc: "Instantaneous customer assistance across every digital channel, eliminating abandonment caused by wait times."
      },
      {
        title: "24/7 Lead Qualification",
        desc: "Capture and qualify inbound prospects even during off-hours, booking sales calls directly into your calendar."
      },
      {
        title: "Zero-Hallucination Guardrails",
        desc: "Strict domain grounding ensures the AI only cites verified information from your database."
      }
    ],
    capabilities: [
      {
        name: "Enterprise RAG Pipelines",
        desc: "Vector databases indexing PDF manuals, contracts, and product specifications for verified retrieval."
      },
      {
        name: "WhatsApp Business Cloud AI",
        desc: "Official WhatsApp Business API bots for order tracking, catalog browsing, and instant quoting."
      },
      {
        name: "CRM & ERP Two-Way Sync",
        desc: "AI bots that create deals, update ticket statuses, and log transcripts directly in HubSpot or Salesforce."
      },
      {
        name: "Custom Internal Knowledge Agents",
        desc: "Private internal assistants that allow your employees to query company SOPs, HR guidelines, and technical codebases."
      }
    ],
    methodology: [
      {
        step: "01",
        name: "Knowledge Audit & Ingestion",
        desc: "We collect and curate your documentation, FAQs, and product catalogs into structured vector embeddings."
      },
      {
        step: "02",
        name: "Prompt Engineering & Guardrails",
        desc: "We establish brand tone of voice, define strict boundaries, and test edge cases to prevent unwanted outputs."
      },
      {
        step: "03",
        name: "Integration & API Bridges",
        desc: "We connect the AI agent to your WhatsApp Business account, live chat widget, and backend CRM databases."
      },
      {
        step: "04",
        name: "Continuous Evaluation",
        desc: "Human-in-the-loop audit loops and response evaluation to systematically improve answer accuracy over time."
      }
    ],
    faqs: [
      {
        q: "How do you prevent the AI from making up inaccurate information?",
        a: "We implement Retrieval-Augmented Generation (RAG) with strict semantic constraints: if the user's question cannot be answered from your verified knowledge base, the bot politely falls back to human agent handoff."
      },
      {
        q: "Can the AI bot interact with users over WhatsApp?",
        a: "Yes. We are certified WhatsApp Cloud API integrators, enabling verified green-badge business bots to field inquiries and send transactional updates."
      }
    ],
    relatedCaseStudyIds: ["mybooksfactory", "deluxe-umrah"]
  };

  return <ServiceDetailTemplate service={service} />;
}
