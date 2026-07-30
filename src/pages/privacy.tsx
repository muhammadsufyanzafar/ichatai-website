import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="pt-32 pb-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12 text-lg">Last updated: July 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none glass-card p-8 md:p-12 rounded-3xl">
              <h2>Introduction</h2>
              <p>
                At iChatAI ("we", "our", or "us"), we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our Android application.
              </p>

              <h2>Data Collection & Storage</h2>
              <p>
                We believe in keeping your data in your hands.
              </p>
              <ul>
                <li><strong>Local Storage:</strong> All your chats, custom prompts, and settings are stored locally on your device using a secure Room Database.</li>
                <li><strong>Cloud Sync:</strong> If you enable Cloud Sync, your data is securely backed up to your personal Google Drive (AppDataFolder). <strong>We do not have access to this data.</strong> It is strictly between your app and your Google account.</li>
              </ul>

              <h2>Third-Party Services</h2>
              <p>To provide a better experience, we use certain third-party services:</p>
              <ul>
                <li><strong>OpenRouter:</strong> Used to process your AI prompts. Your inputs are sent securely to OpenRouter to generate responses. We do not use your inputs to train models.</li>
                <li><strong>Firebase (Analytics & Crashlytics):</strong> Used to understand app usage and fix crashes. This data is anonymized and aggregated.</li>
                <li><strong>Google AdMob:</strong> Used to display reward ads for the credit system. AdMob may collect certain device identifiers to serve relevant ads.</li>
              </ul>

              <h2>App Permissions</h2>
              <p>iChatAI requires the following permissions to function properly:</p>
              <ul>
                <li><strong>Internet:</strong> Required to communicate with AI models and sync data.</li>
                <li><strong>Notifications:</strong> Used for daily reward reminders and sync status updates.</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact the developer, Muhammad Sufyan Zafar at <a href="https://muhammadsufyanzafar.github.io/portfolio/#contact" className="text-primary hover:underline">
                  https://muhammadsufyanzafar.github.io/portfolio/#contact
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
