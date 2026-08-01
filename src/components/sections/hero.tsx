import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Cloud, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Google verification ready • iChatAI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              iChatAI<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
                AI assistant for chatting, learning, and productivity
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              iChatAI is an Android application that helps users chat with AI, organize ideas, explore prompts, and manage private cloud sync securely. iChatAI is designed for everyday conversations, personal assistance, and simple productivity tasks while keeping user data transparent and protected.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://appgallery.huawei.com/#/app/C108762671"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all hover:-translate-y-1"
              >
                Download on Huawei AppGallery
              </a>
              <a
                href="/privacy"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full glass-card hover:bg-white/10 dark:hover:bg-white/5 transition-all text-foreground font-semibold gap-2"
              >
                View Privacy Policy <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 rounded-3xl border border-border/70 bg-card/70 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Shield className="w-4 h-4 text-primary" />
                Verification essentials
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">App name:</span> iChatAI</div>
                <div><span className="font-semibold text-foreground">Developer:</span> Muhammad Sufyan Zafar</div>
                <div><span className="font-semibold text-foreground">Website:</span> <a href="https://ichatai-website.is-cool.dev/" className="text-primary hover:underline">ichatai-website.is-cool.dev</a></div>
                <div><span className="font-semibold text-foreground">Support:</span> <a href="https://muhammadsufyanzafar.github.io/portfolio/#contact" className="text-primary hover:underline">Developer contact</a></div>
                <div><span className="font-semibold text-foreground">Purpose:</span> AI assistant for chatting, learning, and productivity</div>
                <div><span className="font-semibold text-foreground">Policies:</span> <a href="/privacy" className="text-primary hover:underline">Privacy</a> and <a href="/terms" className="text-primary hover:underline">Terms</a></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] rounded-[3rem] border-[8px] border-card bg-background shadow-2xl overflow-hidden z-20">
              <div className="absolute top-0 w-full h-8 bg-card flex justify-center items-end pb-1">
                <div className="w-24 h-5 bg-background rounded-b-xl"></div>
              </div>

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

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
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
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
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
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-12 z-30 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <Cpu className="text-primary w-6 h-6" />
              <div>
                <div className="text-xs text-muted-foreground">Powered by</div>
                <div className="font-bold text-sm">Advanced LLMs</div>
              </div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] z-10 animate-pulse-slow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
