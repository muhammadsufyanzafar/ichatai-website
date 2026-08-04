import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';

export default function ReleaseNotes() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Release Notes</h1>
            <p className="text-muted-foreground mb-12 text-lg">Latest update details for iChatAI, including new features, improvements, and fixes.</p>

            <div className="prose prose-lg dark:prose-invert max-w-none glass-card p-8 md:p-12 rounded-3xl">
              <h2>Version 2.0</h2>
              <p className="text-sm text-muted-foreground">Released August 2026</p>

              <h3>New Features</h3>
              <ul>
                <li><strong>Cloud Sync Enhancements:</strong> Improved Google Drive backup reliability with faster sync and resumable uploads. Data now syncs incrementally to reduce bandwidth usage and accelerate restore operations.</li>
                <li><strong>Smart Conversation History:</strong> The app now groups chat threads by topic and automatically highlights recent sessions, making it easier to continue important conversations.</li>
                <li><strong>Enhanced Prompt Library:</strong> Added a curated prompt collection for productivity, creativity, study help, and personal assistant workflows.</li>
                <li><strong>Quick Actions Toolbar:</strong> New toolbar buttons allow instant access to copy, share, export, and favorite replies from the chat view.</li>
              </ul>

              <h3>Improvements</h3>
              <ul>
                <li><strong>Faster App Launch:</strong> Startup performance improved by optimizing the initial data load and reducing initialization overhead.</li>
                <li><strong>Improved Security:</strong> Strengthened encryption for locally stored data and refined permission handling for safer cloud sync workflows.</li>
                <li><strong>UI Polish:</strong> Updated button states, spacing, and dark mode contrast for a cleaner, more accessible interface across the app.</li>
                <li><strong>Adaptive Theme Support:</strong> The interface now better respects system theme preferences and provides smoother transitions between light and dark modes.</li>
              </ul>

              <h3>Bug Fixes</h3>
              <ul>
                <li><strong>Cloud Sync Recovery:</strong> Fixed an issue where interrupted sync sessions could fail silently during reconnect.</li>
                <li><strong>Notification Reliability:</strong> Resolved delayed daily reward reminder notifications on some Android devices.</li>
                <li><strong>Sign-In Stability:</strong> Addressed a Google sign-in error that occurred for users with multiple accounts configured.</li>
                <li><strong>Crash Fixes:</strong> Eliminated a rare crash when opening the app while network connectivity changed during startup.</li>
              </ul>

              <h3>What's Next</h3>
              <p>We are actively working on voice input support, an improved AI assistant onboarding experience, and expanded multi-language prompt packs. Stay tuned for the next release.</p>

              <h3>Feedback</h3>
              <p>If you encounter any issues or have suggestions for future updates, please reach out through the support contact link in the footer.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
