import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, Play, Zap, Star, Gamepad2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();
  
  const serverIP = 'catsboxpvp.aternos.me:63984';
  
  // Background images for dynamic slideshow
  const heroImages = [
    'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1920&h=1080&fit=crop'
  ];

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
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
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-70' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-purple-800/90" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full floating-animation opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title with Stagger Animation */}
        <div className="mb-8">
          <div className="slide-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 gradient-text tracking-wider text-glow">
              CATS BOXPVP
            </h1>
          </div>
          <div className="slide-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-3xl text-purple-300 font-bold tracking-widest mb-4">
              Professional PvP Arena
            </p>
          </div>
          <div className="slide-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto">
              Experience the ultimate Minecraft PvP with custom rewards, epic arenas, and non-stop action
            </p>
          </div>
        </div>

        {/* Server Status Indicator */}
        <div className="scale-in mb-8" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Server Online</span>
            <div className="w-1 h-4 bg-purple-500/50 mx-2"></div>
            <span className="text-purple-300">24/7 Active</span>
          </div>
        </div>

        {/* Server IP Card with Enhanced Design */}
        <div className="card-hover glass-effect p-6 md:p-8 mb-12 max-w-2xl mx-auto scale-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <p className="text-purple-300 text-sm mb-2 flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Server IP
              </p>
              <code className="text-2xl md:text-3xl font-mono text-purple-400 font-bold glow-effect">
                {serverIP}
              </code>
            </div>
            <Button
              onClick={copyServerIP}
              className="btn-primary hover-glow"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy IP'}
            </Button>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in" style={{ animationDelay: '1.2s' }}>
          <Button
            size="lg"
            className="btn-primary text-lg px-8 py-6 group"
            onClick={() => {
              const element = document.querySelector('#server-info');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
            Join Server Now
          </Button>
          <Button
            size="lg"
            className="btn-secondary text-lg px-8 py-6 group"
            onClick={() => {
              const element = document.querySelector('#features');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Star className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
            Explore Features
          </Button>
        </div>

        {/* Enhanced Stats with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in" style={{ animationDelay: '1.4s' }}>
          {[
            { label: "Active Players", value: "24/7", icon: Gamepad2, color: "text-green-400" },
            { label: "Server Uptime", value: "99.9%", icon: Zap, color: "text-yellow-400" },
            { label: "PvP Rating", value: "★★★★★", icon: Star, color: "text-purple-400" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="card-hover glass-effect p-6 text-center group"
              style={{ animationDelay: `${1.6 + index * 0.1}s` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl md:text-4xl font-bold mb-2 gradient-text`}>
                {stat.value}
              </div>
              <div className="text-purple-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-animation">
          <div className="flex flex-col items-center gap-2 text-purple-300">
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full relative">
              <div className="w-1 h-3 bg-purple-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CSS for grid animation */}
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;