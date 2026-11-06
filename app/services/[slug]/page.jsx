import { servicesList } from '../../data';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return servicesList.map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = servicesList.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Services | Accelerance Tech' };

  const canonicalUrl = `https://accelerance.tech/services/${service.slug}/`;

  return {
    title: `${service.title} | Accelerance Tech`,
    description: service.heroDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} — Accelerance Tech`,
      description: service.tagline,
      url: canonicalUrl,
    },
  };
}

export default function ServicePage({ params }) {
  const service = servicesList.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}
