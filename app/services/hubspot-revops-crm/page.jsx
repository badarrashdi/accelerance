import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'HubSpot CRM, RevOps & Marketing Automation | Accelerance Tech',
  description: 'Synchronized revenue operations, automated sales pipelines, and bidirectional CRM data integrations.',
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "crm-marketing-automation");
  return <ServiceDetailTemplate service={service} />;
}
