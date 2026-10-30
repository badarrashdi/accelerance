import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'eCommerce Solutions & Online Stores | Accelerance Tech',
  description: 'Scalable Shopify Plus, headless commerce, and conversion-optimized storefronts engineered for high GMV growth.',
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "ecommerce-solutions");
  return <ServiceDetailTemplate service={service} />;
}
