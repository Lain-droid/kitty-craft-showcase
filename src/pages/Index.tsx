import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServerStatus from '@/components/ServerStatus';
import Features from '@/components/Features';
import ServerInfo from '@/components/ServerInfo';
import Gallery from '@/components/Gallery';
import Rules from '@/components/Rules';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServerStatus />
      <Features />
      <ServerInfo />
      <Gallery />
      <Rules />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
