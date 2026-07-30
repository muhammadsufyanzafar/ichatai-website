import { motion } from 'framer-motion';
import { MessageSquare, CloudUpload, Library, Coins, ShieldAlert, Sparkles } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Conversations',
    description: 'Powered by the latest AI through OpenRouter.',
    bullets: ['Intelligent & context-aware', 'Natural conversations', 'Fast responses', 'Multiple AI models'],
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    icon: CloudUpload,
    title: 'Cloud Sync',
    description: 'Secure backup to Google Drive AppDataFolder.',
    bullets: ['Only you can access data', 'Developer has zero access', 'One-tap restore', 'Encrypted sync'],
    gradient: 'from-purple-500 to-indigo-400'
  },
  {
    icon: Library,
    title: 'Prompt Library',
    description: 'Save and organize your best prompts.',
    bullets: ['Custom folders & categories', 'Reusable templates', 'Favorites & tags', 'Smart search'],
    gradient: 'from-emerald-500 to-teal-400'
  },
  {
    icon: Coins,
    title: 'Credit System',
    description: 'Earn free AI usage daily without subscriptions.',
    bullets: ['Daily check-in rewards', 'Watch ads for credits', 'Gamified experience', 'No subscription required'],
    gradient: 'from-orange-500 to-amber-400'
  },
  {
    icon: ShieldAlert,
    title: 'Privacy First',
    description: 'Your data stays yours. Always.',
    bullets: ['Local Room Database', 'Optional cloud backup', 'No developer data access', 'Encrypted everything'],
    gradient: 'from-rose-500 to-pink-400'
  },
  {
    icon: Sparkles,
    title: 'Modern UI',
    description: 'Beautiful Glassmorphism design system.',
    bullets: ['Dark & light mode', 'Smooth animations', 'Material Design 3 inspired', 'Feels premium'],
    gradient: 'from-violet-500 to-fuchsia-400'
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything You Need,<br/>
            <span className="text-muted-foreground">Nothing You Don't</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 h-12">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
