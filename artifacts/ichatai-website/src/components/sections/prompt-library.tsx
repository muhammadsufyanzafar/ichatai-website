import { motion } from 'framer-motion';
import { Folder, Search, Star, Hash, Plus, FileText, Code, PenTool, Shield } from 'lucide-react';

const mockPrompts = [
  { title: "React Expert", desc: "Act as a senior React developer. Review this component...", tags: ["Code", "React"], icon: Code, color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Blog Post Generator", desc: "Write an engaging blog post about [topic] focusing on...", tags: ["Writing", "SEO"], icon: PenTool, color: "text-purple-500", bg: "bg-purple-500/10" },
  { title: "Code Reviewer", desc: "Analyze the following code snippet for vulnerabilities...", tags: ["Security", "Code"], icon: Shield, color: "text-red-500", bg: "bg-red-500/10" },
  { title: "Cover Letter", desc: "Write a professional cover letter for a [job title] position at...", tags: ["Career"], icon: FileText, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export function PromptLibrary() {
  return (
    <section className="py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Personal <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Prompt Library</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop typing the same instructions over and over. Save, organize, and quickly access your most effective AI prompts.
          </p>
        </div>

        {/* UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2rem] border-primary/20 p-2 sm:p-4 overflow-hidden shadow-2xl"
        >
          <div className="bg-background rounded-[1.5rem] flex flex-col md:flex-row overflow-hidden border border-border h-[600px]">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 border-r border-border bg-card/50 p-4 flex flex-col gap-6 hidden md:flex">
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">Folders</h3>
                <ul className="space-y-1">
                  {['All Prompts', 'Favorites', 'Work', 'Creative', 'Technical'].map((folder, i) => (
                    <li key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${i === 0 ? 'bg-primary text-white font-medium shadow-md' : 'hover:bg-muted text-muted-foreground'}`}>
                      {i === 1 ? <Star className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
                      <span className="text-sm">{folder}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">Tags</h3>
                <div className="flex flex-wrap gap-2 px-2">
                  {['#code', '#writing', '#seo', '#career', '#fun'].map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-background relative">
              {/* Header */}
              <div className="h-16 border-b border-border flex items-center justify-between px-6 shrink-0 z-10 bg-background/80 backdrop-blur-md">
                <div className="relative w-64 hidden sm:block">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search prompts..." 
                    className="w-full h-9 bg-muted rounded-full pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all border-none"
                    disabled
                  />
                </div>
                <h2 className="font-bold sm:hidden">All Prompts</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                  <Plus className="w-4 h-4" /> <span className="hidden sm:inline">New Prompt</span>
                </button>
              </div>

              {/* Grid */}
              <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 content-start">
                {mockPrompts.map((prompt, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="glass-card p-5 rounded-2xl border-border hover:border-primary/30 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className={`w-10 h-10 rounded-xl ${prompt.bg} flex items-center justify-center`}>
                        <prompt.icon className={`w-5 h-5 ${prompt.color}`} />
                      </div>
                      <button className="text-muted-foreground hover:text-yellow-500 transition-colors opacity-0 group-hover:opacity-100">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>
                    <h4 className="font-bold mb-2">{prompt.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{prompt.desc}</p>
                    <div className="flex gap-2">
                      {prompt.tags.map((tag, j) => (
                        <span key={j} className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-md bg-muted text-foreground">
                          <Hash className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
