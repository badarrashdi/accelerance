import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Development & AI Software Solutions in Riyadh, Saudi Arabia | Accelerance Tech',
  description: 'Digital transformation, Next.js web applications, Flutter mobile apps with Mada integration, and Arabic AI chatbots for enterprises in Riyadh and Jeddah, Saudi Arabia.',
  keywords: [
    'web development company Riyadh',
    'mobile app developers Saudi Arabia',
    'Flutter apps Mada integration',
    'AI chatbot developers Saudi Arabia',
    'Next.js web agency Riyadh'
  ]
};

export default function SaudiLocationPage() {
  return (
    <main>
      <Header />
      <section className="abox-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-tag">Regional Hub • Kingdom of Saudi Arabia</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            Empowering Saudi Digital Vision with Next.js, Flutter &amp; AI.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Accelerance Tech supports Saudi Arabia’s digital transformation with scalable Next.js platforms, 
              headless CMS architectures, Flutter mobile apps with native Mada / Apple Pay, and Arabic-first AI agents.
            </p>
            <div className="hero-action-row">
              <a href="#contact" className="btn-black-pill">Request Saudi Proposal</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
