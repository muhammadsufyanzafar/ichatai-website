import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What is iChatAI?",
    a: "iChatAI is a premium AI chatbot Android app developed by Muhammad Sufyan Zafar. It connects you to advanced Large Language Models, allowing you to generate content, organize conversations, and save custom prompts in a beautifully designed, privacy-focused interface."
  },
  {
    q: "Is my data private?",
    a: "Yes. By default, all your chats and prompts are stored locally on your device using a secure Room Database. If you enable Cloud Sync, data is backed up to your personal Google Drive (AppDataFolder) which only you can access."
  },
  {
    q: "How does Cloud Sync work?",
    a: "We use the Google Drive API's AppDataFolder. This is a special, hidden folder in your Google Drive specifically meant for application data. It doesn't clutter your main Drive view, and more importantly, it ensures your data remains firmly under your control."
  },
  {
    q: "Does the developer access my chats?",
    a: "Absolutely not. We have zero access to your chat history, prompts, or personal data. The app communicates directly with OpenRouter for AI processing and your Google Drive for backups."
  },
  {
    q: "Which AI models are supported?",
    a: "iChatAI connects through OpenRouter, giving you access to the latest and most advanced LLMs available, ensuring high-quality, fast, and context-aware responses."
  },
  {
    q: "How are credits earned?",
    a: "You can earn free credits daily just by checking into the app. If you need more, you can optionally watch reward ads to instantly boost your balance. There are no mandatory subscriptions required to use the core features."
  },
  {
    q: "Can I use it offline?",
    a: "While you can view your past chats and organize your prompt library offline, an active internet connection is required to send new messages to the AI models and to sync data to the cloud."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about the app.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === idx ? 'border-primary/50 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : 'border-border hover:border-primary/30'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-lg focus:outline-none"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
