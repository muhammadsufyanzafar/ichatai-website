import { motion } from 'framer-motion';
import { Zap, Lock, ShieldCheck, Timer, Gift, LayoutTemplate } from 'lucide-react';

const stats = [
  { icon: Zap, label: 'Modern AI Powered' },
  { icon: Lock, label: 'Secure Cloud Sync' },
  { icon: ShieldCheck, label: 'Privacy First' },
  { icon: Timer, label: 'Lightning Fast' },
  { icon: Gift, label: 'Daily Rewards' },
  { icon: LayoutTemplate, label: 'Modern UI' },
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto pb-4 sm:pb-0 hide-scrollbar gap-4 sm:gap-8 sm:justify-between items-center snap-x">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 snap-center glass-card px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/40 dark:hover:bg-white/10 transition-colors cursor-default"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="font-medium whitespace-nowrap">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
