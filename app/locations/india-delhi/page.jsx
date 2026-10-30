import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Design, Software & App Development Company in Delhi NCR, India | Accelerance Tech',
  description: 'Premier digital engineering agency headquartered in Delhi NCR, India. Specializing in Next.js SSG websites, Headless WordPress, Storyblok, Strapi, Flutter mobile apps, and autonomous AI agents for global clients.',
  keywords: [
    'web design company Delhi NCR',
    'web development agency India',
    'Next.js developers Delhi',
    'Flutter mobile app development company India',
    'headless CMS agency India',
    'AI software development company Delhi'
  ]
};

export default function DelhiLocationPage() {
  return (
    <main>
      <Header />
      <section className="abox-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-tag">Global Engineering HQ • Delhi NCR, India</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            Elite Web Design, Flutter Mobile &amp; AI Engineering Studio.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Headquartered in Delhi NCR, Accelerance Tech combines high-velocity engineering with world-class UI/UX design. 
              Powering enterprises and high-growth brands across <strong>India, Bahrain, UAE, Saudi Arabia, and the US</strong>.
            </p>
            <div className="hero-action-row">
              <a href="#contact" className="btn-black-pill">Contact Engineering Desk</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
