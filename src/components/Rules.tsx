import { Shield, AlertTriangle, Users, Zap } from 'lucide-react';

const Rules = () => {
  const rules = [
    {
      icon: Shield,
      title: "Fair Play",
      description: "No cheating, hacking, or exploiting bugs.",
      color: "text-gaming-primary"
    },
    {
      icon: Users,
      title: "Respect",
      description: "Be respectful to other players and staff.",
      color: "text-gaming-secondary"
    },
    {
      icon: AlertTriangle,
      title: "No Spam",
      description: "Avoid spamming chat or using excessive caps.",
      color: "text-gaming-accent"
    },
    {
      icon: Zap,
      title: "English Only",
      description: "Use English in global chat for better communication.",
      color: "text-gaming-primary"
    }
  ];

  return (
    <section id="rules" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Server Rules
          </h2>
          <p className="text-xl text-muted-foreground">
            Follow these rules for the best gaming experience
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-500 group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-current/20 to-current/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${rule.color}`}>
                <rule.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gaming-primary transition-colors duration-300">
                {rule.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Warning Notice */}
        <div className="mt-12 glass-card p-6 text-center border border-gaming-accent/30">
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="w-6 h-6 text-gaming-accent" />
            <h3 className="text-xl font-bold text-gaming-accent">Important</h3>
          </div>
          <p className="text-muted-foreground">
            Breaking these rules may result in temporary or permanent bans from the server.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;