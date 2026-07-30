import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function CTA() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,20,28,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,20,28,0.8)_100%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-12 md:p-20 border-primary/30 shadow-[0_0_100px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          {/* Decorative glows inside card */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Experience AI Like <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Never Before</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Download iChatAI today and start your journey with the most advanced, privacy-respecting AI companion for Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://appgallery.huawei.com/#/app/C108762671"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform shadow-2xl w-full sm:w-auto"
            >
              <Play className="w-6 h-6 fill-background group-hover:text-primary transition-colors" />
              Get it on Huawei AppGallery
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mr-2">Coming Soon:</span>
            {['Google Play Store', 'Galaxy Store', 'Amazon'].map((store, i) => (
              <div key={i} className="px-4 py-2 rounded-full border border-border bg-card/50 text-muted-foreground text-sm opacity-50 cursor-not-allowed">
                {store}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
