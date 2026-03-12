import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Posters
import design002 from '@/assets/posters/design002.png';
import design003 from '@/assets/posters/design003.png';
import thanimaArcade from '@/assets/posters/thanima-arcade.png';
import design004 from '@/assets/posters/design004.png';
import posterFalling from '@/assets/posters/poster-falling.png';
import posterIswhatitis from '@/assets/posters/poster-iswhatitis.png';

// Social Media
import keralaUntangled from '@/assets/social/kerala-untangled.png';
import satyagraha from '@/assets/social/satyagraha.png';
import kadhakaludeLokam from '@/assets/social/kadhakalude-lokam.png';
import kavyanilaavu from '@/assets/social/kavyanilaavu.png';
import burnoutSigns from '@/assets/social/burnout-signs.png';
import mentalWellness from '@/assets/social/mental-wellness.png';

type Category = 'all' | 'social' | 'posters' | 'logos' | 'other';

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  color: string;
  height: string;
}

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'social', label: 'Social Media' },
  { id: 'posters', label: 'Posters' },
  { id: 'logos', label: 'Logos & Branding' },
  { id: 'other', label: 'Other Creative' },
];

const projects: Project[] = [
  // Posters (1-4 as mentioned + existing 2)
  { id: 1, title: 'Thanima Arcade', category: 'posters', image: thanimaArcade, color: 'from-red-500/20 to-amber-500/20', height: 'h-96' },
  { id: 2, title: 'Seasonal Depression', category: 'posters', image: design004, color: 'from-cyan-500/20 to-blue-500/20', height: 'h-72' },
  { id: 3, title: 'Falling Off The Face Of Earth', category: 'posters', image: posterFalling, color: 'from-purple-500/20 to-pink-500/20', height: 'h-96' },
  { id: 4, title: 'It Is What It Is', category: 'posters', image: posterIswhatitis, color: 'from-amber-500/20 to-orange-500/20', height: 'h-96' },
  { id: 5, title: 'Little by Little', category: 'posters', image: design002, color: 'from-purple-500/20 to-indigo-500/20', height: 'h-96' },
  { id: 6, title: 'Who Are You?', category: 'posters', image: design003, color: 'from-pink-500/20 to-purple-500/20', height: 'h-96' },
  
  // Social Media (5,6,8,9,10)
  { id: 7, title: 'Kerala Untangled', category: 'social', image: keralaUntangled, color: 'from-green-500/20 to-amber-500/20', height: 'h-96' },
  { id: 8, title: 'Satyagraha', category: 'social', image: satyagraha, color: 'from-teal-500/20 to-cyan-500/20', height: 'h-96' },
  { id: 9, title: 'Kadhakalude Lokam', category: 'social', image: kadhakaludeLokam, color: 'from-sky-500/20 to-blue-500/20', height: 'h-96' },
  { id: 10, title: 'Kavyanilaavu', category: 'social', image: kavyanilaavu, color: 'from-blue-500/20 to-indigo-500/20', height: 'h-96' },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-6">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A curated collection of projects spanning branding, social media, 
            and creative design. Each piece tells a unique story.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground glow-effect'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="masonry-grid"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="masonry-item"
            >
              <motion.div
                whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
                transition={{ duration: 0.3 }}
                className={`relative ${project.height} rounded-2xl overflow-hidden group cursor-pointer gradient-border`}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Image or Gradient Background */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-2xl object-cover"
                  />
                ) : (
                  <div className={`absolute inset-[1px] rounded-2xl bg-gradient-to-br ${project.color}`} />
                )}
                
                {/* Content Overlay - only show for placeholder projects */}
                {!project.image && (
                  <div className="absolute inset-[1px] rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-card/60">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">{project.title}</h3>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-primary/90 to-accent/90 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="text-center text-primary-foreground"
                  >
                    <ExternalLink className="w-8 h-8 mx-auto mb-3" />
                    <span className="text-sm font-medium">{project.title}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
