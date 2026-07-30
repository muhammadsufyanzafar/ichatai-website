import { Link } from 'wouter';
import { Bot, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <img src="/bot_avatar.png" alt="Bot Avatar" className="w-9 h-9" />
              </div>
              <span className="font-bold text-xl tracking-tight">iChatAI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Your intelligent AI companion, everywhere. Experience powerful conversations and privacy-first sync.
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              Built by Muhammad Sufyan Zafar
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/muhammadsufyanzafar" aria-label="Instagram" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/m_sufyan_zafar" aria-label="Twitter" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/muhammadsufyanzafar" aria-label="GitHub" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-sufyan-zafar-pk" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Muhammad Sufyan Zafar. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://appgallery.huawei.com/#/app/C108762671" className="text-sm font-medium text-primary hover:underline">Get the app</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
