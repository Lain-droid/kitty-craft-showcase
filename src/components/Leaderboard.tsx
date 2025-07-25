import { Trophy, Medal, Award, Crown } from 'lucide-react';

const Leaderboard = () => {
  const topPlayers = [
    {
      rank: 1,
      name: "KD6350TR",
      wins: 247,
      icon: Crown,
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-yellow-400/5"
    },
    {
      rank: 2,
      name: "NotMudi",
      wins: 198,
      icon: Trophy,
      color: "text-gray-300",
      bgColor: "from-gray-300/20 to-gray-300/5"
    },
    {
      rank: 3,
      name: "Zyro",
      wins: 156,
      icon: Medal,
      color: "text-orange-400",
      bgColor: "from-orange-400/20 to-orange-400/5"
    },
    {
      rank: 4,
      name: "Player4",
      wins: 134,
      icon: Award,
      color: "text-gaming-primary",
      bgColor: "from-gaming-primary/20 to-gaming-primary/5"
    },
    {
      rank: 5,
      name: "Player5",
      wins: 121,
      icon: Award,
      color: "text-gaming-secondary",
      bgColor: "from-gaming-secondary/20 to-gaming-secondary/5"
    }
  ];

  return (
    <section id="leaderboard" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Top PvP champions
          </p>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {topPlayers.map((player, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover:scale-[1.02] transition-all duration-300 ${
                index === 0 ? 'ring-2 ring-yellow-400/50' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${player.bgColor} flex items-center justify-center`}>
                    <player.icon className={`w-6 h-6 ${player.color}`} />
                  </div>

                  {/* Player Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${player.color}`}>
                        #{player.rank}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {player.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      PvP Champion
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">
                    {player.wins}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Wins
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Notice */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6 inline-block">
            <p className="text-muted-foreground mb-2">
              Want to be on the leaderboard?
            </p>
            <p className="text-gaming-primary font-bold">
              Join the server and start competing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;