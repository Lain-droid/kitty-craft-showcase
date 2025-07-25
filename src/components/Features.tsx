import { Sword, Pickaxe, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sword,
      title: "Competitive PvP",
      description: "Professional BoxPvP battles with ranking system and tournaments.",
      color: "text-gaming-primary"
    },
    {
      icon: Pickaxe,
      title: "Custom Kits",
      description: "Unique kit system with balanced equipment and special abilities.",
      color: "text-gaming-accent"
    },
    {
      icon: Shield,
      title: "Premium Arenas",
      description: "Multiple arena types with different gameplay mechanics.",
      color: "text-gaming-secondary"
    },
    {
      icon: Zap,
      title: "Anti-Cheat System",
      description: "Advanced protection ensuring fair gameplay for everyone.",
      color: "text-gaming-primary"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Server Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What makes CATS BOXPVP unique
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-current/20 to-current/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gaming-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;