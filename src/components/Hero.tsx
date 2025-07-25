import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const serverIP = 'catsboxpvp.aternos.me:63984';
  
  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      toast({
        title: "Server IP Copied!",
        description: "Server IP has been copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Error",
        description: "Failed to copy IP address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark/80 via-gaming-dark/60 to-gaming-darker/90" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gaming-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo/Title */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-4 gradient-text tracking-wider">
            CATS BOXPVP
          </h1>
          <p className="text-xl md:text-2xl text-gaming-primary font-bold tracking-widest">
            Fight, Win, Reach The Top!
          </p>
        </div>

        {/* Server IP Card */}
        <div className="glass-card p-6 md:p-8 mb-8 max-w-2xl mx-auto animate-scale-in">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-2">Server IP</p>
              <code className="text-2xl md:text-3xl font-mono text-gaming-primary font-bold">
                {serverIP}
              </code>
            </div>
            <Button
              onClick={copyServerIP}
              variant="outline"
              size="lg"
              className="neon-glow border-gaming-primary text-gaming-primary hover:bg-gaming-primary hover:text-gaming-dark transition-all duration-300"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gaming-primary to-gaming-secondary text-gaming-dark font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            <Play className="w-5 h-5 mr-2" />
            Join Server
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gaming-secondary text-gaming-secondary hover:bg-gaming-secondary hover:text-gaming-dark px-8 py-6 text-lg purple-glow transition-all duration-300"
          >
            Features
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {[
            { label: "Active Players", value: "24/7" },
            { label: "Uptime", value: "99.9%" },
            { label: "PvP Arena", value: "Premium" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;