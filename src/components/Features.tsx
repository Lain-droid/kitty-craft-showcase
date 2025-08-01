import { Sword, Shield, Zap, Crown, Star, Trophy, Users, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sword,
      title: "Competitive PvP",
      description: "Professional BoxPvP battles with ranking system and tournaments"
    },
    {
      icon: Crown,
      title: "Premium Rewards",
      description: "Exclusive crate system with VIP rewards and rare items"
    },
    {
      icon: Shield,
      title: "Premium Arenas",
      description: "Multiple arena types with unique designs and mechanics"
    },
    {
      icon: Zap,
      title: "Anti-Cheat Protection",
      description: "Advanced security ensuring fair gameplay for everyone"
    },
    {
      icon: Trophy,
      title: "Tournament System",
      description: "Weekly tournaments with prizes and global leaderboards"
    },
    {
      icon: Star,
      title: "Custom Equipment",
      description: "Balanced kit system with special abilities and gear"
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Regular events, contests and community challenges"
    },
    {
      icon: Target,
      title: "Skill-Based Matchmaking",
      description: "Fair matches based on player skill and experience level"
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Server Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes CATS BOXPVP a premium Minecraft PvP experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="professional-card p-6 text-center hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="professional-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join the Competition?
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect to our server and start your PvP journey today
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