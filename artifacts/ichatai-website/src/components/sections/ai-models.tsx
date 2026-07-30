import { motion } from 'framer-motion';
import { Cpu, Zap, BrainCircuit, Network } from 'lucide-react';

export function AiModels() {
  const pills = [
    { icon: Zap, label: "Fast & Reliable" },
    { icon: Cpu, label: "Latest AI Models" },
    { icon: BrainCircuit, label: "Powerful Responses" },
    { icon: Network, label: "Smart Context Awareness" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-10 md:p-16 border-primary/20"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by the World's Most <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Advanced AI</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            iChatAI connects to cutting-edge large language models through OpenRouter, giving you access to the latest AI technology without compromise. Always up to date, always incredibly smart.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {pills.map((pill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 rounded-full glass-card flex items-center gap-3 hover:bg-white/10 transition-colors"
              >
                <pill.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">{pill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
