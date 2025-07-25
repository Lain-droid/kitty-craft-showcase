import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, Smartphone, Monitor } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ServerInfo = () => {
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const [copiedJava, setCopiedJava] = useState(false);
  const { toast } = useToast();

  const bedrockInfo = {
    name: "CATS BOXPVP",
    ip: "catsboxpvp.aternos.me",
    port: "63984"
  };

  const javaInfo = {
    name: "CATS BOXPVP", 
    ip: "catsboxpvp.aternos.me:63984"
  };

  const copyToClipboard = async (text: string, type: 'bedrock' | 'java') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'bedrock') {
        setCopiedBedrock(true);
        setTimeout(() => setCopiedBedrock(false), 2000);
      } else {
        setCopiedJava(true);
        setTimeout(() => setCopiedJava(false), 2000);
      }
      
      toast({
        title: "Kopyalandı!",
        description: `${type === 'bedrock' ? 'Bedrock' : 'Java'} sunucu bilgileri kopyalandı.`,
      });
    } catch (err) {
      toast({
        title: "Hata",
        description: "Bilgiler kopyalanamadı.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="server-info" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Sunucuya Bağlan
          </h2>
          <p className="text-xl text-muted-foreground">
            Bedrock ve Java sürümleri için bağlantı bilgileri
          </p>
        </div>

        {/* Server Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bedrock Card */}
          <div className="glass-card p-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gaming-primary/20 to-gaming-primary/5 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-gaming-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gaming-primary">BEDROCK</h3>
                <p className="text-muted-foreground">Mobile & Console</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Server Name</label>
                <code className="block p-3 rounded-lg bg-muted/20 border font-mono text-foreground">
                  {bedrockInfo.name}
                </code>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Server IP</label>
                <code className="block p-3 rounded-lg bg-muted/20 border font-mono text-foreground">
                  {bedrockInfo.ip}
                </code>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Port</label>
                <code className="block p-3 rounded-lg bg-muted/20 border font-mono text-foreground">
                  {bedrockInfo.port}
                </code>
              </div>
            </div>

            <Button
              onClick={() => copyToClipboard(`${bedrockInfo.ip}:${bedrockInfo.port}`, 'bedrock')}
              className="w-full bg-gaming-primary hover:bg-gaming-primary/80 text-gaming-dark font-bold"
            >
              {copiedBedrock ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copiedBedrock ? 'Kopyalandı!' : 'IP:Port Kopyala'}
            </Button>
          </div>

          {/* Java Card */}
          <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gaming-secondary/20 to-gaming-secondary/5 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-gaming-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gaming-secondary">JAVA</h3>
                <p className="text-muted-foreground">PC Edition</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Server Name</label>
                <code className="block p-3 rounded-lg bg-muted/20 border font-mono text-foreground">
                  {javaInfo.name}
                </code>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground block mb-1">Server IP</label>
                <code className="block p-3 rounded-lg bg-muted/20 border font-mono text-foreground">
                  {javaInfo.ip}
                </code>
              </div>
            </div>

            <Button
              onClick={() => copyToClipboard(javaInfo.ip, 'java')}
              className="w-full bg-gaming-secondary hover:bg-gaming-secondary/80 text-gaming-dark font-bold"
            >
              {copiedJava ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copiedJava ? 'Kopyalandı!' : 'IP Kopyala'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;