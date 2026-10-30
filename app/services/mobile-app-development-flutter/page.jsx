import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'Mobile App Development (iOS & Android) | Accelerance Tech',
  description: 'Native 60 FPS mobile apps, cross-platform architecture, and cloud microservices engineered for high retention.',
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "mobile-app-development");
  return <ServiceDetailTemplate service={service} />;
}
