import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';

export default function Terms() {
  return (
    <Layout>
      <div className="pt-32 pb-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-secondary/10 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-12 text-lg">Last updated: October 2024</p>

            <div className="prose prose-lg dark:prose-invert max-w-none glass-card p-8 md:p-12 rounded-3xl">
              <h2>Acceptance of Terms</h2>
              <p>
                By downloading and using iChatAI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not use the application.
              </p>

              <h2>Appropriate Use</h2>
              <p>
                You agree not to use iChatAI to generate, promote, or distribute:
              </p>
              <ul>
                <li>Illegal content or activities</li>
                <li>Hate speech, harassment, or discrimination</li>
                <li>Malware, viruses, or malicious code</li>
                <li>Highly explicit or sexually explicit material</li>
              </ul>
              <p>We reserve the right to revoke access to the AI services if these terms are violated.</p>

              <h2>AI Limitations & Accuracy</h2>
              <p>
                iChatAI utilizes advanced language models, but AI is not perfect. The generated content may occasionally be inaccurate, misleading, or biased. You should not rely on the AI for critical medical, legal, or financial advice. We are not liable for any damages resulting from the use of generated information.
              </p>

              <h2>Credits System</h2>
              <p>
                iChatAI operates on a credit system for AI usage.
              </p>
              <ul>
                <li>Credits can be earned through daily check-ins or watching reward ads.</li>
                <li>Credits have no real-world monetary value and cannot be exchanged for cash.</li>
                <li>We reserve the right to modify the credit costs or earning rates at any time.</li>
              </ul>

              <h2>Account Responsibility</h2>
              <p>
                You are responsible for maintaining the security of your Google account if you choose to use the Cloud Sync feature. Since data is synced to your personal Google Drive, we cannot recover lost or deleted data from your Drive.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                iChatAI is provided "as is" without warranty of any kind, either express or implied. We do not guarantee that the app will be error-free or uninterrupted.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
