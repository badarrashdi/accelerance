import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'Mobile App Development (Flutter, iOS & Android) | Accelerance Tech Pvt. Ltd.',
  description: 'Native 60 FPS mobile apps, Flutter cross-platform architecture, and cloud microservices engineered for high retention.',
  alternates: {
    canonical: 'https://accelerance.tech/services/mobile-app-development-flutter/',
  },
  openGraph: {
    title: 'Mobile App Development (Flutter, iOS & Android) | Accelerance Tech',
    description: 'High-performance Flutter and native mobile applications for iOS & Android.',
    url: 'https://accelerance.tech/services/mobile-app-development-flutter/',
  },
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "mobile-app-development");
  return <ServiceDetailTemplate service={service} />;
}
