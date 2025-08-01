import { Sword, Pickaxe, Shield, Zap, Crown, Star, Trophy, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sword,
      title: "Competitive PvP",
      description: "Professional BoxPvP battles with ranking system and tournaments.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: Crown,
      title: "Premium Rewards",
      description: "Exclusive KASASI system with VIP rewards and rare items.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20"
    },
    {
      icon: Shield,
      title: "Premium Arenas",
      description: "Multiple arena types with stunning designs and unique mechanics.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Zap,
      title: "Anti-Cheat System",
      description: "Advanced protection ensuring fair gameplay for everyone.",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Trophy,
      title: "Tournament Mode",
      description: "Weekly tournaments with amazing prizes and global leaderboards.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    },
    {
      icon: Star,
      title: "Custom Kits",
      description: "Unique kit system with balanced equipment and special abilities.",
      color: "text-pink-400",
      bgColor: "bg-pink-500/20"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Regular events, contests and community challenges.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20"
    },
    {
      icon: Pickaxe,
      title: "Resource Mining",
      description: "Rich mining areas with rare ores and custom generation.",
      color: "text-amber-400",
      bgColor: "bg-amber-500/20"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      {/* Background particles */}
      <div className="particles-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6 text-glow">
            Server Features
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover what makes CATS BOXPVP the ultimate Minecraft PvP experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover glass-effect p-6 group cursor-pointer scale-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-effect`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in" style={{ animationDelay: '1s' }}>
          <div className="card-hover glass-effect p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to Experience the Best PvP?
            </h3>
            <p className="text-purple-200 mb-6">
              Join thousands of players in epic battles and climb the leaderboards
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const element = document.querySelector('#server-info');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;