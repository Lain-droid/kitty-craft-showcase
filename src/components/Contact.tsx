import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@kedo_kd6350tr",
      link: "https://instagram.com/kedo_kd6350tr",
      color: "text-pink-400",
      bgColor: "from-pink-400/20 to-pink-400/5"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "kd202210@outlook.com",
      link: "mailto:kd202210@outlook.com",
      color: "text-gaming-primary",
      bgColor: "from-gaming-primary/20 to-gaming-primary/5"
    },
    {
      icon: MessageCircle,
      label: "Discord",
      value: "Coming Soon...",
      link: "#",
      color: "text-gaming-secondary",
      bgColor: "from-gaming-secondary/20 to-gaming-secondary/5"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Contact
        </h2>
        <p className="text-xl text-muted-foreground">
          Get in touch with us for any questions
        </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`w-8 h-8 ${method.color}`} />
              </div>

              <h3 className="text-lg font-bold mb-2 text-foreground">
                {method.label}
              </h3>

              <p className={`font-mono text-sm mb-4 ${method.color}`}>
                {method.value}
              </p>

              {method.link !== "#" && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={`border-current ${method.color} hover:bg-current hover:text-gaming-dark transition-all duration-300`}
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Market Info */}
        <div className="glass-card p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Store
          </h3>
          <p className="text-muted-foreground mb-6">
            Support the server by purchasing kits and ranks.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gaming-accent/20 to-gaming-accent/5 text-gaming-accent font-bold">
            <MessageCircle className="w-5 h-5" />
            Coming Soon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;