import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';

export default function About() {
  return (
    <Layout>
      <div className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-secondary/10 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About iChatAI</h1>
            <p className="text-muted-foreground mb-12 text-lg">
              iChatAI is designed to bring fast, private, and intelligent conversational assistance to your mobile device. We focus on seamless workflows, safe storage, and a powerful AI experience.
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none glass-card p-8 md:p-12 rounded-3xl">
              <h2>Our Mission</h2>
              <p>
                Our mission is to make advanced AI accessible and helpful for everyday tasks. Whether you need quick answers, creative writing help, or smarter planning tools, iChatAI aims to be the assistant you trust.
              </p>

              <h2>What Makes iChatAI Different</h2>
              <ul>
                <li><strong>Privacy-first design:</strong> Chat history and custom prompts are stored locally unless you opt in to cloud sync.</li>
                <li><strong>Reliable sync:</strong> Optional Google Drive backup keeps your data safe and accessible across devices.</li>
                <li><strong>Smart assistant features:</strong> Built-in prompts, conversation history organization, and quick actions help you move faster.</li>
                <li><strong>Transparent integrations:</strong> We only use third-party services to power AI, analytics, and ads, and we clearly explain how they work.</li>
              </ul>

              <h2>Core Features</h2>
              <ol>
                <li><strong>AI chat experience:</strong> Natural chat interface with support for context-aware responses.</li>
                <li><strong>Prompt library:</strong> Prebuilt prompts for productivity, learning, creativity, and more.</li>
                <li><strong>Cloud sync:</strong> Secure Google Drive backup for chat history, settings, and prompt collections.</li>
                <li><strong>Rewards and credits:</strong> Earn credits with daily check-ins and optional reward ads.</li>
              </ol>

              <h2>Team & Support</h2>
              <p>
                iChatAI is built and maintained by Muhammad Sufyan Zafar. Our team is committed to rapid improvements, strong privacy protections, and responsive support for every user.
              </p>

              <h2>Commitment to Quality</h2>
              <p>
                We regularly update the app with bug fixes, stability improvements, and new AI features. Every release is intended to make the experience faster, more reliable, and more useful for your daily routines.
              </p>

              <h2>Get in Touch</h2>
              <p>
                If you have questions, ideas, or feedback, visit the <a href="/contact" className="text-primary hover:underline">Contact Us</a> page or reach out through the support link in the footer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
