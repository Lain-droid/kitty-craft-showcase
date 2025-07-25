import { Sword, Shield, Bow, Zap, Crown, Star } from 'lucide-react';

const Kits = () => {
  const kits = [
    {
      name: "Warrior",
      icon: Sword,
      rarity: "Common",
      rarityColor: "text-gray-400",
      bgColor: "from-gray-400/20 to-gray-400/5",
      description: "Balanced melee fighter with sword and armor. Perfect for beginners.",
      items: ["Diamond Sword", "Iron Armor", "Golden Apples", "Shield"]
    },
    {
      name: "Archer",
      icon: Bow,
      rarity: "Common", 
      rarityColor: "text-green-400",
      bgColor: "from-green-400/20 to-green-400/5",
      description: "Long-range specialist with bow and arrows. Keep your distance!",
      items: ["Power Bow", "64 Arrows", "Leather Armor", "Speed Potion"]
    },
    {
      name: "Tank",
      icon: Shield,
      rarity: "Rare",
      rarityColor: "text-blue-400",
      bgColor: "from-blue-400/20 to-blue-400/5",
      description: "Heavy armored defender with high durability and crowd control.",
      items: ["Diamond Armor", "Iron Sword", "Resistance Potion", "Healing Items"]
    },
    {
      name: "Assassin",
      icon: Zap,
      rarity: "Epic",
      rarityColor: "text-purple-400",
      bgColor: "from-purple-400/20 to-purple-400/5",
      description: "Fast and deadly with stealth abilities and poison weapons.",
      items: ["Poison Sword", "Invisibility Potion", "Speed Boost", "Throwing Knives"]
    },
    {
      name: "Berserker",
      icon: Star,
      rarity: "Epic",
      rarityColor: "text-orange-400",
      bgColor: "from-orange-400/20 to-orange-400/5",
      description: "High damage dealer with berserker rage and powerful weapons.",
      items: ["Sharpness Axe", "Strength Potion", "Regeneration", "Fire Aspect"]
    },
    {
      name: "Champion",
      icon: Crown,
      rarity: "Legendary",
      rarityColor: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-yellow-400/5",
      description: "Ultimate fighter with the best equipment and special abilities.",
      items: ["Enchanted Gear", "All Potions", "Special Abilities", "Exclusive Items"]
    }
  ];

  return (
    <section id="kits" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            PvP Kits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your fighting style with our diverse kit collection
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              {/* Rarity Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${kit.rarityColor} bg-current/10 border border-current/30`}>
                {kit.rarity}
              </div>

              {/* Kit Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br ${kit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <kit.icon className={`w-10 h-10 ${kit.rarityColor}`} />
              </div>

              {/* Kit Name */}
              <h3 className="text-2xl font-bold text-center mb-3 text-foreground group-hover:text-gaming-primary transition-colors duration-300">
                {kit.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                {kit.description}
              </p>

              {/* Items List */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gaming-primary mb-3">Includes:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {kit.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gaming-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-primary/0 to-gaming-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Unlock More Kits
            </h3>
            <p className="text-muted-foreground mb-6">
              Earn new kits by playing, completing achievements, or through our store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#server-info');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-gaming-primary to-gaming-secondary text-gaming-dark font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
              >
                Join Server
              </button>
              <div className="px-6 py-3 rounded-lg border border-gaming-accent/30 text-gaming-accent font-bold">
                Store Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kits;