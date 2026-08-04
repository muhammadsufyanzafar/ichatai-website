import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';

export default function Contact() {
  return (
    <Layout>
      <div className="pt-32 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-12 text-lg">
              Need help with iChatAI? Reach out for support, feedback, or partnership inquiries and we’ll get back to you as soon as possible.
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none glass-card p-8 md:p-12 rounded-3xl">
              <h2>Support Options</h2>
              <p>
                We’re here to help with app questions, bug reports, and feature requests.
              </p>
              <ul>
                <li><strong>General support:</strong> Use the developer portfolio contact form at <a href="https://muhammadsufyanzafar.github.io/portfolio/#contact" className="text-primary hover:underline">https://muhammadsufyanzafar.github.io/portfolio/#contact</a>.</li>
                <li><strong>App feedback:</strong> Share your suggestions, ideas, or improvement requests for future updates.</li>
                <li><strong>Bug reports:</strong> Report issues with sign-in, sync, notifications, or app stability so we can fix them quickly.</li>
              </ul>

              <h2>How to Reach Us</h2>
              <p>
                The best way to contact us is through the support links below. This ensures your message is routed directly to the development team.
              </p>
              <ul>
                <li>Email: <a href="mailto:contact@muhammadsufyanzafar.github.io" className="text-primary hover:underline">contact@muhammadsufyanzafar.github.io</a></li>
                <li>Portfolio contact page: <a href="https://muhammadsufyanzafar.github.io/portfolio/#contact" className="text-primary hover:underline">muhammadsufyanzafar.github.io/portfolio/#contact</a></li>
              </ul>

              <h2>What to Include</h2>
              <p>
                To help us respond faster, please include:
              </p>
              <ul>
                <li>Your device model and Android version</li>
                <li>The version of iChatAI you are using</li>
                <li>A brief description of the issue or feature request</li>
                <li>Steps to reproduce any bug or unexpected behavior</li>
              </ul>

              <h2>Stay Updated</h2>
              <p>
                For release announcements, new feature updates, and bug fixes, check the <a href="/release-notes" className="text-primary hover:underline">Release Notes</a> page regularly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
