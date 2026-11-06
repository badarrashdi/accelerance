import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'HubSpot CRM, RevOps & Marketing Automation | Accelerance Tech Pvt. Ltd.',
  description: 'Synchronized revenue operations, automated sales pipelines, and bidirectional CRM data integrations.',
  alternates: {
    canonical: 'https://accelerance.tech/services/hubspot-revops-crm/',
  },
  openGraph: {
    title: 'HubSpot CRM, RevOps & Marketing Automation | Accelerance Tech',
    description: 'Synchronized revenue operations, automated sales pipelines, and bidirectional CRM data integrations.',
    url: 'https://accelerance.tech/services/hubspot-revops-crm/',
  },
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "crm-marketing-automation");
  return <ServiceDetailTemplate service={service} />;
}
