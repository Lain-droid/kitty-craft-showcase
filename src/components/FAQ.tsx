import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "How do I join the server?",
      answer: "Copy the server IP 'catsboxpvp.aternos.me:63984' and add it to your Minecraft server list. Make sure you're using a compatible version."
    },
    {
      question: "What Minecraft versions are supported?",
      answer: "The server supports Minecraft versions 1.18 to 1.20.x for both Java and Bedrock editions."
    },
    {
      question: "What is BoxPvP?",
      answer: "BoxPvP is a fast-paced PvP gamemode where players fight in enclosed arenas with different kits and abilities. It's all about skill and strategy!"
    },
    {
      question: "Are there any rules I should know?",
      answer: "Yes! No cheating, hacking, or exploiting. Be respectful to other players and staff. Use English in global chat. Check our Rules section for complete details."
    },
    {
      question: "How do I get better kits?",
      answer: "Kits can be unlocked through gameplay, achievements, or our store (coming soon). Each kit has unique abilities and equipment."
    },
    {
      question: "Is the server always online?",
      answer: "We aim for 24/7 uptime, but the server may occasionally go offline for maintenance or updates. Check our server status widget for real-time information."
    },
    {
      question: "Can I play with friends?",
      answer: "Absolutely! You can party up with friends, create private matches, or compete together in tournaments."
    },
    {
      question: "How do I report a cheater or bug?",
      answer: "Contact our staff through the methods listed in our Contact section. Provide evidence if possible for faster resolution."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about CatsBoxPVP
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gaming-primary/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gaming-primary flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                </div>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gaming-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gaming-primary" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-2 gradient-text">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Contact our support team.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-gaming-primary to-gaming-secondary text-gaming-dark font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;