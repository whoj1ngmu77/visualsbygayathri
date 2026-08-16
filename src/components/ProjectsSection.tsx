import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Expand, X } from 'lucide-react';

// Posters
import design002 from '@/assets/posters/design002.webp';
import design003 from '@/assets/posters/design003.webp';
import thanimaArcade from '@/assets/posters/thanima-arcade.webp';
import design004 from '@/assets/posters/design004.webp';
import posterFalling from '@/assets/posters/poster-falling.webp';
import posterIswhatitis from '@/assets/posters/poster-iswhatitis.webp';

// Social Media
import keralaUntangled from '@/assets/social/kerala-untangled.webp';
import satyagraha from '@/assets/social/satyagraha.webp';
import kadhakaludeLokam from '@/assets/social/kadhakalude-lokam.webp';
import kavyanilaavu from '@/assets/social/kavyanilaavu.webp';
import burnoutSigns from '@/assets/social/burnout-signs.webp';
import mentalWellness from '@/assets/social/mental-wellness.webp';

type Category = 'all' | 'social' | 'posters';

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  blurb?: string;
}

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'social', label: 'Social Media' },
  { id: 'posters', label: 'Posters' },
];

const projects: Project[] = [
  { id: 1, title: 'Thanima Arcade', category: 'posters', image: thanimaArcade, blurb: 'Event poster for a campus arcade day — vintage carnival typography and ticket-stub framing.' },
  { id: 2, title: 'Seasonal Depression', category: 'posters', image: design004, blurb: 'Personal piece exploring mood and light.' },
  { id: 3, title: 'Falling Off The Face Of Earth', category: 'posters', image: posterFalling, blurb: 'Personal poster — dissolving type over a falling figure.' },
  { id: 4, title: 'It Is What It Is', category: 'posters', image: posterIswhatitis, blurb: 'Editorial poster built around fragmented, scattered text.' },
  { id: 5, title: 'Little by Little', category: 'posters', image: design002, blurb: 'Typographic piece on incremental change.' },
  { id: 6, title: 'Who Are You?', category: 'posters', image: design003, blurb: 'Identity-themed experimental poster.' },
  { id: 7, title: 'Kerala Untangled', category: 'social', image: keralaUntangled, blurb: 'Promo design for a Kerala Piravi quiz — collage layout built from regional imagery.' },
  { id: 8, title: 'Satyagraha', category: 'social', image: satyagraha, blurb: 'Gandhi Jayanthi online quiz announcement, currency-note engraving motifs.' },
  { id: 9, title: 'Kadhakalude Lokam', category: 'social', image: kadhakaludeLokam, blurb: 'Storytelling event announcement for the Malayalam literary club.' },
  { id: 10, title: 'Kavyanilaavu', category: 'social', image: kavyanilaavu, blurb: 'Poetry writing competition poster — quill and parchment illustration.' },
  { id: 11, title: 'Burnout Signs', category: 'social', image: burnoutSigns, blurb: 'Carousel post on workplace burnout — numbered list layout.' },
  { id: 12, title: 'Mental Wellness Tips', category: 'social', image: mentalWellness, blurb: 'Employee wellness carousel, soft palette and clear hierarchy.' },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
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
            A curated collection of posters and social campaigns, mostly for
            campus events and cultural clubs. Click any piece to view it full size.
          </p>
        </motion.div>

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
              aria-pressed={activeCategory === category.id}
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

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">
            Nothing here yet — new work coming soon.
          </p>
        ) : (
          <motion.div layout className="masonry-grid">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="masonry-item"
              >
                <motion.button
                  onClick={() => setSelected(project)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  aria-label={`View ${project.title} full size`}
                  className="w-full text-left rounded-2xl overflow-hidden group gradient-border block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded-2xl"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <Expand className="w-4 h-4" /> View full size
                      </span>
                    </div>
                  </div>
                  <div className="px-1 pt-4 pb-2">
                    <h3 className="font-serif text-lg font-medium">{project.title}</h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-6 right-6 p-3 rounded-full bg-secondary/70 hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center gap-5 cursor-default"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[72vh] w-auto rounded-xl shadow-2xl"
              />
              <div className="text-center max-w-xl">
                <h3 className="font-serif text-2xl font-medium mb-2">{selected.title}</h3>
                {selected.blurb && (
                  <p className="text-muted-foreground text-sm leading-relaxed">{selected.blurb}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
