import { motion } from 'framer-motion';
import { Play, Sparkles, Shield, Cpu, Cloud } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">✦ Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Your Intelligent <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
                AI Companion
              </span><br/>
              Everywhere.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Experience powerful AI conversations, secure cloud synchronization, custom prompt libraries, and a privacy-first experience—all in one beautifully designed Android app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all hover:-translate-y-1"
              >
                Download on Google Play
              </a>
              <a
                href="#features"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full glass-card hover:bg-white/10 dark:hover:bg-white/5 transition-all text-foreground font-semibold"
              >
                Learn More
              </a>
              <button
                className="inline-flex justify-center items-center px-8 py-4 rounded-full border border-border hover:bg-muted transition-all text-foreground font-semibold gap-2"
              >
                <Play className="w-5 h-5 fill-current" /> Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Phone Mockup Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] rounded-[3rem] border-[8px] border-card bg-background shadow-2xl overflow-hidden z-20">
              <div className="absolute top-0 w-full h-8 bg-card flex justify-center items-end pb-1">
                <div className="w-24 h-5 bg-background rounded-b-xl"></div>
              </div>
              
              {/* App UI Simulation */}
              <div className="p-4 pt-12 h-full flex flex-col gap-4 bg-gradient-to-b from-background to-card">
                <div className="glass-card p-4 rounded-2xl animate-pulse-slow">
                  <div className="w-8 h-8 rounded-full bg-primary/20 mb-2"></div>
                  <div className="h-2 w-3/4 bg-border rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-border rounded"></div>
                </div>
                <div className="glass-card p-4 rounded-2xl ml-auto bg-primary/10 border-primary/20">
                  <div className="h-2 w-3/4 bg-primary/40 rounded mb-2 ml-auto"></div>
                  <div className="h-2 w-full bg-primary/40 rounded"></div>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 mb-2"></div>
                  <div className="h-2 w-5/6 bg-border rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-border rounded"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 right-10 z-30 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <Shield className="text-success w-6 h-6" />
              <div>
                <div className="text-xs text-muted-foreground">Encryption</div>
                <div className="font-bold text-sm">256-bit Secure</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-40 -left-10 z-30 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <Cloud className="text-secondary w-6 h-6" />
              <div>
                <div className="text-xs text-muted-foreground">Sync</div>
                <div className="font-bold text-sm">Real-time Backup</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 z-30 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <Cpu className="text-primary w-6 h-6" />
              <div>
                <div className="text-xs text-muted-foreground">Powered by</div>
                <div className="font-bold text-sm">Advanced LLMs</div>
              </div>
            </motion.div>

            {/* Behind Phone Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] z-10 animate-pulse-slow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
