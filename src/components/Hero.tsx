import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, Play, Server, Users, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-8 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            CATS BOXPVP
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Professional Minecraft PvP Server
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our competitive BoxPvP arena with custom rewards, tournaments, and fair gameplay
          </p>
        </div>

        {/* Server Status */}
        <div className="slide-up mb-8" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-3 professional-card px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-600 dark:text-green-400 font-medium">Server Online</span>
            <div className="w-px h-4 bg-border mx-2"></div>
            <span className="text-muted-foreground">24/7 Available</span>
          </div>
        </div>

        {/* Server IP Card */}
        <div className="professional-card p-6 mb-8 max-w-lg mx-auto slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-2 flex items-center justify-center gap-2">
              <Server className="w-4 h-4" />
              Server IP Address
            </p>
            <code className="text-2xl font-mono text-primary font-semibold block mb-4">
              {serverIP}
            </code>
            <Button
              onClick={copyServerIP}
              className="btn-primary"
            >
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy IP'}
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 slide-up" style={{ animationDelay: '0.6s' }}>
          <Button
            className="btn-primary text-lg px-8 py-3"
            onClick={() => {
              const element = document.querySelector('#server-info');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Play className="w-5 h-5 mr-2" />
            Connect to Server
          </Button>
          <Button
            className="btn-secondary text-lg px-8 py-3"
            onClick={() => {
              const element = document.querySelector('#features');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 slide-up" style={{ animationDelay: '0.8s' }}>
          {[
            { label: "Players Online", value: "Active", icon: Users },
            { label: "Server Uptime", value: "99.9%", icon: Server },
            { label: "Anti-Cheat", value: "Enabled", icon: Shield }
          ].map((stat, index) => (
            <div key={index} className="professional-card p-6 text-center hover-lift">
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold mb-1 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;