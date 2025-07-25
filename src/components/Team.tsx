import { Crown, Shield, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "KD6350TR",
      role: "FOUNDER",
      icon: Crown,
      color: "text-gaming-accent",
      bgColor: "from-gaming-accent/20 to-gaming-accent/5"
    },
    {
      name: "NotMudi",
      role: "ADMIN",
      icon: Shield,
      color: "text-gaming-primary",
      bgColor: "from-gaming-primary/20 to-gaming-primary/5"
    },
    {
      name: "Zyro",
      role: "ADMIN", 
      icon: Shield,
      color: "text-gaming-secondary",
      bgColor: "from-gaming-secondary/20 to-gaming-secondary/5"
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Yetkili Takım
          </h2>
          <p className="text-xl text-muted-foreground">
            CATS BOXPVP sunucusunu yöneten deneyimli takım
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              {/* Avatar */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <member.icon className={`w-10 h-10 ${member.color}`} />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gaming-primary transition-colors duration-300">
                {member.name}
              </h3>

              {/* Role */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${member.bgColor} ${member.color} font-bold text-sm tracking-wide`}>
                <Star className="w-4 h-4" />
                {member.role}
              </div>

              {/* Decoration */}
              <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-gaming-primary to-gaming-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;