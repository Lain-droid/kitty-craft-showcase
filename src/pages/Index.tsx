import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ServerInfo from '@/components/ServerInfo';
import Leaderboard from '@/components/Leaderboard';
import Rules from '@/components/Rules';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <ServerInfo />
      <Leaderboard />
      <Rules />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
