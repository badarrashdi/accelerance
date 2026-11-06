import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';

export const metadata = {
  title: 'eCommerce Solutions & Online Stores | Accelerance Tech Pvt. Ltd.',
  description: 'Scalable Shopify Plus, headless commerce, and conversion-optimized storefronts engineered for high GMV growth.',
  alternates: {
    canonical: 'https://accelerance.tech/services/headless-shopify-ecommerce/',
  },
  openGraph: {
    title: 'Headless Shopify & eCommerce Solutions | Accelerance Tech',
    description: 'Bespoke Shopify Plus storefronts engineered for sub-second speeds and high conversion.',
    url: 'https://accelerance.tech/services/headless-shopify-ecommerce/',
  },
};

export default function Page() {
  const service = servicesList.find((s) => s.slug === "ecommerce-solutions");
  return <ServiceDetailTemplate service={service} />;
}
