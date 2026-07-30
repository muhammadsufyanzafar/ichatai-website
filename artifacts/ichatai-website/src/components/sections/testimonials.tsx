import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Finally, an AI app that doesn't feel like it's harvesting all my data. The local storage approach is exactly what I've been looking for.",
    name: "Alex M.",
    role: "Software Engineer",
    rating: 5
  },
  {
    quote: "The prompt library is a game-changer. I have all my complex SEO prompts saved and organized. Saves me hours every week.",
    name: "Sarah T.",
    role: "Content Strategist",
    rating: 5
  },
  {
    quote: "Gorgeous UI and the responses are lightning fast. The daily credits system is generous enough that I rarely need to watch ads.",
    name: "David K.",
    role: "Student",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Users Are Saying</h2>
          <p className="text-muted-foreground">Join thousands of users experiencing the future of AI chat.</p>
          <p className="text-xs text-muted-foreground/50 mt-2">*Sample testimonials for illustration purposes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg mb-8 italic text-muted-foreground">"{test.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{test.name}</div>
                  <div className="text-sm text-muted-foreground">{test.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
