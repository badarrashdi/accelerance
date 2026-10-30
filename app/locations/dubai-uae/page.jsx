import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Design, Mobile App & AI Software Company in Dubai, UAE | Accelerance Tech',
  description: 'Enterprise web development, Next.js SSG, Flutter mobile applications, and AI agent architectures for forward-thinking brands in Dubai and Abu Dhabi, UAE.',
  keywords: [
    'web design company Dubai',
    'web development agency UAE',
    'Flutter mobile app developers Dubai',
    'AI software company UAE',
    'Next.js developers Dubai',
    'Storyblok agency Dubai'
  ]
};

export default function DubaiLocationPage() {
  return (
    <main>
      <Header />
      <section className="abox-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-tag">Regional Hub • United Arab Emirates</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            Enterprise Web Development &amp; Flutter Apps in Dubai &amp; Abu Dhabi.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Accelerance Tech delivers premier digital flagships, high-velocity Next.js platforms, 
              headless CMS (Storyblok, Strapi), and autonomous AI chatbots for the UAE’s fastest-growing enterprises.
            </p>
            <div className="hero-action-row">
              <a href="#contact" className="btn-black-pill">Request UAE Consultation</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
