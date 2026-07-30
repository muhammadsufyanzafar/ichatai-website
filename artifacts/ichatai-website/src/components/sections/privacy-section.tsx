import { motion } from 'framer-motion';
import { Database, CloudOff, ChartPie, Key } from 'lucide-react';

export function PrivacySection() {
  const points = [
    { icon: Database, title: "Local Chat History", desc: "All conversations are stored strictly on your device using a local Room Database." },
    { icon: CloudOff, title: "Optional Cloud Sync", desc: "Backups are optional and strictly tied to your personal Google Drive AppDataFolder." },
    { icon: ChartPie, title: "Anonymous Analytics", desc: "Firebase Crashlytics is used solely to identify bugs and improve app stability. No chat data is collected." },
    { icon: Key, title: "Minimal Permissions", desc: "We only ask for what's strictly necessary: Internet access for AI responses and Storage for backups." },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-bold mb-6 border border-destructive/20">
              Zero Developer Access
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy is Not <br className="hidden md:block"/> an Afterthought.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              In an era where data is heavily harvested, iChatAI takes a firm stance on privacy. What you chat about is your business, not ours.
            </p>
            
            <a href="/privacy" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-muted border border-border text-foreground font-medium transition-colors">
              Read Full Privacy Policy
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                <p className="text-sm text-muted-foreground">{point.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
