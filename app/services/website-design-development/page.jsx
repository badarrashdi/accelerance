import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'Website Design & Custom Web Development | Accelerance Tech Pvt. Ltd.',
  description: 'Enterprise-grade corporate websites, high-speed headless CMS platforms, and conversion-focused digital flagships.',
  alternates: {
    canonical: 'https://accelerance.tech/services/website-design-development/',
  },
  openGraph: {
    title: 'Website Design & Custom Web Development | Accelerance Tech',
    description: 'Enterprise-grade corporate websites, high-speed headless CMS platforms, and conversion-focused digital flagships.',
    url: 'https://accelerance.tech/services/website-design-development/',
  },
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "web-design-development");
  return <ServiceDetailTemplate service={service} />;
}
