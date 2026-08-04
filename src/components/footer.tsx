import { Link } from 'wouter';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-12 h-12 rounded-3xl bg-white flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src="https://raw.githubusercontent.com/muhammadsufyanzafar/ichatai-website/refs/heads/gh-pages/bot_avatar.png"
                  alt="Bot Avatar"
                  className="w-9 h-9"
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight text-white">iChatAI</span>
            </Link>
            <p className="max-w-md text-slate-400 leading-7">
              iChatAI is a modern conversational assistant built for secure chat, reliable sync, and smart productivity features. Experience an elegant interface with strong privacy and fast performance.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Built by Muhammad Sufyan Zafar</p>
              <a
                href="https://muhammadsufyanzafar.github.io/portfolio/#contact"
                className="text-primary hover:underline"
              >
                Support contact
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-white font-semibold mb-4">Pages</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="/release-notes" className="hover:text-white transition-colors">Release Notes</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <p className="text-slate-400 leading-7">
                Stay updated for release announcements, support, and app news.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/muhammadsufyanzafar"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-primary hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/m_sufyan_zafar"
                aria-label="Twitter"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-primary hover:text-primary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/muhammadsufyanzafar"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-primary hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-sufyanzafar-pk"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm font-medium text-white">Download iChatAI</p>
              <a href="https://appgallery.huawei.com/#/app/C108762671" className="mt-3 inline-block text-sm text-primary hover:underline">
                Get the app on Huawei AppGallery
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-6 text-slate-500 text-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Muhammad Sufyan Zafar. All rights reserved.</p>
          <p>Designed for modern AI conversations with security and clarity in mind.</p>
        </div>
      </div>
    </footer>
  );
}
