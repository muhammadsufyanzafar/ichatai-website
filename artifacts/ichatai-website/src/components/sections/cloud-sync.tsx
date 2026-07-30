import { motion } from 'framer-motion';
import { Cloud, Smartphone, RefreshCw, Lock, Shield } from 'lucide-react';

export function CloudSync() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Chats, <br/>
              <span className="text-secondary">Secured in the Cloud</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Never lose a conversation again. iChatAI seamlessly syncs your data to your personal Google Drive using the hidden AppDataFolder. Only you have access.
            </p>

            <div className="space-y-6">
              {[
                { icon: RefreshCw, title: 'Automatic Backup', desc: 'Syncs quietly in the background.' },
                { icon: Smartphone, title: 'One-tap Restore', desc: 'Get your chats back instantly on a new device.' },
                { icon: Shield, title: 'Zero Developer Access', desc: 'We cannot see, read, or access your backup.' },
                { icon: Lock, title: 'Encrypted Storage', desc: 'Data is encrypted before it leaves your phone.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[100px] z-0" />
            
            <div className="relative z-10 flex items-center gap-8">
              {/* Phone Node */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-32 h-48 glass-card rounded-3xl flex flex-col items-center justify-center gap-4 border-secondary/30 relative"
              >
                <Smartphone className="w-12 h-12 text-foreground" />
                <div className="text-xs font-bold px-3 py-1 bg-secondary/20 rounded-full text-secondary">Local</div>
                {/* Sending particle */}
                <motion.div 
                  animate={{ x: [0, 150], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_#38BDF8]"
                />
              </motion.div>

              {/* Cloud Node */}
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-40 h-40 glass-card rounded-full flex flex-col items-center justify-center gap-2 border-primary/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] relative"
              >
                <Cloud className="w-16 h-16 text-secondary fill-secondary/20" />
                <div className="text-xs font-bold text-center">Google Drive<br/><span className="text-muted-foreground text-[10px]">AppDataFolder</span></div>
              </motion.div>

              {/* Phone 2 Node */}
              <motion.div 
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="w-32 h-48 glass-card rounded-3xl flex flex-col items-center justify-center gap-4 border-secondary/30 relative"
              >
                <Smartphone className="w-12 h-12 text-foreground" />
                <div className="text-xs font-bold px-3 py-1 bg-success/20 rounded-full text-success">Restored</div>
                {/* Receiving particle */}
                <motion.div 
                  animate={{ x: [0, 150], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="absolute -left-[150px] top-1/2 w-3 h-3 rounded-full bg-success shadow-[0_0_10px_#10B981]"
                />
              </motion.div>
            </div>
            
            {/* Animated Connection Lines */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.5))' }}>
              <path d="M 120 250 Q 250 250 250 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-secondary/30 animate-pulse" fill="none"/>
              <path d="M 350 250 Q 480 250 480 250" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-secondary/30 animate-pulse" fill="none"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
